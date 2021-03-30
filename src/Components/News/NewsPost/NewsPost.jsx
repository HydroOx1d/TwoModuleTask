import React from "react";
import s from "./NewsPost.module.css";

function NewsPost(props) {
  return (
    <div>
      <div className={s.item}>
        <img className={s.image} src={props.image} alt="" />
        <div className={s.text}>
          <h2>{props.title}</h2>
          <div className={s.message}>{props.message}</div>
          <div>
            <a className={s.link} href="#">
              Читать полностью
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsPost;
