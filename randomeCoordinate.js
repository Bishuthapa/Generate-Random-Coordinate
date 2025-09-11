const coordinate = () => {
  const latitude = () => Math.floor(Math.random() * 91);  // 0–90
  const longitude = () => Math.floor(Math.random() * 181); // 0–180
  const Minutes = () => Math.floor(Math.random() * 60);    // 0–59
  const Seconds = () => Math.floor(Math.random() * 60);    // 0–59

  const x = Math.random() < 0.5 ? "N" : "S"; // latitude direction
  const y = Math.random() < 0.5 ? "E" : "W"; // longitude direction

  const latValue = latitude();
  const longValue = longitude();
  const MinutesValueX = Minutes();
  const SecondsValueX = Seconds();
  const MinutesValueY = Minutes();
  const SecondsValueY = Seconds();

  console.log(
    `${latValue}°${MinutesValueX}'${SecondsValueX}" ${x} ` +
    `${longValue}°${MinutesValueY}'${SecondsValueY}" ${y}`
  );

  return {
    directionLat: x,
    directionLong: y,
    latitude: latValue,
    longitude: longValue,
    minutesLat: MinutesValueX,
    secondsLat: SecondsValueX,
    minutesLong: MinutesValueY,
    secondsLong: SecondsValueY
  };
};

