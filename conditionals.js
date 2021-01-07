// use conditionals to tell people about the weather

const temperature = 3;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

// determine voting eligibility by age

const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}

// determine extreme weather

if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}

// determine umbrella necessity based on weather conditions

if (!raining) {
  console.log("Leave your umbrella at home!");
}