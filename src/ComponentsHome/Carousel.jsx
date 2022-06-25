import { Carousel as ReactResponsiveCarousel } from "react-responsive-carousel";
import carouselImgs from "../assets/image/carousel-imgs";

const Carousel = ({ children }) => {
  return (
    <>
      <ReactResponsiveCarousel
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        autoPlay
        interval={10000}
      >
        {carouselImgs.map((carouselImg, idx) => (
          <div>
            <img className="slide" src={carouselImg} alt={`Slide ${idx}`} />
          </div>
        ))}
      </ReactResponsiveCarousel>

      {children}
    </>
  );
};

export default Carousel;
