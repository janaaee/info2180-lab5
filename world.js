window.onload = function () {
  var lookupBtn = document.getElementById("lookup");
  var citiesBtn = document.getElementById("lookup-cities");
  var input = document.getElementById("country");
  var result = document.getElementById("result");

  lookupBtn.onclick = function () {
    fetch("world.php?country=" + input.value)
      .then(function (response) {
        return response.text();
      })
      .then(function (data) {
        result.innerHTML = data;
      });
  };

  citiesBtn.onclick = function () {
    fetch("world.php?country=" + input.value + "&lookup=cities")
      .then(function (response) {
        return response.text();
      })
      .then(function (data) {
        result.innerHTML = data;
      });

  };
};