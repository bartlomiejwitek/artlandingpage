import SliderStatusComponentStyles from "../styles/slider-status.module.css";

export default function SliderStatusComponent({
  handleCurrentImageIndexChange,
  currentImageIndex,
  images,
  ...rest
}) {
  // const images = ["as", "bd", "cd"];
  //   const currentIndex = 0;

  const handleCircleClick = (index) => {
    console.log(index);
    handleCurrentImageIndexChange(index);
  };

  return (
    <div className={SliderStatusComponentStyles.wrapper}>
      {images.map((image, index) => {
        return (
          <div
            className={SliderStatusComponentStyles.circle}
            onClick={() => handleCircleClick(index)}
            key={index}
          >
            {index === currentImageIndex ? (
              <div className={SliderStatusComponentStyles.circleActive}></div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
