import { Link } from "react-router-dom"
import '../../css/mainmenu.css'

const MainMenu = () =>{
    const menuList = [
        'Button',
        'Input',
        'Toggle',
        'Select',
    ]

    return(
        <div className="mainmenu__wrap">
            {menuList.map((v,i)=><Link key={i} to={v.toLowerCase()}><div className="mainmenu__menu">{v}</div></Link>)}
        </div>
    )
}

export default MainMenu;