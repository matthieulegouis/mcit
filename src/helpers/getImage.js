import Jimp from "jimp";

export default (imgUrl, fileReader, maxWidth) =>
  new Promise((resolve, reject) => {
    fileReader.onload = e => {
      // Create image object and get width
      const image = new Image();
      image.src = imgUrl;

      image.onload = () => {
        // If image width is too big, resize image before save
        if (maxWidth && image.width > maxWidth) {
          Jimp.read(base64Img).then(image => {
            image
              .scaleToFit(maxWidth, maxWidth)
              .getBase64Async(Jimp.MIME_PNG)
              .then(resizedImg => setBuilderConfig(name, resizedImg));
          });
        }
      };
      // Resize image for preview
      Jimp.read(imgUrl).then(image => {
        image
          .scaleToFit(480, 320)
          .getBase64Async(Jimp.MIME_PNG)
          .then(imageLow => setBuilderConfig(name + "Low", imageLow));
      });
    };
  });
