const createLogger = () => {
  const result = [];
  function warn(str) {
    result.push({ message: str, type: 'warn', dateTime: new Date() });
  }

  function error(str) {
    result.push({ message: str, type: 'error', dateTime: new Date() });
  }

  function log(str) {
    result.push({ message: str, type: 'log', dateTime: new Date() });
  }
  function getRecords(str) {
    if (str === 'log') {
      return result
        .filter((el) => el.type === 'log')
        .sort((firstEl, secondEl) => secondEl.dateTime - firstEl.dateTime);
    }
    if (str === 'error') {
      return result
        .filter((el) => el.type === 'error')
        .sort((firstEl, secondEl) => secondEl.dateTime - firstEl.dateTime);
    }
    if (str === 'warn') {
      return result
        .filter((el) => el.type === 'warn')
        .sort((firstEl, secondEl) => secondEl.dateTime - firstEl.dateTime);
    }
    return result.sort(
      (firstEl, secondEl) => secondEl.dateTime - firstEl.dateTime
    );
  }
  return { warn, error, log, getRecords };
};
// test data
const logger1 = createLogger();
logger1.log('User logged in');
logger1.warn('User is tring to ented restricted page');
logger1.log('User logged out');
logger1.error('Unexpected error on the site');
console.log(logger1.getRecords());
//=> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date },
// { message: 'User logged out', type: 'log', dateTime: Date },
//{ message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date },
//{ message: 'User logged in', type: 'log', dateTime: Date }]
console.log(logger1.getRecords('log'));
//=> [{ message: 'User logged out', type: 'log', dateTime: Date },
//{ message: 'User logged in', type: 'log', dateTime: Date }]
console.log(logger1.getRecords('error'));
//=> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }]
console.log(logger1.getRecords('warn'));
//=> [{ message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }]
console.log('***');

const logger2 = createLogger();
logger2.warn('Opps, something is happenning');
console.log(logger2.getRecords('error')); // ===> []
console.log(logger2.getRecords('warn'));
//=> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]
console.log(logger2.getRecords());
//=> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]
console.log('***');

const logger3 = createLogger();
console.log(logger3.getRecords('error')); // ===> []
console.log(logger3.getRecords()); // ===> []
