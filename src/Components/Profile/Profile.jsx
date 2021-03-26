import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'
import Banner from './img/profileBanner.jpg'

function Profile() {
    return (
      <div>
        <div className={s.image}>
          <img
            src={Banner}
            alt=""
          />
        </div>
        <MyPosts/>
      </div>
    );
}

export default Profile
