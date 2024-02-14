const bcrypt = require("bcrypt");

async function hashPassword() {
  const password = "Salasana123";

  try {
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log("Password:", password);
    console.log("Salt:", salt);
    console.log("Hashed password:", hashedPassword);
  } catch (error) {
    console.error("Error:", error);
  }
}
hashPassword();

async function comparePasswords() {
  const inputPassword = "Salasana123";
  const hashedPassword =
    "$2b$12$tiRdjcyJm0vEsytoX55Iuu28Vk6qFH1FPO9RytLnhaGo2msdWELum";
  try {
    const isMatch = await bcrypt.compare(inputPassword, hashedPassword);

    if (isMatch) {
      console.log("Password is correct");
    } else {
      console.log("Password is incorrect");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
comparePasswords();
