import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <img
        src={imgURL}
        alt="reviewerImg"
        className="rounded-full w-[120px] h-[120px] object-cover"
      />
      <p className="max-w-sm info-text text-center">{feedback}</p>
      <div className="flex gap-2.5 items-center justify-center">
        <img
          src={star}
          width={24}
          height={24}
          alt="rating"
          className="object-contain m-0"
        />
        <p className="font-montserrat text-slate-gray text-xl">({rating})</p>
      </div>
      <h3 className="font-bold text-3xl text-center font-palanquin">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
