let myChart;

//получаем значения коэффициентов
let a = Number(document.getElementById('c1').value);
let b = Number(document.getElementById('c2').value);
let c = Number(document.getElementById('c3').value);
let d = Number(document.getElementById('c4').value);
let e = Number(document.getElementById('c5').value);

//получаем значения пределов по оси x и шага
let xLeft = Number(document.getElementById('h1').value);
let xRight = Number(document.getElementById('h2').value);
let step = Number(document.getElementById('h3').value);

//выводим пример графика функции y=x^3
myChart = graph(a, b, c, d, e);

//функция для обновления графика при изменении коэффициентов
function showGraph() {
  myChart.destroy();
  a = Number(document.getElementById('c1').value);
  b = Number(document.getElementById('c2').value);
  c = Number(document.getElementById('c3').value);
  d = Number(document.getElementById('c4').value);
  e = Number(document.getElementById('c5').value);
  xLeft = Number(document.getElementById('h1').value);
  xRight = Number(document.getElementById('h2').value);
  step = Number(document.getElementById('h3').value);
  myChart = graph(a, b, c, d, e);
}

function graph(a, b, c, d, e) {
  var ctx = document.getElementById("myChart");
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [],
      datasets: [
        {
          label: 'f(x)',
          data: [],
          borderColor: '#0d6efd',
          borderWidth: 2,
          fill: false
        }
      ]
    },
    options: {
      responsive: false,
      scales: {
        xAxes: [{
          display: true
        }],
        yAxes: [{
          display: true
        }]
      }
    }
  });

  for (var x = xLeft; x <= xRight; x += step) {
    myChart.data.labels.push('' + x.toFixed(2)); //заполняем массив значений на оси x
    myChart.data.datasets[0].data.push(f(x, a, b, c, d, e).toFixed(2)); //заполняем значение функции
  }
  //Обновляем график
  myChart.update('none');

  function f(x, a, b, c, d, e) {
    return (a * Math.pow(x, 4) + b * Math.pow(x, 3) + c * Math.pow(x, 2) + d * Math.pow(x, 1) + e);
  }
  return myChart;
}

function b1f() {
  //отключаем ненужные поля
  document.getElementById('c1').disabled = true;
  document.getElementById('c1').value = '';
  document.getElementById('c2').disabled = true;
  document.getElementById('c2').value = '';
  document.getElementById('c3').disabled = true;
  document.getElementById('c3').value = '';
  document.getElementById('c4').disabled = false;
  document.getElementById('c4').value = '';
  document.getElementById('c5').disabled = false;
  document.getElementById('c5').value = '';

  //меняем цвет активной кнопки
  document.getElementById('b2').style.background = "#0d6efd";
  document.getElementById('b2').style.borderColor = "#0d6efd";
  document.getElementById('b1').style.background = "green";
  document.getElementById('b1').style.borderColor = "green";
  document.getElementById('b3').style.background = "#0d6efd";
  document.getElementById('b3').style.borderColor = "#0d6efd";
  document.getElementById('b4').style.background = "#0d6efd ";
  document.getElementById('b4').style.borderColor = "#0d6efd";
}

function b2f() {
  document.getElementById('c1').disabled = true;
  document.getElementById('c1').value = '';
  document.getElementById('c2').disabled = true;
  document.getElementById('c2').value = '';
  document.getElementById('c3').disabled = false;
  document.getElementById('c3').value = '';
  document.getElementById('c4').disabled = false;
  document.getElementById('c4').value = '';
  document.getElementById('c5').disabled = false;
  document.getElementById('c5').value = '';

  document.getElementById('b1').style.background = "#0d6efd";
  document.getElementById('b1').style.borderColor = "#0d6efd";
  document.getElementById('b2').style.background = "green";
  document.getElementById('b2').style.borderColor = "green";
  document.getElementById('b3').style.background = "#0d6efd";
  document.getElementById('b3').style.borderColor = "#0d6efd";
  document.getElementById('b4').style.background = "#0d6efd ";
  document.getElementById('b4').style.borderColor = "#0d6efd";
}

function b3f() {
  document.getElementById('c1').disabled = true;
  document.getElementById('c1').value = '';
  document.getElementById('c2').disabled = false;
  document.getElementById('c2').value = '';
  document.getElementById('c3').disabled = false;
  document.getElementById('c3').value = '';
  document.getElementById('c4').disabled = false;
  document.getElementById('c4').value = '';
  document.getElementById('c5').disabled = false;
  document.getElementById('c5').value = '';

  document.getElementById('b1').style.background = "#0d6efd";
  document.getElementById('b1').style.borderColor = "#0d6efd";
  document.getElementById('b3').style.background = "green";
  document.getElementById('b3').style.borderColor = "green";
  document.getElementById('b2').style.background = "#0d6efd";
  document.getElementById('b2').style.borderColor = "#0d6efd";
  document.getElementById('b4').style.background = "#0d6efd ";
  document.getElementById('b4').style.borderColor = "#0d6efd";
}

function b4f() {
  document.getElementById('c1').disabled = false;
  document.getElementById('c1').value = '';
  document.getElementById('c2').disabled = false;
  document.getElementById('c2').value = '';
  document.getElementById('c3').disabled = false;
  document.getElementById('c3').value = '';
  document.getElementById('c4').disabled = false;
  document.getElementById('c4').value = '';
  document.getElementById('c5').disabled = false;
  document.getElementById('c5').value = '';

  document.getElementById('b1').style.background = "#0d6efd";
  document.getElementById('b1').style.borderColor = "#0d6efd";
  document.getElementById('b4').style.background = "green";
  document.getElementById('b4').style.borderColor = "green";
  document.getElementById('b2').style.background = "#0d6efd";
  document.getElementById('b2').style.borderColor = "#0d6efd";
  document.getElementById('b3').style.background = "#0d6efd ";
  document.getElementById('b3').style.borderColor = "#0d6efd";
}

