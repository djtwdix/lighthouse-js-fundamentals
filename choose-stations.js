const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

//console.log(stations[0][1]);

let goodStations = [];

const chooseStations = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1] > 20 && (arr[i][2] === "school") || (arr[i][2] === "community centre")) {
        goodStations.push(arr[i][0]);
    } 
   } console.log(goodStations);
}

chooseStations(stations);