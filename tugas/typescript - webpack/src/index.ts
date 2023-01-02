import express from "express";
import path from "path";
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/*", (req: any, res: { sendFile: (arg0: string) => void; }) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log("Running on port " + port);
});