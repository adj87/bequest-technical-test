import React from "react";

export const Topbar: React.FC = () => {
  return (
    <nav className="flex justify-between p-2">
      <img src="/logo.svg" alt="logo" className="w-24" />
      <span className="text-sm text-gray-400">mr_jaurewi</span>
    </nav>
  );
};

export default Topbar;
