import React from "react";
import s from "./Footer.module.css";
import {NavLink} from 'react-router-dom'
import { FaInstagram, FaGithub, FaTwitter, FaFacebook, FaVk, FaLinkedin, FaLink } from 'react-icons/fa'

function Footer() {
  return (
    <div className={s.footer}>
      <nav className={s.nav}>
        <h1>Навигация</h1>
        <ul>
          <div className={s.item}>
            <NavLink exact to="/">Main</NavLink>
          </div>
          <div className={s.item}>
            <NavLink to="/news">News</NavLink>
          </div>
          <div className={s.item}>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </ul>
      </nav>

      <div className={s.socials}>
        <h1>Соц. сети</h1>
        <ul className={s.item__footer}>
          <li className={s.link}>
            <a href="#"> <FaInstagram/> </a>
          </li>
          <li className={s.link}>
            <a href="#"> <FaGithub/> </a>
          </li>
          <li className={s.link}>
            <a href="#"> <FaTwitter/> </a>
          </li>
          <li className={s.link}>
            <a href="#"> <FaFacebook/> </a>
          </li>
          <li className={s.link}>
            <a href="#"> <FaVk/> </a>
          </li>
          <li className={s.link}>
            <a href="#"> <FaLinkedin/> </a>
          </li>
        </ul>
      </div>

      <div className={s.logo}>
        <img src="https://png.pngtree.com/png-clipart/20200722/original/pngtree-retro-or-vintage-motorcycle-emblem-logo-design-png-image_4985539.jpg" alt=""/>
      </div>
    </div>
  );
}

export default Footer;
