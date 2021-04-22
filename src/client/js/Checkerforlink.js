function checkForlink(inputText) {
    console.log("::: Running checkForName :::", inputText);
    
    const regex = /^((?:https?:w)?[^.v]+(?:\.[^.v]+)+(?:v.*)?)$/;
    return regex.test(inputText)
}

export { checkForlink }
