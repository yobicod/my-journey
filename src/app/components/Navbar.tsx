import Link from "next/link";

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
      menu: "About me",
    },
    {
      id: 3,
      menu: "Portfolio",
    },
    {
      id: 4,
      menu: "Services",
    },
    {
      id: 5,
      menu: "Experience",
    },
  ];
  return (
    <div className='w-screen h-[64px] mx-auto flex'>
      <div className='w-2/12 flex justify-center items-center border-2'>
        <h1>logo</h1>
      </div>
      <div className='w-10/12 flex justify-evenly items-center border-2'>
        {navMenu.map((el) => {
          return (
            <Link href={""} key={el.id}>
              {el.menu}
            </Link>
          );
        })}
        <button>Hire me</button>
      </div>
    </div>
  );
};

export default Navbar;
