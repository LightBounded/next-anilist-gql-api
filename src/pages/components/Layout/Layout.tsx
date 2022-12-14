import React from "react";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="max-w-screen-lg mx-auto px-4">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
