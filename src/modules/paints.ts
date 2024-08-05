export interface PaintInfo {
  name: string;
  brand: string;
  colour: string;
  id?: number | string;
}

const paintsAPI = import('../data/paints.json')
  .then((module) => {
    const paintList: Map<string, PaintInfo> = new Map();
    module.default.forEach((item) => {
      if (paintList.has(item.name) && item.id && paintList.has(item.id?.toString())) {
        console.warn(`Paint ${item.name} already exists`);
      }

      paintList.set(item.name.toLowerCase(), item);
    });

    return paintList;
  })
  .catch((error) => {
    throw Error(error);
  });

export { paintsAPI };
