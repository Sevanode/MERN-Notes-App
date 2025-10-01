import express from "express";
import { createNote,deletNote,getAllnotes, updateNote } from "../controllers/notesController";

const router = express.Router();


router.get("/", getAllnotes);

router.post("/", createNote);

router.put("/", updateNote);

router.delete("/", deletNote);


export default router;

