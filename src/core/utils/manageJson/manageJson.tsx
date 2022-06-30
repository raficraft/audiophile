//Get a specific element of JSON product DATA
export function extractConsumedData(data: any[], extractKey: string[]) {
  const extractedData: any[] = [];
  const createObj = {};

  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      const product = data[key];

      for (let i = 0; i < extractKey.length; i++) {
        const objKey = extractKey[i];

        if (product[objKey]) {
          Object.assign(createObj, { [objKey]: product[objKey] });
        } else {
          Object.assign(createObj, { [objKey]: [] });
        }
      }

      extractedData[Number(key)] = createObj;
    }
  }
  return extractedData;
}

//Get path of image contain in json data by fields
// launch getImgInfo who launch importImg
export async function createImgInfo(data: any[], fields: string) {
  const res = [];

  for (const idx in data) {
    if (Object.prototype.hasOwnProperty.call(data, idx)) {
      const product = data[idx];
      const tmp = [];
      for (const key in product.image) {
        if (Object.prototype.hasOwnProperty.call(product.image, key)) {
          const folder: string = product[fields][key].substring(1);
          const getSrc = await getImgInfo(folder);

          const imgInfo: { src: {}; media: string; nameStyle: string } = {
            src: getSrc,
            media: key,
            nameStyle: `size_${key} responsiveImg`,
          };
          tmp.push(imgInfo);
        }
      }
      res.push(tmp);
    }
  }
  return res;
}

//Launch import Image and get size of this image
export async function getImgInfo(folder: string) {
  const imageImport = await importImage(folder);
  let img = new Image();
  img.src = imageImport;

  let info = {
    x: 0,
    y: 0,
    src: imageImport,
  };

  try {
    img.onload = function () {
      info.x = img.width;
      info.y = img.height;
    };
  } catch (error) {
    console.log(error);
  }

  return [info];
}

//dynamic import on the src folder
export async function importImage(folder: string) {
  try {
    const i = await import(`../../../${folder.substring(1)}`);
    return i.default;
  } catch (error) {
    console.log(error);
  }
}
