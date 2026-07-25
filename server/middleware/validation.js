const {
body,
validationResult
}=require("express-validator");



const validateLead=[


body("name")
.notEmpty()
.withMessage(
"Name is required"
),



body("email")
.isEmail()
.withMessage(
"Valid email required"
),



body("budget")
.notEmpty()
.withMessage(
"Budget is required"
),



body("message")
.isLength({
min:10
})
.withMessage(
"Message must contain 10 characters"
)


];





const checkValidation=(req,res,next)=>{


const errors =
validationResult(req);



if(!errors.isEmpty()){


return res.status(400).json({

success:false,

errors:
errors.array()

});


}


next();


};



module.exports={
validateLead,
checkValidation
};