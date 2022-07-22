//regular expression to check if the username contains digits
export const nameCheckReg = /[^aA-zZ]/g;
//regular expression to check if the user phone number contains digits only or combined and extracts only digits
export const numberCheckReg = /[0-9]/g;

export function generateAdminNumber(numLength: number): string {
  let add = 1;
  let max = 12 - add;

  if (numLength > max) {
    return generateAdminNumber(max) + generateAdminNumber(numLength - max);
  }

  max = Math.pow(10, numLength + add);
  let min = max / 10;
  let num = Math.floor(Math.random() * (max - min + 1)) + min;
  return ("" + num).substring(add);
}
