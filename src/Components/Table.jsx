import { User } from 'lucide-react';

const Table = () => {
  return (
    <div>
    <div className="overflow-x-auto hidden md:block">

      <table className="table table-xs ">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>SOURCE</th>
            <th>STAGE</th>
            <th>GROUPS</th>
            <th>MANAGER</th>
            <th>FOLLOW UP</th>
            <th>COMPANY</th>
          </tr>
        </thead>
        <tbody>
          {/* Row 1 */}
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <User className="bg-gray-300 rounded-md "></User>
                </div>
                <div>
                  <div className="font-bold">Test imran number</div>
                  <div className="text-sm opacity-50">Jan 1, 2026</div>
                </div>
              </div>
            </td>
            <td>ZDSL</td>
            <td>
              <span className="badge  text-green-700 font-bold border-green-500 badge-ghost badge-xs text-[10px] py-2">
                Intersected
              </span>
            </td>
            <td>
              <div className="">
                <span className="badge border-gray-300 badge-ghost badge-xs text-[10px] py-2">
                  Wrong Number
                </span>
                <span className="badge border-gray-300 badge-ghost badge-xs text-[10px] py-2">
                  Test Groups
                </span>
                <span className="badge border-gray-300 badge-ghost badge-xs text-[10px] py-2">
                  High Budget
                </span>
                <span className="badge border-gray-300 badge-ghost badge-xs text-[10px] py-2">
                  +1
                </span>
              </div>
            </td>
            <td>
              <User className="bg-gray-300 rounded-md "></User>
            </td>
            <td>__</td>
            <td>__</td>
          </tr>
          {/* Row 2 */}
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <User className="bg-gray-300 rounded-md "></User>
                </div>
                <div>
                  <div className="font-bold">Engr nur Islam</div>
                  <div className="text-sm opacity-50">Nov 3,2025</div>
                </div>
              </div>
            </td>
            <td>Facebook</td>
            <td>
              <span className="badge text-green-700 font-bold border-green-500 badge-ghost badge-xs text-[10px] py-2">
                Converted
              </span>
            </td>
            <td>
              <div className="">
                <span className="badge border-gray-300 badge-ghost badge-xs text-[10px] py-2">
                  Wrong Number
                </span>
                <span className="badge border-gray-300 badge-ghost badge-xs text-[10px] py-2">
                  Test Groups
                </span>
                <span className="badge  border-gray-300 badge-ghost badge-xs text-[10px] py-2">
                  VIP
                </span>
                <span className="badge border-gray-300 badge-ghost badge-xs text-[10px] py-2">
                  +4
                </span>
              </div>
            </td>
            <td>
              <User className="bg-gray-300 rounded-md "></User>
            </td>
            <td>
              Dec 26,2025{' '}
              <span className="badge border-gray-300 badge-ghost badge-xs text-[10px] py-2 font-bold text-red-500">
                Call
              </span>
              <span className="badge border-gray-300 badge-ghost badge-xs text-[10px] py-2">
                +2
              </span>{' '}
            </td>
            <td>
              <div className="font-bold ">Career i</div>
              <div>Managing</div>
            </td>
          </tr>
          {/* Row 3 */}
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <User className="bg-gray-300 rounded-md "></User>
                </div>
                <div>
                  <div className="font-bold">MD Jasim Uddin</div>
                  <div className="text-sm opacity-50">Nov 3,2025</div>
                </div>
              </div>
            </td>
            <td>Facebook</td>
            <td>
              <span className="badge text-blue-700 font-bold border-blue-500 badge-ghost badge-xs text-[10px] py-2">
                Intake
              </span>
            </td>
            <td>--</td>
            <td>
              <User className="bg-gray-300 rounded-md "></User>
            </td>
            <td>
              Nov 12,2025{' '}
              <span className="badge border-gray-300 badge-ghost badge-xs text-[10px] py-2 font-bold text-red-500">
                Call
              </span>
            </td>
            <td>
              <div className="font-bold ">Speedy</div>
              <div>Managing</div>
            </td>
          </tr>
          {/* Row 4 */}
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <User className="bg-gray-300 rounded-md "></User>
                </div>
                <div>
                  <div className="font-bold">Muhammad Khokan</div>
                  <div className="text-sm opacity-50">Nov 3,2025</div>
                </div>
              </div>
            </td>
            <td>Facebook</td>
            <td>
              <span className="badge text-blue-700 font-bold border-blue-500 badge-ghost badge-xs text-[10px] py-2">
                Contacted
              </span>
            </td>
            <td>--</td>
            <td>
              <User className="bg-gray-300 rounded-md "></User>
            </td>
            <td>
              Nov 4,2025{' '}
              <span className="badge border-gray-300 badge-ghost badge-xs text-[10px] py-2 font-bold text-red-500">
                Call
              </span>
            </td>
            <td>
              <div className="font-bold ">M.M.Tr</div>
              <div>business</div>
            </td>
          </tr>
          {/* Row 5 */}
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <User className="bg-gray-300 rounded-md "></User>
                </div>
                <div>
                  <div className="font-bold">Sk Abu Mahadi</div>
                  <div className="text-sm opacity-50">Nov 3,2025</div>
                </div>
              </div>
            </td>
            <td>Facebook</td>
            <td>
              <span className="badge text-blue-700 font-bold border-blue-500 badge-ghost badge-xs text-[10px] py-2">
                Contacted
              </span>
            </td>
            <td>--</td>
            <td>
              <User className="bg-gray-300 rounded-md "></User>
            </td>
            <td>
              Nov 4,2025{' '}
              <span className="badge border-gray-300 badge-ghost badge-xs text-[10px] py-2 font-bold text-red-500">
                Meeting
              </span>
              <span className="badge border-gray-300 badge-ghost badge-xs text-[10px] py-2">
                +2
              </span>{' '}
            </td>
            <td>
              <div className="font-bold ">M.M.Tr</div>
              <div>business</div>
            </td>
          </tr>
          {/* Row 6 */}
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <User className="bg-gray-300 rounded-md "></User>
                </div>
                <div>
                  <div className="font-bold">Shakawat Nayon</div>
                  <div className="text-sm opacity-50">Nov 3,2025</div>
                </div>
              </div>
            </td>
            <td>Facebook</td>
            <td>
              <span className="badge  text-green-700 font-bold border-green-500 badge-ghost badge-xs text-[10px] py-2">
                Intersected
              </span>
            </td>
            <td>--</td>
            <td>
              <User className="bg-gray-300 rounded-md "></User>
            </td>
            <td>__</td>
            <td>
              <div className="font-bold ">Jumona</div>
              <div>DMG</div>
            </td>
          </tr>
          {/* Row 7 */}
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <User className="bg-gray-300 rounded-md "></User>
                </div>
                <div>
                  <div className="font-bold">Muhammad Al-Mamun</div>
                  <div className="text-sm opacity-50">Nov 2,2025</div>
                </div>
              </div>
            </td>
            <td>Facebook</td>
            <td>
              <span className="badge  text-green-700 font-bold border-green-500 badge-ghost badge-xs text-[10px] py-2">
                Intersected
              </span>
            </td>
            <td>--</td>
            <td>
              <User className="bg-gray-300 rounded-md "></User>
            </td>
            <td>
              Nov 2,2025{' '}
              <span className="badge border-gray-300 badge-ghost badge-xs text-[10px] py-2 font-bold text-red-500">
                Call
              </span>
            </td>
            <td>
              <div className="font-bold ">M&M</div>
              <div>Managing</div>
            </td>
          </tr>
          {/* Row 8 */}
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <User className="bg-gray-300 rounded-md "></User>
                </div>
                <div>
                  <div className="font-bold">m a k Azad</div>
                  <div className="text-sm opacity-50">Nov 2,2025</div>
                </div>
              </div>
            </td>
            <td>Facebook</td>
            <td>
              <span className="badge text-blue-700 font-bold border-blue-500 badge-ghost badge-xs text-[10px] py-2">
                Intake
              </span>
            </td>
            <td>--</td>
            <td>
              <User className="bg-gray-300 rounded-md "></User>
            </td>
            <td>
              Nov 3,2025{' '}
              <span className="badge border-gray-300 badge-ghost badge-xs text-[10px] py-2 font-bold text-red-500">
                Call
              </span>
            </td>
            <td>
              <div className="font-bold ">gov</div>
              <div>govt.job</div>
            </td>
          </tr>
          {/* Row 9 */}
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <User className="bg-gray-300 rounded-md "></User>
                </div>
                <div>
                  <div className="font-bold">Fsisal Amin</div>
                  <div className="text-sm opacity-50">Nov 2,2025</div>
                </div>
              </div>
            </td>
            <td>Facebook</td>
            <td>
              <span className="badge text-blue-700 font-bold border-blue-500 badge-ghost badge-xs text-[10px] py-2">
                Intake
              </span>
            </td>
            <td>--</td>
            <td>
              <User className="bg-gray-300 rounded-md "></User>
            </td>
            <td>
              Nov 6,2025{' '}
              <span className="badge border-gray-300 badge-ghost badge-xs text-[10px] py-2 font-bold text-red-500">
                Call
              </span>
            </td>
            <td>
              <div className="font-bold ">Long..</div>
              <div>Artivocr</div>
            </td>
          </tr>
          {/* Row 10 */}
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <User className="bg-gray-300 rounded-md "></User>
                </div>
                <div>
                  <div className="font-bold">Nabid Salehin Niloy</div>
                  <div className="text-sm opacity-50">Nov 2,2025</div>
                </div>
              </div>
            </td>
            <td>Facebook</td>
            <td>
              <span className="badge  text-green-700 font-bold border-green-500 badge-ghost badge-xs text-[10px] py-2">
                Intersected
              </span>
            </td>
            <td>
              <span className="badge border-gray-300 badge-ghost badge-xs text-[10px] py-2">
                Bashundhara
              </span>
            </td>
            <td>
              <User className="bg-gray-300 rounded-md "></User>
            </td>
            <td>
              Nov 7,2025{' '}
              <span className="badge border-gray-300 badge-ghost badge-xs text-[10px] py-2 font-bold text-red-500">
                Call
              </span>
            </td>
            <td>
              __
            </td>
          </tr>
        </tbody>
        <tfoot></tfoot>
      </table>

    </div>
    {/* ================= MOBILE VIEW ================= */}
<div className="block md:hidden space-y-4">


 <div className="max-w-sm border border-gray-100 rounded-xl p-5 shadow-sm bg-white hover:shadow-md transition-shadow border-l-4 border-l-green-500 duration-300">
  {/* Header Section */}
  <div className="flex items-center gap-3 mb-4">
    <div className="p-2 bg-blue-50 rounded-lg">
      <User className="text-green-600 w-6 h-6" />
    </div>
    <div>
      <div className="font-semibold text-gray-800 text-lg leading-tight">Test Imran Number</div>
      <div className="text-xs text-gray-400 font-medium">Jan 1, 2026</div>
    </div>
  </div>

  {/* Info Section */}
  <div className="space-y-3 text-sm">
    <div className="flex justify-between border-b border-gray-50 pb-1">
      <span className="text-gray-500">Source</span>
      <span className="font-medium text-gray-700">ZDSL</span>
    </div>

    <div className="flex justify-between border-b border-gray-50 pb-1">
      <span className="text-gray-500">Stage</span>
      <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs font-bold">
        Intersected
      </span>
    </div>

    <div className="space-y-1.5">
      <span className="text-gray-500 block text-xs uppercase tracking-wider font-semibold">Groups</span>
      <div className="flex flex-wrap gap-1">
        {["Wrong Number", "Test Groups", "High Budget"].map((tag) => (
          <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-[11px]">
            {tag}
          </span>
        ))}
        <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded text-[11px] font-bold">+1</span>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-4 pt-2">
      <div>
        <span className="text-[10px] text-gray-400 uppercase font-bold block">Follow</span>
        <span className="text-gray-300">—</span>
      </div>
      <div>
        <span className="text-[10px] text-gray-400 uppercase font-bold block">Company</span>
        <span className="text-gray-300">—</span>
      </div>
    </div>
  </div>
</div>



<div className="max-w-sm border border-gray-100 rounded-xl p-5 shadow-sm bg-white hover:shadow-md transition-all duration-300 border-l-4 border-l-blue-500">
  {/* Header Section */}
  <div className="flex items-center gap-3 mb-4">
    <div className="p-2 bg-blue-50 rounded-lg">
      <User className="text-blue-600 w-6 h-6" />
    </div>
    <div>
      <div className="font-semibold text-gray-800 text-lg leading-tight">Engr Nur Islam</div>
      <div className="text-[11px] text-gray-400 font-medium">Nov 3, 2025</div>
    </div>
  </div>


  {/* Info Section */}
  <div className="space-y-3 text-sm">
    {/* Source & Stage */}
    <div className="flex justify-between items-center border-b border-gray-50 pb-2">
      <div className="flex flex-col">
        <span className="text-[10px] text-gray-400 uppercase font-bold">Source</span>
        <span className="font-medium text-gray-700">Facebook</span>
      </div>
      <div className="text-right">
        <span className="text-[10px] text-gray-400 uppercase font-bold block">Stage</span>
        <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold">
          Converted
        </span>
      </div>
    </div>

    {/* Groups Section */}
    <div className="space-y-1.5">
      <span className="text-gray-500 block text-[11px] uppercase tracking-wider font-bold">Groups</span>
      <div className="flex flex-wrap gap-1">
        {["Wrong Number", "Test Groups", "VIP"].map((tag) => (
          <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-[10px] border border-gray-200">
            {tag}
          </span>
        ))}
        <span className="px-2 py-1 bg-indigo-50 text-indigo-600 rounded text-[10px] font-bold border border-indigo-100">+4</span>
      </div>
    </div>

    {/* Follow & Company */}
    <div className="grid grid-cols-2 gap-4 pt-2 border-t border-gray-50">
      <div>
        <span className="text-[10px] text-gray-400 uppercase font-bold block">Follow Up</span>
        <span className="text-gray-700 text-xs font-medium">Dec 26, 2025</span>
        <span className="text-blue-500 text-[10px] block font-semibold">Call +2</span>
      </div>
      <div>
        <span className="text-[10px] text-gray-400 uppercase font-bold block">Company</span>
        <span className="text-gray-700 text-xs font-medium">Career i</span>
      </div>
    </div>
  </div>
</div>






 <div className="max-w-sm border border-gray-100 rounded-xl p-5 shadow-sm bg-white hover:shadow-md transition-all duration-300 border-l-4 border-l-orange-400">
  {/* Header Section */}
  <div className="flex items-center gap-3 mb-4">
    <div className="p-2 bg-orange-50 rounded-lg">
      <User className="text-orange-600 w-6 h-6" />
    </div>
    <div>
      <div className="font-semibold text-gray-800 text-lg leading-tight">MD Jasim Uddin</div>
      <div className="text-[11px] text-gray-400 font-medium">Nov 3, 2025</div>
    </div>
  </div>

  {/* Info Section */}
  <div className="space-y-3 text-sm">
    {/* Source & Stage */}
    <div className="flex justify-between items-center border-b border-gray-50 pb-2">
      <div className="flex flex-col">
        <span className="text-[10px] text-gray-400 uppercase font-bold">Source</span>
        <span className="font-medium text-gray-700">Facebook</span>
      </div>
      <div className="text-right">
        <span className="text-[10px] text-gray-400 uppercase font-bold block">Stage</span>
        <span className="px-2 py-0.5 bg-orange-100 text-orange-700 rounded-full text-xs font-bold">
          Intake
        </span>
      </div>
    </div>

    {/* Groups Section */}
    <div className="space-y-1.5">
      <span className="text-gray-500 block text-[11px] uppercase tracking-wider font-bold">Groups</span>
      <div className="flex flex-wrap gap-1">
        <span className="text-gray-300 italic text-xs">No groups assigned</span>
      </div>
    </div>

    {/* Follow & Company */}
    <div className="grid grid-cols-2 gap-4 pt-2 border-t border-gray-50">
      <div>
        <span className="text-[10px] text-gray-400 uppercase font-bold block">Follow Up</span>
        <span className="text-gray-700 text-xs font-medium">Nov 12, 2025</span>
        <span className="text-orange-500 text-[10px] block font-semibold underline decoration-dotted">Call</span>
      </div>
      <div>
        <span className="text-[10px] text-gray-400 uppercase font-bold block">Company</span>
        <span className="text-gray-700 text-xs font-medium">Speedy</span>
      </div>
    </div>
  </div>
</div>





<div className="max-w-sm border border-gray-100 rounded-xl p-5 shadow-sm bg-white hover:shadow-md transition-all duration-300 border-l-4 border-l-purple-500">
  {/* Header Section */}
  <div className="flex items-center gap-3 mb-4">
    <div className="p-2 bg-purple-50 rounded-lg">
      <User className="text-purple-600 w-6 h-6" />
    </div>
    <div>
      <div className="font-semibold text-gray-800 text-lg leading-tight">Muhammad Khokan</div>
      <div className="text-[11px] text-gray-400 font-medium">Nov 3, 2025</div>
    </div>
  </div>

  {/* Info Section */}
  <div className="space-y-3 text-sm">
    {/* Source & Stage */}
    <div className="flex justify-between items-center border-b border-gray-50 pb-2">
      <div className="flex flex-col">
        <span className="text-[10px] text-gray-400 uppercase font-bold">Source</span>
        <span className="font-medium text-gray-700">Facebook</span>
      </div>
      <div className="text-right">
        <span className="text-[10px] text-gray-400 uppercase font-bold block">Stage</span>
        <span className="px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full text-xs font-bold">
          Contacted
        </span>
      </div>
    </div>

    {/* Groups Section */}
    <div className="space-y-1.5">
      <span className="text-gray-500 block text-[11px] uppercase tracking-wider font-bold">Groups</span>
      <div className="flex flex-wrap gap-1">
        <span className="text-gray-300 italic text-xs font-light tracking-wide">None</span>
      </div>
    </div>

    {/* Follow & Company */}
    <div className="grid grid-cols-2 gap-4 pt-2 border-t border-gray-50">
      <div>
        <span className="text-[10px] text-gray-400 uppercase font-bold block">Follow Up</span>
        <span className="text-gray-700 text-xs font-medium">Nov 4, 2025</span>
        <span className="text-purple-500 text-[10px] block font-semibold flex items-center gap-1">
          <span className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse"></span> Call
        </span>
      </div>
      <div>
        <span className="text-[10px] text-gray-400 uppercase font-bold block">Company</span>
        <span className="text-gray-700 text-xs font-medium">M.M.Tr</span>
      </div>
    </div>
  </div>
</div>




 <div className="max-w-sm border border-gray-100 rounded-xl p-5 shadow-sm bg-white hover:shadow-md transition-all duration-300 border-l-4 border-l-rose-500">
  {/* Header Section */}
  <div className="flex items-center gap-3 mb-4">
    <div className="p-2 bg-rose-50 rounded-lg">
      <User className="text-rose-600 w-6 h-6" />
    </div>
    <div>
      <div className="font-semibold text-gray-800 text-lg leading-tight">Sk Abu Mahadi</div>
      <div className="text-[11px] text-gray-400 font-medium">Nov 3, 2025</div>
    </div>
  </div>

  {/* Info Section */}
  <div className="space-y-3 text-sm">
    {/* Source & Stage */}
    <div className="flex justify-between items-center border-b border-gray-50 pb-2">
      <div className="flex flex-col">
        <span className="text-[10px] text-gray-400 uppercase font-bold">Source</span>
        <span className="font-medium text-gray-700">Facebook</span>
      </div>
      <div className="text-right">
        <span className="text-[10px] text-gray-400 uppercase font-bold block">Stage</span>
        <span className="px-2 py-0.5 bg-rose-100 text-rose-700 rounded-full text-xs font-bold">
          Contacted
        </span>
      </div>
    </div>

    {/* Groups Section */}
    <div className="space-y-1.5">
      <span className="text-gray-500 block text-[11px] uppercase tracking-wider font-bold">Groups</span>
      <div className="flex flex-wrap gap-1">
        <span className="text-gray-300 italic text-xs font-light">Not assigned</span>
      </div>
    </div>

    {/* Follow & Company */}
    <div className="grid grid-cols-2 gap-4 pt-2 border-t border-gray-50">
      <div>
        <span className="text-[10px] text-gray-400 uppercase font-bold block">Follow Up</span>
        <span className="text-gray-700 text-xs font-medium">Nov 4, 2025</span>
        <div className="flex items-center gap-1 mt-0.5">
          <span className="text-rose-600 text-[10px] font-bold px-1.5 py-0.5 bg-rose-50 rounded border border-rose-100">
            Meeting +2
          </span>
        </div>
      </div>
      <div>
        <span className="text-[10px] text-gray-400 uppercase font-bold block">Company</span>
        <span className="text-gray-700 text-xs font-medium">M.M.Tr</span>
      </div>
    </div>
  </div>
</div>



  <div className="max-w-sm border border-gray-100 rounded-xl p-5 shadow-sm bg-white hover:shadow-md transition-all duration-300 border-l-4 border-l-emerald-500">
  {/* Header Section */}
  <div className="flex items-center gap-3 mb-4">
    <div className="p-2 bg-emerald-50 rounded-lg">
      <User className="text-emerald-600 w-6 h-6" />
    </div>
    <div>
      <div className="font-semibold text-gray-800 text-lg leading-tight">Shakawat Nayon</div>
      <div className="text-[11px] text-gray-400 font-medium">Nov 3, 2025</div>
    </div>
  </div>

  {/* Info Section */}
  <div className="space-y-3 text-sm">
    {/* Source & Stage */}
    <div className="flex justify-between items-center border-b border-gray-50 pb-2">
      <div className="flex flex-col">
        <span className="text-[10px] text-gray-400 uppercase font-bold">Source</span>
        <span className="font-medium text-gray-700">Facebook</span>
      </div>
      <div className="text-right">
        <span className="text-[10px] text-gray-400 uppercase font-bold block">Stage</span>
        <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold">
          Intersected
        </span>
      </div>
    </div>

    {/* Groups Section */}
    <div className="space-y-1.5">
      <span className="text-gray-500 block text-[11px] uppercase tracking-wider font-bold">Groups</span>
      <div className="flex flex-wrap gap-1">
        <span className="text-gray-300 italic text-xs font-light">Not specified</span>
      </div>
    </div>

    {/* Follow & Company */}
    <div className="grid grid-cols-2 gap-4 pt-2 border-t border-gray-50">
      <div>
        <span className="text-[10px] text-gray-400 uppercase font-bold block">Follow Up</span>
        <span className="text-gray-300 text-xs">—</span>
      </div>
      <div>
        <span className="text-[10px] text-gray-400 uppercase font-bold block">Company</span>
        <span className="text-gray-700 text-xs font-medium">Jumona</span>
      </div>
    </div>
  </div>
</div>




  <div className="max-w-sm border border-gray-100 rounded-xl p-5 shadow-sm bg-white hover:shadow-md transition-all duration-300 border-l-4 border-l-emerald-500">
  {/* Header Section */}
  <div className="flex items-center gap-3 mb-4">
    <div className="p-2 bg-emerald-50 rounded-lg">
      <User className="text-emerald-600 w-6 h-6" />
    </div>
    <div>
      <div className="font-semibold text-gray-800 text-lg leading-tight">Muhammad Al-Mamun</div>
      <div className="text-[11px] text-gray-400 font-medium">Nov 2, 2025</div>
    </div>
  </div>

  {/* Info Section */}
  <div className="space-y-3 text-sm">
    {/* Source & Stage */}
    <div className="flex justify-between items-center border-b border-gray-50 pb-2">
      <div className="flex flex-col">
        <span className="text-[10px] text-gray-400 uppercase font-bold text-gray-400">Source</span>
        <span className="font-medium text-gray-700">Facebook</span>
      </div>
      <div className="text-right">
        <span className="text-[10px] text-gray-400 uppercase font-bold block">Stage</span>
        <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full text-[10px] font-bold">
          Intersected
        </span>
      </div>
    </div>

    {/* Groups Section */}
    <div className="space-y-1">
      <span className="text-gray-400 block text-[10px] uppercase font-bold">Groups</span>
      <div className="text-gray-300 italic text-xs">No groups</div>
    </div>

    {/* Follow & Company */}
    <div className="grid grid-cols-2 gap-4 pt-2 border-t border-gray-50">
      <div>
        <span className="text-[10px] text-gray-400 uppercase font-bold block">Follow Up</span>
        <span className="text-gray-700 text-xs font-medium">Nov 2, 2025</span>
        <span className="text-emerald-600 text-[10px] block font-bold mt-0.5">Call</span>
      </div>
      <div>
        <span className="text-[10px] text-gray-400 uppercase font-bold block">Company</span>
        <span className="text-gray-700 text-xs font-medium">M&M</span>
      </div>
    </div>
  </div>
</div>









<div className="max-w-sm border border-gray-100 rounded-xl p-5 shadow-sm bg-white hover:shadow-md transition-all duration-300 border-l-4 border-l-amber-500">
  {/* Header Section */}
  <div className="flex items-center gap-3 mb-4">
    <div className="p-2 bg-amber-50 rounded-lg">
      <User className="text-amber-600 w-6 h-6" />
    </div>
    <div>
      <div className="font-semibold text-gray-800 text-lg leading-tight uppercase">M A K Azad</div>
      <div className="text-[11px] text-gray-400 font-medium">Nov 2, 2025</div>
    </div>
  </div>

  {/* Info Section */}
  <div className="space-y-3 text-sm">
    {/* Source & Stage */}
    <div className="flex justify-between items-center border-b border-gray-50 pb-2">
      <div className="flex flex-col">
        <span className="text-[10px] text-gray-400 uppercase font-bold">Source</span>
        <span className="font-medium text-gray-700">Facebook</span>
      </div>
      <div className="text-right">
        <span className="text-[10px] text-gray-400 uppercase font-bold block">Stage</span>
        <span className="px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full text-[10px] font-bold">
          Intake
        </span>
      </div>
    </div>

    {/* Groups Section */}
    <div className="space-y-1">
      <span className="text-gray-400 block text-[10px] uppercase font-bold">Groups</span>
      <div className="text-gray-300 italic text-xs font-light">None</div>
    </div>

    {/* Follow & Company */}
    <div className="grid grid-cols-2 gap-4 pt-2 border-t border-gray-50">
      <div>
        <span className="text-[10px] text-gray-400 uppercase font-bold block">Follow Up</span>
        <span className="text-gray-700 text-xs font-medium">Nov 3, 2025</span>
        <span className="text-amber-600 text-[10px] block font-bold mt-0.5">Call</span>
      </div>
      <div>
        <span className="text-[10px] text-gray-400 uppercase font-bold block">Company</span>
        <span className="text-gray-700 text-xs font-medium">Gov</span>
      </div>
    </div>
  </div>
</div>










  <div className="max-w-sm border border-gray-100 rounded-xl p-5 shadow-sm bg-white hover:shadow-md transition-all duration-300 border-l-4 border-l-amber-500">
  {/* Header Section */}
  <div className="flex items-center gap-3 mb-4">
    <div className="p-2 bg-amber-50 rounded-lg">
      <User className="text-amber-600 w-6 h-6" />
    </div>
    <div>
      <div className="font-semibold text-gray-800 text-lg leading-tight">Faisal Amin</div>
      <div className="text-[11px] text-gray-400 font-medium">Nov 2, 2025</div>
    </div>
  </div>

  {/* Info Section */}
  <div className="space-y-3 text-sm">
    {/* Source & Stage */}
    <div className="flex justify-between items-center border-b border-gray-50 pb-2">
      <div className="flex flex-col">
        <span className="text-[10px] text-gray-400 uppercase font-bold">Source</span>
        <span className="font-medium text-gray-700">Facebook</span>
      </div>
      <div className="text-right">
        <span className="text-[10px] text-gray-400 uppercase font-bold block">Stage</span>
        <span className="px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full text-[10px] font-bold">
          Intake
        </span>
      </div>
    </div>

    {/* Groups Section */}
    <div className="space-y-1">
      <span className="text-gray-400 block text-[10px] uppercase font-bold">Groups</span>
      <div className="text-gray-300 italic text-xs font-light tracking-wide">None</div>
    </div>

    {/* Follow & Company */}
    <div className="grid grid-cols-2 gap-4 pt-2 border-t border-gray-50">
      <div>
        <span className="text-[10px] text-gray-400 uppercase font-bold block">Follow Up</span>
        <span className="text-gray-700 text-xs font-medium">Nov 6, 2025</span>
        <span className="text-amber-600 text-[10px] block font-bold mt-0.5">Call</span>
      </div>
      <div>
        <span className="text-[10px] text-gray-400 uppercase font-bold block">Company</span>
        <span className="text-gray-700 text-xs font-medium">Long..</span>
      </div>
    </div>
  </div>
</div>

<div className="max-w-sm border border-gray-100 rounded-xl p-5 shadow-sm bg-white hover:shadow-md transition-all duration-300 border-l-4 border-l-emerald-500">
  {/* Header Section */}
  <div className="flex items-center gap-3 mb-4">
    <div className="p-2 bg-emerald-50 rounded-lg">
      <User className="text-emerald-600 w-6 h-6" />
    </div>
    <div>
      <div className="font-semibold text-gray-800 text-lg leading-tight">Nabid Salehin Niloy</div>
      <div className="text-[11px] text-gray-400 font-medium">Nov 2, 2025</div>
    </div>
  </div>

  {/* Info Section */}
  <div className="space-y-3 text-sm">
    {/* Source & Stage */}
    <div className="flex justify-between items-center border-b border-gray-50 pb-2">
      <div className="flex flex-col">
        <span className="text-[10px] text-gray-400 uppercase font-bold text-gray-400">Source</span>
        <span className="font-medium text-gray-700">Facebook</span>
      </div>
      <div className="text-right">
        <span className="text-[10px] text-gray-400 uppercase font-bold block">Stage</span>
        <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full text-[10px] font-bold">
          Intersected
        </span>
      </div>
    </div>

    {/* Groups Section */}
    <div className="space-y-1.5">
      <span className="text-gray-400 block text-[10px] uppercase font-bold">Groups</span>
      <div className="flex flex-wrap gap-1">
        <span className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px] border border-gray-200 font-medium">
          Bashundhara
        </span>
      </div>
    </div>

    {/* Follow & Company */}
    <div className="grid grid-cols-2 gap-4 pt-2 border-t border-gray-50">
      <div>
        <span className="text-[10px] text-gray-400 uppercase font-bold block">Follow Up</span>
        <span className="text-gray-700 text-xs font-medium">Nov 7, 2025</span>
        <span className="text-emerald-600 text-[10px] block font-bold mt-0.5 italic">Call</span>
      </div>
      <div>
        <span className="text-[10px] text-gray-400 uppercase font-bold block">Company</span>
        <span className="text-gray-300 text-xs">—</span>
      </div>
    </div>
  </div>
</div>

</div>

    </div>
  );
};

export default Table;
