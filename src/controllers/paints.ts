import { paintsAPI } from '../modules/paints.ts';

/**
 * Gets a list of paints based on the name
 * @params neededPaints - The paints you would like the details to be returned for
 */
export const getPaints = (neededPaints: string[]) =>
  paintsAPI
    .then((data) =>
      data.filter((paint) =>
        neededPaints.find((neededPaint) => paint.name.toLowerCase() === neededPaint.toLowerCase()),
      ),
    )
    .catch((error) => {
      console.error(error);
      return [];
    });
