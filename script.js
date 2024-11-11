let ComputerChoice = document.getElementById("computer-choice");
let UserChoice = document.getElementById("user-choice");

let result = document.getElementById("result-message");

let [computer_score, user_score] = [0, 0];

let choice_object = {
    rock: {
        rock: "Draw",
        paper: "Lose",
        scissors: "Win",
    },
    paper: {
        rock: "Win",
        paper: "Draw",
        scissors: "Lose",
    },
    scissors: {
        rock: "Lose",
        paper: "Win",
        scissors: "Draw",
    },
};

function checker(input) {
    let choices = ["rock", "paper", "scissors"];
    let num = Math.floor(Math.random() * choices.length);

    let Computer_Choice = choices[num];
    ComputerChoice.innerHTML = `Computer chose <span>${Computer_Choice.toUpperCase()}</span>`;

    UserChoice.innerHTML = `You chose <span>${input.toUpperCase()}</span>`;

    switch (choice_object[input][Computer_Choice]) {
        case "Win":
            result.innerHTML = "You Win!";
            result.style.backgroundColor = '#5be05b'
            result.style.color = 'white'
            user_score++;
            break;
        case "Lose":
            result.innerHTML = "You Lose!";
            result.style.backgroundColor = '#e03232'
            result.style.color = 'white'
            computer_score++;
            break;
        case "Draw":
            result.innerHTML = "Its a Draw!";
            result.style.backgroundColor = '#e7e741'
            result.style.color = 'black'
            break;
    }

    document.getElementById("computer-score").innerHTML = computer_score;
    document.getElementById("user-score").innerHTML = user_score;
}
