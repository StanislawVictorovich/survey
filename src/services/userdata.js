import { SecureStorage } from "./storage";
import types from "./types";

class UserData extends SecureStorage {
  constructor(key) {
    super(key);
  }
  get email() {
    return this.getUserData().email;
  }
  set email(email) {
    this.setUserData({ email });
  }
  get firstName() {
    return this.getUserData().firstName;
  }
  set firstName(firstName) {
    this.setUserData({ firstName });
  }
  get lastName() {
    return this.getUserData().lastName;
  }
  set lastName(lastName) {
    this.setUserData({ lastName });
  }
  get date() {
    return this.getUserData().date;
  }
  set date(date) {
    this.setUserData({ date });
  }
  get users() {
    return this.getUserData().users;
  }
  set users(users) {
    this.setUserData({ users });
  }
  get currentStep() {
    return this.getUserData().currentStep;
  }
  set currentStep(currentStep) {
    this.setUserData({ currentStep });
  }
  get answersMatrix() {
    return this.getUserData().answersMatrix;
  }
  set answersMatrix(answersMatrix) {
    this.setUserData({ answersMatrix });
  }
  get questions() {
    return this.getUserData().questions;
  }
  set questions(questions) {
    this.setUserData({ questions });
  }
  get testComplete() {
    return this.getUserData().testComplete;
  }
  set testComplete(testComplete) {
    this.setUserData({ testComplete });
  }
  emailRegistered(email) {
    return !!this.getUser(email);
  }
  getUser(email) {
    const { users } = this.getUserData();
    if (users) {
      return this.getUserData().users.filter(user => user.email === email)[0];
    } else {
      return false;
    }
  }
  getUserAnswer(email, questionId) {
    const user = this.getUser(email);
    if (user) {
      return user.answersMatrix[user.questionsIdMatrix.indexOf(questionId)];
    } else {
      return false;
    }
  }
  saveNewUser() {
    const { firstName, lastName, email, date, users } = this.getUserData();
    if (this.emailRegistered(email) || !users) {
      return false;
    }
    users.push({ firstName, lastName, email, date }); 
    this.setUserData({ users });
  }
}

export default new UserData(types.SECURE_KEY);
