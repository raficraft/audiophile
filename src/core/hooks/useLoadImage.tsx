import React, { useState, useEffect } from "react";

export default function useLoadImage(src: string) {
  const [imgInfo, setImgInfo] = useState({
    x: 0,
    y: 0,
    src: src,
  });

  async function loadImage(src: string) {
    let img = new Image();
    img.src = src;

    try {
      await img.decode();
      setImgInfo((S) => ({ ...S, x: img.width, y: img.height }));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadImage(src);
  }, []);

  return [imgInfo];
}
