import Link from "next/link";
import Loom from "./Loom";
import Socials from "./Socials";

export default function IntroParagraph() {
  return (
    <div className="flex flex-col mx-auto lg:text-center space-y-12 max-w-3xl">
      <div className="flex justify-center items-center sm:w-full">
        <Loom />
      </div>
      <div>
        <h2 className="text-xl font-semibold leading-7 text-indigo-600">
          Welcome my friend! 👋🏼
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          This is my personal website. <br></br> Feel free to explore. 🤓
        </p>
      </div>

      <p className="mt-6 text-lg text-justify leading-8 text-gray-600">
        I&apos;m currently working in Business Development @Octopus Energy 🐙
        and studying Software Engineering at CODE University 💻 (based in
        Berlin). My focus lies on Web Development, Data Analyses, and People
        Operations. In the past I worked as a Technical Entrepreneur in
        Residence @LANCH, Product Manager @Cardino (VC-backed Berlin-based
        mobility startup), and as a Recruiter @Enpal (focussing on Biz Dev in TA
        contexts).
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
