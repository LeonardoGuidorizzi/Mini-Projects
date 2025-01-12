"use scrict";

const form = document.querySelector(".form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const heightValue = e.target.querySelector(".heightidentfier");
  const weightValue = e.target.querySelector(".weightidentfier");
  let mascara;

  $(".heightidentfier").mask("#####0.00", { reverse: true });

  $(".heightidentfier").on("keyup", function () {
    if ($(this).val().length > 3) {
      mascara = "####00.00";
    } else {
      mascara = "####0.0";
    }

    $(".heightidentfier").mask(mascara, { reverse: true });
  });

  const height = Number(heightValue.value);
  const weight = Number(weightValue.value);

  if (!height) {
    setResult(`add a valid height`, false);
    return;
  }
  if (!weight) {
    setResult(`add a valid weight`, false);
    return;
  }

  const resultBMI = getBMI(height, weight);
  const message = resultMessage(resultBMI);

  setResult(`Your BMI is ${resultBMI}, ${message}`, true);
});

const getBMI = (height, weight) => {
  const resultBMI = weight / height ** 2;
  return resultBMI.toFixed(2);
};

const pGenerate = () => {
  const p = document.createElement("p");
  return p;
};

const setResult = (msg, isValid) => {
  const result = document.querySelector(".result-div");
  const p = pGenerate();
  result.innerHTML = "";
  p.innerHTML = msg;
  result.appendChild(p);
  if ((isValid = false)) {
    p.classList.add("bad-result");
  } else {
    p.classList.add("paragraph-result");
  }
};

const resultMessage = (resultBMI) => {
  const resultMessages = [
    "Underweight",
    "Normal weight",
    "Overweight",
    "Obesity grade 1",
    "Obesity grade 2",
    "Obesity grade 3",
  ];

  if (resultBMI <= 18.5) {
    return resultMessages[0];
  } else if (resultBMI <= 24.9) {
    return resultMessages[1];
  } else if (resultBMI <= 29.9) {
    return resultMessages[2];
  } else if (resultBMI <= 34.9) {
    return resultMessages[3];
  } else if (resultBMI <= 39.9) {
    return resultMessages[4];
  } else if (resultBMI > 39) {
    return resultMessages[5];
  }
};
