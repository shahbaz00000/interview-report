const { GoogleGenAI } = require("@google/genai");

console.log("GoogleGenAI module loaded successfully",process.env.GOOGLE_GENAI_API_KEY);
const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_GENAI_API_KEY,
});

const interviewSchema = {
  type: "object",
  properties: {
    score: {
      type: "number",
      description:
        "a score between 0 to 100 indicating how well the candidate profile matches the job description",
    },
    technicalQuestions: {
      type: "array",
      description: "technical questions asked in the interview",
      items: {
        type: "object",
        properties: {
          question: {
            type: "string",
            description: "the technical question asked in the interview",
          },
          intention: {
            type: "string",
            description: "the intention behind asking the question",
          },
          answer: {
            type: "string",
            description:
              "how to answer this question, what points to cover, what approach to take",
          },
        },
        required: ["question", "intention", "answer"],
      },
    },
    behavioralQuestions: {
      type: "array",
      description: "behavioral questions asked in the interview",
      items: {
        type: "object",
        properties: {
          question: {
            type: "string",
            description: "the behavioral question asked in the interview",
          },
          intention: {
            type: "string",
            description: "the intention behind asking the question",
          },
          answer: {
            type: "string",
            description:
              "how to answer this question, what points to cover, what approach to take",
          },
        },
        required: ["question", "intention", "answer"],
      },
    },
    skillGaps: {
      type: "array",
      description: "skills in which the candidate is lacking",
      items: {
        type: "object",
        properties: {
          skill: {
            type: "string",
            description: "the skill in which the candidate is lacking",
          },
          severity: {
            type: "string",
            description: "severity of the skill gap: low, medium, or high",
            enum: ["low", "medium", "high"],
          },
        },
        required: ["skill", "severity"],
      },
    },
    preparationPlan: {
      type: "array",
      description: "a day-wise preparation plan for the candidate",
      items: {
        type: "object",
        properties: {
          day: {
            type: "number",
            description: "the day number of the preparation plan, for example 1",
          },
          focus: {
            type: "string",
            description: "the focus area of the day",
          },
          task: {
            type: "array",
            description: "the tasks to be done on that day",
            items: {
              type: "string",
            },
          },
        },
        required: ["day", "focus", "task"],
      },
    },
  },
  required: [
    "score",
    "technicalQuestions",
    "behavioralQuestions",
    "skillGaps",
    "preparationPlan",
  ],
};

const generateInterviewReport = async ({
  selfDescription,
  jobDescription,
  resume,
}) => {
  const prompt = `You are an expert technical interviewer and career coach.Generate a detailed interview report based on the following:

Resume: ${resume}
Self Description: ${selfDescription}
Job Description: ${jobDescription}

Analyze the candidate's profile against the job requirements and generate:
- A match score (0-100)
- Relevant technical and behavioral interview questions with answers
- Skill gaps with severity
- A day-wise preparation plan
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash-lite",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: interviewSchema,
      temperature: 0,
      topP: 0.1, 
    },
  });

  const result = JSON.parse(response.text);
  console.log(result);
  return result;
};

module.exports = generateInterviewReport;
