
const Validation = (value) => {
    let errors = {}

    if(!value.email){
        errors.email = 'Email Required'
    }
    else if(value.email.length < 5){
        errors.email = "email must be at least 5 characters"
    }
    
    if(!value.password){
        errors.password = 'Password Required'
    }
    else if(value.password.length < 8){
        errors.password = "password must be at least 8 characters"
    }

    return errors;
}

export default Validation;