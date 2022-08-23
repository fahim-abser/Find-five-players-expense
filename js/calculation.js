const nameArray = [];
function displayName() {
    const totalPlayers = document.getElementById("selected-player");
    totalPlayers.innerText = nameArray.length;
    const nameContainer = document.getElementById("player-name");
    nameContainer.textContent = '';

    for (let i = 0; i < nameArray.length; i++) {

        const tr = document.createElement("tr");
        tr.innerHTML = `
        <th><h4 style="margin-right:25px">${i + 1}.</h4></th>
        <td style="text-align:left; padding:10px"> <h4>${nameArray[i]}</h4></td>`;
        nameContainer.appendChild(tr);
    }
}

function selectItem(name) {
    const selectPlayer = name.parentNode.children[0].innerText;
    nameArray.push(selectPlayer);
    if (nameArray.length > 5) {
        alert('Cannot add more then 5 players!')
    }
    else {
        displayName();
    }
}
document.getElementById('calculate-btn').addEventListener
    ('click', function () {
        const playerExpenseField = getInputValue('budget-field');
        if (isNaN(playerExpenseField) == true) {
            alert('Please enter a valid input!')
        }
        else if (playerExpenseField < 0) {
            alert('Please enter a positive number!')
        }
        else {
            const players = nameArray.length;
            const totalBudget = players * playerExpenseField;
            console.log(totalBudget);
            updateValues('player-expense-field', totalBudget);
            firstTotal = totalBudget;
        }
        document.getElementById('budget-field').value = '';
    })

// --------------2nd button ---------------------//

document.getElementById('calculate-total-btn').addEventListener
    ('click', function () {
        const managerExpenseField = getInputValue('manager-expense-field');
        const coachExpenseField = getInputValue('coach-expense-field');
        const playerExpenseField = document.getElementById('player-expense-field').innerText;

        if (isNaN(managerExpenseField) == true || isNaN(coachExpenseField) == true) {
            alert('Please enter a valid input!')
        }
        else if (managerExpenseField <= 0 || coachExpenseField <= 0) {
            alert('Please enter a positive number!')
        }
        else {
            const totalExpense = parseFloat(playerExpenseField) + managerExpenseField + coachExpenseField;

            console.log(playerExpenseField);
            updateValues('final-amount', totalExpense)
        }
        document.getElementById('manager-expense-field').value = '';
        document.getElementById('coach-expense-field').value = '';
    }
    )

function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    return amountValue;
}
function updateValues(updateText, value) {

    const updateValueText = document.getElementById(updateText);
    updateValueText.innerText = value;

}
