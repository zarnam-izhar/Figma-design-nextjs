import Image from "next/image";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function InspirationSection() {
  return (
    <div className="flex flex-col lg:flex-row bg-[#FCF8F3] min-h-[70vh]">
      {/* Left Text Section */}
      <div className="lg:w-1/3 bg-[#FCF8F3] p-6 flex flex-col justify-center">
        <h4 className="font-bold text-3xl mb-3 text-[#000000]">
          50+ Beautiful Rooms Inspiration
        </h4>
        <p className="text-gray-700 text-sm mb-4">
          Our designer already made a lot of beautiful prototypes of rooms that inspire you.
        </p>
        <button className="bg-[#B88E2F] text-white px-6 py-2 w-36 hover:bg-[#A77B28] transition text-sm">
          Explore More
        </button>
      </div>

      {/* Right Tabs/Carousel Section */}
      <div className="lg:w-2/3 flex flex-col justify-between p-4">
        <Tabs defaultValue="slide1" className="w-full h-full">
          {/* Image Content */}
          <div className="flex-1 flex items-center justify-center space-x-4">
            <TabsContent value="slide1" className="w-full max-w-[400px]">
              <div className="w-full h-[500px] overflow-hidden">
                <Image
                  src="/pic1.png"
                  width={400}
                  height={250}
                  alt="Picture of a peaceful room"
                  className="w-full h-full object-cover"
                />
              </div>
            </TabsContent>
            <TabsContent value="slide2" className="w-full max-w-[400px]">
              <div className="w-full h-[500px] overflow-hidden">
                <Image
                  src="/pic2.png"
                  width={400}
                  height={250}
                  alt="Picture of a side room"
                  className="w-full h-full object-cover"
                />
              </div>
            </TabsContent>
            <TabsContent value="slide3" className="w-full max-w-[400px]">
              <div className="w-full h-[500px] overflow-hidden">
                <Image
                  src="/pic3.png"
                  width={400}
                  height={250}
                  alt="Picture of another room"
                  className="w-full h-full object-cover"
                />
              </div>
            </TabsContent>
          </div>

          {/* Pagination Dots */}
          <TabsList className="flex justify-center gap-2 mt-4">
            <TabsTrigger
              value="slide1"
              className="w-3 h-3 rounded-full bg-gray-400 hover:bg-[#B88E2F] transition"
            />
            <TabsTrigger
              value="slide2"
              className="w-3 h-3 rounded-full bg-gray-400 hover:bg-[#B88E2F] transition"
            />
            <TabsTrigger
              value="slide3"
              className="w-3 h-3 rounded-full bg-gray-400 hover:bg-[#B88E2F] transition"
            />
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
}
