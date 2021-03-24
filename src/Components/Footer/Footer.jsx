import React from "react";
import s from "./Footer.module.css";

function Footer() {
  return (
    <div className={s.footer}>
      <nav className={s.nav}>
        <h1>Навигация</h1>
        <ul>
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
        </ul>
      </nav>

      <div className={s.socials}>
        <h1>Соц. сети</h1>
      </div>

      <div className={s.logo}>
        <img src="https://png.pngtree.com/png-clipart/20200722/original/pngtree-retro-or-vintage-motorcycle-emblem-logo-design-png-image_4985539.jpg" alt=""/>
      </div>
    </div>
  );
}

export default Footer;
