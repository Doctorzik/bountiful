url = "https://brotherblazzard.github.io/canvas-content/fruit.json";

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      populateSelect(data);
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

    option.innerHTML = element.name;

    option2.innerHTML = element.name;

    option3.innerHTML = element.name;

    document.getElementById("fruit1").append(option);
    document.getElementById("fruit2").append(option2);
    document.getElementById("fruit3").append(option3);
  });
};
