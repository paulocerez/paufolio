import Image from "next/image";

const logos = [
  "/cardino-logo.png",
  "/enpal-logo.png",
  "/lanch-logo.png",
  "/code-logo.png",
  "/octopus-logo.png",
];

export default function Logos() {
  return (
    <div className="flex gap-2">
      {logos.map((logo, index) => (
        <Image
          key={index}
          alt="logo"
          src={logos[index]}
          width={100}
          height={500}
        />
      ))}
    </div>
  );
}
