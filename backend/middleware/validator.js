const { check, validationResult } = require("express-validator");

exports.registerRules = () => [
  check(`name`, `This field is required !`).notEmpty(),
  check(`lastName`, `This field is required !`).notEmpty(),
  check(`gender`, `This field is required !`).notEmpty(),
  check("phoneNumber", `This field is required !`).isLength({ min: 8, max: 8 }),
  check("email", `This should be a valide email`).isEmail(),
  check("password", `This field should at least have 4 char !`).isLength({ min: 4 }),
];

exports.questionRules = () => [
  check(`skill`, `This field is required !`).notEmpty(),
  check(`questionBody`, `This field is required !`).notEmpty(),
];


exports.validator = (req, res, next) => {
  const errors = validationResult(req);
  errors.isEmpty() ? next() : res.status(400).json({ errors: errors.array() });
};
