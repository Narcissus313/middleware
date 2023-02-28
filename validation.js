const isEmpty = (key) => {
	const wrapper = (req, _res, next) => {
        const { username, email, phoneNumber } = req.body;
        
		if (key == "username") {
			req.emptyUsername = !Boolean(username ? username.trim().length : 0);
			next();
		}
		if (key == "email") {
			req.emptyEmail = !Boolean(email ? email.trim().length : 0);
			next();
		}
		if (key == "phoneNumber") {
			req.emptyPhoneNumber = !Boolean(
				phoneNumber ? phoneNumber.trim().length : 0
			);
			next();
		}
	};
	return wrapper;
};

module.exports = isEmpty;
