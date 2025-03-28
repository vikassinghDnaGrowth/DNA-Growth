
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/carousel/1.svg";
import img2 from "../assets/carousel/2.svg";
import img3 from "../assets/carousel/3.svg";

const CustomCarousel = () => {
  const data = [img1, img2, img3];

  return (
    <div className="relative bg-[rgb(249,251,253)] overflow-hidden">
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        interval={2000}
        showThumbs={false}
        showStatus={false}
      >
        {data.map((image, index) => (
          <div key={index}>
            <img
              className="w-full h-auto object-cover"
              src={image}
              alt={`Slide ${index + 1}`}
              loading="lazy"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
