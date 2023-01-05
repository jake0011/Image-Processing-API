import express from 'express';
import { existsSync } from 'fs';
import path from 'path';
import sharp from 'sharp';

type Image = string | number;

const Images: string = './images/full';
const storeImages: string = './images/thumb';

const imageProcessor = async (
  req: express.Request,
  res: express.Response,
  next: Function
): Promise<void> => {
  const width: Image = req.query.width as string | number;
  const height: Image = req.query.height as string | number;
  const filename: Image = req.query.filename as string;
  const thumbDir: string = path.join(
    __dirname,
    `${storeImages}`,
    `${filename}_${width}x${height}.jpg`
  ) as string;

  const imageDir: string = path.join(
    __dirname,
    `${Images}`,
    `${filename}.jpg`
  ) as string;

  try {
    if (existsSync(thumbDir)) {
      res.sendFile(thumbDir);
    } else {
      sharp(imageDir)
        .resize({ width: Number(width), height: Number(height) })
        .toFile(thumbDir);
      res.sendFile(thumbDir);
    }
  } catch (error) {
    if (width <= 0 || height <= 0) {
      console.log(
        "The height and width can't be zero. Please try a positive integer."
      );
      res.send(
        "The height and width can't be zero. Please try a positive integer."
      );
    } else if (filename === '' || filename === null) {
      console.log("Filename can't be left as an empty string");
      res.send("Filename can't be left as an empty string");
    } else {
      console.log('There is no image with such name.');
      res.send(`There is no image with the name: ${filename}`);
    }
    next(error);
  }
};
export default imageProcessor;
