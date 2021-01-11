let result = document.getElementById('result');

function calculate(){

    let word = document.getElementById('userWord').value;

    let wordLength = word.length;

    result.innerHTML = 'This word is ' +  wordLength + ' letter(s) long!';

    result.classList.remove('hidden');

}