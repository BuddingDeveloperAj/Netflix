import { useRef, useState } from "react"
import validateForm from "../../Utils/formValidator"
import { Link } from "react-router-dom"

const SignInForm = () => {
    const email = useRef('')
    const password = useRef('')

    const [formError, setFormError] = useState({})

    const handleSubmit = async () => {
        const emailValue = email.current?.value ?? ''
        const passwordValue = password.current?.value ?? ''

        let errors = validateForm({ isSignIn: true, email: emailValue, password: passwordValue })

        if (Object.keys(errors).length) {
            setFormError(errors)
        }

    }

    return (
        <div className="absolute z-20 w-3/12 bg-black p-7 my-52 right-0 left-0 mx-auto opacity-90 rounded-lg ">
            <form>
                <p className="font-bold text-white text-3xl p-3 mb-5">Sign In</p>
                <p className="text-red-600 font-semibold">{formError?.email}</p>
                <input className="p-3 mb-4 w-full  bg-zinc-900 rounded-sm  text-white text-lg" placeholder="Email" ref={email} type="text" />
                <p className="text-red-600 font-semibold">{formError?.password}</p>
                <input className="p-3 mb-4 w-full  bg-zinc-900 rounded-sm  text-white text-lg" ref={password} placeholder="Password" type="password" />
                <button onClick={handleSubmit} className="bg-red-600 p-3 w-full my-4 rounded-sm text-white font-semibold" type="button">Sign In</button>
            </form>
            <p className="text-white mt-5">Already a user? <span><Link to="/signup" className="font-bold">Sign Up now.</Link></span></p>
        </div>
    )
}

export default SignInForm