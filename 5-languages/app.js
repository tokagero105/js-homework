const promptText = 'Enter your language'
const userInput = prompt(promptText)

switch (userInput.toLowerCase()) {
    case 'ru':
        console.log('Дарова');
        break;
    case 'en':
        console.log('Hello');
        break;
    case 'de':
        console.log('Hallo');
        break;
    case 'ja':
        console.log('こんにちは');
        break;
    case 'es':
        console.log('Hola');
        break;
    default:
        console.log('Unknown language')
}