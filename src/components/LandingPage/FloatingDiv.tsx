import React, { ReactNode } from "react";

interface FloatingDivProps {
  children: ReactNode;
}

const FloatingDiv: React.FC<FloatingDivProps> = ({ children }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center scale-90 3xl:scale-100">
      <div
        className="bg-black bg-opacity-80 p-6 rounded-[40px] w-11/12 md:w-4/5 h-9/10 transition-all duration-500"
      >
        {children}
      </div>
    </div>
  );
};

export default FloatingDiv;
