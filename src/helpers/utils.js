
export function normalize(Obj) {
  let arr = [];
  Object.keys(Obj).map(key => {
    arr.push(Obj[key]);
  });
  return arr;
}