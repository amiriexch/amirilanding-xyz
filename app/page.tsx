import Image from "next/image";

export default function Home() {
  // WhatsApp number and default message
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
  const defaultMessage =
    process.env.NEXT_PUBLIC_DEFAULT_MESSAGE ||
    "Hello, I'd like to get my ID now.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    defaultMessage
  )}`;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black text-white">
      {/* Logo Section */}
      <div className="w-full max-w-5xl flex flex-col items-center justify-center pt-12 px-4">
        <div className="relative mx-auto mb-6">
          <Image
            src="/logo.png"
            alt="Yatribook.com Logo"
            className="object-contain"
            width={200}
            height={200}
            quality={100}
            priority
          />
        </div>

        {/* WhatsApp CTA */}
        <div className="flex flex-col items-center justify-center mt-4 mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-[#f0c14b] mb-2 text-center">
            GET YOUR ID NOW ON WHATSAPP<span className="ml-1">👇</span>
          </h2>
          <p className="text-[#f0c14b] text-3xl mb-6 animate-bounce">👇👇</p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:scale-105 duration-200 ease-in gap-x-2  justify-center bg-[#25D366] text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all"
          >
            <svg
              height="20px"
              width="20px"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 58 58"
              xmlSpace="preserve"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth={0} />
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g id="SVGRepo_iconCarrier">
                <g>
                  <path
                    style={{
                      fill: "#2CB742",
                    }}
                    d="M0,58l4.988-14.963C2.457,38.78,1,33.812,1,28.5C1,12.76,13.76,0,29.5,0S58,12.76,58,28.5 S45.24,57,29.5,57c-4.789,0-9.299-1.187-13.26-3.273L0,58z"
                  />
                  <path
                    style={{
                      fill: "#FFFFFF",
                    }}
                    d="M47.683,37.985c-1.316-2.487-6.169-5.331-6.169-5.331c-1.098-0.626-2.423-0.696-3.049,0.42 c0,0-1.577,1.891-1.978,2.163c-1.832,1.241-3.529,1.193-5.242-0.52l-3.981-3.981l-3.981-3.981c-1.713-1.713-1.761-3.41-0.52-5.242 c0.272-0.401,2.163-1.978,2.163-1.978c1.116-0.627,1.046-1.951,0.42-3.049c0,0-2.844-4.853-5.331-6.169 c-1.058-0.56-2.357-0.364-3.203,0.482l-1.758,1.758c-5.577,5.577-2.831,11.873,2.746,17.45l5.097,5.097l5.097,5.097 c5.577,5.577,11.873,8.323,17.45,2.746l1.758-1.758C48.048,40.341,48.243,39.042,47.683,37.985z"
                  />
                </g>
              </g>
            </svg>
            Whatsapp Now
            <svg
              height="20px"
              width="20px"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 58 58"
              xmlSpace="preserve"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth={0} />
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g id="SVGRepo_iconCarrier">
                <g>
                  <path
                    style={{
                      fill: "#2CB742",
                    }}
                    d="M0,58l4.988-14.963C2.457,38.78,1,33.812,1,28.5C1,12.76,13.76,0,29.5,0S58,12.76,58,28.5 S45.24,57,29.5,57c-4.789,0-9.299-1.187-13.26-3.273L0,58z"
                  />
                  <path
                    style={{
                      fill: "#FFFFFF",
                    }}
                    d="M47.683,37.985c-1.316-2.487-6.169-5.331-6.169-5.331c-1.098-0.626-2.423-0.696-3.049,0.42 c0,0-1.577,1.891-1.978,2.163c-1.832,1.241-3.529,1.193-5.242-0.52l-3.981-3.981l-3.981-3.981c-1.713-1.713-1.761-3.41-0.52-5.242 c0.272-0.401,2.163-1.978,2.163-1.978c1.116-0.627,1.046-1.951,0.42-3.049c0,0-2.844-4.853-5.331-6.169 c-1.058-0.56-2.357-0.364-3.203,0.482l-1.758,1.758c-5.577,5.577-2.831,11.873,2.746,17.45l5.097,5.097l5.097,5.097 c5.577,5.577,11.873,8.323,17.45,2.746l1.758-1.758C48.048,40.341,48.243,39.042,47.683,37.985z"
                  />
                </g>
              </g>
            </svg>
          </a>
        </div>
      </div>

      {/* Main Banner */}
      <div className="w-full max-w-6xl md:max-w-4xl px-4 flex flex-col items-center justify-center mb-8">
        <div className="relative w-full h-full">
          <Image
            src={process.env.NEXT_PUBLIC_POSTER_URL || ""}
            alt="Promotional Banner"
            className="object-contain h-full w-full"
            width={800}
            height={800}
            quality={100}
            priority
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full mt-auto py-6 px-4 border-t border-gray-800">
        <div className="max-w-5xl mx-auto text-center text-sm text-gray-400">
          <p className="mb-2">
            18+ | Gamble Responsibly. This game involves financial risk and may
            be addictive.
          </p>
          <p className="mb-2">
            Please gamble responsibly and only with money you can afford to
            lose.
          </p>
          <p className="mb-4">
            If you or someone you know has a gambling problem, please seek help.
          </p>

          <p className="mt-6 text-[#f0c14b]">
            © {new Date().getFullYear()} AmiriExchange.com. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
