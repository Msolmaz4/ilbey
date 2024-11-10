interface IconText {
  src: string;
  header: string;
  text: string;
}

const iconText: IconText[] = [
  {
    src: "https://cdn.prod.website-files.com/61dfd39227e690bdaa36e644/61dfeb0a9ad5953a25da368f_benefits-icon-1.svg",
    header: "4000+ Satisfied Clients",
    text: "We are proud to have over 1,000+ businesses and 3,000+ individual clients, many of them located nationwide.",
  },
  {
    src: "https://cdn.prod.website-files.com/61dfd39227e690bdaa36e644/61dfeb0a714a4a4b2ceab508_benefits-icon-2.svg",
    header: "38 Years of Experience",
    text: "Since 1986, we’ve provided comprehensive tax and accounting solutions for individuals and businesses.",
  },
  {
    src: "https://cdn.prod.website-files.com/61dfd39227e690bdaa36e644/61f38fd24d4ff49dbae03d9d_Icons.svg",
    header: "52 States and Territories",
    text: "With our technology stack, we provide remote accounting services for you and your business, regardless the location.",
  },
];

const Icon: React.FC<IconText> = ({ header, src, text }) => {
  return (
    <div
      className="icon-container"
      style={{ height: "297.73px", width: "285.4px" }}
    >
      <img src={src} alt="" />
      <div
        className="flex items-center  bg-[#ffe1d180]  ml-[-54px] z-20"
        style={{ height: "80px", width: "280px" }}
      >
        <div className="ml-[50px]">{header} </div>
      </div>
      <div className="">{text} </div>
    </div>
  );
};

const IconGrid = () => {
  return (
    <div className="icon-grid">
      {iconText?.map((item, index) => (
        <Icon
          key={index}
          header={item.header}
          src={item.src}
          text={item.text}
        />
      ))}
    </div>
  );
};

export default IconGrid;
