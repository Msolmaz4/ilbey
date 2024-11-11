import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";
import image4 from "../assets/4.jpg";
import image5 from "../assets/5.webp";

const Tax2 = () => {
  // Kart bilgilerini içeren bir dizi tanımlıyoruz
  const cards = [
    {
      id: 1,
      title: "Income Tax Preparation",
      description: "With up-to-date knowledge of tax policy, we’ll make sure your finances are compliant and save you money in the process.",
      imgSrc: image1,
    },
    {
      id: 2,
      title: "Card 2 Title",
      description: "Description for card 2.",
      imgSrc: image2,
    },
    {
      id: 3,
      title: "Card 3 Title",
      description: "Description for card 3.",
      imgSrc: image3,
    },
    {
      id: 4,
      title: "Card 4 Title",
      description: "Description for card 4.",
      imgSrc: image4,
    },
    {
      id: 5,
      title: "Card 5 Title",
      description: "Description for card 5.",
      imgSrc: image5,
    },
    {
      id: 6,
      title: "Card 6 Title",
      description: "Description for card 6.",
      imgSrc: "1.jpg",
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 p-4">
        {/* Kartları map ile render ediyoruz */}
        {cards.map((card) => (
          <div
            key={card.id}
            className="group w-[285.11px] h-[499.3px] border-2 border-red-500 overflow-hidden relative transition-all duration-35"
          >
            <img
              src={card?.imgSrc}
              alt={card.title}
              className="w-full h-1/2 object-cover transform transition-transform duration-300 hover:scale-110"
            />
            <div className="p-2">
              <div
                className="flex items-center font-bold text-lg text-[#003574] group-hover:text-[#c4c4c4] transition-colors duration-75"
                style={{ fontFamily: "'Playfair Display', sans-serif" }}
              >
                {card.title}
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="#938179"
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
              <div className="text-sm text-gray-600 mt-1">{card.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tax2;
