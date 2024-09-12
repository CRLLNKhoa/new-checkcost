// hooks/useUpdatePageVisits.ts
import { useEffect, useState } from "react";
import { doc, updateDoc, increment, setDoc, getDoc, DocumentReference } from "firebase/firestore";
import { db } from "@/lib/firebase";


// Định nghĩa kiểu dữ liệu cho tài liệu Firestore
interface VisitData {
  count: number;
}

const useUpdatePageVisits = (): number => {
  const [visitCount, setVisitCount] = useState<number>(0);

  useEffect(() => {
    const updateVisits = async () => {
      const pageDocRef = doc(db, "websiteStats", "visits");

      try {
        // Tăng số lượng truy cập
        await updateDoc(pageDocRef, {
          count: increment(1),
        });

        // Lấy dữ liệu hiện tại
        const docSnap = await getDoc(pageDocRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setVisitCount(data?.count || 0);
        } else {
          // Nếu tài liệu không tồn tại, tạo mới với giá trị count là 1
          await setDoc(pageDocRef, { count: 1 });
          setVisitCount(1);
        }
      } catch (error) {
        console.error("Lỗi cập nhật hoặc lấy lượt truy cập:", error);
      }
    };

    updateVisits();
  }, []);

  return visitCount;  // Trả về số lượng lượt truy cập
};

export default useUpdatePageVisits;
