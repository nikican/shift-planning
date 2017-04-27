import moment from 'moment';

export const shortDateFormat = 'ddd, MMM D';
export const simpleDateFormat = 'YYYY-MM-DD';

export const getFormattedDatesForAWeek = (date, format) => {
  let dates = [];

  let firstDayOfThisWeek = moment(date).startOf('week');

  dates.push(firstDayOfThisWeek.format(format));

  for (let i = 0; i < 6; i++) {
    firstDayOfThisWeek.add(1, 'day');
    dates.push(firstDayOfThisWeek.format(format));
  }

  return dates;
};

export const getWeeksDateRangeForDate = (date) => {
  let firstDayOfTheWeek = moment(date).startOf('week').format(shortDateFormat);
  let lasDayOfTheWeek = moment(date).endOf('week').format(shortDateFormat);
  let weeksDateRange = firstDayOfTheWeek + " - " + lasDayOfTheWeek;

  return weeksDateRange;
};

export const getPreviousDate = (date, timePeriod = 'day') => {
  return moment(date).subtract(1, timePeriod).format(simpleDateFormat);
};

export const getNextDate = (date, timePeriod = 'day') => {
  return moment(date).add(1, timePeriod).format(simpleDateFormat);
};

export const getTodaysDate = () => {
  return moment().format(simpleDateFormat);
};

export const isValid = (date) => {
  return moment(date, simpleDateFormat, true).isValid();
};

export const getDateDifference = (firstDate, secondDate) => {
  return moment(firstDate).diff(moment(secondDate));
};

export const getHumanizedDateDifference = (firstDate, secondDate) => {
  return moment.duration(getDateDifference(firstDate, secondDate)).humanize();
}

