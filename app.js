const express = require("express");
const app = express();
const isEmpty = require("./validation.js");

app.use(express.json());

app.post(
	"/",
	isEmpty("username"),
	isEmpty("email"),
	isEmpty("phoneNumber"),
	(req, res) => {
		const result = [
			{ empty: req.emptyUsername, resp: "username is empty\n" },
			{ empty: req.emptyEmail, resp: "email is empty\n" },
			{
				empty: req.emptyPhoneNumber,
				resp: "phoneNumber is empty\n",
			},
		];
		let message = "";
		for (const param of result) {
			if (param.empty) message += param.resp;
		}
		if (message) return res.status(400).send(message);
		res.send("everything is ok!!");
	}
);

app.listen(8000);
