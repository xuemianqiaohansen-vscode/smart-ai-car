PlanetX_AILens.initModule()
PlanetX_AILens.switchfunc(PlanetX_AILens.FuncList.Card)
while (true) {
    PlanetX_AILens.cameraImage()
    if (PlanetX_AILens.trafficCard(PlanetX_AILens.trafficCards.forward)) {
        pins.servoWritePin(AnalogPin.P1, 135)
        pins.servoWritePin(AnalogPin.P13, 45)
    } else if (PlanetX_AILens.trafficCard(PlanetX_AILens.trafficCards.turnleft)) {
        pins.servoWritePin(AnalogPin.P1, 90)
        pins.servoWritePin(AnalogPin.P13, 45)
        basic.pause(100)
        pins.servoWritePin(AnalogPin.P1, 90)
        pins.servoWritePin(AnalogPin.P13, 90)
    } else if (PlanetX_AILens.trafficCard(PlanetX_AILens.trafficCards.turnright)) {
        pins.servoWritePin(AnalogPin.P1, 45)
        pins.servoWritePin(AnalogPin.P13, 90)
    } else {
    	
    }
    basic.pause(100)
}
