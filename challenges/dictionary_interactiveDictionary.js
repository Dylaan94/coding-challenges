/* In this kata, your job is to create a class Dictionary which you can add words to and their entries.

https://www.codewars.com/kata/57a93f93bb9944516d0000c1 */

class Dictionary {
  constructor() {
    this.data = {};
  }

  newEntry(key, value) {
    this.data[key] = value;
  }

  look(key) {
    if (this.data.hasOwnProperty(key)) {
      return this.data[key];
    } else {
      return "Can't find entry for " + key;
    }
  }
}

