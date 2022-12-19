import React, { useRef, useEffect, useState } from "react";

import GalleryComponentStyles from "../styles/gallery-component.module.css";

export default function Gallery({ children }) {
  const wrapperRef = useRef(null);
  const [isDOMReady, setIsDOMReady] = useState(false);

  const resizeElement = (element) => {
    if (!wrapperRef.current) {
      return;
    }
    const { current: wrapper } = wrapperRef;
    const rowHeight = Number.parseInt(
      getComputedStyle(wrapper).getPropertyValue("grid-auto-rows")
    );
    const rowGap = Number.parseInt(
      getComputedStyle(wrapper).getPropertyValue("grid-row-gap")
    );
    console.log(element.getElementsByTagName("img")[0].naturalWidth);
    const innerImgElement = element.getElementsByTagName("img")[0];
    const height = computeHeightFromNaturalHeight(
      innerImgElement.width,
      innerImgElement.naturalWidth,
      innerImgElement.naturalHeight
    );
    const spanValue = Math.ceil((height + rowGap) / (rowHeight + rowGap));

    if (spanValue) {
      element.style.gridRowEnd = `span ${spanValue}`;
    }
    element.style.position = "relative";
  };

  const resizeElements = () =>
    Array.from(wrapperRef.current.children).forEach((child) => {
      resizeElement(child);
    });

  useEffect(() => {
    if (!isDOMReady) {
      setIsDOMReady(true);
    } else {
      resizeElements();
    }
  }, [isDOMReady, resizeElements]);

  useEffect(() => {
    const config = { attributes: true, childList: true, subtree: true };
    const observer = new MutationObserver((mutationList) =>
      mutationList.forEach((mutation) => {
        console.log(mutation);
        if (mutation.target.tagName === "IMG") {
          console.log(mutation);
          mutation.target.addEventListener("load", resizeElements, false);
        }
      })
    );
    observer.observe(wrapperRef.current, config);
    window.addEventListener("resize", resizeElements);
    resizeElements();

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", resizeElements);
    };
  }, []);

  const computeHeightFromNaturalHeight = (width, nWidth, nHeight) => {
    let ratio = nWidth / nHeight;
    return width / ratio;
  };

  return (
    <div className={GalleryComponentStyles.wrapper} ref={wrapperRef}>
      {children}
    </div>
  );
}
