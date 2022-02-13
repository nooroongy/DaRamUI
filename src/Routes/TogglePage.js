import Toogle from "../components/ui/Toogle";
import Layout_list from "../layout/LayoutList";

const TogglePage = ()=>{
    const title = ['preview','event','properties','disabled'];
    const contents = [(<Toogle></Toogle>)];
    
    return (
        <Layout_list
            title={title}
            contents={contents}
        />
    )
}

export default TogglePage;