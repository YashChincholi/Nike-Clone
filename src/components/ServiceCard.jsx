export const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
      <div className="h-11 w-11 bg-coral-red flex justify-center items-center rounded-full">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="font-bold leading-normal mt-5 font-palanquin text-3xl">{label}</h3>
      <p className="leading-normal mt-3 text-lg font-montserrat break-words text-slate-gray">{subtext}</p>
    </div>
  );
};
