const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById('clear-btn');
const output = document.getElementById("results-div");
const inputNumber = document.getElementById("user-input");

const parenthesisChecker = (input) => {
	const parenthesisOkRegex = /[(][0-9]{3}[)]/g;
	const parenthesisFinderRegex = /[()]/g;

	if(parenthesisFinderRegex.test(input)){
		if(parenthesisOkRegex.test(input)) {
			return true;
		} else {
			return false;
		}
	} else {
		return true;
	}
};

//check the length and code country
const numberChecker = (input) => {

	const numberFilter = (input) => {
		const filterRegex = /[^\w]|_/ig;
		return input.replace(filterRegex, "");
	}

  const filteredNumber = numberFilter(input);

  if(filteredNumber.length === 11 && input[0] == 1){
  	return true;
  } else if(filteredNumber.length === 10){
  	return true;
  } else {
  	return false;
  }
};

const hyphenChecker = (input) => {
	const hyphenOkRegex = /[0-9]{3}[-][0-9]{3,4}/;
	const hyphenFinderRegex = /[-]/g;

	if(hyphenFinderRegex.test(input)){
		if(hyphenOkRegex.test(input)){
			return true;
		} else {
			return false;
		}
	} else {
		return true
	}
};

checkBtn.addEventListener("click", () => {

	if (inputNumber.value === "") {
  	alert("Please provide a phone number");
  	return;
  };

const passList = [parenthesisChecker(inputNumber.value), numberChecker(inputNumber.value), hyphenChecker(inputNumber.value)];

const  numChecker = (input) => passList.every((result) => result === true);

  output.innerHTML = numChecker(inputNumber.value)
  	? `<p class="result">Valid US number:<br>${inputNumber.value}</p>`
  	: `<p class="result">Invalid US number:<br> ${inputNumber.value}</p>`;
  	inputNumber.value = "";
})

clearBtn.addEventListener("click", () => {
	output.innerHTML = "";
})
