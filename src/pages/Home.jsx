import React from 'react';
import { Link } from 'react-router-dom';

const lessons = [
  {
    path: '/greek/1-2',
    title: 'Греческий язык · Уроки 1-2',
    summary: 'Алфавит, числа и базовые фразы с интерактивными тренировками.',
  },
  // Добавляйте новые сценарии сюда, каждый как независимая страница.
];

const Home = () => (
  <main className="home">
    <h1>Учебный портал</h1>
    <p>Выберите тему. Каждый модуль загружается отдельно по своему адресу.</p>
    <ul className="home__list">
      {lessons.map((lesson) => (
        <li key={lesson.path} className="home__item">
          <h2>{lesson.title}</h2>
          <p>{lesson.summary}</p>
          <Link to={lesson.path} className="home__link">
            Перейти →
          </Link>
        </li>
      ))}
    </ul>
  </main>
);

export default Home;
