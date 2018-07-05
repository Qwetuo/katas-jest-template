// There is a bus moving in the city, and it takes and drops some people in each bus stop.

// You are provided with an array of "bus stops". Each "bus stop" is itself an array containing 2 items:

// the number of people who get on bus at that bus stop
// the number of people who get off the bus at that bus stop
// For example, [2, 5] means that 2 people got on the bus, and 5 people got off the bus at that stop.

// Your task is to return number of people who are still in the bus after the last bus station. Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

const numberOfPassengersLeft = (array) => {
    let answer = 0
    array.forEach(busStop => {
        answer += busStop[0] - busStop[1]
    })
    return answer < 0 ? "invalid input" : answer
}

module.exports = numberOfPassengersLeft 