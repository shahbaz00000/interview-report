const express = require('express');
const router = express.Router();
const {createInterviewReport} = require('../controllers/interviewReportController.js');
const upload = require('../middleware/fileUploadMiddleware.js');

/**
 * @route POST /api/interview-report
 * @desc Generate an interview report based on resume, self-description, and job description
 * @access private
 */
router.post('/generate-report', upload.single('resume'),createInterviewReport);

module.exports = router;  