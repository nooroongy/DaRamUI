import '../css/layout/layout_list.css'

const Layout_list = ({title,contents=[]}) =>{
    const getContents = (i) =>{
        return contents.length>=i ? contents[i] : ''

    }
    return(
        <div className="Layout__list_wrap">
            {title.map((v,i)=>{
                return(
                    <>
                        <div className='Layout__list_title' key={i}>{v}</div>
                        <div className='Layout__list_contents' >{getContents(i)}</div>
                    </>
                )
            })}
        </div>
    )
}

export default Layout_list