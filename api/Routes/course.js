const express = require("express");
const router = express.Router();
const Course = require("../Models/courseModel");
const insertData = require("../insertData/insertData");

router.post("/insert", async (req, res) => {
    try {
        if (!insertData || insertData.length === 0) {
            throw new Error('No course data available');
        }
        const storeCourse = await Course.insertMany(insertData);
        console.log("Data inserted");
        res.status(200).json(storeCourse);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
});

router.get("/course", async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
});

router.get("/course/:id", async (req, res) => {
    try {
        const courseId = req.params.id;
        const course = await Course.findOne({ id: courseId });
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.status(200).json(course);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
