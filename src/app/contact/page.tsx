import Image from "next/image";

export default function Contact() {
    return (
      <div>
        {/* Background Section with Image and Opacity */}
        <div 
          className="relative bg-cover bg-center py-16" 
          style={{ backgroundImage: 'url("/bg.jpg")' }} 
        >
          <div className="absolute inset-0 bg-slate-300 opacity-50"></div> 
          <div className="relative max-w-7xl mx-auto px-4 text-center text-black">
            {/* Logo */}
            <div className="mb-4">
              <Image src="/logo.png" alt="Logo" className="mx-auto w-24" width={96} height={96} /> 
            </div>
            
           
            
            <h1 className="text-4xl font-semibold mt-4">Contact</h1>

            <p className="text-sm">Home {'>'} Contact</p>
          </div>
        </div>
        <h2 className="text-2xl text-black font-semibold mt-16 mb-4 text-center">Get in touch</h2>
            <h3 className="text-gray-400 text-center">
              For More Information About Our Product & Services. Please Feel Free To Drop Us
              <br /> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
            </h3>
        {/* Contact Information Section */}
        <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8">
          {/* Contact Details */}
          <div>
           
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold">Address</h3>
                <p>236 5th SE Avenue, New <br/>York NY10000,United<br/> States</p>
              </div>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p>Mobile: +(84)546-6789</p>
                <p>Hotline: +(84)456-6789</p>
              </div>
              <div>
                <h3 className="font-semibold">Working Time</h3>
                <p>Monday-Friday: 9:00 - 22:00</p>
                <p>Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            
            <form className="bg-gray-50 p-6  rounded-lg space-y-4">
            <h3>Your Name</h3>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-md"
              />
              <h3>Email Address</h3>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-md "
              />
              <h3>Subject</h3>
              <input
                type="text"
                placeholder="This is an optional"
                className="w-full p-3 border border-gray-300 rounded-md "
              />
              <h3>Message</h3>
              <textarea
                placeholder="Hi I like to ask about"
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-md"
              ></textarea>
              <button
                type="submit"
                className="bg-yellow-700 text-white py-2 px-24 rounded hover:bg-yellow-500"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  