var form = document.getElementsByTagName("form")[0];

form.onsubmit = function (e) {
  e.preventDefault();

  saveCookie();
  location.document;
};

var res;
function saveCookie() {
  res = {};
  res.name = document.getElementById("name").value;
  res.age = document.getElementById("age").value;
  res.email = document.getElementById("email").value;

  res.counter = 0;
  for (var key in res) {
    document.cookie =
      key + "=" + res[key] + ";expires=" + new Date(2023, 11, 7);
  }
}

function hasCookie(key) {
  var arr = document.cookie.split(";");

  for (var i = 0; i < arr.length; i++) {
    if (arr[i].slice(0, arr[i].indexOf("=")).trim() == key) {
      return true;
    }
  }

  return false;
}

//Count Number you Visited Website
if (hasCookie("counter")) {
  setCookie(
    "counter",
    Number(getCookie("counter")) + 1,
    new Date(2024, 11, 11)
  );
} else {
  setCookie("counter", 0, new Date(2024, 11, 11));
}

//apper number of you have visisted this page in HTML

document.querySelector("h1").innerHTML =
  "</span> you have visisted this page " + getCookie("counter") + " times ";

function setCookie(key, value, expiredate) {
  //expiresdate optional
  if (expiredate) {
    document.cookie = `${key}=${value};expires=${expiredate};`;
  } else {
    document.cookie = `${key}=${value};`;
  }
}

function getCookie(key) {
  var arr = document.cookie.split(";");

  for (var i = 0; i < arr.length; i++) {
    var target = arr[i].slice(0, arr[i].indexOf("=")).trim();

    if (target == key) {
      return arr[i].slice(arr[i].indexOf("=") + 1);
    }
  }
}

function deleteCookie(key) {
  if (hasCookie(key)) {
    setCookie(key, "", new Date(2021, 6, 6));
  }
}

function hasCookie(key) {
  var arr = document.cookie.split(";");

  for (var i = 0; i < arr.length; i++) {
    if (arr[i].slice(0, arr[i].indexOf("=")).trim() == key) {
      return true;
    }
  }

  return false;
}

function allCookieList() {
  var arr = document.cookie.split(";");
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split("=");
  }
  console.log(arr);
}
