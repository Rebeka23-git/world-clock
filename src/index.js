setInterval(function () {
  let laElement = document.querySelector("#la");
  let laDateElement = laElement.querySelector(".date");
  let laTimeElement = laElement.querySelector(".time");
  let laTime = moment().tz("America/Los_Angeles");

  laDateElement.innerHTML = laTime.format("MMMM Do YYYY");
  laTimeElement.innerHTML = laTime.format("h:mm:ss:SSS [<small>]A[</small>]");
}, 1);

function updateSydenyTime() {
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyTime = moment().tz("Australia/Sydney");

  sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
  sydneyTimeElement.innerHTML = sydneyTime.format(
    "h:mm:ss:SSS [<small>]A[</small>]"
  );
}
updateSydenyTime();
setInterval(updateSydenyTime, 1);
