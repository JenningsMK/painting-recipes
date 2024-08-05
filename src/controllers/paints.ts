import { paintsAPI, type PaintInfo } from '../modules/paints.ts';

/**
 * Some paints have changed name, so check against the known changes to find the correct one in the JSON
 */
function checkDetails(paintName: string) {
  const knownUpdates = new Map([
    ['Iraqui sand', 'Iraqi Sand'],
    ['German C. Black Brown', 'Camouflage Black Brown'],
    ['Heavy Goldbrown', 'Heavy Gold Brown'],
    ['Gunmetal', 'Dark Gunmetal'],
  ]);

  return knownUpdates.has(paintName) ? (knownUpdates.get(paintName) as string) : paintName;
}

/**
 * Gets a list of paints based on the name
 * @params neededPaints - The paints you would like the details to be returned for
 */
export const getPaints = (neededPaints: string[]) =>
  paintsAPI
    .then((data) => {
      const paints: PaintInfo[] = [];
      const neededPaintList = new Set(neededPaints);

      neededPaintList.forEach((neededPaint) => {
        const paintNeeded = checkDetails(neededPaint).toLowerCase();

        if (data.has(paintNeeded)) {
          paints.push(data.get(paintNeeded) as PaintInfo);
        } else {
          console.warn(`Missing ${neededPaint}`);
        }
      });

      return paints;
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
