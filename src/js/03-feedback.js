import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const STOREGY_KEY = "feedback-form-state";

form.addEventListener("input", throttle(onInput, 500));

function onInput(evt) {
  // console.log(email.value);
  // console.log(message.value);

  const datas = { email: email.value, message: message.value };

  // console.log(datas);
  localStorage.setItem(STOREGY_KEY, JSON.stringify(datas));
}
// - При загрузке страницы проверяй состояние хранилища,
//   и если там есть сохраненные данные, заполняй ими поля
// формы.В противном случае поля должны быть пустыми.
// - При сабмите формы очищай хранилище и поля формы,
//   а также выводи объект с полями email, message и
//   текущими их значениями в консоль.

function onLoad() {
  const savedDatas = localStorage.getItem(STOREGY_KEY);
  if (savedDatas === "") {
    return;
    // message.value = savedDatas;
  }

  console.log(savedDatas);

  const objData = JSON.parse(savedDatas);
  console.log(objData);
  email.value = objData.email;
  message.textContent = objData.message;
  console.log(email.textContent);
  console.log(message.textContent);
  // objData.email;
}
onLoad();

form.addEventListener("submit", onSubmit);
function onSubmit(evt) {
  evt.preventDefault();
  if (email.value === "" || message.value === "") return;
  console.log({ email: email.value, message: message.value });
  // localStorage.removeItem(STOREGY_KEY);

  form.reset();
}
