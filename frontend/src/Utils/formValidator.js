function validateForm(props) {
    console.log(props)
    const { isSignIn, email, name, password } = props
    const errors = {};

    // Email Validation
    if (!email) {
        errors.email = "Email is required";
    } else if (!isValidEmail(email)) {
        errors.email = "Invalid email address";
    }

    // Name Validation
    if (!isSignIn && !name) {
        errors.name = "Name is required";
    }

    // Password Validation
    if (!password) {
        errors.password = "Password is required";
    } else if (password.length < 8) {
        errors.password = "Password must be at least 8 characters long";
    }

    return errors;
}

function isValidEmail(email) {
    // A simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export default validateForm