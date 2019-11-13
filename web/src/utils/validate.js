/**
 * 移除空格
 */
export function removeSpace(value) {
  for (let chr of value) {
    if (!spaceTest(chr)) {
      value = value.replace(chr, "");
    }
  }
  return value;
}

export function spaceTest(val) {
  let reg = /^[^\s]*$/;
  return reg.test(val);
}

export function isvalidTelNumber(tel_number) {
  const valid_tel = /^((1[3,5,8][0-9])|(14[5,7,9])|(16[6])|(17[0,1,3,5,6,7,8])|(19[7-9]))\d{8}$/;
  return valid_tel.test(tel_number);
}
