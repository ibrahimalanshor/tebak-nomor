let nomorTogel = Math.floor(Math.random() * 100)
let kesempatan = 0
let resetButton

const button = document.querySelector('button')
const input = document.querySelector('input')
const ulangi = document.querySelector('.ulangi')

const jawaban = document.querySelector('.jawaban')
const hasil = document.querySelector('.hasil')

const ulang = () => {
	kesempatan = 0

	input.disabled = false
	button.disabled = false

	hasil.classList.add('d-none')
	hasil.textContent = ''
	jawaban.textContent = 'Jawaban: '

	input.value = ''
	input.focus()

	resetButton.remove()

	nomorTogel = Math.floor(Math.random() * 100)
}

const selesai = () => {
	resetButton = document.createElement('button')
	
	input.disabled = true
	button.disabled = true

	resetButton.classList.add('btn', 'btn-info', 'btn-block')
	resetButton.textContent = 'Ulangi'
	resetButton.addEventListener('click', ulang)

	ulangi.append(resetButton)
}

const cek = () => {
	const nomorTebakan = Number(input.value)

	const span = document.createElement('span')
	span.classList.add('badge', 'badge-secondary', 'mr-1')
	span.textContent = nomorTebakan

	jawaban.append(span)

	if (nomorTebakan === nomorTogel) {
		hasil.classList.remove('d-none')
		hasil.classList.remove('alert-danger')
		hasil.classList.add('alert-success')
		hasil.textContent = 'Benar'
		selesai()
	} else if (kesempatan === 10) {
		hasil.classList.remove('d-none')
		hasil.classList.remove('alert-success')
		hasil.classList.add('alert-danger')
		hasil.textContent = 'Gagal'
		selesai()
	} else {
		hasil.classList.remove('d-none')
		hasil.classList.add('alert-success')
		hasil.classList.add('alert-danger')
		if (nomorTebakan <= nomorTogel) {
			hasil.textContent = 'Kekecilan'
		} else {
			hasil.textContent = 'Kegedean'
		}
	}

	kesempatan++
	input.value = ''
	input.focus()
}


button.addEventListener('click', cek);