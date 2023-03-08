const calcExpense = () => {
  //   expense value
  const food = parseInt(document.getElementById("food").value);
  const rent = parseInt(document.getElementById("rent").value);
  const clothes = parseInt(document.getElementById("clothes").value);

  if (food >= 0 && rent >= 0 && clothes >= 0) {
    const totalExpenseElement = document.getElementById("total-expense");

    // calculate expense
    const totalExpense = food + rent + clothes;

    // calculate balance
    const income = parseInt(document.getElementById("income").value);
    const balance = document.getElementById("balance");

    //   validate income
    if (totalExpense < income) {
      totalExpenseElement.innerText = totalExpense;
      balance.innerText = income - totalExpense;

      return (balance.innerText = income - totalExpense);
    } else {
      alert("Expenses cannot be more than income");
    }
  } else {
    alert("Inputs must be positive numbers");
  }
};
//savings process

const savings = () => {
  const savings = parseInt(document.getElementById("save").value);
  const income = parseInt(document.getElementById("income").value);

  if (isNaN(savings)) {
    parseInt((document.getElementById("save").value = 0));
  } else {
    const totalSavings = (income / 100) * savings;
    document.getElementById("saving-amount").innerText =
      totalSavings.toFixed(2);
    //remaining-balance
    document.getElementById("remaining-balance").innerText =
      calcExpense() - totalSavings;
  }
};
