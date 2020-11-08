input.onButtonPressed(Button.A, function () {
    toplam_adim += 1
})
input.onButtonPressed(Button.AB, function () {
    toplam_adim = 0
    mesafe = 0
    benim_adimim = 50
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(toplam_adim)
    mesafe = toplam_adim * benim_adimim
    basic.pause(1000)
    basic.showNumber(mesafe)
})
let benim_adimim = 0
let mesafe = 0
let toplam_adim = 0
toplam_adim = 0
mesafe = 0
benim_adimim = 50
basic.showIcon(IconNames.Yes)
