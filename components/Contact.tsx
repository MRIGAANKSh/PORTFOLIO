import React, { useState } from "react";
import { assets } from '@/assets/assets';
import Image from 'next/image';

const Contact = () => {

  const [result, setResult] = useState<string>("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "73c2d8bc-803c-4e29-8218-afac9ca7d937");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.currentTarget.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className='w-full px-5 sm:px-[8%] lg:px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]' >
      
      <h4 className="text-center mb-2 text-lg font-ovo">Connect with me</h4>

      <h2 className="text-center text-5xl sm:text-4xl lg:text-5xl font-ovo">
        Get in Touch
      </h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo text-sm sm:text-base'>
        Feel free to reach out for collaborations, project discussions, or any opportunities — I’d love to connect and work together.
      </p> 

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">

        <div className="grid grid-cols-auto gap-6 mt-10 mb-8 ">
          <input type="text" name="name" placeholder="Enter your name" required className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"/>
          <input type="email" name="email" placeholder="Enter your email" required className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"/>
        </div>

        <textarea rows={6} name="message" placeholder="Enter your message" required className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"></textarea>

        <button type="submit" className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500">
          Submit Now
          <Image src={assets.right_arrow_white} alt="" className="w-4"/>
        </button>

        <p className='mt-4'>{result}</p>

      </form>
    </div>
  );
};

export default Contact;
