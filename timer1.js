// Remove first 2 elements of argv to get an array of the inputs
const args = process.argv.slice(2);
// Iterate through each argument
for (const arg of args) {
  // Exclude edge cases: non-number input and negative numbers
  if (typeof Number(arg) === "number" && arg >= 0) {
    // Add beep callback function to callstack for x seconds where x is the number input
    setTimeout(() => {
      process.stdout.write("\x07");
      console.log("BEEP!");
    }, arg * 1000);
  }
}
