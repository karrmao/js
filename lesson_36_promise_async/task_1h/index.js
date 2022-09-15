'use strict';

export const getUsersBlogs = async (users) => {
  try {
    const usersArr = users.map((userName) => {
      return fetch(`https://api.github.com/users/${userName}`).then(
        (response) => response.json()
      );
    });
    const resultArr = await Promise.all(usersArr);
    return resultArr.map(({ blog }) => blog);
  } catch (error) {
    throw new Error('Failed to load user data');
  }
};

// // examples
// getUsersBlogs(['google', 'facebook', 'reactjs']).then((linksList) =>
//   console.log(linksList)
// ); // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
// getUsersBlogs(['microsoft']).then((linksList) => console.log(linksList)); // ==> ["https://opensource.microsoft.com"]
