"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import useCaptcha from "@/hooks/useCaptcha";

function Capcha() {
    const { isFirstVisit, handleCaptchaSuccess } = useCaptcha();
  
  const handleIsShow = () => {
    handleCaptchaSuccess()
  };

  if (isFirstVisit) {
    return (
        <>
          <div className="fixed top-0 bottom-0 left-0 right-0 bg-black/40 z-[1200]"></div>
          <div className="fixed top-0 bottom-0 left-0 right-0 z-[1201] flex items-center justify-center">
            <div className="w-full max-w-[500px] mx-auto bg-white rounded-md">
              <div className="flex flex-col items-center p-4 gap-2 justify-between">
                <h1 className="uppercase font-bold">Off topic</h1>
                <img
                  className="size-24 rounded-full"
                  src="https://scontent.fvca2-1.fna.fbcdn.net/v/t39.30808-1/445418392_7525603610841894_2599807123069710952_n.jpg?stp=c74.0.450.450a_dst-jpg_s100x100&_nc_cat=111&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeGrbfYyrur8xomJdSogjhRASHD3_Lak2F9IcPf8tqTYXziZvW3zK0wxzsrnw4658SHSUQLjY2VRral-gPOQv-L_&_nc_ohc=CUABi-0wbpgQ7kNvgG3L3uX&_nc_ht=scontent.fvca2-1.fna&oh=00_AYAG4Oc64QQAJdtG7IKtXZUQj6mjT24_b8SaJ99Bzl8WnQ&oe=66E871A5"
                  alt=""
                />
                <p className="font-bold text-lg">Tan Nguyen</p>
                <div className="flex items-center gap-4">
                  <Button disabled>Không</Button>
                  <Button onClick={handleIsShow} className="bg-[#3B5695] hover:bg-[#779AEB]">
                    Có, rất ghét!
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </>
      );
  }
 
}

export default Capcha;
