import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const STOREGY_KEY = "feedback-form-state";

form.addEventListener("input", throttle(onInput, 500));

function onInput(evt) {
  const datas = { email: email.value, message: message.value };
  localStorage.setItem(STOREGY_KEY, JSON.stringify(datas));
}

form.addEventListener("submit", onSubmit);
function onSubmit(evt) {
  evt.preventDefault();
  if (email.value === "" || message.value === "") return;
  console.log({ email: email.value, message: message.value });

  form.reset();

  localStorage.removeItem(STOREGY_KEY);
}

const savedDatas = localStorage.getItem(STOREGY_KEY);
const objData = JSON.parse(savedDatas);
if (savedDatas) {
  email.value = objData.email;
  message.textContent = objData.message;
}
