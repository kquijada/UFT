Device("Device").EnterKeys 0, "hcasas" 
Device("Device").EnterKeys 1,"Tab"
Device("Device").EnterKeys 0,"Micro1234"
Device("Device").App("CB Banking").MobileObject("MobileObject").Tap
Device("Device").App("CB Banking").MobileButton("Conéctese").Tap
Device("Device").App("CB Banking").MobileButton("ACEPTAR").Tap
