import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid"; // Perubahan impor untuk v2

const Sidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <div className="w-64 h-screen bg-gray-50 border-r border-slate-200 text-white flex flex-col">
      <div className="px-4 flex gap-2 items-center  border-b border-slate-200">
        <svg
          className="fill-indigo-600"
          id="logo-64"
          width="40"
          height="80"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="ccustom"
            d="M27.5308 40.1395C27.5757 35.5502 26.4122 31.8182 24.9322 31.8037C23.4521 31.7893 22.2159 35.4979 22.1711 40.0871C22.1262 44.6764 23.2897 48.4085 24.7697 48.4229C26.2498 48.4374 27.486 44.7288 27.5308 40.1395Z"
          ></path>
          <path
            className="ccustom"
            d="M18.947 39.0972C21.4661 35.2608 22.5052 31.4922 21.268 30.6798C20.0307 29.8674 16.9856 32.3188 14.4666 36.1552C11.9475 39.9916 10.9084 43.7601 12.1456 44.5726C13.3829 45.385 16.4279 42.9336 18.947 39.0972Z"
          ></path>
          <path
            className="ccustom"
            d="M12.2792 33.593C16.4726 31.7278 19.3843 29.1194 18.7827 27.767C18.1812 26.4146 14.2942 26.8304 10.1008 28.6957C5.90744 30.5609 2.99571 33.1693 3.59726 34.5217C4.1988 35.8741 8.08584 35.4583 12.2792 33.593Z"
          ></path>
          <path
            className="ccustom"
            d="M18.2794 23.9745C18.5046 22.5116 15.0099 20.7597 10.4739 20.0615C5.93778 19.3633 2.07804 19.9833 1.85288 21.4462C1.62772 22.9091 5.1224 24.6609 9.65848 25.3591C14.1945 26.0573 18.0543 25.4373 18.2794 23.9745Z"
          ></path>
          <path
            className="ccustom"
            d="M19.908 20.4895C20.8882 19.3805 18.895 16.0176 15.4561 12.9783C12.0172 9.93902 8.43482 8.37426 7.45464 9.48332C6.47446 10.5924 8.46766 13.9553 11.9066 16.9946C15.3455 20.0339 18.9279 21.5986 19.908 20.4895Z"
          ></path>
          <path
            className="ccustom"
            d="M23.1514 18.4528C24.5756 18.0498 24.7171 14.1431 23.4675 9.72704C22.2179 5.31095 20.0503 2.05771 18.6261 2.46072C17.2019 2.86373 17.0604 6.77037 18.31 11.1865C19.5596 15.6025 21.7272 18.8558 23.1514 18.4528Z"
          ></path>
          <path
            className="ccustom"
            d="M31.9584 11.3239C33.2949 6.9333 33.2305 3.02462 31.8145 2.59361C30.3985 2.16259 28.1672 5.37245 26.8307 9.76304C25.4943 14.1536 25.5587 18.0623 26.9747 18.4933C28.3907 18.9243 30.622 15.7145 31.9584 11.3239Z"
          ></path>
          <path
            className="ccustom"
            d="M38.2514 17.2565C41.7491 14.285 43.8077 10.9617 42.8493 9.83373C41.891 8.70573 38.2787 10.2002 34.7811 13.1716C31.2834 16.1431 29.2249 19.4664 30.1832 20.5944C31.1415 21.7224 34.7538 20.228 38.2514 17.2565Z"
          ></path>
          <path
            className="ccustom"
            d="M40.3322 25.6519C44.8812 25.0433 48.4097 23.3607 48.2134 21.8936C48.0172 20.4266 44.1704 19.7307 39.6214 20.3392C35.0725 20.9478 31.5439 22.6304 31.7402 24.0975C31.9365 25.5645 35.7832 26.2605 40.3322 25.6519Z"
          ></path>
          <path
            className="ccustom"
            d="M46.2004 34.941C46.8285 33.6008 43.9688 30.9355 39.813 28.9879C35.6573 27.0403 31.7792 26.548 31.1511 27.8882C30.523 29.2285 33.3827 31.8938 37.5385 33.8414C41.6942 35.7889 45.5723 36.2813 46.2004 34.941Z"
          ></path>
          <path
            className="ccustom"
            d="M37.4589 44.8299C38.7119 44.0421 37.7473 40.2537 35.3044 36.3684C32.8615 32.4831 29.8653 29.9722 28.6123 30.76C27.3593 31.5478 28.3239 35.3362 30.7668 39.2215C33.2097 43.1068 36.2059 45.6178 37.4589 44.8299Z"
          ></path>
        </svg>
        <h1 className="text-xl font-bold text-indigo-600">Stockify</h1>
      </div>
      <nav className="flex-1 p-4 px-2 text-black">
        <span className="text-xs text-slate-500">Overview</span>
        <Link
          to="/dashboard"
          className=" px-4 py-3 rounded hover:bg-indigo-50 hover:text-indigo-600 flex gap-2 items-center text-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          Dashboard
        </Link>
        <span className="text-xs text-slate-500 mt-4 block">
          Transaction & Report
        </span>
        <Link
          to="/transaction"
          className="flex gap-2 items-center px-4 py-3 rounded hover:bg-indigo-50 hover:text-indigo-600 text-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
            />
          </svg>
          Transactions
        </Link>
        {/* Report */}
        <div>
          <button
            onClick={toggleDropdown}
            className="w-full text-left px-4 py-3 rounded hover:bg-indigo-50 hover:text-indigo-600"
          >
            <div className="flex items-center justify-between">
              <div className="flex gap-2 items-center  text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                  />
                </svg>
                Reports
              </div>
              <div>
                {/* Conditionally render the icon */}
                {isDropdownOpen ? (
                  <ChevronUpIcon className="w-5 h-5" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5" />
                )}
              </div>
            </div>
          </button>
          {isDropdownOpen && (
            <div className="pl-6 space-y-2">
              <Link
                to="/settings/general"
                className="block px-4 py-3 rounded hover:bg-indigo-50 hover:text-indigo-600 text-sm"
              >
                General
              </Link>
              <Link
                to="/settings/account"
                className="block px-4 py-3 rounded hover:bg-indigo-50 hover:text-indigo-600 text-sm"
              >
                Account
              </Link>
            </div>
          )}
        </div>
        <span className="text-xs text-slate-500 mt-4 block">
          Stock Management
        </span>
        {/* Produk */}
        <div>
          <button
            onClick={toggleDropdown}
            className="w-full text-left px-4 py-3 rounded hover:bg-indigo-50 hover:text-indigo-600"
          >
            <div className="flex items-center justify-between">
              <div className="flex gap-2 items-center  text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
                Produk
              </div>
              <div>
                {/* Conditionally render the icon */}
                {isDropdownOpen ? (
                  <ChevronUpIcon className="w-5 h-5" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5" />
                )}
              </div>
            </div>
          </button>
          {isDropdownOpen && (
            <div className="pl-6 space-y-2">
              <Link
                to="/settings/general"
                className="block px-4 py-3 rounded hover:bg-indigo-50 hover:text-indigo-600 text-sm"
              >
                General
              </Link>
              <Link
                to="/settings/account"
                className="block px-4 py-3 rounded hover:bg-indigo-50 hover:text-indigo-600 text-sm"
              >
                Account
              </Link>
            </div>
          )}
        </div>
        {/* Inventory */}
        <div>
          <button
            onClick={toggleDropdown}
            className="w-full text-left px-4 py-3 rounded hover:bg-indigo-50 hover:text-indigo-600"
          >
            <div className="flex items-center justify-between">
              <div className="flex gap-2 items-center  text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                  />
                </svg>
                Inventory
              </div>
              <div>
                {/* Conditionally render the icon */}
                {isDropdownOpen ? (
                  <ChevronUpIcon className="w-5 h-5" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5" />
                )}
              </div>
            </div>
          </button>
          {isDropdownOpen && (
            <div className="pl-6 space-y-2">
              <Link
                to="/settings/general"
                className="block px-4 py-3 rounded hover:bg-indigo-50 hover:text-indigo-600 text-sm"
              >
                General
              </Link>
              <Link
                to="/settings/account"
                className="block px-4 py-3 rounded hover:bg-indigo-50 hover:text-indigo-600 text-sm"
              >
                Account
              </Link>
            </div>
          )}
        </div>
        {/* Warehouse */}
        <div>
          <button
            onClick={toggleDropdown}
            className="w-full text-left px-4 py-3 rounded hover:bg-indigo-50 hover:text-indigo-600"
          >
            <div className="flex items-center justify-between">
              <div className="flex gap-2 items-center  text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
                  />
                </svg>
                Warehouse
              </div>
              <div>
                {/* Conditionally render the icon */}
                {isDropdownOpen ? (
                  <ChevronUpIcon className="w-5 h-5" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5" />
                )}
              </div>
            </div>
          </button>
          {isDropdownOpen && (
            <div className="pl-6 space-y-2">
              <Link
                to="/settings/general"
                className="block px-4 py-3 rounded hover:bg-indigo-50 hover:text-indigo-600 text-sm"
              >
                General
              </Link>
              <Link
                to="/settings/account"
                className="block px-4 py-3 rounded hover:bg-indigo-50 hover:text-indigo-600 text-sm"
              >
                Account
              </Link>
            </div>
          )}
        </div>
        <span className="text-xs text-slate-500 mt-4 block">
          Setting & Help Center
        </span>
        {/* Settting */}
        <div>
          <button
            onClick={toggleDropdown}
            className="w-full text-left px-4 py-3 rounded hover:bg-indigo-50 hover:text-indigo-600"
          >
            <div className="flex items-center justify-between">
              <div className="flex gap-2 items-center  text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                Settings
              </div>
              <div>
                {/* Conditionally render the icon */}
                {isDropdownOpen ? (
                  <ChevronUpIcon className="w-5 h-5" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5" />
                )}
              </div>
            </div>
          </button>
          {isDropdownOpen && (
            <div className="pl-6 space-y-2">
              <Link
                to="/settings/general"
                className="block px-4 py-3 rounded hover:bg-indigo-50 hover:text-indigo-600 text-sm"
              >
                General
              </Link>
              <Link
                to="/settings/account"
                className="block px-4 py-3 rounded hover:bg-indigo-50 hover:text-indigo-600 text-sm"
              >
                Account
              </Link>
            </div>
          )}
        </div>
        {/* Help Cennter */}
        <div>
          <button
            onClick={toggleDropdown}
            className="w-full text-left px-4 py-3 rounded hover:bg-indigo-50 hover:text-indigo-600"
          >
            <div className="flex items-center justify-between">
              <div className="flex gap-2 items-center  text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.712 4.33a9.027 9.027 0 0 1 1.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 0 0-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 0 1 0 9.424m-4.138-5.976a3.736 3.736 0 0 0-.88-1.388 3.737 3.737 0 0 0-1.388-.88m2.268 2.268a3.765 3.765 0 0 1 0 2.528m-2.268-4.796a3.765 3.765 0 0 0-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 0 1-1.388.88m2.268-2.268 4.138 3.448m0 0a9.027 9.027 0 0 1-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0-3.448-4.138m3.448 4.138a9.014 9.014 0 0 1-9.424 0m5.976-4.138a3.765 3.765 0 0 1-2.528 0m0 0a3.736 3.736 0 0 1-1.388-.88 3.737 3.737 0 0 1-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 0 1-1.652-1.306 9.027 9.027 0 0 1-1.306-1.652m0 0 4.138-3.448M4.33 16.712a9.014 9.014 0 0 1 0-9.424m4.138 5.976a3.765 3.765 0 0 1 0-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 0 1 1.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 0 0-1.652 1.306A9.025 9.025 0 0 0 4.33 7.288"
                  />
                </svg>
                Help Center
              </div>
              <div>
                {/* Conditionally render the icon */}
                {isDropdownOpen ? (
                  <ChevronUpIcon className="w-5 h-5" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5" />
                )}
              </div>
            </div>
          </button>
          {isDropdownOpen && (
            <div className="pl-6 space-y-2">
              <Link
                to="/settings/general"
                className="block px-4 py-3 rounded hover:bg-indigo-50 hover:text-indigo-600 text-sm"
              >
                General
              </Link>
              <Link
                to="/settings/account"
                className="block px-4 py-3 rounded hover:bg-indigo-50 hover:text-indigo-600 text-sm"
              >
                Account
              </Link>
            </div>
          )}
        </div>
      </nav>
      <div className="p-4 border-t border-slate-200">
        <button className="w-full px-4 py-3 bg-red-500 rounded hover:bg-red-600">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
