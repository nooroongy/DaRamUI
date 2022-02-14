import '../css/layout/layout_default.css'

const LayoutDefault = ({left,right,top,bottom,center}) =>{
    return(
        <div className="layout__default_wrap">
            <div className='layout__default_left'>{left}</div>
            <div className='layout__default_right'>{right}</div>
            <div className='layout__default_top'>{top}</div>
            <div className='layout__default_bottom'>{bottom}</div>
            <div className='layout__default_center'>{center}</div>
        </div>
    )
}

export default LayoutDefault