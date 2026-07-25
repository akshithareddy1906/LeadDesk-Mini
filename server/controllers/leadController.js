const Lead =
require("../models/Lead");



// CREATE LEAD

exports.createLead =
async(req,res,next)=>{


try{


const lead =
await Lead.create(
req.body
);



res.status(201)
.json({

success:true,

message:
"Lead created successfully",

lead

});


}
catch(error){

next(error);

}


};






// GET ALL LEADS


exports.getLeads =
async(req,res,next)=>{


try{


const search =
req.query.search || "";



const leads =
await Lead.find({

$or:[


{
name:{
$regex:search,
$options:"i"
}
},


{
email:{
$regex:search,
$options:"i"
}
}


]


})
.sort({
createdAt:-1
});



res.json({

success:true,

count:leads.length,

leads

});


}
catch(error){

next(error);

}


};






// UPDATE STATUS


exports.updateStatus =
async(req,res,next)=>{


try{


const lead =
await Lead.findByIdAndUpdate(

req.params.id,


{
status:req.body.status
},


{
new:true
}

);



res.json({

success:true,

lead

});


}
catch(error){

next(error);

}


};