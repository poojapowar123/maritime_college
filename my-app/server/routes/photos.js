const express = require("express");
const router = express.Router();
const Photo = require("../models/Photo");

// GET all photos
router.get("/", async (req, res) => {
  try {
    const photos = await Photo.find().sort({ uploadedAt: -1 });
    res.json(photos);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
});

// POST new photo
router.post("/", async (req, res) => {
  const { title, url } = req.body;
  if (!title || !url) return res.status(400).json({ error: "Missing fields" });

  try {
    const newPhoto = new Photo({ title, url });
    await newPhoto.save();
    res.status(201).json(newPhoto);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;
