import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-full h-[63rem]">
      <div className="relative w-full h-full">
        <Image
          src="/background.jpg"
          layout="fill"
          objectFit="cover"
          alt="Picture of the author"
          className="w-full h-full"
        />
        <div className="absolute top-1/2 -right-48 transform -translate-x-1/2 -translate-y-1/2 bg-[#FFF3E3] w-[34rem] rounded-lg p-16">
          <h6 className="font-bold">New Arrival</h6>
          <h3 className="text-[2.5rem] font-extrabold text-[#B88E2F] mt-4">
            Discover Our <br /> New Collection
          </h3>
          <p className="mt-4 leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            dolore
          </p>
          <button className="mt-6 bg-[#B88E2F] text-white py-2 px-12 rounded-md hover:bg-[#9f7c25] transition-all">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
}
