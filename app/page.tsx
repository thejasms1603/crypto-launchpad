import { Blockchain } from "@/components/Blockchain";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import  Hero  from "@/components/Hero";
import Queries from "@/components/Queries";
export default function Home() {
  return (
    <>
      <Hero />
      <Grid />
      <Blockchain/>
      <Queries/>
      <Footer/>
    </>
  );
}