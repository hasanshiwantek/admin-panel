import React from "react";
import Header from "./Header";
interface LayoutWrapperProps {
  children: React.ReactNode;
}

const LayoutWrapper: React.FC<LayoutWrapperProps> = () => {
  return (
    <>
      <div>
        <Header />
      </div>
    </>
  );
};

export default LayoutWrapper;
