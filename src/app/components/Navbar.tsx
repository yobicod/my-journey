"use client";
import Link from "next/link";
import { STYLE } from "../constants/style";

const Navbar = () => {
  interface INavMenu {
    id: number;
    menu: string;
  }
  const navMenu: INavMenu[] = [
    {
      id: 1,
      menu: "Home",
    },
    {
      id: 2,
      menu: "About",
    },
    {
      id: 3,
      menu: "Experiences",
    },
    {
      id: 4,
      menu: "Services",
    },
  ];

  return (
    <div className='container flex justify-center items-center'>
      <div className='w-[388px] h-[47px] flex justify-around items-center rounded-full p-1 mt-24 fixed shadow-lg '>
        {navMenu.map((el) => {
          return (
            <Link
              href={""}
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
