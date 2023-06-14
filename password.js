// function that takes a string and returns true if password is valid
function isPasswordValid(string){
    return (isPasswordLengthGreaterThan8(string) && doesPasswordContainDigits(string) && doesPasswordContainAlphabets(string) && doesPasswordContainSpecialCharacters(string))
}


// function should take a string and check if its length is equal or more than 8 characters
function isPasswordLengthGreaterThan8(string){
    return string.length >= 8
}

// function should take a string and returns true if the string contains 1 or more digits

function doesPasswordContainDigits(string){
    const regex = /[0-9]{1,}/
    return regex.test(string)
}

// function should take a string and return true if the string contains an alphabet

function doesPasswordContainAlphabets(string){
    const regex = /[a-z]{1,}/i
    return regex.test(string)
}

// function should take a string and return true if the string contains special characters

function doesPasswordContainSpecialCharacters(string){
    const regex = /[^a-z0-9]/i
    return regex.test(string)
}

module.exports = {isPasswordValid, isPasswordLengthGreaterThan8, doesPasswordContainDigits, doesPasswordContainAlphabets, doesPasswordContainSpecialCharacters}