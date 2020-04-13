export const convertSecondsToDuration = (totalSeconds) => {
  if (isNaN(Number(totalSeconds))) return "";

  let m = Math.floor(totalSeconds / 60);
  let s = totalSeconds % 60;

  if (m < 10) {
    m = `0${m}`;
  }
  if (s < 10) {
    s = `0${s}`;
  }

  return `${m}:${s}`;
};
