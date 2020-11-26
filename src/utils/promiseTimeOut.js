export function promiseTimeOut(time) {
  return new Promise(resolve => {
    return setTimeout(resolve, time);
  });
}
