import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App';
import reportWebVitals from '../reportWebVitals';
import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const AppointmentCalendar = () => {
  const [appointments, setAppointments] = useState([]);

  // Fetch appointments from API
  // Add event handlers for scheduling

  return (
    <Calendar
      events={appointments}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
export default AppointmentCalendar;