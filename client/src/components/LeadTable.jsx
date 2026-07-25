import {useState} from "react";

import API from "../services/api";

import useLeads from "../hooks/useLeads";

import SearchBar from "./SearchBar";

import Loader from "./Loader";



function LeadTable(){


const [search,setSearch]=useState("");



const {

leads,

loading,

fetchLeads

}

=
useLeads(search);





const updateStatus=async(id,status)=>{


try{


await API.patch(

`/leads/${id}`,

{
status
}

);



fetchLeads();


}

catch(error){

console.log(error);

}


};





if(loading){

return <Loader/>;

}




return (

<div className="admin-container">


<SearchBar

search={search}

setSearch={setSearch}

/>



<table>


<thead>

<tr>

<th>
Name
</th>


<th>
Email
</th>


<th>
Budget
</th>


<th>
Message
</th>


<th>
Status
</th>


</tr>

</thead>



<tbody>


{

leads.length===0 ?


<tr>

<td colSpan="5">

No Leads Found

</td>

</tr>



:

leads.map((lead)=>(


<tr key={lead._id}>


<td>
{lead.name}
</td>


<td>
{lead.email}
</td>


<td>
{lead.budget}
</td>


<td>
{lead.message}
</td>



<td>


<select


value={lead.status}


onChange={(e)=>

updateStatus(

lead._id,

e.target.value

)

}


>


<option>
New
</option>


<option>
Contacted
</option>


<option>
Closed
</option>


</select>


</td>


</tr>


))


}


</tbody>


</table>


</div>

);


}


export default LeadTable;