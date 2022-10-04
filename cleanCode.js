var input = require('fs').readFileSync('entrada', 'utf8')
var lines = input.split('\n')

const t = +lines[0]

for (let i = 1; i < t * 2; i = i + 2) {
    let w = lines[i]
    let n = +lines[i + 1]
    let cW = ''

    for (let j = 0; j < w.length; j++) {
        let cA = w[j].charCodeAt(0) - n

        if (cA < 65) {
            let c = 65 - cA
            cA = 91 - c
        }

        cW = cW + String.fromCharCode(cA)
    }
    console.log(cW)
}
