const WhatsAppButton = () => {
  // 🔒 TEMPORARILY DISABLED
  // Reason: WhatsApp number not finalized yet
  // To enable later:
  // 1. Remove `return null`
  // 2. Uncomment the JSX below
  // 3. Update phone number

  return null;

  /*
  const phoneNumber = "919035920555";
  const message = encodeURIComponent("Hi, I’m interested in your services");

  return (
    <div className="fixed bottom-0 right-0 m-3 md:m-4 z-50">
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          width="24"
          height="24"
        >
          <path
            d="M1.45825 62.1766L5.7533 46.4939C3.10353 41.9042 1.71007 36.6969 1.71174 31.3639C1.71869 14.6772 15.2993 1.10144 31.9856 1.10144C48.6711 1.10144 62.2595 14.6772 62.2595 31.3876C62.2595 48.0747 48.6711 61.6516 31.9868 61.6516C26.9069 61.65 21.9286 60.3782 17.507 57.9684L1.45825 62.1766Z"
            fill="#25D366"
          />
        </svg>

        <span className="hidden md:inline-block text-white font-medium text-sm ml-2">
          Chat with us
        </span>
      </a>
    </div>
  );
  */
};

export default WhatsAppButton;
