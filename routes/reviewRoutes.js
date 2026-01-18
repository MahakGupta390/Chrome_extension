const express = require("express");
const Review = require("../models/Review");
const authMiddleware = require("../middleWare/authMiddleWare.js");

const router = express.Router();

// 🔒 Protected: add review
router.post("/", authMiddleware, async (req, res) => {
  try {
    console.log("Incoming review data:", req.body); 
    const { rating, message } = req.body;

    if (!message) {
      return res.status(400).json({ message: "Message is required" });
    }

    const review = new Review({
      userId: req.user._id,
      userName: req.user.name,
      rating,
      message,
    });

    await review.save();
    res.status(201).json({ success: true, review });
  } catch (err) {
    res.status(500).json({ message: "Failed to add review" });
  }
});

// 🌍 Public: get all reviews
router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch reviews" });
  }
});
// DELETE a review
router.delete("/:id", async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);

    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    // Optional: Check if the user deleting it is the owner
    // if (review.userId.toString() !== req.user.id) {
    //   return res.status(401).json({ message: "Unauthorized" });
    // }

    await Review.findByIdAndDelete(req.params.id);
    res.json({ message: "Review deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
