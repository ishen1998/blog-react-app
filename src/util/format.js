import dayjs from "dayjs";
export function date(val, type) {
  return dayjs(val).format(type);
}
export function formatTime(val) {
  const d = new Date(val);
  const now = Date.now();
  const diff = (now - d) / 1000;
  if (diff < 30) {
    return "刚刚";
  } else if (diff < 3600) {
    return Math.ceil(diff / 60) + "分钟前";
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + "小时前";
  } else if (diff < 3600 * 24 * 30) {
    return Math.floor(diff / 3600 / 24) + "天前";
  } else if (diff < 3600 * 24 * 365) {
    return Math.floor(diff / 3600 / 24 / 30) + "月前";
  } else {
    return Math.floor(diff / 3600 / 24 / 365) + "年前";
  }
}