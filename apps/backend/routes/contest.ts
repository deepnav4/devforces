import { Router } from "express";

const router = Router();


// pagination needed 

router.get("/active",(req,res) => {
    let {offset,page} = req.query;
})

router.get("/finished",(req,res) => {
    let {offset,page} = req.query;
})

router.get("/:contestId",(req,res) => {
    const contestId = req.params.contestId;
})

router.get("/:contestId/:challengeId",(req,res) => {
    const challengeId = req.params.challengeId; 
})

router.get("/leaderboard/:contestId",(req,res) => {
    
})

router.post("/submit/:challengeId",(req,res) => {
    // have rate limit
    // max 20 submissions per hour
    // forward the req to gpt
    // store the response in sorted set and the DB
})


export default router;