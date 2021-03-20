import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

function MyPosts() {
    return (
        <div>
          my post
          <div>
            <textarea></textarea>
            <button>Add post</button>
            <button>Remove</button>
          </div>
          <div className={s.flex}>
            <Post message="hi. how are you?"/>
            <Post message="it's my first post"/>
            <Post message="it's my first post"/>
          </div>
        </div>
    );
}

export default MyPosts
