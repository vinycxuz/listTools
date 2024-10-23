const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const { Schema } = mongoose;

const toolSchema = new Schema({
  name: { type: String, required: true },
  link: { type: String, required: true },
  description: { type: String, required: true }
});

const toolsSchema = new Schema({
  development: [toolSchema],
  designUIUX: [toolSchema],
  audioVideo: [toolSchema],
  textDocument: [toolSchema]
});

const router = express.Router();

const Tools = mongoose.model('Tools', toolsSchema);

router.get('/tools', async (req, res) => {
  try {
    const tools = await Tools.find();
    res.json(tools);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/tools', async (req, res) => {
  const { category, tool } = req.body;

  if (!category || !tool) {
    return res.status(400).json({ message: 'Category and tool data are required' });
  }

  try {
    const tools = await Tools.findOne();
    if (!tools) {
      const newTools = new Tools({ [category]: [tool] });
      await newTools.save();
    } else {
      tools[category].push(tool);
      await tools.save();
    }
    res.status(201).json({ message: 'Tool added successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;