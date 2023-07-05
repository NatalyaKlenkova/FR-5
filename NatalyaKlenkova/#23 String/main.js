function showVerticalMessage(string) {
    for (let i = 0; i < string.length; i++) {
        if (i === 0) {
            console.log(string[i].toUpperCase())
        } else if (i === 7) {
            break
        } else {
            console.log(string[i])
        }
    }
}

showVerticalMessage('stradastrada');