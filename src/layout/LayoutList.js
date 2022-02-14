import '../css/layout/layout_list.css'

const Layout_list = ({lists=[]}) =>{
    return(
        <div className="Layout__list_wrap">
            {lists.map((v,i)=>{
                return(
                    <div key={i}>
                        <div className='Layout__list_title'>{v.title}</div>
                        <div className='Layout__list_contents'>{v.contents}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default Layout_list