const getMessegeForPassedStudent = (allStudents, failedStudents) => {
  /**********************/
  //callbackFilter
  const callbackFilter = (name) => {
    console.log(name);
    return !failedStudents.includes(name);
  };

  const passedStudents = allStudents.filter(callbackFilter);
  /**********************/
  //callbackMap
  const callbackMap = (name) => {
    return 'Good job, ' + name + '!';
  };
  const messages = passedStudents.map(callbackMap);

  return messages;
};
/**********************************************************************/
//function DECLARATION
const getMessegeForPassedStudent1 = (allStudents, failedStudents) => {
  /**********************/
  //callbackFilter
  function callbackFilter(name) {
    console.log(name);
    return !failedStudents.includes(name);
  }
  const passedStudents = allStudents.filter(callbackFilter);
  /**********************/
  //callbackMap
  function callbackMap(name) {
    return 'Good job, ' + name + '!';
  }
  const messages = passedStudents.map(callbackMap);

  return messages;
};
/**********************************************************************/
const getMessegeForPassedStudent2 = (allStudents, failedStudents) => {
  /**********************/
  //callbackFilter
  const passedStudents = allStudents.filter(function callbackFilter(name) {
    console.log(name);
    return !failedStudents.includes(name);
  });
  /**********************/
  //callbackMap
  function callbackMap(name) {
    return 'Good job, ' + name + '!';
  }
  const messages = passedStudents.map(function callbackMap(name) {
    return 'Good job, ' + name + '!';
  });
  return messages;
};
/**********************************************************************/
//refac1
const getMessegeForPassedStudent3 = (allStudents, failedStudents) => {
  const passedStudents = allStudents.filter(
    (name) => !failedStudents.includes(name)
  );
  const messages = passedStudents.map((name) => 'Good job, ' + name + '!');
  return messages;
};

/**********************************************************************/
//refac2

const getMessegeForPassedStudent4 = (allStudents, failedStudents) => {
  const passedStudents = allStudents.filter(
    (name) => !failedStudents.includes(name)
  );
  return passedStudents.map((name) => 'Good job, ' + name + '!');
};

/**********************************************************************/
//refac3

const getMessegeForPassedStudent5 = (allStudents, failedStudents) => {
  return allStudents
    .filter((name) => !failedStudents.includes(name))
    .map((name) => 'Good job, ' + name + '!');
};

//-- data test
const allStudents = ['Ann', 'Kate', 'John', 'Peter', 'Paul', 'Tom'];
const failedStudents = ['Kate', 'Paul', 'Tom'];
console.log(getMessegeForPassedStudent2(allStudents, failedStudents));
// console.log(getMessegeForPassedStudent1(allStudents, failedStudents));
// console.log(getMessegeForPassedStudent2(allStudents, failedStudents));
// console.log(getMessegeForPassedStudent2(allStudents, failedStudents));
