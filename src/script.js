function replaceSpaceWithEmoji() {
    const textInput = document.getElementById('textInput');
    const text = textInput.value;
    const replacedText = text.replace(/ /g, '🤸');

    textInput.value = replacedText;
}