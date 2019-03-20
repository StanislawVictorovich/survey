export default {
  storage_id: 'user_data',
  setUserData(user) {
    const storedUser = this.getUserData();

    for (let key in storedUser) {
      
      if (user[key] === undefined) {
        user[key] = storedUser[key];
      }
      
    }

    localStorage.setItem(this.storage_id, JSON.stringify(user));
  },
  getUserData() {
    return JSON.parse(localStorage.getItem(this.storage_id)) || {};
  },
  clear() {
    localStorage.clear();
  }
}