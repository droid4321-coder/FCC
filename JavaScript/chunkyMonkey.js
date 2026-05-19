/* Taken from mission roster chunk part:
  const chunks = [];
  for (let i = 0; i < crew.length; i += size) {
    chunks.push(crew.slice(i, i + size));
  }
*/

function chunkArrayInGroups(arr, num) {
  const chunkd = [];
  for (let chunk = 0; chunk < arr.length; chunk += num) {
    chunkd.push(arr.slice(chunk, chunk + num));
  } return chunkd
}

console.log(chunkArrayInGroups(['a', 'b', 'c', 'd'], 2))