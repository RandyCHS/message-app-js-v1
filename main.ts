input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
})
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showString("Hello!")
    } else {
        basic.showString("Goodbye")
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
})
radio.setGroup(1)
basic.forever(function () {
	
})
