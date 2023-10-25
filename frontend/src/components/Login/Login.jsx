import Body from "./Body"
import Header from "./Header"

// eslint-disable-next-line react/prop-types
const Login = ({ signIn }) => {
    return (
        <>
            <Header />
            <Body signIn={signIn} />
        </>
    )
}

export default Login