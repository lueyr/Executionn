let binary = "010101110110000101011010101101001100110111010111101001000101000101110100011011110110001011010101110110001011010101110010110111010110101101110100111011101101111010110111011110101110011011011110110101101011101011010111011011011101101110110101111011101101001100110111";

function convertToSignal(binary) {

  return binary.replace(/1/g, "—").replace(/0/g, " ");

}

let signal = convertToSignal(binary);

let index = 0;

let screen = document.getElementById("screen");

function typeSignal() {

  if (index < signal.length) {

    screen.textContent += signal[index];

    index++;

    setTimeout(typeSignal, 400);

  }

}

typeSignal();