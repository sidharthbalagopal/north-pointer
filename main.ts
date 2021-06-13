let heading_angle = 0
basic.forever(function () {
    heading_angle = input.compassHeading()
    if (heading_angle > 23 && heading_angle <= 68) {
        basic.showString("NE")
    } else if (heading_angle > 68 && heading_angle <= 113) {
        basic.showString("E")
        basic.showArrow(ArrowNames.West)
    } else if (heading_angle > 113 && heading_angle <= 158) {
        basic.showString("SE")
    } else if (heading_angle > 158 && heading_angle <= 203) {
        basic.showString("S")
        basic.showArrow(ArrowNames.South)
    } else if (heading_angle > 203 && heading_angle <= 248) {
        basic.showString("SW")
    } else if (heading_angle > 248 && heading_angle <= 293) {
        basic.showString("W")
        basic.showArrow(ArrowNames.East)
    } else if (heading_angle > 293 && heading_angle <= 338) {
        basic.showString("NW")
    } else if (heading_angle > 338 || heading_angle <= 23) {
        basic.showString("N")
        basic.showArrow(ArrowNames.North)
    }
})
