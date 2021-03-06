import secondsToWord from './secondsToWord';

const dateFormatter = date => {
  date = new Date(date);
  const hours =
    date.getHours().toString().length > 1
      ? date.getHours()
      : `0${date.getHours()}`;

  const minutes =
    date.getMinutes().toString().length > 1
      ? date.getMinutes()
      : `0${date.getMinutes()}`;

  let formatedDate = `${date.getDate()}/${date.getMonth() +
    1}/${date.getFullYear()} ${hours}:${minutes}`;

  const now = new Date();

  let difference;
  let aprox;

  if (date > now) {
    difference = ((date.getTime() - now.getTime()) / 60000) * 60;
    aprox = `${secondsToWord(difference)} from now`;
    return { formatedDate, aprox, isFuture: true };
  } else {
    difference = ((now.getTime() - date.getTime()) / 60000) * 60;
    aprox = `${secondsToWord(difference)} ago`;
    return { formatedDate, aprox, isFuture: false };
  }
};

export default dateFormatter;
