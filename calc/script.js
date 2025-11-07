const buttons = document.querySelectorAll('.btn')
const display = document.getElementById('display')

let expression = ''

buttons.forEach(button => {
	button.addEventListener('click', () => {
		const value = button.textContent

		if (value === '=') {
			try {
				expression = eval(expression).toString()
			} catch {
				expression = 'Error'
			}
		} else if (value === 'C') {
			expression = ''
		} else {
			expression += value
		}

		display.value = expression
	})
})
