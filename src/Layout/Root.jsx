import {
  CalendarCheck,
  ChartLine,
  FolderKanban,
  House,
  Mail,
  Megaphone,
  UserRoundCog,
  Users,
} from 'lucide-react';

const Root = () => {
  return (
    <div className="max-w-full mx-auto">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Navbar */}
          <nav className="navbar w-full bg-base-300">
            <label
              htmlFor="my-drawer-4"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              {/* Sidebar toggle icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
                className="my-1.5 inline-block size-4"
              >
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M9 4v16"></path>
                <path d="M14 10l2 2l-2 2"></path>
              </svg>
            </label>
            <div className="px-4">Navbar Title</div>
          </nav>
          {/* Page content here */}

          <div className="flex">
            <div className=" min-h-screen  flex-1">
              <div className="flex min-h-full flex-col items-start bg-base-300 is-drawer-close:w-14 is-drawer-open:w-64">
                {/* Sidebar content here */}
                <ul className="menu w-full grow">
                  {/* List item */}

                  {/* List item */}
                  <li>
                    <button className="mt-4 bg-white rounded-md flex items-center">
                      <House className="my-1.5 size-4" />
                      <span className="hidden md:inline ml-2">CRM</span>
                    </button>
                  </li>

                  <li>
                    <button className="flex items-center">
                      <ChartLine className="my-1.5 size-4" />
                      <span className="hidden md:inline ml-2">Sales</span>
                    </button>
                  </li>

                  <li>
                    <button className="flex items-center">
                      <Mail className="my-1.5 size-4" />
                      <span className="hidden md:inline ml-2">Mail</span>
                    </button>
                  </li>

                  <li>
                    <button className="flex items-center">
                      <FolderKanban className="my-1.5 size-4" />
                      <span className="hidden md:inline ml-2">Project</span>
                    </button>
                  </li>

                  <li>
                    <button className="flex items-center">
                      <Megaphone className="my-1.5 size-4" />
                      <span className="hidden md:inline ml-2">Marketing</span>
                    </button>
                  </li>

                  <li>
                    <button className="flex items-center">
                      <Users className="my-1.5 size-4" />
                      <span className="hidden md:inline ml-2">Team</span>
                    </button>
                  </li>

                  <li>
                    <button className="flex items-center">
                      <UserRoundCog className="my-1.5 size-4" />
                      <span className="hidden md:inline ml-2">HR</span>
                    </button>
                  </li>

                  <li>
                    <button className="flex items-center">
                      <CalendarCheck className="my-1.5 size-4" />
                      <span className="hidden md:inline ml-2">Appointment</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border min-h-screen flex-5">
              <div className="w-full border mx-auto h-20">fff</div>
              ggg
            </div>
          </div>
        </div>

        <div className="drawer-side is-drawer-close:overflow-visible">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="flex min-h-full flex-col items-start bg-base-300 is-drawer-close:w-14 is-drawer-open:w-64">
            {/* Sidebar content here */}
            <ul className="menu w-full grow">
              {/* List item */}
              <li>
                <button
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Homepage"
                >
                  {/* Home icon */}
                  <div className="h-8 bg-purple-700 w-8  rounded-md">
                    <div className="h-4 w-4  mx-auto bg-white mt-2 rounded"></div>
                  </div>
                  <span className="is-drawer-close:hidden font-bold text-2xl">
                    Exkoo
                  </span>
                </button>
              </li>

              {/* List item */}
              <li>
                <button
                  className="is-drawer-close:tooltip mt-4 bg-white rounded-md is-drawer-close:tooltip-right"
                  data-tip="Settings"
                >
                  {/* Settings icon */}
                  <House className=" my-1.5 inline-block size-4" />
                  <span className="is-drawer-close:hidden">CRM</span>
                </button>
              </li>
              <li>
                <button
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Settings"
                >
                  {/* Settings icon */}
                  <ChartLine className=" my-1.5 inline-block size-4" />
                  <span className="is-drawer-close:hidden">Sales</span>
                </button>
              </li>
              <li>
                <button
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Settings"
                >
                  {/* Settings icon */}
                  <Mail className=" my-1.5 inline-block size-4" />
                  <span className="is-drawer-close:hidden">Mail</span>
                </button>
              </li>
              <li>
                <button
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Settings"
                >
                  {/* Settings icon */}
                  <FolderKanban className=" my-1.5 inline-block size-4" />
                  <span className="is-drawer-close:hidden">Project</span>
                </button>
              </li>
              <li>
                <button
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Settings"
                >
                  {/* Settings icon */}
                  <Megaphone className="my-1.5 inline-block size-4" />
                  <span className="is-drawer-close:hidden">Marketing</span>
                </button>
              </li>
              <li>
                <button
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Settings"
                >
                  {/* Settings icon */}
                  <Users className="my-1.5 inline-block size-4" />
                  <span className="is-drawer-close:hidden">Team</span>
                </button>
              </li>
              <li>
                <button
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Settings"
                >
                  {/* Settings icon */}
                  <UserRoundCog className="my-1.5 inline-block size-4" />
                  <span className="is-drawer-close:hidden">HR</span>
                </button>
              </li>
              <li>
                <button
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Settings"
                >
                  {/* Settings icon */}
                  <CalendarCheck className="my-1.5 inline-block size-4" />
                  <span className="is-drawer-close:hidden">Appointment</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Root;
