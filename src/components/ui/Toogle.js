import { useEffect, useState } from 'react';
import '../../css/toogle.css'


export const useToggle = initialValue => {
    const [value, setValue] = useState(initialValue);
    const [_disabled, _setDiabled] = useState(false);
    const toggle = () => {
        if (!_disabled)
            setValue(res => !res);
    }

    const disabled = (bool) => {
        if (bool !== undefined) {
            _setDiabled(bool)
        } else {
            return _disabled;
        }
    }

    const clicked = (bool) => {
        if (!_disabled)
            setValue(bool);
    }

    return { value, clicked, toggle, disabled }
}

const Toogle = ({ onClick, link = [] }) => {
    const [on, setOn] = [link.value, link.clicked];

    useEffect(() => {
        setOn(link.value)
    }, [link.value])

    function onClickToogle() {
        if (!link.disabled()) {
            setOn(res => !res);
            if (typeof onClick === 'function')
                onClick();
        }
    }
    return (
        <span className={
            'toogle__wrap '
            + (on ? 'toogle__on ' : '')
            + (link.disabled() ? 'toogle__disabled ' : '')
        }
            onClick={onClickToogle}>
            <span className='toogle__ball'></span>
        </span>
    )
}

export default Toogle;