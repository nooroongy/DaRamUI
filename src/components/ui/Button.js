import '../../css/button.css'

const Button = (btnObj) => {
    const {children, className, click, disabled } = btnObj;

    const buttonClick = (parentEvent, e) => {
        if(typeof(parentEvent) != "undefined")
        parentEvent(e);
    }

    return (
        <button 
            className={
                className 
                + (disabled ? ' button__disabled ' : '')
            }
            onClick={(e)=>buttonClick(click,e)}
            disabled={disabled}
        >
            {children}
        </button>
    )
}
export default Button;