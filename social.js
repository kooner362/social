var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

function followsMost (data) {
  var name = '';
  var followers = 0;
  for (var id in data) {
    var len = data[id].follows.length;
    if (len > followers) {
      followers = len;
      name = data[id].name;
    }
  }
  return name + ' follows the most.'
}

function hasMostFollowers (data) {
  var results = {};
  for (var id in data) {
    var follows = data[id].follows
    follows.forEach(function(id){
      if (results[id] === undefined) {
        results[id] = 1;
      }
      else{
        results[id] += 1;
      }
    });
  }
  var most_followers = 0;
  var id = '';
  for (var most in results) {
    if (results[most] > most_followers) {
      most_followers = results[most];
      id = most;
    }
  }
  return data[id].name;
}

/*
 *List everyone and for each of them, list the names of who they follow and who follows them
 *Identify who follows the most people
 *Identify who has the most followers
 *Identify who has the most followers over 30
 *Identify who follows the most people over 30
 *List those who follow someone that doesn't follow them back
 *List everyone and their reach (sum of # of followers and # of followers of followers)
*/
