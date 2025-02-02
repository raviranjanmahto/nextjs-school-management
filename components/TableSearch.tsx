"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const TableSearch = ({ isNavbar = false }: { isNavbar?: boolean }) => {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const value = (e.currentTarget[0] as HTMLInputElement).value;

    const params = new URLSearchParams(window.location.search);
    params.set("search", value);
    router.push(`${window.location.pathname}?${params}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-full flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2 ${
        isNavbar ? "hidden sm:flex" : ""
      }`}
    >
      <Image src="/search.png" alt="Search Icon" width={14} height={14} />
      <input
        type="text"
        placeholder="Search..."
        className="w-full p-2 bg-transparent outline-none"
      />
    </form>
  );
};

export default TableSearch;
