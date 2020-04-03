let obj = {};
obj.name = ["Al", "Bill", "Chill", "Dill", "Frill"];
obj.room = ["Ballroom", "Atic", "Lounge", "Kitchen", "Hall"];
obj.weapon = [
  { type: "Gun", location: obj.room[4] },
  { type: "Sword", location: obj.room[3] },
  { type: "Spoon", location: obj.room[2] },
  { type: "Drill", location: obj.room[1] },
  { type: "Knife", location: obj.room[0] },
];

const { name, room, weapon } = {
  name: obj.name[1],
  room: obj.room[3],
  weapon: obj.weapon[2],
};

//console.log(obj);

const game = {
  suspects: [
    { name: "Bill", color: "BLUE", guilty: false },
    { name: "Jill", color: "RED", guilty: false },
  ],
};

const [color1, color2] = [game.suspects[0].color, game.suspects[1].color];

//console.log(color1, color2);

function iterate(arr) {
  var firstColor, secondColor;
  for (var i = 0; i < arr.length; i++) {
    firstColor = arr[0].color;
    secondColor = arr[1].color;
  }
  return firstColor + " " + secondColor;
}
//console.log(iterate(game.suspects));

const _ = {};

_.each = function (list, callback) {
  if (Array.isArray(list)) {
    for (let i = 0; i < list.length; i++) {
      callback(list[i], i, list);
    }
  } else {
    for (let key in list) {
      callback(list[key], key, list);
    }
  }
};

_.each({ a: "bill", b: "kill", c: "still" }, function (name, i, list) {
  if (list[i + 1]) {
    console.log(name, "is younger than", list[i + 1]);
  } else {
    console.log(name, "is the oldest");
  }
});
