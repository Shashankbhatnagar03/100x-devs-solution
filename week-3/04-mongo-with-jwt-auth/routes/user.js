const { Router } = require("express");
const userMiddleware = require("../middleware/user");
const {  User, Course } = require("../db");
const {JWT_SECRET} = require("../config");
const router = Router();
const jwt = require("jsonwebtoken");
// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    // check if a user with this username already exists
    await User.create({
        username: username,
        password: password
    })

    res.json({
        message: 'user  created successfully'
    })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    console.log(JWT_SECRET);

    const user = await User.find({
        username,
        password
    })
    if (user) {
        const token = jwt.sign({
            username
        }, JWT_SECRET);

        res.json({
            token
        })
    } else {
        res.status(411).json({
            message: "Incorrect email and pass"
        })
    }
});

router.get('/courses', async (req, res) => {
    const response = await Course.find({});

    res.json({
        courses: response
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    try{
        const { courseId } = req.params;
        const course = await Course.findOne({ _id : courseId });
        
        let token = req.headers.authorization;
       
        token = token.split(' ')[1];
        const decode = jwt.verify(token, JWT_SECRET);
        const user = await User.findOne({ username : decode.username })
        if(!user){ return res.sendStatus(404)}
        user.purchasedCourses.push(course);
        await user.save();
        res.json({
            message: "Course purchased successfully"
        })
    }
    catch(err) {
        res.sendStatus(404);
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic

    try{
        let token = req.headers.authorization;
        token = token.split(' ')[1];
        const decode = jwt.decode(token);
        const user = await User.findOne({ username : decode.username }).populate('purchasedCourses')
        const purchasedCourses = user.purchasedCourses;
        res.json({
            purchasedCourses
        })
    }
    catch(err) {
        res.sendStatus(404);
    }

});

module.exports = router