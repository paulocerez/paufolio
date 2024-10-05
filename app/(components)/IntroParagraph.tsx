import Link from "next/link";
import Loom from "./Loom";
import Socials from "./Socials";
import Companies from "./Companies";

export default function IntroParagraph() {
  return (
    <div className="flex flex-col mx-auto lg:text-center space-y-12 max-w-3xl">
      <div className="flex justify-center items-center sm:w-full">
        <Loom />
      </div>
      <div className="animate-slide-in-bottom ">
        <div className="flex flex-col sm:flex-row items-start md:items-center gap-8">
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl text-left">
            This is my personal website. <br></br> Feel free to explore. 🤓
          </h1>
          <Companies />
        </div>
      </div>

      <p className="mt-6 text-lg text-justify leading-8 text-gray-600">
        I&apos;m currently working as a Software Engineer at Ivy and studying
        Software Engineering at CODE University 💻 in Berlin. My focus lies on
        Web Development, Data Analyses, and Productivity. In the past I worked
        in technical and business positions in the space of mobility, renewable
        energies and consumer brands. Currently getting my hands dirty in the
        fintech space.
      </p>
      <div className="flex flex-col space-x-2 items-center justify-center my-6 text-gray-600 space-y-4">
        <div className="p-4">
          Check out my experience @LANCH{" "}
          <Link
            href="https://www.lanch.com/entrepreneur-program"
            className="underline hover:text-gray-300"
          >
            here
          </Link>
          .
        </div>
        <Socials />
      </div>
    </div>
  );
}
