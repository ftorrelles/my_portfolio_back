const express = require("express");
const router = express.Router();
const sendEmail = require("../utils/sendEmail");

// colocar las rutas aquí
router.get("/", (req, res) => {
    res.send("Welcome to express");
});

router.post("/emails/contact", async (req, res) => {
    const { name, email, comment } = req.body;
    await sendEmail({
        to: "torrellesf93@gmail.com",
        subject: "Mensaje del protafolio",
        html: ` 
				<h1>Hi Francisco, someone wrote to you from your portfolio.</h1>
                <br>
                <br>
                <p><span>Name: </span>${name}</p>
                <p><span>Email: </span>${email}</p>
                <br>
                <p><span>comment: </span>${comment}</p>
				
            `,
    });
    return res.json("Email sent succesfully");
});

module.exports = router;
