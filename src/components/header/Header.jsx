import "./header.css"
import headerimg from '../../img/headerimg.jpg';

export default function Header() {
  return (
    <div className='header'>
      <div className="headerTitle">
          <span className="headerTitleSm"> K_TECH</span>
          <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg" 
      src={headerimg}
       alt="" 
       />
    </div>
  )
}
