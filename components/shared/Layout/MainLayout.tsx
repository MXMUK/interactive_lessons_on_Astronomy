'use client';

import React, { memo, useEffect, useMemo } from 'react';
import MainSidebar from './layout-sections/MainSidebar';
import MainSidebarSmall from './layout-sections/MainSidebarSmall';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import SidebarComponents from '../helpers/SidebarComponents';
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from '@/components/ui/sonner';

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  const pathname = usePathname();

  const isSidebarShown = useMemo(() => {
    return SidebarComponents.some((route) => pathname.includes(route.href));
  }, [pathname]);

  return (
    <div className="h-full">
      <NextTopLoader
        height={2}
        color="linear-gradient(90deg, rgba(99,102,241,1) 0%, rgba(168,85,247,1) 50%, rgba(236,72,153,1) 100%)"
      />
      <Toaster richColors />

      <div className="fixed top-0 h-full">
        <MainSidebar />
      </div>

      <div className="fixed bottom-0 h-12 flex items-center md:hidden w-full z-40">
        <MainSidebarSmall />
      </div>

      <main
        className={clsx('h-full pb-12 md:pb-0 overflow-auto md:ml-16 lg:ml-60 xl:ml-64 2xl:ml-72')}>
        {children}
      </main>
    </div>
  );
};

export default memo(MainLayout);

