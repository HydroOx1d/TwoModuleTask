import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom'

function Navbar() {
    return (
      <nav className={s.nav}>
        <div className={s.item}>
          <NavLink to="/profile" activeClassName={s.active}>Main</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/news" activeClassName={s.active}>News</NavLink>
        </div>
        <div className={s.item}>
          <a>Add</a>
        </div>
        <div className={s.item}>
          <a>Contact</a>
        </div>

        <form className={s.form} action="#">
          <h1>Авторизация</h1>
          <input className={s.input} type="text" placeholder="Введите e-mail"/>
          <input className={s.input} type="password" placeholder="Введите пароль"/>
          <div className={s.link}>
            <a href="#">Забыли пароль?</a>
            <a href="#">Регистрация</a>
          </div>
          <button>Авторизация</button>

        </form>
      </nav>
    );
}

export default Navbar

