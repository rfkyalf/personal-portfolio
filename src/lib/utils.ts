import moment from 'moment';

export const formatDate = (date: string) => {
  const inputDate = moment(date, 'YYYY-MM-DD');
  const now = moment();
  const diffDays = now.diff(inputDate, 'days');

  if (diffDays === 0) {
    return 'recently';
  } else if (diffDays <= 7) {
    return `${diffDays} day${diffDays === 1 ? '' : 's'} ago`;
  }

  return inputDate.format('MMM D, YYYY');
};
