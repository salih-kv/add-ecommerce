import { Carousel } from "react-responsive-carousel";

import img from "../../assets/drone-p.png";

// const carouselImages = [{ src: img1 }, { src: img2 }, { src: img3 }];

const Hero = () => {
  return (
    <div className="w-full bg-[#ffe26e] h-[300px] rounded-2xl mb-8">
      <Carousel autoPlay axis="horizontal">
        <div>
          <img src={img} alt="" />
          <p>1</p>
        </div>
        <div>
          <img src={img} alt="" />
          <p>2</p>
        </div>
        <div>
          <img src={img} alt="" />
          <p>3</p>
        </div>
      </Carousel>
    </div>
  );
};

const Home = () => {
  return (
    <section>
      <Hero />
      <div className="flex justify-between gap-12"></div>
    </section>
  );
};

export default Home;
