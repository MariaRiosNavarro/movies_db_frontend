export const convertSecondsToHoursMinutes = (seconds) => {
  const date = new Date(seconds * 1000);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();

  return `${hours}h ${minutes}min`;
};

export const convertTimeToSeconds = (time) => {
  const [hours, minutes] = time.split(":");
  return parseInt(hours) * 3600 + parseInt(minutes) * 60;
};
