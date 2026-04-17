const express = require("express");
const router = express.Router();
const { 
  createNote,
  bulkCreateNotes,
  getAllNotes,
  getNoteById,
  replaceNote,
  updateNote,
  deleteNote,
  bulkDeleteNotes
} = require("../controllers/note.controller");

router.route("/").post(createNote).get(getAllNotes);
router.route("/bulk").post(bulkCreateNotes).delete(bulkDeleteNotes);
router.route("/:id").get(getNoteById).put(replaceNote).patch(updateNote).delete(deleteNote);

module.exports = router;
