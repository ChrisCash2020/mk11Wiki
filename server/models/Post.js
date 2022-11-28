const db = require('../config/db');
class Post {
  constructor() {}

  static savePost(
    about,
    appearance,
    name,
    image,
    realName,
    gender,
    firstGame,
    lastGame,
    birthPlace
  ) {
    const sql = `
INSERT INTO Posts(
    about,
    appearance,
    name,
    image,
    realName,
    gender,
    firstGame,
    lastGame,
    birthPlace,
    userId
    )
    VALUES("${about}"," ${appearance}", "${name}", "${image}", "${realName}", "${gender}", "${firstGame}", "${lastGame}", "${birthPlace}", 0
    )`;
    return db.execute(sql);
  }
  static saveTrivia(id, trivia) {
    if (trivia == undefined) return trivia;
    else {
      let sql = `insert into Trivia (text, postId) values `;
      for (let i = 0; i < trivia.length; i++) {
        sql += `("${trivia[i]}", ${id}) `;
      }
      return db.execute(sql);
    }
  }
  static getCurrentId() {
    const sql = 'SELECT MAX(id) FROM Posts';
    return db.execute(sql);
  }

  static getAllPostsNames() {
    const sql = 'SELECT name, image, id, userId FROM Posts';
    return db.execute(sql);
  }
  static findOnePost(id) {
    const sql = `SELECT * FROM Posts p WHERE p.id = ${id} `;

    return db.execute(sql);
  }

  static findTriviaByPost(id) {
    const sql = `SELECT t.id, t.text, t.postId FROM Trivia t JOIN Posts ON t.postId = ${id} `;
    return db.execute(sql);
  }
  static updatePostRecord(record, value, id) {
    const sql = `UPDATE Posts
    SET ${record} = '${value}'
    WHERE  id = ${id}`;
    return db.execute(sql);
  }
  static deletepOnePost(id) {
    const sql = `DELETE FROM Posts WHERE id = ${id};`;
    return db.execute(sql);
  }
}

module.exports = Post;
