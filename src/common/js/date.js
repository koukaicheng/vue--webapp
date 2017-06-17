/**
 * Created by Administrator on 2017/6/16.
 */
export function formatDate(date,fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1,(date.getFullYear() + '').substr(4 - RegExp.$1.length));
    // console.log(fmt);
  };
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : add(str));
      // console.log(fmt);
    }
  }
  return fmt;
};
function add(str) {
  return ('00' + str).substr(str.length);
}
