import {useEffect,useState} from "react";

import API from "../services/api";



const useLeads=(search)=>{


const [leads,setLeads]=useState([]);

const [loading,setLoading]=useState(false);



const fetchLeads=async()=>{


try{


setLoading(true);


const response =
await API.get(
`/leads?search=${search}`
);



setLeads(
response.data.leads
);



}
catch(error){

console.log(error);

}
finally{

setLoading(false);

}


};



useEffect(()=>{


fetchLeads();


},[search]);



return {

leads,
loading,
fetchLeads

};


};


export default useLeads;