import { Link } from "react-router-dom"
import '../../css/mainmenu.css'

const MainMenu = () =>{
    const daramui = true;

    const menuList = [
        'Button',
        'Input',
        'Toggle',
        'Select',
        'Card',
    ]

    return(
        <div className="mainmenu__wrap">
            {menuList.map((v,i)=><Link key={i} to={(daramui ? 'daramui/' : '') + v.toLowerCase()}><div className="mainmenu__menu">{v}</div></Link>)}
        </div>
    )
}

export default MainMenu;