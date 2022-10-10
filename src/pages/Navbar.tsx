const Navbar = () => {
  return (
    <nav className="py-4 flex justify-between">
      <input
        className="bg-gray-800 border border-gray-700 px-3 h-9 rounded text-sm outline-none"
        placeholder="Search anime"
        type="text"
      />
      <div>
        <button className="text-sm px-3 py-1.5 mr-2">Sign In</button>
        <button className="text-sm px-3 py-1.5 bg-gray-800 rounded ">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
