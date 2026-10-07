import { DateTime } from 'https://cdn.jsdelivr.net/npm/luxon@3.5.0/+esm';

export const displayCurrentDate = () => {
  const dateContainer = document.getElementById('date-display');
  if (!dateContainer) return;
  const now = DateTime.now();
  dateContainer.textContent = now.toFormat('MMMM dd yyyy, hh:mm:ss a');
};