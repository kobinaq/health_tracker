const express = require('express');
const router = express.Router();
const auth = require('../../../middleware/auth');
const Symptom = require('../models/Symptom');

router.post('/', auth, async (req, res) => {
  try {
    const symptom = new Symptom({
      ...req.body,
      user: req.user.id
    });
    await symptom.save();
    res.status(201).send(symptom);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/', auth, async (req, res) => {
  try {
    const symptoms = await Symptom.find({ user: req.user.id });
    res.send(symptoms);
  } catch (error) {
    res.status(500).send();
  }
});