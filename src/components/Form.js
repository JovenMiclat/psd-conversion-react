import Button from "./Button"
import InputEmail from "./InputEmail"

const Form = ({formClass, inputClass, emailValue, btnClass, btnValue}) => {
    return (
        <form className={formClass}>
            <div className={inputClass}>
                <InputEmail emailValue={emailValue}/>
            </div>
            <div className={btnClass}>
                <Button btnValue={btnValue}/>
            </div>
        </form>
    )
}

export default Form
