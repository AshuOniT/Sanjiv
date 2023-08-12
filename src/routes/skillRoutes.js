const express = require('express');
const router = express.Router();
const skillController = require('../controllers/skillController');

// Skill routes
router.post('/skill', skillController.createSkill);

// Sub-skill routes
router.post('/subskill', skillController.createSubSkill);

module.exports = router;
