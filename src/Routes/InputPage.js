import Input from "../components/ui/Input";

const InputPage = ()=>{
    const inputChange = (e) => {
        console.log("inputChange");
        console.log(e.target.value);
    }
    return (
    <>
        <Input placeholder="test" change={inputChange} maxlength={5}></Input>

    </>
    )
}

export default InputPage;