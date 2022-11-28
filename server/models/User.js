const db = require('../config/db');

class User {
  constructor() {}
  static saveUser(username, password) {
    const sql = `
INSERT INTO Users(username, password)
    VALUES("${username}","${password}")`;
    return db.execute(sql);
  }
  static findNewUser() {
    const sql = 'SELECT id, username FROM Users ORDER BY id DESC LIMIT 1';
    return db.execute(sql);
  }
  static findOneUser(id) {
    const sql = `SELECT * FROM Users u WHERE u.id = ${id} `;
    return db.execute(sql);
  }

  static checkUserCred(username, password) {
    const sql = `SELECT id, username FROM Users u WHERE username = "${username}" AND password = "${password}"`;
    return db.execute(sql);
  }
}

module.exports = User;
