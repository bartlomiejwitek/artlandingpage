import styles from "../styles/zoomin-component.module.css";
import { useEffect, useState, useRef } from "react";

export default function ZoominComponent({ image, title, close, next, prev }) {
  const imageWrapperRef = useRef();
  const popupWrapperRef = useRef();

  useEffect(() => {
    console.log(image);
    resizeImage();
    window.addEventListener("resize", resizeImage);
    // image.props.layout = "responsive";
    return () => {
      window.removeEventListener("resize", resizeImage);
    };
  }, []);

  useEffect(() => {
    resizeImage();
  }, [image]);

  //   useEffect(() => {
  //     console.log(dimensions);
  //     if (dimensions) {
  //       setRatio(dimensions.width / dimensions.height);
  //     }
  //   }, [dimensions]);

  const resizeImage = () => {
    const imgH = image.props.src.height;
    const imgW = image.props.src.width;
    const ratio = imgW / imgH;

    console.log("Ration not null");
    let width = popupWrapperRef.current.clientHeight * 0.8 * ratio;
    console.log("width: " + width);
    console.log(imageWrapperRef);
    console.log(popupWrapperRef);
    if (popupWrapperRef.current.clientWidth < width) {
      width = popupWrapperRef.current.clientWidth;
      let height = width / ratio;
      imageWrapperRef.current.style.height = `${height}px`;
      console.log("snapping to parent");
    }
    imageWrapperRef.current.style.width = `${width}px`;
    imageWrapperRef.current.style.height = `${
      popupWrapperRef.current.clientHeight * 0.9
    }px`;
    const leftSpace =
      popupWrapperRef.current.clientWidth - imageWrapperRef.current.clientWidth;
    imageWrapperRef.current.style.left = `${leftSpace / 2}px`;
  };

  return (
    <>
      <div className={styles.overlay}></div>
      <div ref={popupWrapperRef} className={styles.wrapper}>
        <div className={styles.title}>
          {title}
          <button onClick={close} className={styles.closeButton}>
            x
          </button>
        </div>
        <div ref={imageWrapperRef} id="zoom_image" className={styles.image}>
          {image}
        </div>
        <div className={styles.buttons}>
          <button onClick={prev}>prev</button>{" "}
          <button onClick={next}>next</button>
        </div>
      </div>
    </>
  );
}
