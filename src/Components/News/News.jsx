import {useState, useEffect} from 'react'
import s from './News.module.css'
import NewsPost from './NewsPost/NewsPost'
import Kawasaki from './img/z1000.jpg'
import axios from '../../axios'

function News() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get('/news.json').then((response) => {
            let posts = Object.keys(response.data).map(key => {
                return {
                    ...response.data[key],
                    id: key
                }
            })
            setPosts(posts);
        })
    }, [])
    return (
        <div>
            <h1 className={s.title}>Главные новости</h1>
            <NewsPost image={Kawasaki} message="Производитель премиальных электрических мотоциклов Energica идёт в ногу со временем и работает над голосовым интерфейсом между райдером и мотоциклом. Проект осуществляется в сотрудничестве с крупным производителем аксессуаров для смартфонов Cellularline и телекоммуникационной компанией Alascom, и искусственный интеллект, разработанный для мотоциклов Energica, может быть впоследствии внедрён и в другие электрические мотоциклы"/>
            <NewsPost image={Kawasaki} message="Производитель премиальных электрических мотоциклов Energica идёт в ногу со временем и работает над голосовым интерфейсом между райдером и мотоциклом. Проект осуществляется в сотрудничестве с крупным производителем аксессуаров для смартфонов Cellularline и телекоммуникационной компанией Alascom, и искусственный интеллект, разработанный для мотоциклов Energica, может быть впоследствии внедрён и в другие электрические мотоциклы"/>
            <NewsPost image={Kawasaki} message="Производитель премиальных электрических мотоциклов Energica идёт в ногу со временем и работает над голосовым интерфейсом между райдером и мотоциклом. Проект осуществляется в сотрудничестве с крупным производителем аксессуаров для смартфонов Cellularline и телекоммуникационной компанией Alascom, и искусственный интеллект, разработанный для мотоциклов Energica, может быть впоследствии внедрён и в другие электрические мотоциклы"/>
        </div>
    )
}

export default News
