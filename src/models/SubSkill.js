const mongoose = require('mongoose');

const subSkillSchema = new mongoose.Schema({
  skillId: { type: mongoose.Schema.Types.ObjectId, ref: 'Skill', required: true },
  name: { type: String, required: true },
  recommendedPrice: { type: Number, required: true },
});

module.exports = mongoose.model('SubSkill', subSkillSchema);
