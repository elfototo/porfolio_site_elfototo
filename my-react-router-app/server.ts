import express, { type Request, type Response } from 'express';
import path from 'path';
import { insertPost, getPosts } from './db'; // Импортируем функции для работы с БД

const app = express();
const port = process.env.PORT || 3000;

// Настроим парсинг JSON в запросах
app.use(express.json());

// Обслуживаем статику из папки build
app.use(express.static(path.join(__dirname, 'build')));

// API для получения всех постов
app.get('/api/posts', (req, res) => {
  getPosts((posts) => {
    res.json(posts);
  });
});

// API для добавления нового поста
app.post('/api/posts', (req: Request, res: Response) => {
    const { title, content } = req.body;
  
    if (!title || !content) {
      return res.status(400).json({ error: 'Title and content are required' });
    }
  
    insertPost(title, content); // Вставляем в базу данных
    res.status(201).json({ message: 'Post added successfully' }); // Отправляем успешный ответ
  });
  

// Ловим все маршруты и отдаем статический HTML
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер работает на http://localhost:${port}`);
});
