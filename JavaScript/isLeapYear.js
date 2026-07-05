function isLeapYear(num) {
  const calc1 = num % 4 === 0;
  const calc2 = num % 100 === 0;
  const calc3 = num % 400 === 0;

  console.log(calc1, calc2, calc3)
  if (calc1 && !calc2 && !calc3) {
    return `${num} is a leap year.`;
  } else if (calc1 && calc2 && !calc3) {
    return `${num} is not a leap year.`;
  } else if (calc1 && calc2 && calc3) {
    return `${num} is a leap year.`;
  } else {
    return "Invalid year to check for leap year."
  }

}

const year = 2000;
const result = isLeapYear(year);
console.log(result)