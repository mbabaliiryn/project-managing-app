const regex = {
    email: new RegExp(
        /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm"
        ),
    number: new RegExp( 'ˆ[0-9]+$'),
};
export class Validators{
    static email(value,message){
        if(value){
            const result = regex.email.test(value);
            if(!result) return {error: true,message}
        }
    }
    static required(value,message){
        if(!value || !value.toString().trim().length){
            return {error: true,message};
        }
        return false;
    }
    static number(value,message){
        const length = value?value.toString().length : 0;
        if(length>0){
            const result = regex.number.test(value);
            if(!result){
                return{error: true, message};
            }
        }
        return false;
    }
}
export const validateInput = (validators,value)=>{
    if(validators && validators.length){
        for (let i = 0; i < validators.length; i++) {
            const error = validators[i].check(value,validators[i].message);
            if(error){
                return error;
            }
            
          }
    }
    return false;
}
