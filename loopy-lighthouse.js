
for (x = 100; x <= 200; x++) {
  output = ""
  if (x % 3 === 0) {
    output += "Loopy"
  } 
  if (x % 4 === 0) {
    output += "Lighthouse"
  } 
  if ((x % 3 !== 0) && (x % 4 !== 0)) {
    console.log(x)
  } else {
  console.log(output)
  }
}