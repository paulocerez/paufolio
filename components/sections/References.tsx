import Image from "next/image";

export default function References() {
  return (
    <div className="flex flex-col space-y-8">
      <h2 className="text-xl sm:text-2xl font-semibold text-center">
        What others say.
      </h2>
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="w-full sm:w-1/2 max-w-xs">
          <Image
            src="/program.png"
            width={500}
            height={500}
            alt="EiR Page"
            className="w-full h-auto transform sm:-rotate-12"
          />
        </div>
        <div className="w-full sm:w-1/2 max-w-xs">
          <iframe
            src="https://www.linkedin.com/embed/feed/update/urn:li:share:7171072487298965504"
            height="340"
            width="100%"
            title="Eingebetteter Beitrag"
            className="w-full transform sm:rotate-12"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
