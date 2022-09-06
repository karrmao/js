export const addImage = (imgSrc) => {
  const p = new Promise((resolveCb, rejectCb) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'My Photo');

    imgElem.src = imgSrc;

    const containerElem = document.querySelector('.page');
    containerElem.append(imgElem);

    const onImageLoaded = () => {
      const { width, height } = imgElem;
      resolveCb({ width, height });
    };

    imgElem.addEventListener('load', onImageLoaded);

    imgElem.addEventListener('error', () =>
      rejectCb(new Error('Image load is failed'))
    );
  });
  return p;
};

//--test data
const result = addImage(
  'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'
);
result.then((data) => console.log(data));
console.log(result);
