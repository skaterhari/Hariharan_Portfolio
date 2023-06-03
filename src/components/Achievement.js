import img1 from '../assets/img/IMG_3809.jpg';
import img2 from '../assets/img/IMG_3808.JPG';
import img3 from '../assets/img/IMG_3806.JPG'
export const Achievement =()=>{
    return(
    <div>
     <h3>Achievement:</h3>
    <div id="ach">
     <div id="bx1" ><img src={img1} className="a1"/></div>
     <div id="bx1"><img src={img2} className="a1"/></div>
     <div id="bx2"><img src={img3} className='a1'></img></div>
     </div>
         </div>
    )
}