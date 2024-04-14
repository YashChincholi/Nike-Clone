import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import { Button } from "../components/index";

const SpecialOffer = () => {
  return (
    <section className="flex items-center justify-wrap max-xl:flex-col-reverse max-container gap-10">
      <div className="flex-1">
        <img
          src={offer}
          alt="offer-image"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red "> Special</span> Offer
        </h2>
        <p className="info-text lg:max-w-lg mt-4 break-words">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="info-text lg:max-w-lg mt-6 break-words">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.{" "}
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button
            label="Shop Now"
            iconURL={arrowRight}
            bgColor="bg-coral-red"
            borderColor="border-coral-red"
            textColor="text-white"
          />
          <Button
            label="Learn more"
            bgColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
