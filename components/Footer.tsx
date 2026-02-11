import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div className="mt-20">
      <div className="text-center">
       <p className="text-center text-xl font-semibold mb-2">
  Mrigaank Sharma
</p>

        <div className="w-max flex items-center gap-2 mx-auto ">
          <Image src={assets.mail_icon} alt="" className="w-6" />
          mrigaanksharma928@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6 ">
        <p>&copy; 2026 Mrigaank Sharma. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
            <li><a target="_blank" href="https://github.com/MRIGAANKSh">Github</a></li>
            <li><a target="_blank" href="https://www.linkedin.com/in/mrigaank-sharma-955357295/?originalSubdomain=in">Linkedln</a></li>
            <li><a target="_blank" href="https://www.geeksforgeeks.org/profile/mrigaank0024">GeekForGeeks</a></li>
        </ul>
      </div>

    </div>
  );
}

export default Footer;
