// let first_promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Resolved First after 2 second");
//   }, 2000);
// });

// let second_promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Resolved second after 1 seconds");
//   }, 1000);
// });

// let third_promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Resolved third after 1 seconds");
//   }, 1000);
// });
// let fourth_promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("rejected fourth after 1 seconds");
//   }, 1000);
// });
// try {
//   let result = Promise.all([
//     first_promise,
//     second_promise,
//     third_promise,
//     fourth_promise,
//   ]);
//   result.then((data) => console.log(data));
// } catch (error) {
//   console.log(error);
// }

// polyfill for promiseALL
const promiseAll = (taskList) => {
  const result = [];
  let promiseCompleted = 0;
  return new Promise((resolve, reject) => {
    taskList.forEach((promise, index) => {
      promise
        .then((val) => {
          console.log(val)
          result[index] = val;
          promiseCompleted += 1;
          if (promiseCompleted === taskList.length) {
            // console.log(result);
            resolve(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};
// tc-1 for reslve
const timer = (time) => {
  // console.log(time)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(time);
    }, time);
  });
};

// const timer=(time) => {
//     return new Promise((resolve,reject) => {
//         setTimeout(()=>{
//             if(time>=3000){
//                 reject(`rejected - the time is is greater than 3000`)
//             }else{
//                 resolve(time)
//             }

//         },time)
//     })
// }

const taskList = [timer(1000), timer(2000), timer(3000)];
promiseAll(taskList)
  .then((results) => {
    console.log(`results arrived ${results}`);
  })
  .catch((err) => {
    console.log(err);
  });

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'foo');
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });



