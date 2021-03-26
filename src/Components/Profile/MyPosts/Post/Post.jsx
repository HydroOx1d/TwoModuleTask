import React from "react";
import s from "./Post.module.css";

function Post(props) {
  return (
      <div>
        <div className={s.item}>
          <img
            src={props.image}
            alt=""/>
          <div className={s.text}>
            <div className={s.message}>{props.message}</div>
            <div>
              <a className={s.link} href="#">Читать полностью</a>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Post;
