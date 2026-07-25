import {useState} from "react";

import API from "../services/api";

import {
validateLead
}
from "../utils/validation";



function LeadForm(){


const [form,setForm]=useState({

name:"",
email:"",
budget:"",
message:""

});


const [errors,setErrors]=useState({});



const handleChange=(e)=>{


setForm({

...form,

[e.target.name]:
e.target.value

});


};



const submitHandler=async(e)=>{


e.preventDefault();



const validation =
validateLead(form);



setErrors(validation);



if(Object.keys(validation).length)
return;



try{


await API.post(
"/leads",
form
);



alert(
"Lead Submitted Successfully"
);



setForm({

name:"",
email:"",
budget:"",
message:""

});



}
catch(error){


alert(
"Something went wrong"
);


}


};




return (

<form onSubmit={submitHandler}>


<input

name="name"

placeholder="Name"

value={form.name}

onChange={handleChange}

/>

<p>{errors.name}</p>




<input

name="email"

placeholder="Email"

value={form.email}

onChange={handleChange}

/>

<p>{errors.email}</p>




<select

name="budget"

value={form.budget}

onChange={handleChange}

>


<option value="">
Select Budget
</option>

<option>
0-50000
</option>

<option>
50000-100000
</option>

<option>
100000+
</option>


</select>



<textarea

name="message"

placeholder="Message"

value={form.message}

onChange={handleChange}

/>


<p>{errors.message}</p>




<button>

Submit Lead

</button>


</form>

);


}


export default LeadForm;