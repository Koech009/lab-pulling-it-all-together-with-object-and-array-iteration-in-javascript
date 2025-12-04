function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}
// Function to get the points scored by a specific player
function numPointsScored(playerName) {
  const game = gameObject(); // Retrieve the full game data

  // Loop through both teams: 'home' and 'away'
  for (const team in game) {
    const players = game[team].players; // Get the players object for the current team

    // Check if the player exists in this team
    if (players[playerName]) {
      return players[playerName].points; // Return the points of the player
    }
  }

  return null; // Return null if the player is not found in either team
}

// Function to get the shoe size of a specific player
function shoeSize(playerName) {
  const game = gameObject(); // Retrieve the full game data

  // Loop through both teams: 'home' and 'away'
  for (const team in game) {
    const players = game[team].players; // Get the players object for the current team

    // Check if the player exists in this team
    if (players[playerName]) {
      return players[playerName].shoe; // Return the shoe size of the player
    }
  }

  return null; // Return null if the player is not found in either team
}

// Function to get the colors of a given team
function teamColors(teamName) {
  const game = gameObject(); // Get the full game data

  // Loop through each team in the game (home and away)
  for (const team in game) {
    if (game[team].teamName === teamName) {
      // Return the colors array if the team name matches
      return game[team].colors;
    }
  }

  return null; // Return null if team is not found
}

// Function to get an array of all team names
function teamNames() {
  const game = gameObject(); // Get the full game data
  const names = []; // Initialize empty array to store team names

  // Loop through each team and push its name to the array
  for (const team in game) {
    names.push(game[team].teamName);
  }

  return names; // Return the array of team names
}

// Function to get all jersey numbers for a given team
function playerNumbers(teamName) {
  const game = gameObject(); // Get the full game data
  const numbers = []; // Initialize an array to store jersey numbers

  // Loop through both teams: 'home' and 'away'
  for (const team in game) {
    if (game[team].teamName === teamName) {
      // Loop through all players in the matching team
      for (const player in game[team].players) {
        numbers.push(game[team].players[player].number); // Add each player's number to the array
      }
    }
  }

  return numbers; // Return the array of jersey numbers
}

// Function to get all stats for a specific player
function playerStats(playerName) {
  const game = gameObject(); // Get the full game data

  // Loop through both teams
  for (const team in game) {
    const players = game[team].players; // Get the players object for the current team

    // Check if the player exists in this team
    if (players[playerName]) {
      return players[playerName]; // Return the entire stats object for the player
    }
  }

  return null; // Return null if the player is not found
}

// Function to find the player with the largest shoe size and return their rebounds
function bigShoeRebounds() {
  const game = gameObject(); // Get the full game data

  let maxShoeSize = 0; // Track the largest shoe size found
  let rebounds = 0;    // Track the rebounds of the player with the largest shoe

  // Loop through both teams: 'home' and 'away'
  for (const team in game) {
    const players = game[team].players; // Get the players object for the current team

    // Loop through each player in the team
    for (const player in players) {
      // Check if this player's shoe size is larger than the current max
      if (players[player].shoe > maxShoeSize) {
        maxShoeSize = players[player].shoe;   // Update the max shoe size
        rebounds = players[player].rebounds; // Update the rebounds of this player
      }
    }
  }

  return rebounds; 
}

// Function to find the player with the most points scored
function mostPointsScored() {
  const game = gameObject();
  let maxPoints = 0;
  let topPlayer = "";

  // Loop through both teams
  for (const team in game) {
    const players = game[team].players;

    for (const player in players) {
      if (players[player].points > maxPoints) {
        maxPoints = players[player].points;
        topPlayer = player;
      }
    }
  }

  return topPlayer;
}

// Function to determine which team has the most total points
function winningTeam() {
  const game = gameObject();
  const teamPoints = {}; // To store total points for each team

  // Loop through both teams
  for (const team in game) {
    const players = game[team].players;
    let totalPoints = 0;

    // Sum points of all players in this team
    for (const player in players) {
      totalPoints += players[player].points;
    }

    teamPoints[game[team].teamName] = totalPoints;
  }

  // Compare points to find the winner
  return teamPoints[game.home.teamName] > teamPoints[game.away.teamName]
    ? game.home.teamName
    : game.away.teamName;
}

// Function to find the player with the longest name
function playerWithLongestName() {
  const game = gameObject();
  let longestName = "";

  // Loop through both teams
  for (const team in game) {
    const players = game[team].players;

    for (const player in players) {
      if (player.length > longestName.length) {
        longestName = player;
      }
    }
  }

  return longestName;
}

// Function to check if the player with the longest name has the most steals
function doesLongNameStealATon() {
  const game = gameObject();
  const longestNamePlayer = playerWithLongestName();

  let maxSteals = 0;
  let stealsOfLongestNamePlayer = 0;

  for (const team in game) {
    for (const player in game[team].players) {
      const playerSteals = game[team].players[player].steals;
      if (playerSteals > maxSteals) {
        maxSteals = playerSteals;
      }
      if (player === longestNamePlayer) {
        stealsOfLongestNamePlayer = playerSteals;
      }
    }
  }

  return stealsOfLongestNamePlayer === maxSteals;
}

console.log(doesLongNameStealATon()); // should now print true


//calls

console.log(numPointsScored("Alan Anderson")); 
console.log(shoeSize("Mason Plumlee"));        
console.log(teamColors("Brooklyn Nets"));      
console.log(teamNames());                      
console.log(playerNumbers("Charlotte Hornets")); 
console.log(playerStats("Ben Gordon"));        
console.log(bigShoeRebounds());               
console.log(mostPointsScored());              
console.log(winningTeam());                   
console.log(playerWithLongestName());         
console.log(doesLongNameStealATon());        
