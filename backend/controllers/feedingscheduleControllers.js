// backend/controllers/feedingScheduleController.js
const FeedingSchedule = require('../models/Feedschedule');

// Controller function to create a new feeding schedule entry
exports.createFeedingSchedule = async (req, res) => {
  try {
    const newFeedingSchedule = await FeedingSchedule.create(req.body);
    res.status(201).json(newFeedingSchedule);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Feeding schedule creation failed' });
  }
};

// Controller function to get feeding schedule entries by user ID
exports.getFeedingScheduleByUserId = async (req, res) => {
  try {
    const userId = req.params.userId;
    const feedingSchedules = await FeedingSchedule.find({ userId });
    res.json(feedingSchedules);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller function to update a feeding schedule entry by ID
exports.updateFeedingSchedule = async (req, res) => {
  try {
    const feedingScheduleId = req.params.feedingScheduleId;
    const updatedFeedingSchedule = await FeedingSchedule.findByIdAndUpdate(
      feedingScheduleId,
      req.body,
      { new: true }
    );
    if (!updatedFeedingSchedule) {
      return res.status(404).json({ error: 'Feeding schedule entry not found' });
    }
    res.json(updatedFeedingSchedule);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Feeding schedule update failed' });
  }
};

// Controller function to delete a feeding schedule entry by ID
exports.deleteFeedingSchedule = async (req, res) => {
  try {
    const feedingScheduleId = req.params.feedingScheduleId;
    const deletedFeedingSchedule = await FeedingSchedule.findByIdAndRemove(feedingScheduleId);
    if (!deletedFeedingSchedule) {
      return res.status(404).json({ error: 'Feeding schedule entry not found' });
    }
    res.json({ message: 'Feeding schedule entry deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Feeding schedule entry deletion failed' });
  }
};

// Implement other feeding schedule-related controller functions as needed
