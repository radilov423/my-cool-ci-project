import dayjs from "dayjs";

export function add(a, b) {
  return a + b;
}

export function getFormattedDate() {
  return dayjs().format('YYYY-MM-DD');
}
