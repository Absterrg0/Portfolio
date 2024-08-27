import Image from "next/image";
import NavBar from "@/components/NavBar";
import HomeComp from "@/components/Home";
import AboutMe from "@/components/About";
import Project from "@/components/Project";
import Contact from "@/components/Contact";
export default function Home() {
  return (
      <div className="">
        <NavBar></NavBar>
        <HomeComp></HomeComp>
        <AboutMe></AboutMe>
        <Project></Project>
        <Contact></Contact>
      </div>
  );
}
