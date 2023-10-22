export function AppFooterCopyright() {
  return (
    <div className="font-general-regular flex justify-center items-center text-center">
      <div className="text-xs text-ternary-dark dark:text-ternary-light">
        &copy; {new Date().getFullYear()}
        <a
          href=""
          target="__blank"
          className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
        >
          Benjamin mizrany
        </a>
        . All rights reserved
      </div>
    </div>
  );
}

