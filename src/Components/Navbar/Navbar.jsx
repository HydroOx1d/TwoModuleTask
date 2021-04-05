import React, { useState, useEffect } from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import firebase, { auth } from "../../config/firebase";

function Navbar() {
  const [user, setUser] = useState(null);
  const [authData, setAuthData] = useState({
    email: "",
    pass: "",
  });

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  const onLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null);
      });
  };

  const changeHandler = ({ target: { name, value } }) => {
    setAuthData((auth) => {
      return {
        ...auth,
        [name]: value,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(authData.email, authData.pass)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let form = (
    <form className={s.form} action="#" onSubmit={submitHandler}>
      <h1>Авторизация</h1>
      <input
        className={s.input}
        type="email"
        name="email"
        placeholder="Введите e-mail"
        onChange={changeHandler}
      />
      <input
        className={s.input}
        type="password"
        name="pass"
        placeholder="Введите пароль"
        onChange={changeHandler}
      />
      <div className={s.link}>
        <a href="#">Забыли пароль?</a>
        <a href="#">Регистрация</a>
      </div>
      <div>
        <button>Авторизация</button>
      </div>
    </form>
  );

  let navLink = (
    <>
      <div className={s.item}>
        <NavLink exact to="/" activeClassName={s.active}>
          Главное
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" activeClassName={s.active}>
          Новости
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/contact" activeClassName={s.active}>
          Контакты
        </NavLink>
      </div>
    </>
  );

  if (user) {
    form = (
      <div className={s.auth - form}>
        <h1>Вход выполнен</h1>
        <button onClick={onLogout}>Выйти</button>
        <div>Пользователь: {authData.email}</div>
      </div>
    );
    navLink = (
      <div>
        <div className={s.item}>
          <NavLink exact to="/" activeClassName={s.active}>
            Главное
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/news" activeClassName={s.active}>
            Новости
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/add" activeClassName={s.active}>
            Добавить
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/contact" activeClassName={s.active}>
            Контакты
          </NavLink>
        </div>
      </div>
    );
  }

  return (
    <div>
      <nav className={s.nav}>
        <div>{navLink}</div>
        <div>{form}</div>
      </nav>
    </div>
  );
}
export default Navbar;
