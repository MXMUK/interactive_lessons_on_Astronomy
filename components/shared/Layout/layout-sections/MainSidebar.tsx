import { ThemeSwitcher } from '@/components/ui/ThemeSwitcher';

import Link from 'next/link';
import React, { memo } from 'react';

import InstLogoSm from '@/public/assets/icons/svg/InstLogoSm';
import SidebarComponents from '../../helpers/SidebarComponents';
import Image from 'next/image';

import logoLight from '@/public/assets/LogoLight.png';
import LogoDark from '@/public/assets/LogoDark.png';

const MainSidebar = () => {
  return (
    <aside className="h-full bg-white dark:bg-black hidden md:w-auto lg:w-60 xl:w-64 2xl:w-72 overflow-auto border-r border-lightBorder dark:border-darkBorder md:flex flex-col justify-between p-2">
      <ul>
        <li>
          <Link href="/" className="mb-4 pt-6 px-3 hidden lg:flex">
            <Image priority className="w-full dark:hidden" src={logoLight} alt="main logo" />
            <Image priority className="w-full hidden dark:block" src={LogoDark} alt="main logo" />
          </Link>

          <Link href="/" className="mb-4 pt-6 px-3 lg:hidden flex">
            <InstLogoSm />
          </Link>
        </li>

        {SidebarComponents.map(({ img, label, href }, i) => (
          <li key={i}>
            <Link
              href={href}
              aria-label={label}
              className="flex gap-4 group p-3 my-1 dark:bg-white dark:bg-opacity-0 bg-black bg-opacity-0 hover:bg-opacity-10 rounded-xl transition-all">
              <div className="group-hover:scale-125 transition-all">{img}</div>

              <div className="lg:flex hidden">{label}</div>
            </Link>
          </li>
        ))}
      </ul>

      <div>
        <div className="pl-3">
          <ThemeSwitcher />
        </div>
      </div>
    </aside>
  );
};

export default memo(MainSidebar);

