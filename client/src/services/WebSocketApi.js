var ws = new WebSocket('ws://localhost:8082')
var Console = console
ws.onerror = (error) => {
    Console.log('ws error: ' + error)
}

ws.onmessage = (data) => {
    Console.log('ws data: ' + data.data)
}

ws.onopen = () => {
    Console.log('ws is already open')
}

export default ws