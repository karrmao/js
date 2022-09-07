const getRandomNumber = (from, to) => from + Math.random() * (to - from);

const request = (url) =>
  new Promise((resolve) => {
    const randomDelay = getRandomNumber(1000, 3000);

    setTimeout(() => {
      resolve({
        userData: {
          name: 'Tom',
          age: 17,
        },
        sorce: url,
      });
    }, randomDelay);
  });

//console.log(getRandomNumber(1000, 3000)); //=> 1549.6504907406688...

const servers = [
  'https://server.com/usa',
  'https://server.com/eu',
  'https://server.com/ua',
];

const getUserASAP = (userId) => {
  const userUrls = servers.map((serverUrl) => `${serverUrl}/users/${userId}`);

  const requests = userUrls.map((userUrl) => request(userUrl));

  return Promise.race(requests);
};
