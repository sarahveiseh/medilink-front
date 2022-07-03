const faNums = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
const arNums = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];

const faDigitsRegex = /[۰۱۲۳۴۵۶۷۸۹]/g;
const arDigitsRegex = /[٠١٢٣٤٥٦٧٨٩]/g;

const digitsFaToEn = (value) =>
  String(value).replace(faDigitsRegex, (char) => `${faNums.indexOf(char)}`);

const digitsArToEn = (value) =>
  String(value).replace(arDigitsRegex, (char) => `${arNums.indexOf(char)}`);

export const convertFaToEnNumbers = (value) => {
  if (!value) return value;
  return digitsArToEn(digitsFaToEn(String(value)));
};
