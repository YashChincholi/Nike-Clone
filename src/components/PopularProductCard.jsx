import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt="popularproducts" height={280} width={280} />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="star icon" height={24} width={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 text-2xl font-semibold font-palanquin leading-normal">
        {name}
      </h3>
      <p className="mt-2 font-montserrat text-coral-red text-2xl leading-normal font-medium">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
