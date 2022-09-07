const delay = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log('Done');
    }, 3000);
  });

delay();
