const getRandomNumber = (from, to) => from + Math.random() * (to - from);

const request = (url) =>
  new Promise((resolve) => {
    const rendomDelay = getRandomNumber(1000, 3000);

    setTimeout(() => {
      resolve({
        userData: {
          name: 'Tom',
          age: 17,
        },
        source: url,
      });
    }, rendomDelay);
  });

const servers = [
  'https://server.com/usa',
  'https://server.com/eu',
  'https://server.com/ua',
];

export const getUserASAP = (userid) => {
  const userUrls = servers.map((serverUrl) => `${serverUrl}/${userid}`);

  const requests = userUrls.map((userUrl) => request(userUrl));

  return Promise.race(requests);
};

getUserASAP('user-id-333').then((res) => console.log(res));
//=>{userData: {…}, source: 'https://server.com/eu/user-id-333'}
