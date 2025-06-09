import express from "express";

// jai baabe ki
const app = express();
const PORT = process.env.PORT || 8000;
app.get("/", (req, res) => {
  res.json({ message: "serber os runnig " });
});

app.listen(PORT, () => console.log(`server is running on ${PORT}`));
