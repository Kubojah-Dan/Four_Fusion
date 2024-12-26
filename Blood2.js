

const form = document.getElementById('blood-donation-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const age = document.getElementById('age').value;
  const bloodGroup = document.getElementById('blood-group').value;
  const weight = document.getElementById('weight').value;
  const alcoholic = document.querySelector('input[name="alcoholic"]:checked').value;
  const medicalConditions = document.querySelector('input[name="medical-conditions"]:checked').value;
  const donationHistory = document.querySelector('input[name="donation-history"]:checked').value;
  const smoker = document.querySelector('input[name="smoker"]:checked').value;

  // Eligibility conditions
  if (age < 18 || age > 65) {
    errorMessage.textContent = 'You must be between 18 and 65 years old to donate blood.';
    return;
  }

  if (weight < 45) {
    errorMessage.textContent = 'You must weigh at least 45 kg to donate blood.';
    return;
  }

  if (alcoholic === 'yes') {
    errorMessage.textContent = 'You are not eligible to donate blood if you are an alcoholic.';
    return;
  }

  if (medicalConditions === 'yes') {
    errorMessage.textContent = 'You are not eligible to donate blood if you have medical conditions.';
    return ;
  }

  if (smoker === 'yes') {
    errorMessage.textContent = 'You are not eligible to donate blood if you are a smoker.';
    return false;
  }
  return true;

  // If all conditions are met, display success message
  document.write(alert('Thank you for registering to donate blood!'));
  form.reset();
})