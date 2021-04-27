import express, { Application, Request, Response } from "express";

const app: Application = express();
const port = 7000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
