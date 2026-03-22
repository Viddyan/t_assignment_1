// generate-result.js

const fs = require("fs")

// Dummy values (you can improve later)
const totalTests = 2
const passedTests = 2

const result = {
  studentId: process.env.GITHUB_ACTOR,
  repo: process.env.GITHUB_REPOSITORY,
  assignment: "math-assignment",
  totalTests,
  passedTests,
  score: (passedTests / totalTests) * 100,
  timestamp: new Date()
}

fs.writeFileSync("result.json", JSON.stringify(result))