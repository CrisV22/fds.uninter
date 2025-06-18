document.getElementById('button').addEventListener('click', displayText);

function displayText() {
    let text = '"Cada passo importa. Continue, a evolução é a chave."';
    document.getElementById('message').innerText = text;
}