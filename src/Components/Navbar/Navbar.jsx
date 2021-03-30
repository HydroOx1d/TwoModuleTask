import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom'

function Navbar() {
    return (
      <nav className={s.nav}>
        <div className={s.item}>
          <NavLink exact to="/" activeClassName={s.active}>Main</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/news" activeClassName={s.active}>News</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/add" activeClassName={s.active}>Add</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/contact" activeClassName={s.active}>Contact</NavLink>
        </div>

        <form className={s.form} action="#">
          <h1>Авторизация</h1>
          <input className={s.input} type="email" placeholder="Введите e-mail"/>
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

