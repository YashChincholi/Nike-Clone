import { Button } from "../components";

const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
    >
      <h3 className="font-palanquin leading-[68px] lg:max-w-md font-bold text-3xl text-center">
        Sign Up for
        <span className="text-coral-red"> Updates </span>& Newsletter
      </h3>
      <div className="max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 sm:border sm:border-slate-gray rounded-full p-2.5">
        <input type="text" placeholder="abc@xyz.com" className="input" />
        <div className="max-sm:justify-end flex max-sm:w-full items-center">
          <Button
            label="Sign Up"
            bgColor="bg-coral-red"
            borderColor="border-coral-red"
            textColor="text-white"
            fullWidth
          />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
