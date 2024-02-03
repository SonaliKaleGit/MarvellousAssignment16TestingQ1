//import { register } from "module"

const isDigit=new RegExp(/(?=(.*\d){2})/g)  //atleast 2 digits
const isLower=new RegExp(/(?=(.*[a-z]){3})/g)  //atleast 3 lower case chars
const isUpper=new RegExp(/(?=(.*[A-Z]){2})/g)  //atleast 2 upper case chars
const isSpecial=new RegExp(/(?=(.*[!@#$%]){1})/g) // atleast 1 special chars

export function CheckPassword (currentPassword:string):boolean  {
    if
    (
        currentPassword.match(isUpper) &&
        currentPassword.match(isLower) &&
        currentPassword.match(isDigit) &&
        currentPassword.match(isSpecial)
    )
    {
        return true;
    }
    return false;
}

let password="SOnali12@";
let result=CheckPassword(password);
console.log(result);

