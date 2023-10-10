export const Validate = (email,password) => {
    const emailValidate = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)
    const passwordValidate = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    const passwordCheck = passwordValidate.test(password)
    
  //  if(name?.length===0 || name.length < 4) return "Enter your full name"
    if(!emailValidate) return "Email is not valid."
    if(!passwordCheck) return "Password is not valid"
    

    return null;
}