import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'

function Profile() {
    return (
      <div>
        <div className={s.image}>
          <img
            src="https://wallpapercave.com/wp/wp8166595.png"
            alt=""
          />
        </div>
        <div>ava + description</div>
        <MyPosts/>
      </div>
    );
}

export default Profile
