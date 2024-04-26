// Import the ClassRoom class from 0-classroom.js
const { ClassRoom } = require('./0-classroom');

// Implement the initializeRooms function
function initializeRooms() {
    // Create an array of ClassRoom objects with the specified sizes
    const rooms = [
        new ClassRoom(19),
        new ClassRoom(20),
        new ClassRoom(34)
    ];
    return rooms;
}

// Export the initializeRooms function
module.exports = { initializeRooms };

