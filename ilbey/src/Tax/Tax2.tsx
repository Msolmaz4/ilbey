import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";
import image4 from "../assets/4.jpg";
import image5 from "../assets/5.webp";

const Tax2 = () => {
  const cards = [
    {
      id: 1,
      title: "Income Tax Preparation",
      description: "With up-to-date knowledge of tax policy, we’ll make sure your finances are compliant and save you money in the process.",
      imgSrc: image1,
    },
    {
      id: 2,
      title: "Estate & Trust Tax",
      description: " To ensure the best results, we tailor our fiduciary and estate trust tax management services to your unique situation.",
      imgSrc: image2,
    },
    {
      id: 3,
      title: "Mergers & Acquisitions",
      description: "Our team has the knowledge and experience to help you tackle the complex challenges of mergers and acquisitions.",
      imgSrc: image3,
    },
    {
      id: 4,
      title: "Liquidations & Reorganization",
      description: "When reorganizing and restructuring become stressful and confusing, we’re here to help ease the burden and protect your assets.",
      imgSrc: image4,
    },
    {
      id: 5,
      title: "State & Local Tax",
      description: "We can assist you in navigating the often frustrating process of managing your state and local taxes.",
      imgSrc: image5,
    },
    {
      id: 6,
      title: "",
      description: "",
      
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 p-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className="group w-[285.11px] h-[499.3px]  overflow-hidden relative transition-all duration-35"
          >
            <div className="relative overflow-hidden w-full h-1/2">
              <img
                src={card.imgSrc}
                alt={card.title}
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-2">
              <div
                className="flex items-center font-bold text-[24px] leading-[160%] text-[#003574] group-hover:text-[#9c9897] transition-all duration-75 mr-2"
                style={{ fontFamily: "'Playfair Display', sans-serif" }}
              >
                {card.title}
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    className="fill-current group-hover:fill-[#9c9897]"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.04463 0.122039C9.20735 0.284757 9.20735 0.548576 9.04463 0.711295L0.711295 9.04463C0.548576 9.20735 0.284757 9.20735 0.122039 9.04463C-0.0406796 8.88191 -0.0406796 8.61809 0.122039 8.45537L8.45537 0.122039C8.61809 -0.0406796 8.88191 -0.0406796 9.04463 0.122039Z"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 0.416667C0 0.186548 0.186548 0 0.416667 0H8.75C8.98012 0 9.16667 0.186548 9.16667 0.416667V8.75C9.16667 8.98012 8.98012 9.16667 8.75 9.16667C8.51988 9.16667 8.33333 8.98012 8.33333 8.75V0.833333H0.416667C0.186548 0.833333 0 0.646785 0 0.416667Z"
                    ></path>
                  </svg>
                </span>
              </div>
              <div
                className="text-sm text-gray-600 mt-[15px]"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "16px",
                  lineHeight: "160%",
                }}
              >
                {card.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tax2;