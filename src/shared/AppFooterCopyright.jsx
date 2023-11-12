function AppFooterCopyright() {
  return (
    <div className="font-general-regular flex justify-center items-center text-center">
      <div className="text-xs text-ternary-dark">
        &copy; {new Date().getFullYear()}
        {/* <a
          href=""
          target="__blank"
          className="hover:underline hover:text-indigo-600 ml-1 duration-500"
        >
          Benjamin mizrany
        </a> */}
         . This portfolio is a work in progress
      </div>
    </div>
  );
}

export default AppFooterCopyright;
