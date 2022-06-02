function binaryToDecimal(binary) {
  return parseInt(binary, 2);
}

window.onload = () => {
  document.getElementById("convertButton").onclick = () => {
    const binary = document.getElementById("input").value;
    if (!binary.match(/^[01]+$/)) {
      document.getElementById("output").innerHTML = "Insira um valor valido";
      return;
    }
    const decimal = binaryToDecimal(binary);
    document.getElementById("output").innerHTML = decimal;
  };
};
