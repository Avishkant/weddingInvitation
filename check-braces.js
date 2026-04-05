const fs = require("fs");
["FamilySection", "EventsSection"].forEach((file) => {
  const code = fs.readFileSync(`app/sections/${file}.tsx`, "utf8");
  let opens = 0,
    closes = 0;
  for (let c of code) {
    if (c === "{") opens++;
    if (c === "}") closes++;
  }
  console.log(
    file,
    "- Opens:",
    opens,
    "Closes:",
    closes,
    "Balanced:",
    opens === closes,
  );
});
