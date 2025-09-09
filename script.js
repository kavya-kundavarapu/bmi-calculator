function toggleHeightInputs() {
  let unit = document.getElementById("heightUnits").value;
  if (unit === "cm" || unit === "m") {
    document.getElementById("singleHeightInput").style.display = "block";
    document.getElementById("feetInchInput").style.display = "none";
  } else if (unit === "ftin") {
    document.getElementById("singleHeightInput").style.display = "none";
    document.getElementById("feetInchInput").style.display = "block";
  }
}

function calculateBMI() {
  // Get weight and unit
  let weight = parseFloat(document.getElementById("weight").value);
  let weightUnit = document.getElementById("weightUnits").value;

  // Convert weight to kilograms
  if (weightUnit === "Pounds") {
    weight = weight * 0.45359237; // lb → kg
  } else if (weightUnit === "Stones") {
    weight = weight * 6.35029318; // st → kg
  }
  // if "kilogram" → already kg

  // Get height and unit
  let height;
  let heightUnit = document.getElementById("heightUnits").value;

  if (heightUnit === "cm") {
    height = parseFloat(document.getElementById("height").value) / 100; // cm → m
  } else if (heightUnit === "m") {
    height = parseFloat(document.getElementById("height").value); // already meters
  } else if (heightUnit === "in") {
    height = parseFloat(document.getElementById("height").value) * 0.0254; // in → m
  } else if (heightUnit === "ftin") {
    let feet = parseFloat(document.getElementById("feet").value) || 0;
    let inches = parseFloat(document.getElementById("inches").value) || 0;
    height = (feet * 12 + inches) * 0.0254; // ft+in → m
  }

  // Validation check
  if (!weight || !height) {
    alert("Please enter valid weight and height.");
    return;
  }

  // Calculate BMI
  let bmi = weight / (height * height);

  // Show BMI in your answer section
  document.getElementById("bmiValue").innerText = bmi.toFixed(2);
  let category = "";
  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = "Normal weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = "Overweight";
  } else if (bmi >= 30) {
    category = "Obese";
  }

  //  Display category
  document.getElementById("bmiCategory").innerText = category;
}

//to clear when clear is clicked
function clearForm() {
  document.getElementById("weight").value = "";
  document.getElementById("height").value = "";
  document.getElementById("feet").value = "";
  document.getElementById("inches").value = "";
  document.getElementById("bmiValue").innerText = "--";
  document.getElementById("bmiCategory").innerText = "--";
}
