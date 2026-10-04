import { DateTime } from '../node_modules/luxon/src/luxon.js';

export const displayCurrentDate = () => {
  const dateContainer = document.getElementById('date-display');
  if (!dateContainer) return;
  const now = DateTime.now();
  dateContainer.textContent = now.toFormat('MMMM dd yyyy, hh:mm:ss a');
};