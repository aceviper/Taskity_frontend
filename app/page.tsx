import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="relative isolate overflow-hidden bg-gray-800 px-6 py-16 shadow-2xl rounded-lg sm:px-16 md:py-24 lg:flex lg:gap-x-20 lg:px-24">
        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          aria-hidden="true"
        >
          <circle cx="512" cy="512" r="512" fill="url(#gradient)" fillOpacity="0.7" />
          <defs>
            <radialGradient id="gradient">
              <stop stopColor="#7775D6" />
              <stop offset="1" stopColor="#E935C1" />
            </radialGradient>
          </defs>
        </svg>
        <div className="text-center lg:text-left lg:py-16 max-w-md mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Boost your productivity. Start using our app today.
          </h2>
          <p className="mt-6 text-lg text-gray-300">
            Transform your workflow with our easy-to-use application. Get started now and unlock your potential.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="/login"
              className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-200"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
