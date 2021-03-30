import {useState, useEffect} from 'react'
import s from './News.module.css'
import NewsPost from './NewsPost/NewsPost'
import Kawasaki from './img/z1000.jpg'
import axios from '../../axios'

function News() {
    const [posts, setPosts] = useState([]);
    const [loading, setloading] = useState(true);
    useEffect(() => {
        axios.get('/news.json').then((response) => {
            let posts = Object.keys(response.data).map(key => {
                return {
                    ...response.data[key],
                    id: key
                }
            })
            setPosts(posts);
            setloading(false);
        })
    }, [])
    return (
        <div>
            <h1 className={s.title}>Главные новости</h1>
            
            {
                loading ? "Loading...." :
                posts.map(post => {
                    return <NewsPost key={post.id} image={post.url} title={post.title} message={post.body}/>
                })
            }
        </div>
    )
}

export default News
