import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'

function Profile() {
    return (
      <div>
        <div className={s.image}>
          <img
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-motorcycles-index2-1614285300.jpg?crop=0.984xw:0.984xh;0,0&resize=1200:*"
            alt=""
          />
        </div>
        <MyPosts/>
      </div>
    );
}

export default Profile
