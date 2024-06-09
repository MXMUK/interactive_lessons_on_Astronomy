'use client';

import AdminLayout from '@/components/shared/Layout/AdminLayout';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function RootAdminLayout({ children }: { children: React.ReactNode }) {
  const { push } = useRouter();

  useEffect(() => {
    // if (!sessionStorage.getItem('token')) {
    //   push("/login");
    // }
    // console.log(sessionStorage.getItem('token'));

  }, [push]);

  // return <AdminLayout>{children}</AdminLayout>;
  return '';
}
