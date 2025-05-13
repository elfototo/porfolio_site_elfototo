import sqlite3 from 'sqlite3';
import path from 'path';

// Создаём базу данных, если она ещё не существует
const db = new sqlite3.Database(path.join(__dirname, 'database.db'), (err) => {
  if (err) {
    console.error('Ошибка подключения к базе данных:', err.message);
  } else {
    console.log('Подключено к базе данных SQLite');
  }
});

// нужно потом сервер express настроить, как chat GPT говорит, создать таблицу базы данных.

const createTable = () => {
    db.run(`
      CREATE TABLE IF NOT EXISTS posts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        content TEXT NOT NULL
      )
    `, (err) => {
      if (err) {
        console.error('Ошибка создания таблицы:', err.message);
      } else {
        console.log('Таблица "posts" успешно создана или уже существует');
      }
    });
  };

const insertPost = (title: string, content: string) => {
    const stmt = db.prepare('INSERT INTO posts (title, content) VALUES (?, ?)');
  
    // Используем тип Error для обработки ошибок
    stmt.run(title, content, (err: Error | null) => {
      if (err) {
        console.error('Ошибка вставки записи:', err.message);
      } else {
        console.log('Запись успешно добавлена в базу данных');
      }
    });
  };

  const getPosts = (callback: (posts: any[]) => void) => {
    db.all('SELECT * FROM posts', [], (err, rows) => {
      if (err) {
        console.error('Ошибка получения данных:', err.message);
      } else {
        callback(rows);
      }
    });
  };

  createTable();

  export { insertPost, getPosts };