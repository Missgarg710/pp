const Question = require("./model/questionModal.js");

const createQuestion = async (req, res) => {
	// const { category, title, description } = req.body;

	const newQuestion = new Question({
		category: req.body.category,
		title: req.body.title,
		description: req.body.description
	});

	try {
		await newQuestion.save();
		res.status(201).json(newQuestion);
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};

const getQuestions = async (req, res) => {
	const questions = await Question.find();
	res.status(200).json(questions);
};

module.exports = {
	createQuestion,
	getQuestions,
};
