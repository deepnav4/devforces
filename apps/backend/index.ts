import express from "express";
import userRouter from "./routes/user.js";
import adminRouter from "./routes/admin.js";
import contestRouter from "./routes/contest.js";

const port = process.env.PORT || 3000;
const app = express();


app.use("/user",userRouter);
app.use("/admin",adminRouter);
app.use("/contest",contestRouter);



app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
});

