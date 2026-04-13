const InterviewReport = require("../models/reportModel.js");
const generateInterviewReport = require("../services/aiServices.js");
const connectMongoDB = require("../config/mongoDB.js");
const { PDFParse } = require("pdf-parse");

const createInterviewReport = async (req, res) => {
  console.log("Received request to create interview report");

  try {``
    const { selfDescription, jobDescription } = req.body;
    const resume = req.file;

    if (!resume || !selfDescription || !jobDescription) {
      return res.status(400).json({
        error: "Resume, self-description, and job description are required",
      });
    }

    const parser = new PDFParse({ data: resume.buffer });
    let data;
    try {
      data = await parser.getText();
    } finally {
      await parser.destroy();
    }
    const resumeText = data.text?.trim();

    if (!resumeText) {
      return res.status(400).json({
        error: "Could not read text from the uploaded resume",
      });
    }

    const report = await generateInterviewReport({
      selfDescription,
      jobDescription,
      resume: resumeText,
    });
    console.log("Generated interview report:", report);
    res.status(201).json({message: "Interview report generated successfully", report });

    
  } catch (error) {
    console.error("Error generating interview report:", error);
    return res.status(500).json({
      error: error.message || "Failed to generate interview report",
    });
  }
};

module.exports = { createInterviewReport };
