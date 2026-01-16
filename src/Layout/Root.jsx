import {
  ArrowBigRightDash,
  Bell,
  Briefcase,
  CalendarCheck,
  ChartLine,
  CheckSquare,
  ChevronRight,
  Contact,
  FileText,
  FolderKanban,
  GitPullRequest,
  House,
  LayoutDashboard,
  Mail,
  Megaphone,
  MessageSquare,
  MessageSquareQuote,
  Moon,
  Puzzle,
  Search,
  Settings,
  UserCheck,
  UserCircle,
  UserRoundCog,
  Users,
  Waypoints,
} from 'lucide-react';
import LeadsHeader from '../Components/LeadsHeader';
import Pagination from '../Components/Pagination';
import Table from '../Components/Table';

const Root = () => {
  return (
    <div className="max-w-full mx-auto">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Navbar */}
          <nav className="navbar w-full bg-base-300 border-b border-gray-200 px-4 py-2 flex justify-between items-center">
            {/* Left Side: Breadcrumbs */}
            <div className="flex items-center space-x-2 text-sm ">
              <label
                htmlFor="my-drawer-4"
                aria-label="open sidebar"
                className="btn btn-ghost btn-xs p-0 hover:bg-transparent"
              >
                <ArrowBigRightDash className="size-4" />
              </label>
              <ChevronRight className="size-3 " />
              <span className="cursor-pointer ">CRM</span>
              <ChevronRight className="size-3 " />
              <span className="font-semibold text-gray-800">Leads</span>
            </div>

            {/* Right Side: Search and Actions */}
            <div className="flex items-center space-x-4">
              {/* Search Bar */}
              <div className="relative hidden md:flex items-center">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Search className="size-4 " />
                </div>
                <input
                  type="text"
                  placeholder="Search leads..."
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 pl-10 p-1.5 outline-none"
                />
                <kbd className="absolute right-3 px-1.5 py-0.5 text-xs font-semibold text-gray-400 bg-gray-100 border border-gray-300 rounded-md">
                  ⌘K
                </kbd>
              </div>

              {/* Chat Button */}
              <button className="flex items-center space-x-1 px-3 py-1.5 bg-white border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
                <MessageSquare className="size-4" />
                <span className="font-medium">Chat</span>
              </button>

              {/* Icons (Bell, Theme, Profile) */}
              <div className="flex items-center space-x-3">
                {/* Notification */}
                <div className="relative cursor-pointer">
                  <Bell className="size-5 text-gray-500" />
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white font-bold">
                    5
                  </span>
                </div>

                {/* Dark Mode Toggle */}
                <Moon className="size-5 text-gray-500 cursor-pointer" />

                {/* Profile */}
                <div className="relative">
                  <UserCircle className="size-8 text-gray-400 cursor-pointer" />
                  <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-gray-300 ring-2 ring-white"></span>
                </div>
              </div>
            </div>
          </nav>
          {/* Page content here */}

          <div className="flex">
            <div className=" min-h-screen  flex-1">
              <div className="flex min-h-full flex-col items-start bg-base-300 is-drawer-close:w-14 is-drawer-open:w-64">
                {/* Sidebar content here */}
                <ul className="menu w-full grow">
                  {/* CRM */}
                  <li>
                    <button className="mt-4  flex items-center">
                      <Briefcase className="my-1.5 size-4 md:hidden" />{' '}
                      {/* বড় ডিভাইসে আইকন হাইড হবে */}
                      <span className="hidden md:inline ml-0 md:ml-0">CRM</span>
                    </button>
                  </li>

                  {/* Dashboard */}
                  <li>
                    <button className="flex items-center">
                      <LayoutDashboard className="my-1.5 size-4 md:hidden" />
                      <span className="hidden md:inline">Dashboard</span>
                    </button>
                  </li>
                  {/* Leads */}

                  <li>
                    <button className="flex bg-white rounded-md items-center">
                      <UserCheck className="my-1.5 size-4 md:hidden" />
                      <span className="hidden md:inline">Leads</span>
                    </button>
                  </li>

                  {/* In-pipeline */}
                  <li>
                    <button className="flex items-center">
                      <GitPullRequest className="my-1.5 size-4 md:hidden" />
                      <span className="hidden md:inline">In-pipeline</span>
                    </button>
                  </li>

                  {/* contacts */}
                  <li>
                    <button className="flex items-center">
                      <Contact className="my-1.5 size-4 md:hidden" />
                      <span className="hidden md:inline">contacts</span>
                    </button>
                  </li>

                  {/* ToDo */}
                  <li>
                    <button className="flex items-center">
                      <CheckSquare className="my-1.5 size-4 md:hidden" />
                      <span className="hidden md:inline">ToDo</span>
                    </button>
                  </li>

                  {/* Lead Managers */}
                  <li>
                    <button className="flex items-center">
                      <Users className="my-1.5 size-4 md:hidden" />
                      <span className="hidden md:inline">Lead Managers</span>
                    </button>
                  </li>

                  {/* Lead Distributions */}
                  <li>
                    <button className="flex items-center">
                      <Waypoints className="my-1.5 size-4 md:hidden" />
                      <span className="hidden md:inline">
                        Lead Distributions
                      </span>
                    </button>
                  </li>

                  {/* Forms */}
                  <li>
                    <button className="flex items-center">
                      <FileText className="my-1.5 size-4 md:hidden" />
                      <span className="hidden md:inline">Forms</span>
                    </button>
                  </li>

                  {/* Messages templates */}
                  <li>
                    <button className="flex items-center">
                      <MessageSquareQuote className="my-1.5 size-4 md:hidden" />
                      <span className="hidden md:inline">
                        Messages templates
                      </span>
                    </button>
                  </li>

                  {/* CRM settings */}
                  <li>
                    <button className="flex items-center">
                      <Settings className="my-1.5 size-4 md:hidden" />
                      <span className="hidden md:inline">CRM settings</span>
                    </button>
                  </li>

                  {/* Integrations */}
                  <li>
                    <button className="flex items-center">
                      <Puzzle className="my-1.5 size-4 md:hidden" />
                      <span className="hidden md:inline">Integrations</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="  min-h-screen flex-5 p-3">
              <LeadsHeader></LeadsHeader>
              <Table></Table>
              <Pagination></Pagination>
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
