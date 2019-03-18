export default {
  setData(key, value) {
    localStorage.setItem(key, value);
  },
  getData(key) {
    return localStorage.getItem(key);
  },
  clear() {
    localStorage.clear();
  },
  storage_id: 'user_data',
  setUserData(user) {
    const storedUser = this.getUserData();
    for (let key in storedUser) {
      if (!user[key]) {
        user[key] = storedUser[key];
      }
    }
    localStorage.setItem(this.storage_id, JSON.stringify(user));
  },
  getUserData() {
    return JSON.parse(localStorage.getItem(this.storage_id));
  }
}
