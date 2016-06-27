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
        line: "Virginia Beaches",
        color: "blue-line",
        type: "beach",
        directions: [
          {direction: "Oceanfront", path: "Virginia Beaches"},
        ]
      } ,
      {
        line: "North Carolina Beaches",
        color: "blue-line",
        type: "beach",
        directions: [
          {direction: "Oceanfront", path: "North Carolina Beaches"},
        ]
      } ,
      {
        line: "South Carolina Beaches",
        color: "green-line",
        type: "beach",
        directions: [
          {direction: "Oceanfront", path: "South Carolina Beaches"},
        ]
      } ,
      {
        line: "Georgia Beaches",
        color: "green-line",
        type: "beach",
        directions: [
          {direction: "Oceanfront", path: "Georgia Beaches"},                                                                                   
        ]
      } ,
      {
        line: "Florida Beaches",
        color: "green-line",
        type: "beach",
        directions: [
          {direction: "Oceanfront East", path: "Eastern Florida Beaches"},
          {direction: "Oceanfront Gulf",  path: "Gulf Coast FLorida Beaches"},
        ]
      } ]
  };
};

stations = {
  'Virginia Beaches': [
    {name: 'Chicks Beach'},
    {name: 'First Landing Beach'},
    {name: 'Virginia Beach'},
    {name: 'Sandbridge Beach'},
    {name: 'Croatan Beach'},
    {name: 'North End Beach'},
    {name: 'Ocean View Beach'},
    ],
  'North Carolina Beaches': [
    {name: 'Wrights'},
    {name: ''},
    {name: ''},
    {name: ''},
    {name: ''},
    {name: ''},
    {name: ''},
    {name: ''}
    ], 
  'South Carolina Beaches': [
    {name: ''},
    {name: ''},
    {name: ''},
    {name: ''},
    {name: ''},
    {name: ''},
    {name: ''},
    {name: ''},
    ],
  'Georgia Beaches': [
    {name: ''},
    {name: ''},
    {name: ''},
    {name: ''},
    {name: ''},
    {name: ''},
    {name: ''},
    {name: ''},
    ],
  'Eastern Florida Beaches': [
    {name: ''},
    {name: ''},
    {name: ''},
    {name: ''},
    {name: ''},
    {name: ''},
    {name: ''},
    {name: ''},
    ],
  'Gulf Coast Florida Beaches': [
    {name: ''},
    {name: ''},
    {name: ''},
    {name: ''},
    {name: ''},
    {name: ''},
    {name: ''},
    {name: ''},
    ],
};

