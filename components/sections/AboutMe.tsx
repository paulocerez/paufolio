import Image from "next/image";

export default function AboutMe() {
  return (
    <div className="flex flex-col text-left space-y-4">
      <div className="flex flex-row space-x-4 items-center">
        <Image
          src="/profile-image.png"
          alt="Paulo Ramirez"
          className="rounded-full w-[32px] h-[32px] object-cover"
          width={32}
          height={32}
        />
        <h1 className="text-2xl font-semibold text-gray-700">Paulo Ramirez</h1>
      </div>
      <p className="text-lg text-gray-400">
        Software Engineer and Music enthusiast based in Berlin, Germany.
      </p>
    </div>
  );
}
