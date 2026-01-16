import { Plus, Calendar, Filter, SlidersHorizontal } from "lucide-react";

const LeadsHeader = () => {
  return (
    <div className="w-full  rounded-lg p-4 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      {/* Left */}
      <div>
        <h2 className="text-lg font-semibold">Leads</h2>
        <p className="text-sm text-gray-500">
          Manage your sales leads and track their progress
        </p>
      </div>

      {/* Right */}
      <div className="flex flex-wrap sm:flex-nowrap items-center gap-2">
        <button className="flex items-center gap-1 bg-purple-600 text-white px-3 py-1.5 rounded-md text-sm hover:bg-purple-700">
          <Plus size={16} />
          <span className="hidden sm:inline">Add Lead</span>
        </button>

        <button className="flex items-center gap-1 border px-3 py-1.5 rounded-md text-sm hover:bg-gray-100">
          <Calendar size={16} />
          <span className="hidden sm:inline">Date Filter</span>
        </button>

        <button className="flex items-center gap-1 border px-3 py-1.5 rounded-md text-sm hover:bg-gray-100">
          <Filter size={16} />
          <span className="hidden sm:inline">Filter</span>
        </button>

        <button className="flex items-center gap-1 border px-3 py-1.5 rounded-md text-sm hover:bg-gray-100">
          <SlidersHorizontal size={16} />
          <span className="hidden sm:inline">Manage Columns</span>
        </button>
      </div>
    </div>
  );
};

export default LeadsHeader;
