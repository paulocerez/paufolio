import Image from "next/image";

export default function References() {
  return (
    <div className="flex flex-col space-y-16 text-center">
      <h1 className="leading-8 text-gray-600">What others say.</h1>
      <div className="flex flex-col md:flex-row justify-center md:items-center">
        <Image
          src="/program.png"
          width={500}
          height={500}
          alt="EiR Page"
          className="md:block transform md:-rotate-12 md:-mr-20"
        />
        <iframe
          src="https://www.linkedin.com/embed/feed/update/urn:li:share:7171072487298965504"
          height="340"
          width="302"
          title="Eingebetteter Beitrag"
          className="md:block transform md:rotate-12 md:-ml-20"
        ></iframe>
      </div>
    </div>
  );
}
