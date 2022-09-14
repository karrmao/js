export const parseUser = (data) => {
  try {
    const userData = JSON.parse(data);
    return userData;
  } catch (err) {
    return null;
  }
};
