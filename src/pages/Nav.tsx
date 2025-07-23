import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

export const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <div className="flex justify-between items-center">
        <div>
          <Link to={"/"}>
            <h1 className="text-2xl md:text-3xl font-bold">
              <span className="text-indigo-500">Tech</span>Spark
            </h1>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <div className="flex gap-8 text-base lg:text-lg font-semibold text-gray-600">
            <Link to={"#"} className="hover:text-gray-700">
              Home
            </Link>
            <Link to={"#"} className="hover:text-gray-700">
              Features
            </Link>
            <Link to={"#"} className="hover:text-gray-700">
              Pricing
            </Link>
            <Link to={"#"} className="hover:text-gray-700">
              Contact
            </Link>
          </div>
          <Button className="bg-indigo-500 text-base lg:text-lg px-6 py-2 hover:bg-indigo-600">
            Get Started
          </Button>
        </div>

        <button
          className="md:hidden text-black text-2xl"
          onClick={() => setMenu(!menu)}
          aria-label="Toggle menu"
        >
          {menu ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {menu && (
        <div className="md:hidden mt-4 space-y-4 bg-white rounded-lg shadow-md p-4">
          <div className="flex flex-col gap-3 text-gray-600 text-base font-semibold">
            <Link to={"#"} className="hover:text-gray-700">
              Home
            </Link>
            <Link to={"#"} className="hover:text-gray-700">
              Features
            </Link>
            <Link to={"#"} className="hover:text-gray-700">
              Pricing
            </Link>
            <Link to={"#"} className="hover:text-gray-700">
              Contact
            </Link>
          </div>
          <Button className="w-full bg-indigo-500 text-base py-2 hover:bg-indigo-600">
            Get Started
          </Button>
        </div>
      )}
    </div>
  );
};
