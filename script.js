// one time letters = "abcdefghistuv"
// two times letters = "jklmnopqrwxyz"

var result = []
var text = document.getElementById('text')

function onetime(onetimeletter) {
    result.push(onetimeletter)
    text.innerHTML = `decoded: ${result.join('')}`
}

function twotimes(twotimesletter) {
    result.pop()
    result.pop()
    result.push(twotimesletter)
    text.innerHTML = `decoded: ${result.join('')}`
}