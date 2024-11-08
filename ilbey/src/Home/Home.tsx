import image from "../assets/1.jpg";

const Home = () => {
  return (
    <div className="derleme">
      Home
      <img src={image} alt="" className="derleme1" />
      <p>Chicago-Based CPA Firm</p>
      <p>
        From bookkeeping and reporting to taxes and accounting, your finances
        are in good hands with Lewis.cpa. Our full-service certified public
        accounting firm takes care of everything, so you won’t have to.
      </p>
    </div>
  );
};

export default Home;
