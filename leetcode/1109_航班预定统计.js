import { Difference } from "./差分数组工具类";

/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function (bookings, n) {
  const res = new Array(n - 1).fill(0);
  for (let i = 0; i < bookings.length; i++) {
    const start = bookings[i][0];
    const end = bookings[i][1];
    const step = bookings[i][2];
    for (let j = start; j <= end; j++) {
      res[j - 1] += step;
    }
  }
  return res;
};
console.log(Difference);
