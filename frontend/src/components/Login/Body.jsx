import SignUpForm from "./SignUpForm"
import SignInForm from "./SignInForm"

// eslint-disable-next-line react/prop-types
const Body = ({ signIn }) => {

    return (
        <div>
            <img className="absolute" src="https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="background" width="100%" />
            {signIn ? <SignInForm /> : <SignUpForm />}
        </div>
    )
}

export default Body