export const validateLead=(form)=>{


let errors={};


if(!form.name.trim()){

errors.name="Name required";

}


if(!form.email.includes("@")){

errors.email="Valid email required";

}


if(!form.budget){

errors.budget="Select budget";

}


if(form.message.length < 10){

errors.message=
"Minimum 10 characters";

}


return errors;


};