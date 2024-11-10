import image from "../assets/1.jpg";
import Button from "../Button/Button";


const Home = () => {
  return (
    <div className="derleme">
      <img src={image} alt="" className="derleme1" />
      <div className="">
        <div>
          {" "}
          <p className="text-7xl">Chicago-Based</p>{" "}
          <p className="text-7xl">CPA Firm</p>{" "}
        </div>
        <div>
          {" "}
          <p className="text-2xl w-[50rem] leading-relaxed">
            From bookkeeping and reporting to taxes and accounting, your
            finances are in good hands with Lewis.cpa. Our full-service
            certified public accounting firm takes care of everything, so you
            won’t have to.
          </p>
        </div>
        <Button text="Talk to Your CPA"/>
        
      </div>
      

    </div>
  );
};

export default Home;
