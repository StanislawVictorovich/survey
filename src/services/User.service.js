function Storage(...keys) {
  for (let key of keys ){
    this.__defineGetter__(key, function () {
      return localStorage.getItem(key)
    });
    this.__defineSetter__(key, function (value) {
      localStorage.setItem(key, value)
    });
  }
}

export default {
  storage: new Storage('email', 'firstName', 'lastName', 'date', 'result'),
  clearStorage() {
    localStorage.clear();
  }
}
