import React, { ReactNode } from "react";
import Navbar from "../../components/Navbar";

type RootLayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: RootLayoutProps) => {
  return (
    <main className="font-work-sans">
      <Navbar />
      {children}
    </main>
  );
};

export default Layout;
