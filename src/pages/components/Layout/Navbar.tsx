import { useRouter } from "next/router";
import { FormEventHandler, useState } from "react";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    router.push(`/search?q=${search}`);
  };

  return (
    <nav className="py-4 flex justify-between">
      <div className="text-2xl font-bold">AniNext</div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="bg-gray-800 border border-gray-700 px-3 h-9 mr-4 rounded font-sm outline-none"
          placeholder="Search anime"
          type="text"
        />
      </form>

      <div className="flex flex-nowrap whitespace-nowrap">
        <button className="text-sm px-3 py-1.5 mr-2">Sign In</button>
        <button className="text-sm px-3 py-1.5 bg-gray-800 rounded ">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
