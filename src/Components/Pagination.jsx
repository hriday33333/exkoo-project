import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = () => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
      {/* Left Side: Entries per page */}
      <div className="flex items-center gap-2 text-gray-500 text-sm flex-wrap">
        <span>Show</span>
        <div className="relative">
          <select className="appearance-none border border-gray-200 rounded-md px-3 py-1 pr-8 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white cursor-pointer">
            <option>20</option>
            <option>50</option>
            <option>100</option>
          </select>
          <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
        </div>
        <span>entries</span>
      </div>

      {/* Right Side: Pagination Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 w-full sm:w-auto">
        <span className="text-gray-500 text-sm font-medium hidden sm:inline">
          Total - 2895 Entries
        </span>

        <nav className="flex items-center gap-1 flex-wrap">
          {/* Previous Button */}
          <button className="p-1.5 rounded-md border border-gray-200 hover:bg-gray-50 text-gray-400 disabled:opacity-50">
            <ChevronLeft size={20} />
          </button>

          {/* Page Numbers (show fewer on small screens) */}
          <div className="hidden sm:flex items-center gap-1">
            <button className="w-9 h-9 flex items-center justify-center rounded-md bg-purple-600 text-white font-medium shadow-sm">
              1
            </button>

            <button className="w-9 h-9 flex items-center justify-center rounded-md border border-gray-200 text-gray-600 hover:bg-gray-50">
              2
            </button>

            <button className="w-9 h-9 flex items-center justify-center rounded-md border border-gray-200 text-gray-600 hover:bg-gray-50">
              3
            </button>

            <button className="w-9 h-9 flex items-center justify-center rounded-md border border-gray-200 text-gray-600 hover:bg-gray-50">
              4
            </button>

            <span className="px-1 text-gray-400">...</span>

            <button className="w-9 h-9 flex items-center justify-center rounded-md border border-gray-200 text-gray-600 hover:bg-gray-50">
              145
            </button>
          </div>

          {/* Next Button */}
          <button className="p-1.5 rounded-md border border-gray-200 hover:bg-gray-50 text-gray-400">
            <ChevronRight size={20} />
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
