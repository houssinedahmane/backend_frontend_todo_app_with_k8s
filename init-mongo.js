// This script is intended for MongoDB initialization
// It should not be used in a Mongoose model file

// Sleep function to add a delay
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  // Add a delay before connecting to the database
  await sleep(5000); // Adjust the delay time as needed
  
  // Switch to the 'todos' database
  db = db.getSiblingDB('todos');
  
  // Create a user with appropriate roles
  db.createUser({
      user: "username",
      pwd: "password",
      roles: ["readWrite", "dbAdmin"]
  });
  