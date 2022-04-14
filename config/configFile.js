exports.testMode = true

exports.info = {
    prefix: this.testMode ? '.' : '#',
    dono: {
        nome: "Tomoya Aki",
        numero: [
            "Owner: 6282284739859@s.whatsapp.net"
        ]
    },
    grupo: ""
}

exports.connectionFileName = () => {
    var path = './connection/'
    return path + (this.testMode ? 'wabasemdConnectionTest.json' : 'wabasemdConnection.json')
}