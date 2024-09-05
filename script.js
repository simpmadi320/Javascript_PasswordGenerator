function getPasswordLength(){
    const length = document.getElementById("length").value; 
    return Number(length);
}

function getPasswordProperties(){
    const ids = ["lowercase", "uppercase", "numbers", "special"];
    const properties = {};
    for (const id of ids){
        const element = document.getElementById(id);
        properties[id] = element.checked; // Corrected from value to checked for checkboxes
    }
    return properties;
}

function getChars(lowercase = true){
    const start = lowercase ? 97 : 65;
    let chars = [];

    for (let i = start; i < start + 26; i++){
        chars.push(String.fromCharCode(i));
    }
    return chars;
}

//Global variables
const lowercaseChars = getChars(true);
const uppercaseChars = getChars(false);
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const special = ["!", "@", "#", "%", "^", "&", "*", "(", ")", "_", "-", "?"];

function generatePassword(){
    const length = getPasswordLength();
    const properties = getPasswordProperties();

    const characters = [];
    if (properties.lowercase) characters.push(...lowercaseChars);
    if (properties.uppercaseChars) characters.push(...uppercaseChars);
    if (properties.numbers) characters.push(...numbers);
    if (properties.special) characters.push(...special);
 
    if (characters.length === 0){
        document.getElementById("password").innerText = "You must select at least one set of characters.";
    }
    else{
        let pwd = [];
        for (let i = 0; i < length; i++){
            const randomIdx = Math.floor(Math.random() * characters.length);
            const char = characters[randomIdx];
            pwd.push(char);
        }

        const pwdString = pwd.join("");

        document.getElementById("password").innerText = pwdString;
    }

 

}