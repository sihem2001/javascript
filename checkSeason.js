// exo1
let message = "there is no war in Ba sing se ";
let word = 0;
for (i = 0; i < message.length; i++) {
  if (message[i] === " ") {
    word++;
  }
}
console.log(word);
// exo2
let counteries = ["china", "japan", "southkorea", "vitamine", "malaysia"];
let capitals = ["beijina", "tokyo", "seoul", "hanoi", "kuala"];

for (let i = 0; i < counteries.length; i++) {
  let country = counteries[i];

  for (let j = 0; j < capitals.length; j++) {
    let capital = capitals[j];

    console.log(
      "your country is : " + country + " and its capital is : " + capital
    );
  }
}
// exo3
let rendomizer = Math.random() * 3;

if ((rendomizer = "0")) {
  console.log("A certain victory");
} else if ((rendomizer = "1")) {
  console.log("not so certain victory");
} else if ((rendomizer = "2")) {
  console.log("an unsery victory");
} else {
  console.log("your fate is unclear");
}

// exo4

function checkSeason(month2) {
  let month1 = [
    "January ",
    "February",
    "March",
    "April ",
    "May ",
    "June",
    "July ",
    "August ",
    "September",
    "October ",
    "November ",
    "December ",
  ];

  for (i = 0; i < month1.length; i++) {
    while (month2 == month1[i]) {
      switch (month2) {
        case "March":
          console.log("spring");
          break;
        case "april":
          console.log("spring");
          break;
        case "may":
          console.log("spring");
          break;

        case "june":
          console.log("summer");
          break;
        case "july":
          console.log("summer");
          break;
        case "august":
          console.log("summer");
          break;

        case "september":
          console.log("fall");
          break;
        case "october":
          console.log("fall");
          break;
        case "november":
          console.log("fall");
          break;

        case "december":
          console.log("winter");
          break;
        case "january":
          console.log("winter");
          break;
        case "february":
          console.log("winter");
          break;

        default:
          console.log("unknow season");
          break;
      }
    }
  }
}
