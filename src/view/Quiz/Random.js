export default function losuj() {
  let i = 0;
  let table = [];
  while (i < 4) {
    var r = Math.floor(Math.random() * 4);
    if (!table.includes(r)) {
      table.push(r);
      i++;
    }
  }
  return table;
}
