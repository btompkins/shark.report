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
    ne: [
      {
        line: "Maine Beaches",
        color: "olive-line",
        type: "beach",
        directions: [
         {direction: "Oceanfront",  path: "Maine Beaches"},
        ]
      } ,
      {
        line: "New Hampshire ",
        color: "olive-line",
        type: "beach",
        directions: [
          {direction: "Oceanfront", path: "New Hampshire Beaches"},
         ]
       } ,
       { 
        line: "New York Beaches",
        color: "olive-line",
        type: "beach",
        directions: [
          {direction: "Oceanfront", path: "New York Beaches"},
        ]
      } ,
      {
        line: "Massachusetts Beaches",
        color: "olive-line",
        type: "beach",
        directions: [
          {direction: "Oceanfront", path: "Massachusetts Beaches"},
        ]
      } ,
      {
        line: "Rhode Island Beaches",
        color: "olive-line",
        type: "beach",
        directions: [
          {direction: "Oceanfront", path: "Rhode Island Beaches"},  
        ]
      } ,
      {
        line: "Connecticut Beaches",
        color: "olive-line",
        type: "beach",
        directions: [
          {direction: "Oceanfront", path: "Connecticut Beaches"},                                                                                   
        ]
      } ,
      {
        line: "New Jersey Beaches",
        color: "olive-line",
        type: "beach",
        directions: [
          {direction: "Oceanfront", path: "New Jersey Beaches"},
        ]
      } ,
      {
        line: "Maryland Beaches",
        color: "olive-line",
        type: "beach",
        region: "southeast",
        directions: [
         {direction: "Oceanfront",  path: "Maryland Beaches"},
        ]
      } ],
    se: [
      {
        line: "Virginia Beaches",
        color: "babyblue-line",
        type: "beach",
        region: "southeast",
        directions: [
          {direction: "Oceanfront", path: "Virginia Beaches"},
        ]
      } ,
      {
        line: "North Carolina Beaches",
        color: "babyblue-line",
        type: "beach",
        directions: [
          {direction: "Oceanfront", path: "North Carolina Beaches"},
        ]
      } ,
      {
        line: "South Carolina Beaches",
        color: "babyblue-line",
        type: "beach",
        directions: [
          {direction: "Oceanfront", path: "South Carolina Beaches"},
        ]
      } ,
      {
        line: "Georgia Beaches",
        color: "babyblue-line",
        type: "beach",
        directions: [
          {direction: "Oceanfront", path: "Georgia Beaches"},                                                                                   
        ]
      } ,
      {
        line: "Florida East Coast Beaches",
        color: "babyblue-line",
        type: "beach",
        directions: [
          {direction: "Oceanfront East", path: "Florida East Coast Beaches"},
        ]
      } ],
    gc: [
      {
        line: "Florida Gulf Coast Beaches",
        color: "maroon-line",
        type: "beach",
        directions: [
          {direction: "Oceanfront Gulf", path: "Florida Gulf Coast Beaches"},
        ]
      } ,
      {
        line: "Alabama Beaches",
        color: "maroon-line",
        type: "beach",
        directions: [
          {direction: "Oceanfront", path: "Alabama Beaches"},
        ]
      } ,
      {
        line: "Mississippi Beaches",
        color: "maroon-line",
        type: "beach",
        directions: [
          {direction: "Oceanfront", path: "Mississippi Beaches"},
        ]
      } ,
      {
        line: "Louisiana Beaches",
        color: "maroon-line",
        type: "beach",
        directions: [
          {direction: "Oceanfront", path: "Louisiana Beaches"},                                                                                   
        ]
      } ,
      {
        line: "Texas Beaches",
        color: "maroon-line",
        type: "beach",
        directions: [
          {direction: "Oceanfront", path: "Texas Beaches"},
        ]
      } ],
    wc: [
      {
        line: "Washington Beaches",
        color: "orange-line",
        type: "beach",
        directions: [
          {direction: "Oceanfront", path: "Washington Beaches"},
        ]
      } ,
      {
        line: "Oregon Beaches",
        color: "orange-line",
        type: "beach",
        directions: [
          {direction: "Oceanfront", path: "Oregon Beaches"},
        ]
      } ,
      {
        line: "California Beaches",
        color: "orange-line",
        type: "beach",
        directions: [
          {direction: "Oceanfront", path: "California Beaches"},
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
    {name: 'Atlantic Beach'},
    {name: 'Bald Head Island'},
    {name: 'Carolina Beach'},
    {name: 'Carova Beach'},
    {name: 'Coquina Beach'},
    {name: 'Topsail Beach'},
    {name: 'Emerald Isle Beach'}
    ], 
  'South Carolina Beaches': [
    {name: 'Myrtle Beach'},
    {name: 'Isle of Palms Beach'},
    {name: 'Folly Beach'},
    {name: 'Hilton Head Beach'},
    {name: 'Surfside Beach'},
    {name: 'Edisto Beach'},
    ],
  'Georgia Beaches': [
    {name: 'Tybee Island Beach'},
    {name: 'St. Simon\'s Island Beach'},
    {name: 'Jekyll Island Beach'},
    {name: 'Sapelo Island Beach'},
    {name: 'Sea Island Beach'},
    {name: 'Wassaw Island Beach'},
    {name: 'St. Andrew Beach'},
    ],
  'Florida East Coast Beaches': [
    {name: 'Cocoa Beach'},
    {name: 'Vero Beach'},
    {name: 'Palm Beach'},
    {name: 'Atlantic Beach'},
    {name: 'Neptune Beach'},
    {name: 'Miami Beach'},
    ],
  'Florida Gulf Coast Beaches': [
    {name: 'Barefoot Beach'},
    {name: 'Laguna Beach'},
    {name: 'Rosemary Beach'},
    {name: 'Seaside Beach'},
    {name: 'Grayton Beach'},
    {name: 'Miramar Beach'},
    {name: 'Navarre Beach'},
    {name: 'Pensacola Beach'},
    ],
  'Alabama Beaches': [
    {name: 'Gulf Shores Beach'},
    {name: 'Orange Beach'},
    {name: 'Dauphin Island Beach'},
    {name: 'Fort Morgan Beach'},
    {name: 'Fairhope Beach'},
    ],
  'Mississippi Beaches': [
    {name: 'Gulfport Beach'},
    {name: 'Long Beach'},
    {name: 'Horn Island'},
    {name: 'Waveland Beach'},
    {name: 'Bay Springs Beach'},
    ],
  'Louisiana Beaches': [
    {name: 'Grand Isle Beach'},
    {name: 'Cameron Beach'},
    {name: 'Lake Pontchatrain'},
    ],
  'Texas Beaches': [
    {name: 'Galveston Beach'},
    {name: 'South Padre Island'},
    {name: 'Corpus Christi Beach'},
    {name: 'Surfside Beach'},
    {name: 'Freeport Beach'},
    {name: 'Mustang Island'},
    {name: 'Port Aransas Beach'},
    {name: 'Matagorda Beach'},
    ],
  'Maine Beaches': [
    {name: 'Wells Beach'},
    {name: 'Oqunquit Beach'},
    {name: 'Kennebunk Beach'},
    {name: 'York Beach'},
    {name: 'Saco Beach'},
    {name: 'Bay of Fundy'},
    {name: 'Mount Desert Beach'},
    ],
  'New Hampshire': [
    {name: 'Hampton Beach'},
    {name: 'North Hanpton State Beach'},
    {name: 'Rye Beach'},
    {name: 'Jenness Beach'},
    {name: 'Wallis Sands State Beach'},
    ],
  'New York Beaches': [
    {name: 'Long Island'},
    {name: 'Montauk Beach'},
    {name: 'Fire Island'},
    {name: 'Long Beach'},
    {name: 'Southampton Beach'},
    {name: 'Shirley Beach'},
    {name: 'Amagansett Beach'},
    {name: 'Shelter Island'},
    ],
  'Massachusetts Beaches': [
    {name: 'Good Harbor Beach'},
    {name: 'Singing Beach'},
    {name: 'Coast Guard Beach'},
    {name: 'Lighhouse Beach'},
    {name: 'Tenean Beach'},
    {name: 'Nahant Beach'},
    {name: 'Constitution Beach'},
    {name: 'Crane Beach'},
    ],
  'Rhode Island': [
    {name: 'Mansion Beach'},
    {name: 'Fred Benson Town Beach' },
    {name: 'Misquamicut Beach'},
    {name: 'Scarborough State Beach'},
    {name: 'East Beach'},
    {name: 'Second Beach'},
    {name: 'South Shore Beach'},
    {name: 'Narragansett Town Beach'},
    ],
  'Connecticut Beaches': [
    {name: 'Byram Beach'},
    {name: 'Island Beach'},
    {name: 'Hammonasset State Beach'},
    {name: 'Calf Pasture Beach'},
    {name: 'Jennings Beach'},
    {name: 'Silver Sands State Beach'},
    {name: 'Rocky Neck State Beach'},
    {name: 'West Beach'},
    ],
  'New Jersey Beaches': [
    {name: 'Point Pleasant Beach'},
    {name: 'Stone Harbor Beach'},
    {name: 'Ocean City Beach'},
    {name: 'Wildwood Beach'},
    {name: 'Cape May Beach'},
    {name: 'Belmar Beach'},
    {name: 'Beach Haven'},
    {name: 'Sea Girt Beach'},
    ],
  'Maryland Beaches': [
    {name: 'Ocean City Beach'},
    {name: 'Assateague Island'},
    {name: 'Sandy Point State Beach'},
    {name: 'North Beach'},
    {name: 'Chesapeake Beach'},
    {name: 'Calvert Cliffs State Beach'},
    {name: 'Breezy Point Beach'},
    ],
  'Washington Beaches': [
    {name: 'La Push Beach'},
    {name: 'Kalaloch Beach'},
    {name: 'Long Beach'},
    {name: 'Whidbey Island'},
    {name: 'Westport Beach'},
    {name: 'Grayland Beach'},
    {name: 'Clinton Beach'},
    ],
  'Oregon Beaches': [
    {name: 'Seaside Beach'},
    {name: 'Lincoln City Beach'},
    {name: 'Bandon Beach'},
    {name: 'Newport Beach'},
    {name: 'Cannon Beach'},
    {name: 'Seal Rock Beach'},
    {name: 'Brookings Beach'},
    ],
  'California Beaches': [
    {name: 'Coronado Beach'},
    {name: 'Santa Cruz Beach'},
    {name: 'Malibu Beach'},
    {name: 'Santa Monica Beach'},
    {name: 'Black\'s Beach'},
    {name: 'Dog Beach'},
    {name: 'Laguna Beach'},
    {name: 'Santa Barbara East Beach'},
    {name: 'Santa Barbara West Beach'},
    {name: 'Monterey Beach'},
    {name: 'Half Moon Bay Beach'},
    {name: 'Carlsbad Beach'},
    {name: 'Ventura Beach'},
    {name: 'Huntington Beach'},
    {name: 'Newport Beach'},
    {name: 'Del MAr Beach'},
    {name: 'Ocean Beach'},
    {name: 'Baker Beach'},
    {name: 'China Beach'},
    {name: 'Bolinas Beach'},
    {name: 'Long Beach'},
    {name: 'Manhattan Beach'},
    {name: 'Cayucos State Beach'},
    ],
};

