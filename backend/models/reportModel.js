const mongoose = require("mongoose");


const technicalQuestionSchema = new mongoose.Schema({
    question:{
        type:String,
        required:true
    },
    intention:{
        type:String,
        required:true   
    },
    answer:{
        type:String,
        required:true
    },
});

const behavioralQuestionSchema = new mongoose.Schema({
    question:{
        type:String,
        required:true   
    },
    intention:{
        type:String,
        required:true   
    },
    answer:{
        type:String,
        required:true
    },
});

const skillgapSchema = new mongoose.Schema({
    skill:{
        type:String,
        required:true
    },
    severity:{
        type:String,
        enum:["low","medium","high"],
        required:true
    }
});

const preparationPlanSchema = new mongoose.Schema({
    day:{
        type:Number,
        required:true
    },
    focus:{
        type:String,
        required:true
    },
   task:[{
        type:String,
        required:true
   }]
});




const interviewReportSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:false
    },
    resume:{
        type: String,
        required:true
    },
    selfDescription:{
        type:String,
        required:true
    },
    jobDescription:{
        type:String,
        required:true
    },
    score:{
        type:Number,
        min:0,
        max:100,
        required:true
    },   
    technicalQuestions:[technicalQuestionSchema],
    behavioralQuestions:[behavioralQuestionSchema],
    skillGaps:[skillgapSchema],
    preparationPlan:[preparationPlanSchema],

},{timestamps:true});

const InterviewReport = mongoose.model('InterviewReport',interviewReportSchema);

module.exports = InterviewReport;
