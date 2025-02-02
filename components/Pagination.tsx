"use client";

import { useRouter } from "next/navigation";
import { ITEMS_PER_PAGE } from "@/lib/settings";

const Pagination = ({ page, count }: { page: number; count: number }) => {
  const router = useRouter();

  const hasPrevPage = page > 1;
  const totalPages = Math.ceil(count / ITEMS_PER_PAGE);
  const hasNextPage = page < totalPages;

  const changePage = (page: number) => {
    const params = new URLSearchParams(window.location.search);
    params.set("page", page.toString());
    router.push(`${window.location.pathname}?${params}`);
  };

  return (
    <div className="p-4 flex items-center justify-between text-gray-500">
      <button
        onClick={() => changePage(page - 1)}
        disabled={!hasPrevPage}
        className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Prev
      </button>
      <div className="flex items-center gap-2 text-sm">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`px-2 rounded-sm ${
              index + 1 === page ? "bg-mahtoSky" : ""
            }`}
            onClick={() => changePage(index + 1)}
            disabled={index + 1 === page}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <button
        onClick={() => changePage(page + 1)}
        disabled={!hasNextPage}
        className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
