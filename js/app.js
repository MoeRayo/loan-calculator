// Gloabl variables
let amount = document.querySelector("#amount");
let apr = document.querySelector("#apr");
let years = document.querySelector("#years");
let zipcode = document.querySelector("#zipcode");
let payment = document.querySelector("#payment");
let total = document.querySelector("#total");
let totalInterest = document.querySelector("#totalinterest");

let principal = Number(amount.value);
let interest = Number(apr.value) / 100 / 12;
let payments = Number(years.value) * 12;

// computation of the monthly payment figure.
let x = Math.pow(1 + interest, payments);
let monthly = (principal * x * interest) / (x - 1);

function calculate() {
	if (isFinite(monthly)) {
		payment.innerHTML = monthly.toFixed(2);
		total.innerHTML = (monthly * payments).toFixed(2);
		totalInterest.innerHTML = (monthly * payments - principal).toFixed(2);

		save(amount.value, apr.value, years.value, zipcode.value);

		try {
			getLenders(amount.value, apr.value, years.value, zipcode.value);
		} catch (e) {
			chart(principal, interest, monthly, payments);
		}
	} else {
		payment.innerHTML = "";
		total.innerHTML = "";
		totalInterest.innerHTML = "";
		chart();
	}
}
