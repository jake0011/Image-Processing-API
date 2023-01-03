import express from 'express';
import {existsSync} from 'fs';
import path from 'path';
import sharp  from 'sharp';


type Image = string | number

const Images: string = './images/full';
const storeImages: string = './images/thumb';

 const imageProcessor = async (req: express.Request, res: express.Response, next: Function ): Promise<void>  => {

   const width: Image = req.query.width as string | number;
   const height: Image = req.query.height as string | number;
   const filename: Image = req.query.filename as string;
   const thumbDir: string = path.join(__dirname, `${storeImages}`, `${filename}`, `/${width}x${height}.jpg`)
   const imageDir: string = path.join(__dirname, `${Images}`, `${filename}.jpg`)
    
     try {
       if(existsSync(thumbDir)){
         console.log('here')
         res.sendFile(thumbDir)
       } else {
         console.log("the else block")
       sharp(imageDir)
         .resize({width: Number(width), height: Number(height)})
         .toFile(thumbDir)
          res.sendFile(thumbDir)

       }
     } catch (error) {
        next(error)
     }
}
export default imageProcessor;
