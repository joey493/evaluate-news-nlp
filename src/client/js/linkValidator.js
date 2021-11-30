function linkValidator(inputText) {
    console.log("::: Running linkValidator :::", inputText);
    
    const regex = /^((?:https?:\/\/)?[^.\/]+(?:\.[^.\/]+)+(?:\/.*)?)$/
    
    return inputText.match(regex);
}

export { linkValidator }
