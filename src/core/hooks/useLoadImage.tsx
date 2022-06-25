import React, { useState, useEffect } from "react";

export default function useLoadImage(src: string) {
  const [imgInfo, setImgInfo] = useState({
    x: 0,
    y: 0,
    src: src,
  });

  function loadImage(src: string) {
    let img = new Image();
    img.src = src;

    img.onload = function () {
      setImgInfo((S) => ({ ...S, x: img.width, y: img.height }));
    };
  }

  useEffect(() => {
    loadImage(src);
  }, []);

  return [imgInfo];
}
