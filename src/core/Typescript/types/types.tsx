export type ConsumedProduct = {
  id: number;
  slug: string;
  name: string;
  price: number;
  category: string;
  features: {}[];
  description: string;
  new: boolean;
  currentImg: { src: {}; media: string; nameStyle: string }[];
  galleryImg: {}[];
};

export type Sticker_product_type = {
  cssName: string;
  subTitle?: string;
  title: JSX.Element;
  button?: JSX.Element;
  text?: JSX.Element;
  price?: JSX.Element | boolean;
  multiSrc: {
    src: { x: number; y: number; src: string }[];
    media: string;
    nameStyle: string;
  }[];
};

export type img_JSON_import = {
  src: { x: number; y: number; src: string }[];
  media: string;
  nameStyle: string;
}[];

export type FetchData_type = {
  state: {
    currentData: ConsumedProduct[];
    loading: boolean;
    error: boolean;
  };
  setState: (state: {}[]) => void;
};
