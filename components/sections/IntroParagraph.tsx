import Link from "next/link";
import Loom from "./Loom";
import Socials from "./Socials";
import Companies from "./Companies";

export default function IntroParagraph() {
  return (
    <div className="flex flex-col space-y-6">
      <Loom />
      <div className="flex flex-col items-center space-y-4 text-gray-600">
        <div className="p-2 sm:p-4 text-center">
          Check out my experience at LANCH{" "}
          <Link
            href="https://www.lanch.com/entrepreneur-program"
            className="underline hover:text-gray-300"
          >
            here
          </Link>
          .
        </div>
      </div>
    </div>
  );
}
