import Image from "next/image";
import { ModeToggle } from "./ui/theme-button";
import Link from "next/link";
import { Navigation } from "@/constants";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className='bg-white border-gray-200 dark:bg-black px-5'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <Link
          href='/'
          className='flex items-center space-x-3 rtl:space-x-reverse'
        >
          <Image
            src='/solanaLogoMark.svg'
            className='h-8'
            alt='Flowbite Logo'
            width={50}
            height={10}
          />
          <span className='self-center text-2xl uppercase font-bold whitespace-nowrap dark:text-white'>
            Solana
          </span>
        </Link>
        <div className='flex md:order-2 space-x-3 gap-4 md:space-x-0 rtl:space-x-reverse'>
          <ModeToggle />
          <Button
            type='button'
            className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
          >
            Connect Wallet
          </Button>
        </div>
        <div
          className='items-center justify-between hidden w-full lg:flex md:w-auto md:order-1'
          id='navbar-cta'
        >
          <ul className='uppercase flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-black'>
            {Navigation.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                className='block py-2 px-3 md:p-0 text-black rounded-sm md:bg-transparent dark:text-white cursor-pointer hover:text-purple-700 hover:dark:text-purple-700'
              >
                {link.title}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar

