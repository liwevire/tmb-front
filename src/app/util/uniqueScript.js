//in
const a = ["12", "34"];
//capitalise first character
const b = a.map((item) => item[0].toUpperCase() + item.substr(1));
//filter
const c = b
  .reduce((res, item) => (res.includes(item) ? res : [...res, item]), [])
  .sort();
//out
console.log(JSON.stringify(c));
