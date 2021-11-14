const { check, validationResult } = require("express-validator");

module.exports.postRules = [check("name", "Name is required").not().isEmpty(), check("type", "Type must be personal or professional").isIn(["personal", "professional"])];

module.exports.validatePost = (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}
	return next();
};
