// Make process.stdin emit keypress events
require("readline").emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

// Use stdin.on to log keypress events
process.stdin.on("keypress", (char, key) => {
  // The user can press b and it should beep right away
  if (char === "b" || char === "B") {
    process.stdout.write("\x07");
    console.log("BEEP!");
  }
  // The user can input any number from 1 to 0 and it should:
  // - Immediately output "setting timer for x seconds..." and
  // - Beep after that number of seconds has passed
  if (char > 0 && char < 10) {
    console.log(`Setting timer for ${char} seconds...`);
    setTimeout(() => {
      process.stdout.write("\x07");
      console.log(`${char} second timer: BEEP!`);
    }, char * 1000);
  }
  // The user can use ctrl+c to exit the program
  // Say "Thanks for using me, ciao!" before terminating
  if (key.ctrl && (key.name === "c" || key.name === "C")) {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }
});
