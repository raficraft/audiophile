//Get a specific element of JSON product DATA
//If key doesn't exist attribuattes a empty array
export function extractConsumedData(data: any[], extractKey: string[]) {
  const extractedData: any[] = [];

  for (const key in data) {
    const createObj = {};
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      const product = data[key];

      for (let i = 0; i < extractKey.length; i++) {
        const objKey = extractKey[i];

        if (product[objKey] || product[objKey] === false) {
          Object.assign(createObj, { [objKey]: product[objKey] });
        } else {
          Object.assign(createObj, { [objKey]: [] });
        }
      }

      extractedData[Number(key)] = createObj;
    }
  }
  const orderedData = orderProduct(extractedData);
  return orderedData;
}

//If product as new he's be placed on start of array
export function orderProduct(productArray: any[]) {
  let first = productArray.filter((el) => el.new === true);
  let next = productArray.filter((el) => el.new === false);
  return [...first, ...next];
}

export async function objectImgInfo(path: string, key: string) {
  const folder: string = path.substring(1);
  const getSrc = await getImgInfo(folder);
  const imgInfo: { src: {}; media: string; nameStyle: string } = {
    src: getSrc,
    media: key,
    nameStyle: `size_${key} responsiveImg`,
  };
  return imgInfo;
}

//Get path of image contain in json data by fields
//launch getImgInfo who launch importImg
export async function createImgInfo(data: any[], fields: string) {
  const res = [];

  for (const idx in data) {
    if (Object.prototype.hasOwnProperty.call(data, idx)) {
      const product = data[idx];
      const tmp = [];
      for (const key in product[fields]) {
        if (Object.prototype.hasOwnProperty.call(product[fields], key)) {
          if (typeof product[fields][key] === "string") {
            const relativePath = product[fields][key];
            const imgInfo: { src: {}; media: string; nameStyle: string } =
              await objectImgInfo(relativePath, key);
            tmp.push(imgInfo);
          } else {
            const recursiveKeys = Object.keys(product[fields]);
            const recursiveArray = [];
            for (const keys of recursiveKeys) {
              const newData = [];
              newData.push({ [keys]: product[fields][keys] });
              const recursiveTmp: any = await createImgInfo(newData, keys);
              recursiveArray.push(recursiveTmp);
            }

            return recursiveArray;
          }
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
