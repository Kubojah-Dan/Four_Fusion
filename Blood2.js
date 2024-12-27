

const form = document.getElementById('blood-donation-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const age = document.getElementById('age').value;
  const bloodGroup = document.getElementById('blood-group').value;
  const weight = document.getElementById('weight').value;
  const alcoholic = document.querySelector('input[name="alcoholic"]:checked');
  const medicalConditions = document.querySelector('input[name="medical-conditions"]:checked');
  const donationHistory = document.querySelector('input[name="donation-history"]:checked');

  // Eligibility conditions
  if (age < 18 || age > 65) {
    alert("You must be between 18 and 65 years old to donate blood.");
    return;
  }

  if (weight < 45) {
    alert("You must weigh at least 45 kg to donate blood.");
    return;
  }

  if (alcoholic.value === 'Yes') {
    alert("You are not eligible to donate blood if you are an alcoholic.");
    return;
  }
 
  if (medicalConditions.value === 'Yes') {
    alert("You are not eligible to donate blood if you have medical conditions.");
   return;
  }

  if (donationHistory.value === 'Yes') {
    alert("You are eligible to donate");
  }

  // If all conditions are met, display success message
  alert("Thank you for registering to donate blood!")
  form.reset();
});