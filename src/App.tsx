import React from "react";
import "./App.css";
function App() {
  function bblSort(arr: any) {
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  }

  var arr = [6, 4, 3, 6, 4, 11, 2, 5, 33, 5, 66, 44, 33];
  const UnSortedArray = arr.map((number) => <li>{number}</li>);

  bblSort(arr);

  const SortedArray = arr.map((number) => <li>{number}</li>);

  return (
    <div>
      <h1>Bubble sort</h1>
      <div className="main">
        <div className="first">
          <h1>Эрэмбэлэгдээгүй массив</h1>
          <ul>{UnSortedArray}</ul>
        </div>
        <div className="second">
          <h1>Эрэмбэлэгдсэн массив</h1>
          <ul>{SortedArray}</ul>
        </div>
      </div>
    </div>
  );
}

export default App;
