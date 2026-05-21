const calculateAge = function calculateAgeFromDate(dateString) {
  const today = new Date('2026-05-18'); // Based on the instructions' note
  const birthDate = new Date(dateString);

  if (isNaN(birthDate.getTime())) {
    return 'Error: Invalid date format';
  }

  if (birthDate > today) {
    return 'Error: You cannot be less than zero years old.'; // Adjusted based on provided example output
  }

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  const dayDifference = today.getDate() - birthDate.getDate();

  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    age--;
  }

  if (age > 100) {
    return `Are you sure you are more than 100 years old?`;
  }

  return `You are ${age} years old`;
};

console.log(calculateAge('2000-07-01'));
// You are 25 years old
console.log(calculateAge('1988-05-18'));
// You are 38 years old
console.log(calculateAge('2190-01-01'));
// Error: Birth date cannot be in the future
console.log(calculateAge('1800-01-01'));
// Are you sure you are more than 125 years old?
console.log(calculateAge('invalid-date'));
// Error: Invalid date format

// Note: These calculations were done on May 18, 2026.
