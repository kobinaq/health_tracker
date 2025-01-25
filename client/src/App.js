import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import SymptomTracker from './components/SymptomTracker';
import MedicationReminders from './components/MedicationReminders';
import AppointmentCalendar from './components/AppointmentCalendar';

// Remove any duplicate App component declarations
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/symptoms" element={<SymptomTracker />} />
        <Route path="/medications" element={<MedicationReminders />} />
        <Route path="/appointments" element={<AppointmentCalendar />} />
      </Routes>
    </Router>
  );
}

export default App;