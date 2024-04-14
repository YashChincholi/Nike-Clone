import { shoe8 } from "../assets/images";
import { Button } from "../components/index";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between max-lg:flex-col items-center gap-10 w-full max-container "
    >
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We provide you
          <span className="text-coral-red "> Super</span>{" "}
          <span className="text-coral-red ">Quality</span> shoes
        </h2>
        <p className="info-text lg:max-w-lg mt-4 ">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="info-text lg:max-w-lg mt-6">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8"
          height={522}
          width={570}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
