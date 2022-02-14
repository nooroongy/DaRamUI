import { useState } from "react";
import Toogle, { useToggle } from "../components/ui/Toogle";
import LayoutList from "../layout/LayoutList";
import '../css/tooglePage.css'


const TogglePage = () => {
    const toggle01 = useToggle(false);
    const toggle02 = useToggle(false);

    const [text,setText] = useState(true)

    const lists = [
        {
            title: 'preview', contents: (<><Toogle link={toggle01}></Toogle>
            </>)
        }, {
            title: 'properties', contents: (<>
                <div className="tooglePage__props_wrap">
                    <button className="tooglePage_button" onClick={function () { toggle01.setValue(!toggle01.value) }}>change props</button>
                    <span>value:</span>
                    <span>{toggle01.value ? 'true' : 'false'}</span>
                </div>
            </>)
        }, {
            title: 'api', contents: (<>
                <div className="tooglePage__api_wrap">
                    <button className="tooglePage_button" onClick={function () { toggle01.toggle() }}>.toogle()</button>
                    <button className="tooglePage_button" onClick={function () { toggle01.disabled(true) }}>.disabled(true)</button>
                    <button className="tooglePage_button" onClick={function () { toggle01.disabled(false) }}>.disabled(false)</button>
                    <button className="tooglePage_button" onClick={function () { toggle01.setValue(true) }}>.setValue(true)</button>
                    <button className="tooglePage_button" onClick={function () { toggle01.setValue(false) }}>.setValue(false)</button>
                </div>
            </>)
        }, {
            title: 'event', contents: (<>
                <div className="tooglePage__event_wrap">
                    <span className={"tooglePage_span " + (!text ? 'clicked' :'')}>{text ? 'before CLick' : 'after CLick'}</span>
                    <span> click here =></span>
                    <Toogle link={toggle02} onClick={function(){setText(res=>!res)}}></Toogle>
                </div>
            </>)
        },
    ]

    return (
        <LayoutList
            lists={lists}
        />
    )
}

export default TogglePage;