import { useState, useEffect } from 'react';

const useCaptcha = () => {
  const [isFirstVisit, setIsFirstVisit] = useState(false);

  useEffect(() => {
    // Kiểm tra trong localStorage nếu người dùng đã từng truy cập
    const hasVisited = localStorage.getItem('hasVisited');

    // Nếu không có trong localStorage thì đây là lần đầu tiên
    if (!hasVisited) {
      setIsFirstVisit(true);
    } else {
      setIsFirstVisit(false);
    }
  }, []);

  // Hàm để lưu trạng thái đã truy cập
  const handleCaptchaSuccess = () => {
    localStorage.setItem('hasVisited', 'true');
    setIsFirstVisit(false);
  };

  return { isFirstVisit, handleCaptchaSuccess };
};

export default useCaptcha;
