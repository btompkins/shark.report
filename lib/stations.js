currentLine = function() {
  return Router.current().params.line;
};

currentTransitType = function() {
  return Router.current().params.type;
};

currentStations = function () {
  return stations[currentLine()];
};

listOfLines = function() {
  return {
    se: [
      {
        line: "Virginia Beach, Virginia",
        color: "blue-line",
        type: "beach",
        directions: [
          {direction: "Oceanfront South", path: "Virginia Beach South"},
          {direction: "Oceanfront North", path: "Virginia Beach North"},
        ]
      } 
    ]
  };
};

stations = {
  'Virginia Beach South': [
    {name: '1st - 5th Street'},
    {name: '6th - 10th Street'},
    {name: '11th - 15th Street'},
    {name: '16th - 20th Street'},
    {name: '21th - 25th Street'},
    {name: '26th - 30th Street'},
    {name: '31st - 35th Street'},
    {name: '36th - 40th Street'}
    ],
  'Virginia Beach North': [
    {name: '42nd - 50th Street'},
    {name: '51st - 55th Street'},
    {name: '56th -60th Street'},
    {name: '61st -65th Street'},
    {name: '66th -70th Street'},
    {name: '71st -75th Street'},
    {name: '76th - 80th Street'},
    {name: '81st - 89th Street'}
    ]
};

