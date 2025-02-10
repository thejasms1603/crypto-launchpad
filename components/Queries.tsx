import Link from "next/link";
import { AccordionPage } from "./Accordion";

const Queries = () => {
  return (
    <section className='mt-6 flex'>
      <div className='flex flex-col md:flex-row justify-center items-center px-6 gap-10 w-full max-h-full py-10'>
        <div className='text-center md:text-left'>
          <h1 className='text-3xl capitalize font-semibold'>
            Have any doubts?
          </h1>
          <p>
            Feel free to open a ticket on{" "}
            <Link href='https://discord.com' className='text-blue-500'>
              Discord
            </Link>{" "}
            or send us a message on{" "}
            <Link href='https://telegram.org' className='text-blue-500'>
              Telegram
            </Link>
            .
          </p>
        </div>
        <AccordionPage />
      </div>
    </section>
  );
};

export default Queries;
