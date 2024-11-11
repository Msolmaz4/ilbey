import imagetwo from "../assets/ikili.jpg";
import { useEffect, useState, useRef } from "react";

const Drei = () => {
  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const rect = divRef.current.getBoundingClientRect();
      const isDivVisible = rect.top < window.innerHeight && rect.bottom >= 0;
      setIsVisible(isDivVisible);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // İlk render’da tetikle
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ background: "#f5f1ef" }}>
      <div className="relative">
        <img
          src={imagetwo}
          alt="Description of image"
          className="object-cover object-[50%_10%] w-full max-w-[1440px] h-[434px] mx-auto block"
        />
        <div
          ref={divRef}
          className={`drei absolute left-1/2 transform -translate-x-1/2 w-[704px] h-[409px] border-4 border-red-500 bg-white
            transition-transform duration-700 ease-out
            ${isVisible ? "translate-y-0 opacity-100" : "opacity-0"}
          `}
          style={{
            top: "calc(100% - 200px)",
            transform: isVisible ? "translateY(-115px) translateX(-50%)" : "translateY(400px) translateX(-50%)",
            opacity: isVisible ? 1 : 0,
          }}
        >
          {/* İçerik buraya gelecek */}
        </div>
      </div>
      <div style={{ width: "100%", height: "1500px" }}></div>
    </div>
  );
};

export default Drei;
