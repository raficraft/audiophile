export type useJSONType = {
  id: number;
  image: string[];
  categoryImage: string[];
  slug: string;
  category: string;
  name: string;
  description: string;
};

export type ConsumedCategorie = {
  id: number;
  slug: string;
  name: string;
  description: string;
  new: boolean;
  currentImg: { src: {}; media: string; nameStyle: string }[];
};

export type Sticker_product_type = {
  cssName: string;
  subTitle?: string;
  title: JSX.Element;
  button?: JSX.Element;
  text?: JSX.Element;
  multiSrc: {
    src: { x: number; y: number; src: string }[];
    media: string;
    nameStyle: string;
  }[];
};

export type FetchData_type = {
  state: {
    currentData: useJSONType[];
    loading: boolean;
    error: boolean;
  };
  setState: (state: {}[]) => void;
};
