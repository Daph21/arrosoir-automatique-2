input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(3000)
    pins.digitalWritePin(DigitalPin.P0, 0)
})
input.onButtonPressed(Button.B, function () {
    Humidité = pins.analogReadPin(AnalogPin.P1)
    basic.showString("" + (Humidité))
})
let Graphumi = 0
let Humidité = 0
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
basic.pause(2000)
basic.clearScreen()
basic.forever(function () {
    Humidité = pins.analogReadPin(AnalogPin.P1)
    if (Humidité < 200) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(3000)
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
    Graphumi = Math.map(Humidité, 100, 750, 0, 25)
    led.plotBarGraph(
    Graphumi,
    25
    )
    basic.pause(5000)
})
