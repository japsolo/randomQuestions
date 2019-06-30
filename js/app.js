const h2 = document.querySelector('h2');
const p = document.querySelector('p');
const button = document.querySelector('button');

const emojis = ['🤓', '😟', '😫', '🤯', '🥺', '🤩', '🥳', '😜', '😗', '🤮', '🤢', '🥴', '🤑', '🙀', '🙈', '🙊', '🙉', '🐒', '🌝', '🌚', '👩', '👨', '💩'];

button.addEventListener('click', () => {
	let n = Math.floor(Math.random() * emojis.length);
	if (questions.length > 0) {
		let rand = Math.floor(Math.random() * questions.length);

		h2.innerText = `Subject: ${questions[rand].subject}`;
		p.innerHTML = `${emojis[n]} ${questions[rand].question} ${emojis[n]}`;

		questions.splice(rand, 1);
		return;
	}
	h2.innerText = 'No hay más preguntas';
	p.innerHTML = '¡Son libres!';
	button.style.display = 'none';
});
