import React from "react";

export const Topbar: React.FC = () => {
  return (
    <nav className="flex justify-between p-2 bg-white">
      <img src="/logo.svg" alt="logo" className="w-28 cursor-pointer" />
      <span className="text-sm sm:text-lg text-gray-400 cursor-default">
        mr_jaurewi
      </span>
    </nav>
  );
};

export default Topbar;
