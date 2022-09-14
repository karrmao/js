export const fetchUserData = (userName) => {
  return fetch(`https://api.github.com/users/${userName}`).then((response) => {
    if (response.ok /*2*/) {
      return response.json();
    }
    throw new Error('Failed to load data');
  });
};

/*1_add fetchReositories*/
export const fetchReositories = (url) =>
  fetch(url).then((response) => {
    if (response.ok /*3*/) {
      return response.json();
    }
    throw new Error('Failed to load data');
  });
