export const isSameDay = (d1, d2) => d1.toDateString() === d2.toDateString();

export const isWithinLastWeek = (date) => {
  const now = new Date();
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(now.getDate() - 7);
  return date > oneWeekAgo && date <= now;
};

export const isWithinLastMonth = (date) => {
  const now = new Date();
  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(now.getMonth() - 1);
  return date > oneMonthAgo && date <= now;
};

export const groupByTime = (history) => {
  const today = new Date();
  return {
    today: history.filter((item) => isSameDay(new Date(item.time), today)),
    lastWeek: history.filter(
      (item) =>
        isWithinLastWeek(new Date(item.time)) &&
        !isSameDay(new Date(item.time), today)
    ),
    lastMonth: history.filter(
      (item) =>
        isWithinLastMonth(new Date(item.time)) &&
        !isWithinLastWeek(new Date(item.time))
    ),
  };
};
