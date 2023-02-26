import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "../../assets";
import { Product } from "../../utils/types";
import "./index.css";

interface SliderProps {
  slides: Product[];
}

const OFFSET_PIXEL_CAROUSEL = 160;

const MAXIMUM_SECONDS_TO_SCROLL_CAROUSEL = 27;

const INITIAL_SECONDS = 0;

const Slider: React.FC<SliderProps> = ({ slides }: SliderProps) => {
  const [seconds, setSeconds] = useState(INITIAL_SECONDS);

  const nextItem = () => {
    let container = document.querySelector("#flex-container");
    container &&
      container.scrollTo({
        left: container.scrollLeft + OFFSET_PIXEL_CAROUSEL,
        top: 0,
        behavior: "smooth",
      });
    if (seconds < MAXIMUM_SECONDS_TO_SCROLL_CAROUSEL) {
      setSeconds(seconds + 3);
    }
  };

  const prevItem = () => {
    let container = document.querySelector("#flex-container");
    container &&
      container.scrollTo({
        left: container.scrollLeft - OFFSET_PIXEL_CAROUSEL,
        top: 0,
        behavior: "smooth",
      });
    if (seconds > INITIAL_SECONDS) {
      setSeconds(seconds - 3);
    }
  };

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e: any) => {
    e.preventDefault();
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: any) => {
    e.preventDefault();
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) nextItem();

    if (isRightSwipe) prevItem();
  };

  const buyProduct = (productName: string) => {
    alert(`Compraste: ${productName}`);
  };

  useEffect(() => {
    if (seconds < MAXIMUM_SECONDS_TO_SCROLL_CAROUSEL) {
      const interval = setInterval(() => {
        setSeconds((seconds) => seconds + 3);
        nextItem();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [seconds]);

  return (
    <div className="slide-container">
      <button className="arrow" onClick={prevItem}>
        <ArrowLeft className="arrow" />
      </button>
      <div
        className="flex-container"
        id="flex-container"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {slides.map((slide: Product, index: number) => {
          return (
            <div key={index} className="card">
              <>
                <img className="image" src={slide.image} alt="" />
                <div className="information">
                  <div className="name-price">
                    <p className="name">{slide.name}</p>
                    <p className="price">${slide.price}</p>
                  </div>
                  <p className="description">{slide.description}</p>
                  <button
                    className="shop-button"
                    onClick={() => buyProduct(slide.name)}
                  >
                    <p className="shop">Comprar</p>
                  </button>
                </div>
              </>
            </div>
          );
        })}
      </div>

      <button className="arrow" onClick={nextItem}>
        <ArrowRight className="arrow" />
      </button>
    </div>
  );
};

export default Slider;
