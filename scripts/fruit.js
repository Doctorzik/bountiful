const numOrderDrinks = document.getElementById("numOrdered");
let num = Number(localStorage.getItem("ordering"));
console.log(num);

if (num !== 0) {
  numOrderDrinks.textContent = num;
} else {
  numOrderDrinks.textContent = "You have not yet order any drink";
}
console.log(num);
numOrderd++;
console.log(num);

window.localStorage.setItem("ordering", "num");

url = "https://brotherblazzard.github.io/canvas-content/fruit.json";

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      populateSelect(data);

      document
        .getElementById("special-drink")
        .addEventListener("submit", function (event) {
          event.preventDefault();
          const f1 = document.getElementById("fruit1").value;
          const f2 = document.getElementById("fruit2").value;
          const f3 = document.getElementById("fruit3").value;
          const firstName = document.getElementById("fname").value;
          const email = document.getElementById("email").value;
          const phone = document.getElementById("phone").value;
          const instructions = document.getElementById("instructions").value;
          console.log(f1);
          console.log(f2);
          console.log(f3);
          console.log(firstName);
          console.log(email);
          console.log(phone);
          console.log(instructions);

          const selectedFruits = [f1, f2, f3];
          let totalCarbs = 0;
          let totalProtein = 0;
          let totalFat = 0;
          let totalSugar = 0;
          let totalCalories = 0;
          selectedFruits.forEach((selectedFruit) => {
            const fruit = data.find((fruit) => fruit.name === selectedFruit);
            if (fruit) {
              totalCarbs += fruit.nutritions.carbohydrates;
              totalProtein += fruit.nutritions.protein;
              totalFat += fruit.nutritions.fat;
              totalSugar += fruit.nutritions.sugar;
              totalCalories += fruit.nutritions.calories;
            }
          });
          const output = `
            <h2>Your Order:</h2>
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone Number:</strong> ${phone}</p>
            <p><strong>Selected Fruits:</strong> ${selectedFruits.join(
              ", "
            )}</p>
            <p><strong>Special Instructions:</strong> ${instructions}</p>
            <h3>Nutritional Information:</h3>
            <p><strong>Total Carbohydrates:</strong> ${totalCarbs} g</p>
            <p><strong>Total Protein:</strong> ${totalProtein} g</p>
            <p><strong>Total Fat:</strong> ${totalFat} g</p>
            <p><strong>Total Sugar:</strong> ${totalSugar} g</p>
            <p><strong>Total Calories:</strong> ${totalCalories} cal</p>
          `;

          // Display the output
          document.getElementById("outputArea").innerHTML = output;
        });
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}
apiFetch();

const populateSelect = (items) => {
  items.forEach((element) => {
    let option = document.createElement("option");
    let option2 = document.createElement("option");
    let option3 = document.createElement("option");

    option.textContent = element.name;

    option2.textContent = element.name;

    option3.textContent = element.name;

    document.getElementById("fruit1").append(option);
    document.getElementById("fruit2").append(option2);
    document.getElementById("fruit3").append(option3);
  });
};
