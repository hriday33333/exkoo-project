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


  <div className="border rounded-lg p-3 shadow bg-white space-y-2">
    <div className="flex gap-2">
      <User className="bg-gray-300 rounded-md" />
      <div>
        <div className="font-bold">Test imran number</div>
        <div className="text-xs opacity-60">Jan 1, 2026</div>
      </div>
    </div>
    <div><b>Source:</b> ZDSL</div>
    <div><b>Stage:</b> Intersected</div>
    <div><b>Groups:</b> Wrong Number, Test Groups, High Budget, +1</div>
    <div><b>Follow:</b> __</div>
    <div><b>Company:</b> __</div>
  </div>

  <div className="border rounded-lg p-3 shadow bg-white space-y-2">
    <div className="flex gap-2">
      <User className="bg-gray-300 rounded-md" />
      <div>
        <div className="font-bold">Engr nur Islam</div>
        <div className="text-xs opacity-60">Nov 3,2025</div>
      </div>
    </div>
    <div><b>Source:</b> Facebook</div>
    <div><b>Stage:</b> Converted</div>
    <div><b>Groups:</b> Wrong Number, Test Groups, VIP, +4</div>
    <div><b>Follow:</b> Dec 26,2025 Call +2</div>
    <div><b>Company:</b> Career i</div>
  </div>

  <div className="border rounded-lg p-3 shadow bg-white space-y-2">
    <div className="flex gap-2">
      <User className="bg-gray-300 rounded-md" />
      <div>
        <div className="font-bold">MD Jasim Uddin</div>
        <div className="text-xs opacity-60">Nov 3,2025</div>
      </div>
    </div>
    <div><b>Source:</b> Facebook</div>
    <div><b>Stage:</b> Intake</div>
    <div><b>Groups:</b> --</div>
    <div><b>Follow:</b> Nov 12,2025 Call</div>
    <div><b>Company:</b> Speedy</div>
  </div>

  <div className="border rounded-lg p-3 shadow bg-white space-y-2">
    <div className="flex gap-2">
      <User className="bg-gray-300 rounded-md" />
      <div>
        <div className="font-bold">Muhammad Khokan</div>
        <div className="text-xs opacity-60">Nov 3,2025</div>
      </div>
    </div>
    <div><b>Source:</b> Facebook</div>
    <div><b>Stage:</b> Contacted</div>
    <div><b>Groups:</b> --</div>
    <div><b>Follow:</b> Nov 4,2025 Call</div>
    <div><b>Company:</b> M.M.Tr</div>
  </div>

  <div className="border rounded-lg p-3 shadow bg-white space-y-2">
    <div className="flex gap-2">
      <User className="bg-gray-300 rounded-md" />
      <div>
        <div className="font-bold">Sk Abu Mahadi</div>
        <div className="text-xs opacity-60">Nov 3,2025</div>
      </div>
    </div>
    <div><b>Source:</b> Facebook</div>
    <div><b>Stage:</b> Contacted</div>
    <div><b>Groups:</b> --</div>
    <div><b>Follow:</b> Nov 4,2025 Meeting +2</div>
    <div><b>Company:</b> M.M.Tr</div>
  </div>

  <div className="border rounded-lg p-3 shadow bg-white space-y-2">
    <div className="flex gap-2">
      <User className="bg-gray-300 rounded-md" />
      <div>
        <div className="font-bold">Shakawat Nayon</div>
        <div className="text-xs opacity-60">Nov 3,2025</div>
      </div>
    </div>
    <div><b>Source:</b> Facebook</div>
    <div><b>Stage:</b> Intersected</div>
    <div><b>Groups:</b> --</div>
    <div><b>Follow:</b> __</div>
    <div><b>Company:</b> Jumona</div>
  </div>

  <div className="border rounded-lg p-3 shadow bg-white space-y-2">
    <div className="flex gap-2">
      <User className="bg-gray-300 rounded-md" />
      <div>
        <div className="font-bold">Muhammad Al-Mamun</div>
        <div className="text-xs opacity-60">Nov 2,2025</div>
      </div>
    </div>
    <div><b>Source:</b> Facebook</div>
    <div><b>Stage:</b> Intersected</div>
    <div><b>Groups:</b> --</div>
    <div><b>Follow:</b> Nov 2,2025 Call</div>
    <div><b>Company:</b> M&M</div>
  </div>

  <div className="border rounded-lg p-3 shadow bg-white space-y-2">
    <div className="flex gap-2">
      <User className="bg-gray-300 rounded-md" />
      <div>
        <div className="font-bold">m a k Azad</div>
        <div className="text-xs opacity-60">Nov 2,2025</div>
      </div>
    </div>
    <div><b>Source:</b> Facebook</div>
    <div><b>Stage:</b> Intake</div>
    <div><b>Groups:</b> --</div>
    <div><b>Follow:</b> Nov 3,2025 Call</div>
    <div><b>Company:</b> gov</div>
  </div>

  <div className="border rounded-lg p-3 shadow bg-white space-y-2">
    <div className="flex gap-2">
      <User className="bg-gray-300 rounded-md" />
      <div>
        <div className="font-bold">Fsisal Amin</div>
        <div className="text-xs opacity-60">Nov 2,2025</div>
      </div>
    </div>
    <div><b>Source:</b> Facebook</div>
    <div><b>Stage:</b> Intake</div>
    <div><b>Groups:</b> --</div>
    <div><b>Follow:</b> Nov 6,2025 Call</div>
    <div><b>Company:</b> Long..</div>
  </div>

  <div className="border rounded-lg p-3 shadow bg-white space-y-2">
    <div className="flex gap-2">
      <User className="bg-gray-300 rounded-md" />
      <div>
        <div className="font-bold">Nabid Salehin Niloy</div>
        <div className="text-xs opacity-60">Nov 2,2025</div>
      </div>
    </div>
    <div><b>Source:</b> Facebook</div>
    <div><b>Stage:</b> Intersected</div>
    <div><b>Groups:</b> Bashundhara</div>
    <div><b>Follow:</b> Nov 7,2025 Call</div>
    <div><b>Company:</b> __</div>
  </div>

</div>

    </div>
  );
};

export default Table;
