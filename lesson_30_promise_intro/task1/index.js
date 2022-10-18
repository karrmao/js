export const addImage = (imgSrc) => {
  const p = new Promise((resolve, reject) => {
    const containerElem = document.querySelector('.page');
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'My Photo');
    imgElem.src = imgSrc;
    containerElem.append(imgElem);
    const onImageLoaded = () => {
      const { width, height } = imgElem;
      resolve({ width, height });
    };
    imgElem.addEventListener('load', onImageLoaded);
    imgElem.addEventListener('error', () =>
      reject(new Error('Image load is failed'))
    );
  });
  return p;
};

//--test data
//option - 1
const resultPromise = addImage(
  'https://p.bigstockphoto.com/**GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'
);
// //console.log(resultPromise);
//optin-1 [Brocken code link!]
resultPromise.catch((error) => console.log(error));
//=>Error: Image load is failed
//    at HTMLImageElement.<anonymous>

// //optin-2
resultPromise.then((data) => console.log(data));
//=> {width: 1028, height: 432}
