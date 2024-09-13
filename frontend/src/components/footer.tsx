export const Footer = () => {
  return (
    <>
    <footer className="bg-gradient-to-r from-gray-100 to-gray-300 backdrop-blur-xl rounded-lg shadow m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3">
            <img
              src="./example.png"
              className="w-8 h-8 rounded-full border-2 backdrop-blur-xl"
              // alt="RDD Logo"
            />
            <span className="self-center text-2xl font-semibold text-gray-900 dark:text-white amaranth-regular-italic">
              RDD
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-700 dark:text-gray-300 sm:mb-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6 text-gray-700 dark:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6 text-gray-700 dark:text-gray-300">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6 text-gray-700 dark:text-gray-300">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-gray-700 dark:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-400 sm:mx-auto dark:border-gray-600 lg:my-8" />
        <span className="block text-sm text-gray-700 sm:text-center dark:text-gray-300">
          © 2023 <a href="#" className="hover:underline">Remote Desk Developer™</a>. All Rights Reserved.
        </span>
      </div>
    </footer>
    </>
  );
};
