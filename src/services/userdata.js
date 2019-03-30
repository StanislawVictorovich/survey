import { SecureStorage } from "./storage";
import constants from "./constants";

class UserData extends SecureStorage {
  constructor(key) {
    super(key);
    constants.STORAGE_FIELDS.forEach(item => { // getters-setters genereator factory
      Object.defineProperty(this, item, {
        get() {
          return this.getUserData()[item];
        },
        set(value) {
          this.setUserData(new function() { 
            this[item] = value;
          })
        }
      });
    });
  }
  emailRegistered(email) {
    return !!this.getUser(email);
  }
  getUser(email) {
    return this.getUserData() ? this.getUserData().users.filter(user => user.email === email)[0] : false;
  }
}

export default new UserData(constants.SECURE_KEY);
