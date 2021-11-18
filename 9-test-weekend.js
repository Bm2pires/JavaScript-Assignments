var is_weekend = (date) => {
  let dateObj = new Date(date);

  // Note: date.getDay() returns a value from 0-6 with 0 being Sunday, 1 being Monday etc.
  if (dateObj.getDay() == 0 || dateObj.getDay() == 6) {
    return "weekend";
  }
};

console.log(is_weekend("Nov 15, 2014"));
console.log(is_weekend("Nov 16, 2014"));
console.log(is_weekend("Nov 17, 2014"));
