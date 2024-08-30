import Image from "next/image";

const TableSearch = ({ isNavbar = false }: { isNavbar?: boolean }) => {
  return (
    <div
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
    </div>
  );
};

export default TableSearch;
