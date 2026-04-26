import express from "express";
import data from "./mock-data/jobApplications.json" with { type: "json" };
import "dotenv/config";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Smart Job Tracker API is running");
});

//read the job applications
app.get("/applications", (req, res) => {
  res.json(data);
});

//add a new jon application
app.post("/applications", (req, res) => {
  const { company, role, status } = req.body;

  const newApplication = {
    id: data.length + 1,
    company,
    role,
    status,
  };

  data.push(newApplication);

  res.status(201).json(newApplication);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
