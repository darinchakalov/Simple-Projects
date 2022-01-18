window.addEventListener("DOMContentLoaded", () => {
	const userSection = document.querySelector(".user-selection");
	const computerSection = document.querySelector(".computer-selection");

	let winsElement = document.querySelector(".wins");
	let tiesElement = document.querySelector(".ties");
	let losesElement = document.querySelector(".loses");
	let roundsElement = document.querySelector(".rounds");

	const icons = Array.from(document.querySelectorAll(".far"));

	let wins = 0;
	let ties = 0;
	let loses = 0;
	let rounds = 0;

	icons.map((i) =>
		i.addEventListener("click", (e) => {
			e.preventDefault();
			let userImg = document.createElement("img");
			let computerImg = document.createElement("img");
			let userChoise = 0;
			let computerChoise = computerSelection();
			switch (e.target.id) {
				case "rockIcon":
					userChoise = 1;
					break;
				case "paperIcon":
					userChoise = 2;
					break;
				case "scissorsIcon":
					userChoise = 3;
					break;
			}
			userSection.innerHTML = "";
			computerSection.innerHTML = "";
			appendImg(userChoise, userImg);
			appendImg(computerChoise, computerImg);
			userSection.appendChild(userImg);
			computerSection.appendChild(computerImg);

			if (
				(userChoise === 1 && computerChoise === 1) ||
				(userChoise === 2 && computerChoise === 2) ||
				(userChoise === 3 && computerChoise === 3)
			) {
				ties++;
			} else if (userChoise === 1 && computerChoise === 2) {
				loses++;
			} else if (userChoise === 2 && computerChoise === 1) {
				wins++;
			} else if (userChoise === 2 && computerChoise === 3) {
				loses++;
			} else if (userChoise === 3 && computerChoise === 2) {
				wins++;
			} else if (userChoise === 3 && computerChoise === 1) {
				loses++;
			} else if (userChoise === 1 && computerChoise === 3) {
				wins++;
			}
			rounds++;

			winsElement.textContent = "WINS " + wins;
			tiesElement.textContent = "TIES " + ties;
			losesElement.textContent = "LOSES " + loses;
			roundsElement.textContent = "ROUNDS " + rounds;
		})
	);

	function appendImg(num, imgElement) {
		switch (num) {
			case 1:
				imgElement.src = "./images/rock-1.png";
				break;
			case 2:
				imgElement.src = "./images/paper-1.png";
				break;
			case 3:
				imgElement.src = "./images/Scissors-1.png";
				break;
		}
	}

	function computerSelection() {
		let choise = Math.floor(Math.random() * (4 - 1) + 1);
		// if (choise === 0) {
		// 	choise = 1;
		// }
        console.log(choise);
		return choise;
	}

	function getRandomInt() {
		return Math.floor(Math.random() * 4);
	}
});
