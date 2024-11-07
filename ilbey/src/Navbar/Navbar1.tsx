const Navbar1 = ({ isVisible }) => {
  return (
<div className={`navbar1 ${!isVisible ? "navbar1-hidden" : ""}`}>
    <div className="flex  items-center justify-between border-solid border-2 border-indigo-600 bg-[#f5f1ef] px-4 h-11">
      <div className="flex space-x-2">
        <a href="" className="text-black no-underline">
          1064 104th Street Naperville, Illinois 60564
        </a>
        <span>|</span>
        <p>Online appointments available</p>
      </div>
      <div className="flex items-center space-x-2 h-8">
        <a href="" className="flex items-center text-black no-underline">
          Client Portal
          <img
            src="https://cdn.prod.website-files.com/61dfd39227e690bdaa36e644/61e7c6f170f1c321f36a4e71_clarity_upload-line.svg"
            loading="eager"
            alt="Upload icon"
            className="ml-1 w-5 h-5"
          />
        </a>
      </div>
    </div></div>
  );
};

export default Navbar1;
