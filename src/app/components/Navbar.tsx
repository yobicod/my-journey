"use client";
import Link from "next/link";
import { STYLE } from "../constants/style";

const Navbar = () => {
  interface INavMenu {
    id: number;
    menu: string;
    path: string;
  }
  const navMenu: INavMenu[] = [
    {
      id: 1,
      menu: "Home",
      path: "/",
    },
    {
      id: 2,
      menu: "About",
      path: "/about",
    },
    {
      id: 3,
      menu: "Experiences",
      path: "/experience",
    },
    {
      id: 4,
      menu: "Services",
      path: "/services",
    },
  ];

  return (
    <div className='container flex justify-center items-center'>
      <div
        className='w-[388px] h-[47px] flex justify-around items-center rounded-full p-1 mt-24 fixed shadow-lg scale-50 md:scale-100'
        style={{ zIndex: 100 }}
      >
        {navMenu.map((el) => {
          return (
            <Link
              href={el.path.toLowerCase()}
              key={el.id}
              className={`text-xs`}
              style={{ color: STYLE.navText }}
            >
              {el.menu}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
