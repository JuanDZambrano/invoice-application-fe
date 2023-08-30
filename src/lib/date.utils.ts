import moment, { Moment } from "moment-timezone";

export const formatDateWithTimezone = (date: Date): string => {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const formattedDate: Moment = moment.tz(date, timeZone) as Moment;
  return formattedDate.format("DD-MM-YY");
};
