radio.setTransmitSerialNumber(true);
radio.setTransmitPower(4);
radio.setGroup(151)
radio.onReceivedNumber(function(receivedNumber: number) {
    let serialNum = radio.receivedPacket(RadioPacketProperty.SerialNumber)
    if(serialNum === 957673456){
        basic.showNumber(receivedNumber);
    }
    
})
input.onButtonPressed(Button.A, function() {
    basic.showNumber(control.deviceSerialNumber())
})