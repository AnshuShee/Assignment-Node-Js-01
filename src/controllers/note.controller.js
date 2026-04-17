const Note = require("../models/note.model");
const mongoose = require("mongoose");

// @desc    Create a single note
// @route   POST /api/notes
// @access  Public
const createNote = async (req, res) => {
  try {
    const { title, content, category, isPinned } = req.body;

    // Validation
    if (!title || !content) {
      return res.status(400).json({
        success: false,
        message: "Title and content are required",
        data: null
      });
    }

    const note = await Note.create({
      title,
      content,
      category,
      isPinned
    });

    res.status(201).json({
      success: true,
      message: "Note created successfully",
      data: note
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Server Error",
      data: null
    });
  }
};


// @desc    Create multiple notes
// @route   POST /api/notes/bulk
// @access  Public
const bulkCreateNotes = async (req, res) => {
  try {
    const { notes } = req.body;

    // Validation
    if (!notes || !Array.isArray(notes) || notes.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Please provide an array of notes",
        data: null
      });
    }

    const createdNotes = await Note.insertMany(notes);

    res.status(201).json({
      success: true,
      message: `${createdNotes.length} notes created successfully`,
      data: createdNotes
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Server Error",
      data: null
    });
  }
};


// @desc    Get all notes
// @route   GET /api/notes
// @access  Public
const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();

    res.status(200).json({
      success: true,
      message: "Notes fetched successfully",
      data: notes
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Server Error",
      data: null
    });
  }
};


// @desc    Get a single note by ID
// @route   GET /api/notes/:id
// @access  Public
const getNoteById = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Note ID",
        data: null
      });
    }

    const note = await Note.findById(id);

    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
        data: null
      });
    }

    res.status(200).json({
      success: true,
      message: "Note fetched successfully",
      data: note
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Server Error",
      data: null
    });
  }
};


// @desc    Replace a note completely (PUT)
// @route   PUT /api/notes/:id
// @access  Public
const replaceNote = async (req, res) => {
  res.status(501).json({ success: false, message: "Not implemented" });
};

// @desc    Update specific fields (PATCH)
// @route   PATCH /api/notes/:id
// @access  Public
const updateNote = async (req, res) => {
  res.status(501).json({ success: false, message: "Not implemented" });
};

// @desc    Delete a single note
// @route   DELETE /api/notes/:id
// @access  Public
const deleteNote = async (req, res) => {
  res.status(501).json({ success: false, message: "Not implemented" });
};

// @desc    Delete multiple notes
// @route   DELETE /api/notes/bulk
// @access  Public
const bulkDeleteNotes = async (req, res) => {
  res.status(501).json({ success: false, message: "Not implemented" });
};

module.exports = {
  createNote,
  bulkCreateNotes,
  getAllNotes,
  getNoteById,
  replaceNote,
  updateNote,
  deleteNote,
  bulkDeleteNotes
};
