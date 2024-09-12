// hooks/useButtonClickCount.ts
import { useState } from "react";
import { doc, updateDoc, increment, setDoc, getDoc, DocumentReference } from "firebase/firestore";
import { db } from "@/lib/firebase";

// Định nghĩa kiểu dữ liệu cho tài liệu Firestore
interface ClickData {
  clickCount: number;
}

const useButtonClickCount = (): [number, () => Promise<void>] => {
  const [clickCount, setClickCount] = useState<number>(0);

  const handleButtonClick = async () => {
    const buttonDocRef = doc(db, "websiteStats", "buttonClicks");

    try {
      // Tăng số lần nhấn nút trong Firestore
      await updateDoc(buttonDocRef, {
        clickCount: increment(1),
      });

      // Lấy tài liệu và cập nhật số lần nhấn nút trong state
      const docSnap = await getDoc(buttonDocRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setClickCount(data?.clickCount || 0);
      } else {
        // Nếu tài liệu chưa tồn tại, tạo tài liệu mới với giá trị clickCount = 1
        await setDoc(buttonDocRef, { clickCount: 1 });
        setClickCount(1);
      }
    } catch (error) {
      console.error("Lỗi cập nhật hoặc lấy số lần nhấn nút:", error);
    }
  };

  return [clickCount, handleButtonClick];  // Trả về số lần nhấn và hàm xử lý khi nhấn nút
};

export default useButtonClickCount;
