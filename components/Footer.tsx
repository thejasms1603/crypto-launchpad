import Image from "next/image";
import Link from "next/link";
import { FooterDock } from "./FooterDock";

const Footer = () => {
  return (
    <FooterDock />
    // <footer className='bg-white rounded-lg shadow-sm dark:bg-black m-4'>
    //   <div className='w-full max-w-screen-xl mx-auto p-4 md:py-8'>
    //     <div className='sm:flex sm:items-center sm:justify-between'>
    //       <Link
    //         href='/'
    //         className='flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse'
    //       >
    //         <Image
    //           src='/solanaLogoMark.svg'
    //           className='h-8 w-auto'
    //           alt='Solana Logo'
    //           width={50}
    //           height={50}
    //         />
    //         <span className='self-center text-2xl uppercase font-bold whitespace-nowrap dark:text-white'>
    //           Solana
    //         </span>
    //       </Link>

    //     </div>
    //     <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
    //     <span className='block text-sm text-gray-600 dark:text-gray-300 sm:text-center'>
    //       © 2023{" "}
    //       <Link href='/' className='hover:underline'>
    //         Thejas™
    //       </Link>
    //       . All Rights Reserved.
    //     </span>
    //   </div>
    // </footer>
  );
};

export default Footer;
