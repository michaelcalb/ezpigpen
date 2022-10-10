// one time letters = "abcdefghi-stuv"
// two times letters = "jklmnopqr-wxyz"

var result = []
var text = document.getElementById('text')

function onetime(onetimeletter) {
    result.push(onetimeletter)
    text.value = `${result.join('')}`
}

function twotimes(twotimesletter) {
    result.pop()
    result.pop()
    result.push(twotimesletter)
    text.value = `${result.join('')}`
}

function cleartext() {
    result = []
    text.value = ``
}