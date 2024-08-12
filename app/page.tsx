import Image from "next/image";

export default function Home() {
  return (
   <div className="">
     <div className="h-screen w-full bg-black flex items-center justify-center">
      <div className="relative w-full h-[50rem] bg-black bg-dot-white/[0.2]">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-neutral-200">
              Langue<span className="text-[#f87315]">AI</span>
            </h1>
            <p className="text-neutral-400 mt-4">
              Langue AI: Connecting worlds together...
            </p>
            <div className="mt-7 sm:mt-12 mx-auto max-w-3xl relative">
              <div className="grid gap-4 md:grid-cols-4 grid-cols-1">
                <div className="relative z-10 flex flex-col space-x-3 border rounded-lg shadow-lg bg-neutral-900 border-neutral-700 shadow-gray-900/20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
}
