const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  description: String,
  severity: { type: Number, min: 1, max: 10 },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Appointment', AppointmentSchema);