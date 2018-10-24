// Karol Cieślik PGK2

function isLeapYear(a) {
  return (a%100 === 0) ? (a%400 === 0) : (a%4 === 0);
}