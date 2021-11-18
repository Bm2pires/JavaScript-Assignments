var month_name = (date) => monthNames[date.getMonth()];

const monthNames = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December",
};

console.log(month_name(new Date("10/11/2009")));
console.log(month_name(new Date("11/13/2014")));
