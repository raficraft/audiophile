export type useJSONType = {
  id: number;
  image: string[];
  categoryImage: string[];
  category: string;
  name: string;
  description: string;
};

export type ConsumedCategorie = {
  id: number;
  slug: string;
  name: string;
  description: string;
  currentImg: { src: {}; media: string; nameStyle: string }[];
};
