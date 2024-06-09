'use client';

import React, { createContext, memo, useEffect, useMemo, useState } from 'react';
import AdminSidebar from './layout-sections/AdminSidebar';
import axios from 'axios';

interface Props {
  children: React.ReactNode;
}

const AuthContext = createContext<{ token: string | null; setToken: (newToken: string) => void }>({
  token: null,
  setToken: (newToken: string) => {},
});

const AdminLayout = ({ children }: Props) => {
  // const [token, setToken_] = useState(sessionStorage.getItem('token'));

  // const setToken = (newToken: string) => {
  //   setToken_(newToken);
  // };

  // useEffect(() => {
  // }, [token]);

  // // Memoized value of the authentication context
  // const contextValue = useMemo(
  //   () => ({
  //     token,
  //     setToken,
  //   }),
  //   [token]
  // );

  // return (
  //   <AuthContext.Provider value={contextValue}>
  //     <div className="fixed top-0 h-full">
  //       <AdminSidebar />
  //     </div>

  //     <section className="md:ml-16 lg:ml-60 xl:ml-64 2xl:ml-72 pb-12 md:pb-0">
  //       {children}
  //     </section>
  //   </AuthContext.Provider>
  // );
  return (
    <>
      <div className="fixed top-0 h-full">
        <AdminSidebar />
      </div>

      <section className="md:ml-16 lg:ml-60 xl:ml-64 2xl:ml-72 pb-12 md:pb-0">{children}</section>
    </>
  );
};

export default memo(AdminLayout);
