import { Link } from "react-router-dom"
import '../../css/mainmenu.css'

const MainMenu = () =>{
    const menuList = [
        'button',
        'input',
        'toggle',
        'select',
    ]

    return(
        <div className="mainmenu__wrap">
            {menuList.map((v,i)=><Link key={i} to={v}><div className="mainmenu__menu">{v}</div></Link>)}
        </div>
    )
}

export default MainMenu;