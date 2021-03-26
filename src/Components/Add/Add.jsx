import React, { useState } from "react";
import s from "./Add.module.css";
import axios from '../../axios'
import firebase from '../../config/firebase'

function Add(props) {
    
    const [post, setpost] = useState({
        title: "",
        body: ""
    });
    const [file, setfile] = useState(null);
    function changeHendler(e) {
        setpost(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        });
    }
    function onFileSelectHandler (e) {
        setfile(e.target.files[0]);
    }
    const onFileUpload = event => {
        event.preventDefault();
        const fileName = file.name;
        const storageRef = firebase.storage().ref('images/' + fileName);
        const uploadTask = storageRef.put(file);
        uploadTask.on('state_change', 
            () => {},
            () => {},
            () => {
                uploadTask.snapshot.ref.getDownloadURL().then(url => {
                    const sendPost = {
                        ...post,
                        url
                    }
                    axios.post('/news.json', sendPost).finally(() => {
                        props.history.push('/news')
                    })
                });
            }
        )
    }

  return (

    <div>
      <div className={s.addBlock}>
        <h1>Добавить новость</h1>
        <form className={s.form} action="#">
          <input className={s.input} type="text" placeholder="Введите заголовок" name="title" onChange={changeHendler} />
          <textarea className={s.textArea} name="body" placeholder="Введите текст" onChange={changeHendler}></textarea>
          <input className={s.addImage} type="file" name="file" onChange={onFileSelectHandler} />
        </form>
        <button className={s.btn} onClick={onFileUpload}>Добавить</button>
      </div>
    </div>
  );
}

export default Add;
