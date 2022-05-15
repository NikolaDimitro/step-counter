input.onGesture(Gesture.Shake, function () {
    step += 1
    led.stopAnimation()
})
let step = 0
basic.forever(function () {
    basic.showNumber(step)
})
