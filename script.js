document.getElementById('my_button').addEventListener("click", displayNumbers);

function displayNumbers() {
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 1) {
      document.getElementById('text').innerHTML += "<li>" + numbers[i] + "</li>";
    }
  }

};
