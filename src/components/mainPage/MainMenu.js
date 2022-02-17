import { Link } from "react-router-dom"
import '../../css/mainmenu.css'

const MainMenu = () =>{
    const daramui = true;

    const uiList = [
        'Button',
        'Input',
        'Toggle',
        'Select',
        'Card',
    ]

    const layoutList =[
        'list',
    ]

    return(
        <div className="mainmenu__wrap">
            {uiList.map((v,i)=><Link key={i} to={(daramui ? 'daramui/' : '') + v.toLowerCase()}><div className="mainmenu__menu_ui">{v}</div></Link>)}
            {layoutList.map((v,i)=><Link key={i} to={(daramui ? 'daramui/' : '') + v.toLowerCase()}><div className="mainmenu__menu_layout">{v}</div></Link>)}
        </div>
    )
}

export default MainMenu;