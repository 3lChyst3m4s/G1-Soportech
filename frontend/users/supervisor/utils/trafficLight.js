import moment from 'moment';

export const getTrafficLightColor = endTime => {
  const currentTime = new Date();
  const targetTime = moment(endTime, 'DD/MM/YYYY').toDate();

  const timeDifference = targetTime - currentTime;
  const minutesDifference = Math.ceil(timeDifference / (1000 * 60));

  if (timeDifference <= 0) {
    return 'rojo';
  } else if (minutesDifference <= 1440 && minutesDifference > 60) {
    // Entre 1 y 2 días
    return 'amarillo';
  } else if (minutesDifference <= 60) {
    // Menos de 1 día
    return 'rojo';
  } else {
    return 'verde';
  }
};