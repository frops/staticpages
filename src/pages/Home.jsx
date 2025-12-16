import React from 'react';
import { Link } from 'react-router-dom';

const lessons = [
  {
    path: '/greek/1-2',
    title: 'Греческий язык · Уроки 1–2',
    summary: 'Алфавит, числа, приветствия и интерактивные карточки.',
    level: 'Начальный',
    duration: '45 мин',
  },
  {
    path: '/greek/3',
    title: 'Греческий язык · Уроки 3',
    summary: 'Работа, профессии, притяжательные местоимения.',
    level: 'Начальный',
    duration: '45 мин',
  },
];

const Home = () => (
  <div className="home">
    <section className="hero">
      <div className="hero__text">
        <p className="hero__eyebrow">Добро пожаловать</p>
        <h1>Цифровой кабинет для самообучения</h1>
        <p>
          Каждый урок — отдельное приложение. Выбирайте адрес, переключайтесь между языками и
          тренируйтесь в удобном темпе.
        </p>
        <div className="hero__actions">
          <Link to="/greek/1-2" className="btn btn--primary">
            Начать греческий
          </Link>
          <a href="#modules" className="btn btn--ghost">
            Смотреть все модули
          </a>
        </div>
      </div>
      <div className="hero__panel">
        <div className="hero__badge">Новые уроки скоро</div>
        <p className="hero__panel-title">Независимые маршруты</p>
        <p className="hero__panel-copy">
          Каждый файл подключается по собственному URL. Добавляйте «/german/a1», «/finance/basics» и
          публикуйте мгновенно.
        </p>
      </div>
    </section>

    <section id="modules" className="modules">
      <header className="modules__header">
        <div>
          <p className="eyebrow">Модули</p>
          <h2>Доступные направления</h2>
        </div>
        <span className="modules__hint">Добавляйте новые файлы в папку src/pages</span>
      </header>
      <div className="modules__grid">
        {lessons.map((lesson) => (
          <article key={lesson.path} className="card">
            <p className="card__eyebrow">
              {lesson.level} · {lesson.duration}
            </p>
            <h3>{lesson.title}</h3>
            <p>{lesson.summary}</p>
            <Link to={lesson.path} className="btn btn--link">
              Открыть урок →
            </Link>
          </article>
        ))}
        <article className="card card--ghost">
          <p className="card__eyebrow">Скоро</p>
          <h3>Ваш следующий модуль</h3>
          <p>Скопируйте структуру файла и зарегистрируйте маршрут в router.jsx.</p>
          <span className="pill">/language/topic</span>
        </article>
      </div>
    </section>
  </div>
);

export default Home;
