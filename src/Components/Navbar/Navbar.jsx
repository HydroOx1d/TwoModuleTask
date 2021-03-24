import React from 'react';
import s from './Navbar.module.css';

function Navbar() {
    return (
      <nav className={s.nav}>
        <div className={s.item}>
          <a href="/profile">Main</a>
        </div>
        <div className={s.item}>
          <a href="/dialogs">News</a>
        </div>
        <div className={s.item}>
          <a>Add</a>
        </div>
        <div className={s.item}>
          <a>Contact</a>
        </div>

        <form action="">
          <input type="text" placeholder="Введите e-mail"/>
          <input type="password" placeholder="Введите пароль"/>
          <a href="#">Забыли пароль?</a>
          <a href="#">Регистрация</a>
          <button>Авторизация</button>

        </form>
      </nav>
    );
}

export default Navbar

