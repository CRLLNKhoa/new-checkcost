// hooks/useButtonClickWithCustomMilestones.ts
import { useState } from "react";
import { doc, setDoc, updateDoc, getDoc, DocumentReference } from "firebase/firestore";
import { db } from "@/lib/firebase";


// Định nghĩa kiểu dữ liệu cho tài liệu Firestore
interface ClickData {
  click: number;
}

const useButtonClickWithCustomMilestones = (threshold: number): [number, string, () => Promise<void>] => {
  const [clickCount, setClickCount] = useState<number>(0);  // Số lượt nhấn hiện tại
  const [currentMilestone, setCurrentMilestone] = useState<string>("milestone_0");  // Mốc hiện tại

  const handleButtonClicks = async () => {
    const milestoneNumber = Math.floor(clickCount / threshold);
    const milestoneDocRef = doc(db, "websiteStats", `milestone_${milestoneNumber}`);

    try {
      // Lấy tài liệu hiện tại
      const docSnap = await getDoc(milestoneDocRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        const newClickCount = (data?.click || 0) + 1;

        // Cập nhật số lần nhấn nút
        await updateDoc(milestoneDocRef, {
          click: newClickCount,
        });

        setClickCount(newClickCount);

        // Cập nhật mốc hiện tại
        const newMilestoneNumber = Math.floor(newClickCount / threshold);
        setCurrentMilestone(`milestone_${newMilestoneNumber}`);
      } else {
        // Nếu tài liệu chưa tồn tại, tạo mới với click = 1
        await setDoc(milestoneDocRef, { click: 1 });

        setClickCount(1);
        setCurrentMilestone(`milestone_${milestoneNumber}`);
      }
    } catch (error) {
      console.error("Lỗi cập nhật hoặc lấy số lần nhấn nút:", error);
    }
  };

  return [clickCount, currentMilestone, handleButtonClicks];
};

export default useButtonClickWithCustomMilestones;
