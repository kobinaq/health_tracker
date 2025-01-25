import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SymptomTracker = () => {
  const [symptoms, setSymptoms] = useState([]);
  const [newSymptom, setNewSymptom] = useState({ description: '', severity: 5 });

  useEffect(() => {
    fetchSymptoms();
  }, []);

  const fetchSymptoms = async () => {
    const res = await axios.get('/api/symptoms');
    setSymptoms(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/symptoms', newSymptom);
    fetchSymptoms();
    setNewSymptom({ description: '', severity: 5 });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={newSymptom.description}
          onChange={e => setNewSymptom({...newSymptom, description: e.target.value})}
          placeholder="Describe symptom"
        />
        <input
          type="number"
          min="1"
          max="10"
          value={newSymptom.severity}
          onChange={e => setNewSymptom({...newSymptom, severity: e.target.value})}
        />
        <button type="submit">Add Symptom</button>
      </form>
      <div>
        {symptoms.map(symptom => (
          <div key={symptom._id}>
            <h3>{symptom.description}</h3>
            <p>Severity: {symptom.severity}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SymptomTracker;