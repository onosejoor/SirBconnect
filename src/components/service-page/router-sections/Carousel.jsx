import { useEffect, useState } from "react";
import DesignSkill from "../../snippets/DesignSkill";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(0);

  const images = [
    "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  // To switch between carousels
  useEffect(() => {
    const skillArray = document.querySelectorAll(".designSkill");
    const dots = document.querySelectorAll(".iBtn");
    skillArray.forEach((array) => {
      array.style.display = "none";
    });
    setLength(skillArray.length);

    skillArray[currentIndex].style.display = "flex";

    dots.forEach((dot) => {
      dot.classList.remove("active");
    });
    dots[currentIndex].classList.add("active");
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === length ? 0 : prevIndex + 1
    );
  };
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? length - 1 : prevIndex - 1
    );
  };

  function log(e) {
    setCurrentIndex(parseInt(e.target.id));
  }

  return (
    <>
      <div className="carousel">
        <div className="carouselItem">
          <div className="left" onClick={handlePrevious}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="50"
              viewBox="0 96 960 960"
              width="60"
              className="carouselArrow"
            >
              <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
            </svg>
          </div>
          <DesignSkill
            img={images[currentIndex]}
            header="Digital Content"
            text="Creating engaging social media graphics, web banners, and email templates to enhance your online presence. We help you connect with your audience through visually appealing and interactive content."
          />
          <DesignSkill
            img={images[currentIndex]}
            header="Digital Content"
            text="Creating engaging social media graphics, web banners, and email templates to enhance your online presence. We help you connect with your audience through visually appealing and interactive content."
          />
          <DesignSkill
            img={images[currentIndex]}
            header="Marketing Materials"
            text="Designing eye-catching brochures, flyers, and posters to promote your business effectively"
          />
          <DesignSkill
            img={images[currentIndex]}
            header="Brand Identity Design"
            text="Crafting unique logos, business cards, and stationery that reflect your brand’s essence. We ensure that your brand stands out with a cohesive and memorable identity."
          />
          <div className="right" onClick={handleNext}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="50"
              viewBox="0 96 960 960"
              width="60"
              className="carouselArrow"
            >
              <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
            </svg>
          </div>
        </div>

        <div className="imgBtn">
          {images.map((image, index) => {
            return (
              <div className="iBtn" key={index} onClick={log} id={index}></div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Carousel;
