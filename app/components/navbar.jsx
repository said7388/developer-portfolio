// @flow strict


function Navbar() {
  return (
    <nav className="bg-transparent">
      <div className="mx-auto px-3 py-3 lg:px-6 2xl:max-w-7xl">
        <div className="flex flex-wrap items-center justify-between">
          <div className="mr-14 flex flex-shrink-0 items-center">
            <span className=" text-[#16f2b3] text-2xl font-bold"> ABU SAID</span>
          </div>
          <button type="button" className="focus:bg-blue-750 ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-400 hover:bg-blue-600 focus:outline-none md:hidden" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Expand main menu</span><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="27" width="27" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>
          </button>
          <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">
            <li>
              <a className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/p/all-access"><div className="dark:text-gray-300 text-sm text-gray-700 transition-colors duration-300 hover:text-gray-400 focus:text-white dark:hover:text-pink-600">Subscribe</div></a>
            </li>
            <li>
              <a className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/courses"><div className="dark:text-gray-300 text-sm text-gray-700 transition-colors duration-300 hover:text-gray-400 focus:text-white dark:hover:text-pink-600">Courses</div></a>
            </li>
            <li>
              <a className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/p/learning-paths"><div className="dark:text-gray-300 text-sm text-gray-700 transition-colors duration-300 hover:text-gray-400 focus:text-white dark:hover:text-pink-600">Learning Paths</div></a>
            </li>
            <li>
              <a className="block px-4 py-2 no-underline outline-none hover:no-underline" href="https://forum.codewithmosh.com"><div className="dark:text-gray-300 text-sm text-gray-700 transition-colors duration-300 hover:text-gray-400 focus:text-white dark:hover:text-pink-600">Forum</div></a>
            </li>
            <li>
              <a className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/p/contact"><div className="dark:text-gray-300 text-sm text-gray-700 transition-colors duration-300 hover:text-gray-400 focus:text-white dark:hover:text-pink-600">Contact</div></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;