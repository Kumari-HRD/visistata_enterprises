const WhatsAppButton = () => {
  // 🔒 TEMPORARILY DISABLED
  // When you get a new WhatsApp number:
  // 1. Remove `return null`
  // 2. Uncomment the code below

  return null;

  /*
  const phoneNumber = "919035920555";
  const message = encodeURIComponent("Hi, I’m interested in your services");

  return (
    <div className="fixed bottom-0 right-0 m-3 md:m-4 z-5">
      <a
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        title="Chat with us on WhatsApp"
        className="
          flex align-items-center justify-content-center
          border-circle md:border-round
          shadow-4
          transition-all transition-duration-300
          no-underline
        "
        style={{
          backgroundColor: "#25D366",
          height: "3rem",
          minWidth: "3rem",
          padding: "0 0.75rem",
        }}
      >
        {/* WhatsApp Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          width="24"
          height="24"
        >
          <defs>
            <linearGradient
              id="whatsapp-gradient"
              x1="31.8589"
              y1="62.1766"
              x2="31.8589"
              y2="1.10154"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#20B038" />
              <stop offset="1" stopColor="#60D66A" />
            </linearGradient>

            <clipPath id="whatsapp-clip">
              <rect width="64" height="64" fill="white" />
            </clipPath>
          </defs>

          <g clipPath="url(#whatsapp-clip)">
            <path
              d="M1.45825 62.1766L5.7533 46.4939C3.10353 41.9042 1.71007 36.6969 1.71174 31.3639C1.71869 14.6772 15.2993 1.10144 31.9856 1.10144C48.6711 1.10144 62.2595 14.6772 62.2595 31.3876C62.2595 48.0747 48.6711 61.6516 31.9868 61.6516C26.9069 61.65 21.9286 60.3782 17.507 57.9684L1.45825 62.1766Z"
              fill="url(#whatsapp-gradient)"
            />
            <path
              fill="white"
              fillRule="evenodd"
              d="M24.1532 18.2486C23.5663 16.9437 22.9483 16.9176 22.3899 16.8947C20.3659 16.8764 18.799 17.8568 18.0806 18.6409C16.0562 20.5363 16.0562 24.3914 16.0562 24.3914C16.0562 28.2468 18.8643 31.9721 19.2557 32.4953C24.6764 41.1818 32.6408 44.3225 39.2599 46.9327C43.4803 46.1523 46.6794 44.3878 47.3325 42.558C47.9855 40.7287 47.9855 39.1606 47.7896 38.8328C46.2876 37.5267 41.6517 35.6308 40.9334 35.3696C39.1701 35.7622 38.6477 36.5459 36.6897 38.8328C35.7755 39.4217 34.2081 38.6369 31.6845 37.8103C26.3613 33.0642 24.3315 29.7149 24.3315 29.7149C23.8744 28.9312 24.6756 28.1161 25.8511 26.7439C26.3727 25.9598 26.7645 24.4566 26.5686 24.0647C26.3727 23.6729 24.8499 19.798 24.1532 18.2486Z"
              clipRule="evenodd"
            />
          </g>
        </svg>

        {/* Desktop Text */}
        <span className="hidden md:inline-block text-white font-medium text-sm ml-2 white-space-nowrap">
          Chat with us
        </span>
      </a>
    </div>
  );
  */
};

export default WhatsAppButton;
