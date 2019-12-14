const imagemin = require('imagemin');
const PNGImages = './public/img/miniDex/*.png';
const output = './build/miniDex/';

const imageminPngquant = require('imagemin-pngquant');

const optimisePNGImages = () =>
  imagemin([PNGImages], output, {
    plugins: [
      imageminPngquant({ quality: '65-80' })
    ],
  });

optimisePNGImages().catch(error => console.log(error));