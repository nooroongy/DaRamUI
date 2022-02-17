import { useEffect, useState } from 'react';
import '../../css/select.css'


export const useSelect = initialOptions => {
    const [value, setValue] = useState(0);
    const [_disabled, _setDiabled] = useState(false);

    const disabled = (initialValue) => {
        if (initialValue !== undefined) {
            _setDiabled(initialValue)
        } else {
            return _disabled;
        }
    }

    const val = (value) => {
        if (!_disabled)
            setValue(value);
    }

    return { value, disabled, val, initialOptions }
}

const Select = ({ onClick, link = {} }) => {
    const [selectedValue, setSelectedValue] = [link.initialOptions[0].value, link.val];
    // const [selectedText, setSelectedText] = [link.initialOptions[0].text,null];
    const [selectedText, setSelectedText] = useState();
    const [options, setOptions] = useState(link.initialOptions)
    const [isOpend, setIsOpend] = useState(false);


    function onClickSelect() {
        if (!link.disabled()) {
            if (typeof onClick === 'function')
                onClick();
        }
    }

    function openSelect() {
        setIsOpend(true);
    }

    function closeSelect(){
        setIsOpend(false);
    }

    function selectOption(e){
        console.log(e.target)
        setSelectedText(e.target.innerText)
    }



    return (
        <span className={
            'select_wrap '
            + (isOpend ? 'select__opend ' : '')
            + (link.disabled() ? 'select__disabled ' : '')}
            onClick={onClickSelect}>
            <span className='select__option_visible' style={{
                height: (isOpend ? options.length * 27 : 27) + 'px'
            }}>

                <span className='select__options_wrap' style={{
                    height: options.length * 27 + 'px'
                }}>
                    {options.map((option, i) => {
                        return (<span
                            onClick={selectOption}
                            className='select__option'
                            key={i}
                            select-value={option.value}>{option.text}</span>)
                    })}
                </span>
            </span>
            <input type='checkbox' className='select__ckicker' onClick={openSelect} onBlur={closeSelect} />
            <span className='select__selectedText'>{selectedText}</span>
        </span>
    )
}

export default Select;