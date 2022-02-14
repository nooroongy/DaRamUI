import { useEffect, useState } from 'react';
import '../../css/toogle.css'


export const useToggle = val => {
    const [value, _setValue] = useState(val);
    const [_diabled, _setDiabled] = useState(false);
    const toggle = () => {
        if (!_diabled)
            _setValue(res => !res);
    }

    const disabled = (val) => {
    if (val !== undefined) {
            _setDiabled(val)
        }
    }

    const setValue = (val)=>{
        if (!_diabled)
            _setValue(val);
    }

    return { value, setValue, toggle, _diabled, _setDiabled, disabled }
}

const Toogle = ({ onClick, link = [] }) => {
    const [on, setOn] = [link.value, link.setValue];
    const [disabled, setDisabled] = [link._diabled, link._setDiabled];

    console.log(on, disabled)
    useEffect(() => {
        setOn(link.value)
    }, [link.value])

    function onClickToogle() {
        if (!disabled) {
            setOn(res => !res);
            if (typeof onClick === 'function')
                onClick();
        }
    }
    return (
        <span className={
            'toogle__wrap ' 
            + (on ? 'toogle__on ' : '')
            + (disabled ? 'toogle__disabled ' : '')
        }
            onClick={onClickToogle}>
            <span className='toogle__ball'></span>
        </span>
    )
}

export default Toogle;