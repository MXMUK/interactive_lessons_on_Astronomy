import React from 'react';
import LogoDark from '@/public/assets/LogoDark.png';
import LogoLight from '@/public/assets/LogoLight.png';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className=" w-full flex justify-between text-xs text-gray-400">
      <div className="flex gap-2 items-center w-32">
        from
        <Image priority className="w-full dark:hidden" src={LogoLight} alt="main logo" />
        <Image priority className="w-full hidden dark:block" src={LogoDark} alt="main logo" />
      </div>
      <div className="">© 2024 astronomy lessons</div>
    </div>
  );
};

export default Footer;
