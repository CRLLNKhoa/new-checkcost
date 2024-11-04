"use client"
import React from "react";

function Download() {

    const downloadFile = () => {
      // URL tải xuống trực tiếp của Google Drive
      const downloadUrl = 'https://drive.usercontent.google.com/download?id=1f1EokJ92psfzRxPiIXuqfIjXxFUNbZsi';
  
      // Tạo thẻ <a> để tải xuống tệp
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'your_file_name.ext'; // Đặt tên file mong muốn khi tải xuống
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  return (
    <div className="flex flex-col w-full p-4 gap-4 mt-12">
      <h1
        className="text-xl uppercase font-bold text-center
        bg-gradient-to-r from-[#3B5695] to-[#779AEB] 
        bg-clip-text text-transparent"
      >
        Cài đặt
      </h1>
      <p className="text-center">
        Tiện ích Checkcost hoạt động trực tiếp trên các trang web.Checkcost có
        sẵn cho một số trình duyệt phổ biến. Nhần để cài đặt
      </p>
      <button onClick={downloadFile} className="bg-[#3B5695] max-w-lg mx-auto flex hover:scale-105
      items-end text-white px-8 py-3 mt-8 rounded-md gap-4 duration-300">
        <img src="/dl.svg" alt="icon" className="size-6 gap-4" /> Tải về máy
      </button>
    </div>
  );
}

export default Download;
