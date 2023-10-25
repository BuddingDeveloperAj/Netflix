import { useRef, useState } from "react"
import validateForm from "../../Utils/formValidator"
import { Link } from "react-router-dom"

const SignUpForm = () => {
    const email = useRef('')
    const fullName = useRef('')
    const password = useRef('')

    const [formError, setFormError] = useState({})
    console.log(email)

    const handleSubmit = async () => {
        console.log(email)
        const emailValue = email?.current?.value ?? ''
        const nameValue = fullName?.current?.value ?? ''
        const passwordValue = password?.current?.value ?? ''

        let errors = validateForm({ isSignIn: false, email: emailValue, password: passwordValue, name: nameValue });

        if (Object.keys(errors).length) {
            setFormError(errors)
            return
        }
    }

    return (
        <div className="absolute z-20 w-3/12 bg-black p-7 my-52 right-0 left-0 mx-auto opacity-90 rounded-lg ">
            <form>
                <p className="font-bold text-white text-3xl p-3 mb-5">Sign Up</p>
                <p className="text-red-600 font-semibold">{formError?.name}</p>
                <input className="p-3 mb-4 w-full bg-zinc-900 rounded-sm text-white text-lg" placeholder="Full Name" ref={fullName} type="text" />
                <p className="text-red-600  font-semibold">{formError?.email}</p>
                <input className="p-3 mb-4 w-full  bg-zinc-900 rounded-sm  text-white text-lg" placeholder="Email" ref={email} type="text" />
                <p className="text-red-600  font-semibold">{formError?.password}</p>
                <input className="p-3 mb-4 w-full  bg-zinc-900 rounded-sm  text-white text-lg" ref={password} placeholder="Password" type="password" />
                <button onClick={handleSubmit} className="bg-red-600 p-3 w-full my-4 rounded-sm text-white font-semibold" type="button">Sign Up</button>
            </form>
            <p className="text-white mt-5">New to Netflix? <span><Link to="/signin" className="font-bold">Sign In now.</Link></span></p>

        </div>
    )
}

export default SignUpForm