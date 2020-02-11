console.log("Hello World");

// vars
let amt = 0.0;
let from = "EUR";
let to = "USD";

// event functions
const setAmount = e => {
  amt = e.target.value;
};

const setFromCurrency = e => {
  from = e.target.value;
};
const setToCurrency = e => {
  to = e.target.value;
};

const convert = () => {
  axios
    .get(`http://localhost:8001/currency?base=${from}&sym=${to}&amt=${amt}`)
    .then(response => {
      console.log(response.data);
      document.querySelector(
        "#output"
      ).innerHTML = `${response.data.amt} ${to}`;
    });
};
