import LayoutDefault from "../layout/LayoutDefault";
import '../css/layout.css'

const Layout = ({type = 'default',left,right,top,bottom,center,fullscreen=false}) =>{
    function getLayout(type){
        switch(type){
            case '' : return (<></>);
            default: return(<LayoutDefault
                left ={left}
                right ={right}
                top ={top}
                bottom ={bottom}
                center ={center}
            />)
        }
    }

    return(
        <span className={fullscreen ? 'layout__fullscreen':''}>
            {getLayout()}
        </span>
    )
}

export default Layout;