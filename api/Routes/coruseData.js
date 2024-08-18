// const course = require('../Models/courseModel'); 
// const insertData = require("../insertData/insertData");

// const coursedata = async (req, res) => {
//     try {
//         if (!insertData || insertData.length === 0) {
//             throw new Error('No course data available');
//         }
//         const storeCourse = await course.insertMany(insertData);
//         console.log("data inserted")
//         res.status(200).json(storeCourse);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ error: err.message }); 
//     }
// }

// module.exports = coursedata;
