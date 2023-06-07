class CustomTimeout {
  constructor() {
    this.timerID = 1;
    this.timerMap = {};
  }

  setTimeoutPolyfill(callback, delay, ...args) {
    if (typeof callback !== "function") {
      throw new Error("Callback should be a function");
    }

    const id = this.timerID++;
    this.timerMap[id] = true;
    const start = Date.now();
    console.log('args---------',args)
    const triggerCallback = () => {
      if (!this.timerMap[id]) return;
      let elapsedTime = Date.now() - start
    //   if (Date.now() > start + delay) {
     if(elapsedTime >= delay){
        callback.apply(this, args);
      } else {
        requestIdleCallback(triggerCallback);
      }
    };

    triggerCallback();
    return id;
  }

  clearTimeoutPolyfill(id) {
    console.log("------------clearTimeout", this.timerMap, id);
    if (this.timerMap[id]) {
      delete this.timerMap[id];
    }
  }
}

const customTimeout = new CustomTimeout();
console.log("start");

const myId = customTimeout.setTimeoutPolyfill(() => {
  console.log("Welcome to JSCafe 3000");
}, 3000);
console.log("myId", myId);

const myId2 = customTimeout.setTimeoutPolyfill(
  (name) => {
    console.log("Welcome to JSCafe 2000");
    console.log(name, "------------");
  },
  2000,
  "deepak"
);
customTimeout.clearTimeoutPolyfill(myId2);
console.log("myId2", myId2);

const myId3 = customTimeout.setTimeoutPolyfill(
  (name) => {
    console.log("Welcome to JSCafe 1000");
    console.log(name, "------------");
  },
  1000,
  "kumar"
);
console.log("myId3", myId3);

console.log("end");

const myId4= customTimeout.setTimeoutPolyfill('okok',4000,'dummy')