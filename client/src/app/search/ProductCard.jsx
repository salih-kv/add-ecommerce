import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import droneImg from "../../assets/drone-p.png";

export const ProductCard = () => {
  return (
    <div className="w-full">
      <div className="relative bg-white rounded-2xl hover:drop-shadow-2xl ease-in duration-300">
        <Link to="/home">
          <img src={droneImg} alt="" />
        </Link>
        <div className="w-10 h-10 rounded-full absolute top-1 left-1 lg:top-3 lg:left-3 flex items-center justify-center">
          <AiOutlineHeart className="text-xl md:text-2xl" />
        </div>
      </div>
      <Link to="/home" className="text-center mt-4 block">
        <h6 className="text-sm lg:text-base">DJI Phantom 2 Vision+</h6>
        <h4 className="font-bold lg:text-lg">₹15,999</h4>
      </Link>
    </div>
  );
};
