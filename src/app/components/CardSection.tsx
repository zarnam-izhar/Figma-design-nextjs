import React from 'react';
import Image from 'next/image';

const CardSection: React.FC = () => {

    return (
      <div className="container mx-auto p-4 mt-20">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold">Browse The Page</h1>
          <p className="mt-2 text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </div>

      <div className="flex space-x-4 justify-center ">
        {/* Dining Card */}
        <div className="w-[500px] h-[800px] bg-white rounded-lg relative">
          <div className="w-full h-[60%] relative">
            <Image
              src="/dini.png"
              alt="Dining"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          <div className="flex items-center justify-center h-[13%]">
            <span className="text-2xl font-semibold">Dining</span>
          </div>
        </div>

        {/* Living Card */}
        <div className="w-[500px] h-[800px] bg-white rounded-lg relative">
          <div className="w-full h-[60%] relative">
            <Image
              src="/bed.png"
              alt="Living"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          <div className="flex items-center justify-center h-[13%]">
            <span className="text-2xl font-semibold">Living</span>
          </div>
        </div>

        {/* Bedroom Card */}
        <div className="w-[500px] h-[800px] bg-white rounded-lg relative">
          <div className="w-full h-[60%] relative">
            <Image
              src="/brown-bed.png"
              alt="Bedroom"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          <div className="flex items-center justify-center h-[13%]">
            <span className="text-2xl font-semibold">Bedroom</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
