import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import YamahaR7 from '../img/yamahar7.jpeg'
import Harley from '../img/harley.jpeg'
import GoldWing from '../img/GoldWing.jpeg'

function MyPosts() {
    return (
        <div>
          <div className={s.flex}>
            <Post image={YamahaR7} message="Слухи о новой Yamaha YZF-R7 на основе MT-07 циркулируют довольно давно, но вот надёжных подтверждений пока не было. Но недавно Yamaha втихомолку подтвердила скорое появление новой модели, официально зарегистрировав содержание вредных веществ в её выхлопных газах."/>

            <Post image={Harley} message="Компания Harley-Davidson задействовала весь свой дизайнерский и конструкторский потенциал для разработки Pan America 1250 и Pan America 1250 Special — совершенно новых мотоциклов семейства Adventure Touring с комплектацией премиум-класса, выдающимися эксплуатационными характеристиками и инновационным оснащением."/>

            <Post image={GoldWing} message="В 2018 году Gold Wing был полностью пересмотрен и стал намного легче, изящнее и маневреннее, сохранив при этом впечатляющий крутящий момент, обеспечиваемый шестицилиндровым двигателем объемом 1833 куб. см. А ряд новых функций, включая опциональную 7-ступенчатую коробку передач с двойным сцеплением, позволили Gold Wing закрепить репутацию технологического лидера на рынке."/>
          </div>
          <button className={s.btn}>Больше</button>
        </div>
    );
}

export default MyPosts
