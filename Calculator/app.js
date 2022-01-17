window.addEventListener("DOMContentLoaded", () => {
	let displaySection = document.querySelector(".display-section");

	let buttons = Array.from(document.querySelectorAll("button"));

	function fixDisplayValue() {
		if (displaySection.textContent === "") {
			displaySection.textContent = "0";
		}
	}

	buttons.map((button) => {
		button.addEventListener("click", (e) => {
			e.preventDefault();
			switch (e.target.textContent) {
				case "C":
					displaySection.textContent = "0";
					break;

				case "←":
					displaySection.textContent = displaySection.textContent.slice(0, -1);
					fixDisplayValue();
					break;
				case "=":
					try {
						displaySection.textContent = Function("return " + displaySection.textContent)();
					} catch (error) {
						displaySection.textContent = "Ivalid action";
					}
					break;
				default:
					if (displaySection.textContent === "0") {
						displaySection.textContent = e.target.textContent;
					} else {
						displaySection.textContent += e.target.textContent;
					}
			}
		});
	});
	document.addEventListener("keydown", (e) => {
		e.preventDefault();
		switch (e.key) {
			case "c" || "C":
				displaySection.textContent = "0";
				break;
			case "Backspace":
				displaySection.textContent = displaySection.textContent.slice(0, -1);
				fixDisplayValue();
				break;
			case "Enter":
				try {
					displaySection.textContent = Function("return " + displaySection.textContent)();
				} catch (error) {
					displaySection.textContent = "Ivalid action";
				}
				break;
			default:
				if (displaySection.textContent === "0" || displaySection.textContent === 0) {
					displaySection.textContent = e.key;
				} else {
					displaySection.textContent += e.key;
				}
		}
	});
});
