import { ThemeSwitcher } from '@/components/ui/ThemeSwitcher';

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

import logo from '@/public/assets/Logo.png'
import AdminSidebarComponents from '../../helpers/AdminSidebarComponents';

const AdminSidebar = () => {
  return (
    <aside className="h-full bg-white dark:bg-black hidden md:w-auto lg:w-60 xl:w-64 2xl:w-72 overflow-auto border-r border-lightBorder dark:border-darkBorder md:flex flex-col justify-between p-2">
      <ul>
        <li>
          <Link href="/" className="mb-4 pt-6 px-3 hidden lg:flex">
            <Image priority className='w-full' src={logo} alt='main logo' />
          </Link>
        </li>

        {AdminSidebarComponents.map(({ label, href, icon }, i) => (
          <Link key={i} href={href} className="">
            <li className="p-3 group my-1 dark:bg-white flex gap-4 dark:bg-opacity-0 bg-black bg-opacity-0 hover:bg-opacity-10 rounded-xl transition-all">
              {icon}

              <div className="lg:flex hidden">{label}</div>
            </li>
          </Link>
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

export default AdminSidebar;
