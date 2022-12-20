function ageCalculator() {
    const startDateInput = document.getElementById("dob").value;
    const endDateInput = document.getElementById("aob").value;
    let startDate = new Date(startDateInput);
    let endDate  = new Date(endDateInput);
    let difference=endDate - startDate.getTime();
    let  ageDate = new Date(difference);
    let calculatedAge=   Math.abs(ageDate.getUTCFullYear() - 1970);
    alert("Your age is "+calculatedAge);
}

