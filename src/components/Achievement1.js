import im1 from '../assets/img/IMG_3807.JPG';
import im2 from '../assets/img/download.jpg';
import im3 from '../assets/img/maxresdefault.jpg'

export const Achievement1 =()=>{
    return(
    <div>
     <h3>Achievement:</h3>
    <div id="ach">
     <div id="bx1"> <img src={im1}></img>
     <h4 id='zq'>Won Gold in 57th National Roller Skating Championship @Vizag 2019</h4></div>
     <div id="bx1"><img src={im2}></img><h4 id='zq'>Participated in World Roller Games @Barcelona and secured 18th position</h4></div>
     <div id="bx3"><img classname='az' src={im3}></img>
     <h4 id='zq'>Represented India in 17th  Asian Roller Skating Championship @Lishui</h4></div>
     </div>
         </div>
    )
}