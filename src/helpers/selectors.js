export function getAppointmentsForDay(state, day) {
  const { days, appointments } = state;
  const objForDay = days.find((dayData) => dayData.name === day);
  if (!objForDay || objForDay.appointments.length === 0) return [];
  const appointmentId = objForDay.appointments;
  const dayAppointments = appointmentId.map((appointmentId) => appointments[appointmentId]);
  return dayAppointments;
} 
export function getInterview(state, interview) {
  if (!interview) return null;
  const interviewerId = interview.interviewer;
  const interviewerData = state.interviewers[interviewerId];
  const interviewData = {...interview, interviewer: interviewerData}
  return interviewData;
}

