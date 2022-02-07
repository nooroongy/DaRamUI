import { Link } from "react-router-dom"

const MainMenu = () =>{
    const menuList = [
        'button',
        'input',
        'toggle',
        'select',
    ]

    return(
        <>
            {menuList.map((v,i)=><Link key={i} to={v}><div>{v}</div></Link>)}
        </>
    )
}

export default MainMenu;