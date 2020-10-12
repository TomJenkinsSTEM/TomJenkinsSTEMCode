let Temperature = 0
input.onGesture(Gesture.Shake, function () {
    Temperature = input.temperature()
    basic.showNumber(Temperature * (9 / 5) + 32)
})
