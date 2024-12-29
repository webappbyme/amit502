function calculateCareCost() {
    const petType = document.getElementById('pet-type').value;
    const foodCost = parseFloat(document.getElementById('food-cost').value);
    const healthCost = parseFloat(document.getElementById('health-cost').value);

    if (!isNaN(foodCost) && !isNaN(healthCost)) {
        const totalCost = foodCost + healthCost;
        document.getElementById('cost-result').innerText = `The monthly care cost for a ${petType} is $${totalCost.toFixed(2)}.`;
    } else {
        document.getElementById('cost-result').innerText = "Please enter valid numbers for costs.";
    }
}
