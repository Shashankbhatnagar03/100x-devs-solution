/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((resolve) => {
        setTimeout(() => {
          resolve(); // Resolves the Promise after 'n' milliseconds
        }, n * 1000); // Convert seconds to milliseconds
      });
}

module.exports = wait;
