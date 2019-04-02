WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set "john" @@ hightlight id_;_2139894816_;_script infofile_;_ZIP::ssf30.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").SetSecure "5c475f44707130be0cc4" @@ hightlight id_;_2097727200_;_script infofile_;_ZIP::ssf32.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click @@ hightlight id_;_2097489392_;_script infofile_;_ZIP::ssf31.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("fromCity").Select "Frankfurt" @@ hightlight id_;_2081787976_;_script infofile_;_ZIP::ssf36.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("fromCity").Output CheckPoint("fromCity")
If WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("fromCity").Select = "Frankfurt" Then
   
End If
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("toCity").Select "Denver" @@ hightlight id_;_2097744192_;_script infofile_;_ZIP::ssf38.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfImage("WpfImage_3").Click 7,10 @@ hightlight id_;_2097765408_;_script infofile_;_ZIP::ssf39.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfCalendar("Su").SetDate "24-Jan-2019" @@ hightlight id_;_2097720096_;_script infofile_;_ZIP::ssf40.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("Class").Select "Business" @@ hightlight id_;_2097720624_;_script infofile_;_ZIP::ssf44.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("numOfTickets").Select "2" @@ hightlight id_;_2097499904_;_script infofile_;_ZIP::ssf48.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_2097727680_;_script infofile_;_ZIP::ssf49.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfTable("flightsDataGrid").SelectCell 1,0 @@ hightlight id_;_2097772848_;_script infofile_;_ZIP::ssf50.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("SELECT FLIGHT").Click @@ hightlight id_;_2097774816_;_script infofile_;_ZIP::ssf51.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("passengerName").Set "Karen" @@ hightlight id_;_1923794368_;_script infofile_;_ZIP::ssf53.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("ORDER").Click @@ hightlight id_;_1923794560_;_script infofile_;_ZIP::ssf54.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("NEW SEARCH").Click @@ hightlight id_;_1923796288_;_script infofile_;_ZIP::ssf56.xml_;_
WpfWindow("Micro Focus MyFlight Sample").Close @@ hightlight id_;_1050592_;_script infofile_;_ZIP::ssf57.xml_;_
