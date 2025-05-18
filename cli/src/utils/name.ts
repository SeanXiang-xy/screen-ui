const PREFIX = "S";

// 首字符大写
export function getFirstUpperName(name: string) {
  return name.slice(0, 1).toUpperCase() + name.slice(1);
}
// 首字符小写
export function getFirstLowerName(name: string) {
  return name.slice(0, 1).toLowerCase() + name.slice(1);
}
// 组件名
export function getName(name: string) {
  return PREFIX + getFirstUpperName(name);
}
export function getConversionName(name: string) {
  return name.replace(/([a-zA-Z])([A-Z])/g, "$1-$2").toLowerCase();
}
// 判断名称是否合法
export function isValidComponentName(name: string) {
  if (!name) {
    return false;
  }

  const flag = /^[a-zA-Z]([\w-\d]*)$/.test(name);

  return flag;
}
