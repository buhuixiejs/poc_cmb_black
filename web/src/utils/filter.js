import Vue from "vue";
import moment from "moment";

// 时间转换为统一格式
Vue.filter("filterDate", function(value, pattern = "YYYY-MM-DD HH:mm:ss") {
  if (value === null) return;
  return moment(value).format(pattern);
});

// 字符串中间截取  XXX...XXX (字符串，前后显示位数)
Vue.filter("cutString", function(value, num) {
  if (!value) return;
  let string = String(value);
  return string.length > 2 * num
    ? string.substring(0, num) +
        "···" +
        string.substring(string.length - num, string.length)
    : string;
});

// 智能单位（千分位、保留小数、取K等）
Vue.filter("toThousand", function(value, dec) {
  if (value === "" || (!value && value !== 0)) return;

  dec = dec === undefined ? 2 : Number(dec);
  let arr = String(Number(value).toFixed(dec)).split(".");
  if (dec === 0) {
    return `${arr[0].replace(/\B(?=(?:\d{3})+\b)/g, ",")}`;
  } else {
    return `${arr[0].replace(/\B(?=(?:\d{3})+\b)/g, ",")}.${arr[1] || ""}`;
  }
});
