const formatTime = (seconds) => {
  const formattedTime =
    Math.round(seconds / 60).toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    }) +
    ":" +
    (seconds % 60).toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
  return formattedTime;
};
export default formatTime;
