import { describe, it, expect } from 'vitest';
import { getPaints } from '../src/controllers/paints.ts';

describe('Get Paints', () => {
  it('Get Paints', async () => {
    const paintList = await getPaints(['German C.Black', 'Light Tone', 'Green 2']);

    expect(paintList).toHaveLength(3);
    expect(paintList).toMatchInlineSnapshot(`
      [
        {
          "brand": "Vallejo",
          "colour": "64 51 54 1",
          "id": 70.822,
          "name": "German C.Black",
        },
        {
          "brand": "The Army Painter",
          "colour": "255 149 90 1",
          "id": "WP1470",
          "name": "Light Tone",
        },
        {
          "brand": "Warcolours",
          "colour": "109 253 0 1",
          "name": "Green 2",
        },
      ]
    `);
  });
});
