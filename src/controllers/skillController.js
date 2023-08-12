const Skill = require('../models/Skill');
const SubSkill = require('../models/SubSkill');

// Create a new skill
exports.createSkill = async (req, res) => {
  try {
    const { name, description } = req.body;
    const skill = await Skill.create({ name, description });
    res.status(201).json(skill);
  } catch (error) {
    res.status(400).json({ message: 'Error creating skill' });
  }
};

// Create a new sub-skill
exports.createSubSkill = async (req, res) => {
  try {
    const { skillId, name, recommendedPrice } = req.body;
    const subSkill = await SubSkill.create({ skillId, name, recommendedPrice });
    res.status(201).json(subSkill);
  } catch (error) {
    res.status(400).json({ message: 'Error creating sub-skill' });
  }
};
