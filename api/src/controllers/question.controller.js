const handleError = require("../middleware/handleError");
const pool = require("../config/db");

exports.getRandomQuestion = async (req, res, next) => {
  try {
    const { category, type, difficulty } = req.query;

    const catStr = "category";
    const typeStr = "type";
    const diffStr = "difficulty";

    let queryStr = `SELECT * FROM questions BY RANDOM() LIMIT 1`;

    let tempClauses = [];
    let params = [];

    if (category != undefined) {
      tempClauses.push(catStr);
      params.push(category);
    }
    if (type != undefined) {
      tempClauses.push(typeStr);
      params.push(type);
    }
    if (difficulty != undefined) {
      tempClauses.push(diffStr);
      params.push(difficulty);
    }
    filterClauses = [];
    for (let i = 0; i < tempClauses.length; i++) {
      filterClauses.push(`${tempClauses[i]}=$${i + 1}`);
    }

    filterClauses = filterClauses.join(" AND ");

    queryStr = `SELECT * FROM questions WHERE ${filterClauses} ORDER BY RANDOM() LIMIT 1`;

    const randQuestion = await pool.query(queryStr, params);

    res.status(200).json(randQuestion.rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.getQuestionById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const question = await pool.query(
      "SELECT * FROM questions WHERE question_id=$1",
      [id]
    );
    res.status(200).json(question.rows[0]);
  } catch (e) {
    handleError(e);
  }
};

exports.createQuestion = async (req, res, next) => {
  try {
    const {
      category,
      type,
      difficulty,
      question,
      correct_answer,
      incorrect_answers,
    } = req.body;

    const newQuestion = await pool.query(
      "INSERT INTO questions (category, type, difficulty, question, correct_answer, incorrect_answers) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [category, type, difficulty, question, correct_answer, incorrect_answers]
    );
    res.status(200).json({
      "Question successfully created": newQuestion.rows[0],
    });
  } catch (e) {
    handleError(e);
  }
};
