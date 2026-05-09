let email = "test@example.com"

function maskEmail(email) {
  const atIndex = email.indexOf("@");
  const maskedEmail = "*".repeat(atIndex) + email.slice(atIndex);
  return maskedEmail;
}

const maskedEmail = maskEmail(email);
console.log(maskedEmail);