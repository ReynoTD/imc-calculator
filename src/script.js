function calculateBMI() {
  // Get user input
  var weight = parseFloat(document.getElementById("weight").value);
  var height = parseFloat(document.getElementById("height").value);

  // Check if inputs are valid
  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    document.getElementById("result").innerHTML =
      "Por favor ingrese valores válidos para peso y altura.";
    return;
  }

  document.querySelector("#imgDiv").style.height = "300px";

  // Calculate BMI
  var bmi = weight / ((height / 100) * (height / 100));

  let status = "";
  if (bmi < 18.5) {
    status = "Bajo peso 🦴 <br> Ten un bolillo 🥖";
    document.querySelector("#imgDiv").innerHTML = `<img src=
"flaco3.jpg">`;
  } else if (bmi >= 18.5 && bmi < 25) {
    status = "Saludable 😊<br>Sigue asi bro, toma agua 👍";
    document.querySelector("#imgDiv").innerHTML = `<img src=
"normal.png">`;
  } else if (bmi >= 25 && bmi < 30) {
    status = "Sobrepeso 😧<br> Cuidado bro, hay que comer menos";
    document.querySelector("#imgDiv").innerHTML = `<img src=
"fat1.jpg">`;
  } else {
    status = "Usuario de Arch Linux 🐷 <br> Pesas más que el Warzone bro";
    document.querySelector("#imgDiv").innerHTML = `<img src=
"fat.jpg">`;
  }

  // Display result
  document.getElementById("result").innerHTML = "Tu IMC es: " + bmi.toFixed(2);
  document.getElementById(
    "comment"
  ).innerHTML = `Comentario: <span>${status}</span>`;
}
