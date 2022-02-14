import Button from "../components/ui/Button";
import '../css/buttonPage.css'

const ButtonPage = ()=>{
    const btnClick = () => {
        alert("btnClick")
    }

    return (
    <>
        <Button click={btnClick}>Click Button</Button>
        <Button disabled>Disabled Button</Button>
    </>
    )
}

export default ButtonPage;