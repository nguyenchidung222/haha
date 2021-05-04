input.onSound(DetectedSound.Loud, function () {
    SuperBit.Servo(SuperBit.enServo.S1, 0)
    basic.pause(2000)
    SuperBit.Servo(SuperBit.enServo.S1, 90)
    basic.pause(2000)
    SuperBit.Servo(SuperBit.enServo.S1, 180)
    basic.pause(2000)
    SuperBit.Servo(SuperBit.enServo.S1, 180)
})
basic.showLeds(`
    . # . # .
    . # . # .
    . . . . .
    # # # # #
    . # # # .
    `)
max7219_matrix.setup(
1,
DigitalPin.P1,
DigitalPin.P2,
DigitalPin.P3,
DigitalPin.P4
)
basic.forever(function () {
    max7219_matrix.for_4_in_1_modules(
    rotation_direction.none,
    false
    )
    max7219_matrix.scrollText(
    "Hello world!",
    75,
    2000
    )
})
