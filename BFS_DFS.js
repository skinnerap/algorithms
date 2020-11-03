// DATA
const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
];

// The graph
const adjacencyList = new Map();

// Add node
function addNode(airport) {
    adjacencyList.set(airport, []);
}

// Add edges
function addEdges(origin, destination) {
    adjacencyList.get(origin).push(destination);
    adjacencyList.get(destination).push(origin);
}

// Populate graph
airports.forEach(airport => addNode(airport));
routes.forEach(route => addEdges(...route));

//console.log(adjacencyList);

function bfs(start) {

    const visited = new Set();

    const queue = [start]; //first in first out

    while(queue.length > 0) {

        const airport = queue.shift();

        const destinations = adjacencyList.get(airport);

        for(const destination of destinations) {

            console.log('Route: ' + destination);

            if(destination === 'BKK') {
                console.log('Route: ' + destination + '(COMPLETE)');
            }

            if(!visited.has(destination)) {
                visited.add(destination);
                queue.push(destination);
            }

        }

    }

    console.log('No route');

}

bfs('PHX');

function dfs(start, visited = new Set()) {

    console.log('Route: ' + start);

    visited.add(start);

    const destinations = adjacencyList.get(start);

    for(const destination of destinations) {

        if(destination === 'BKK') {
            console.log('Route: BKK (COMPLETE)');
            return;
        }

        if(!visited.has(destination)) {
            dfs(destination, visited);
        }

    }

    console.log('No Route')

}

dfs('PHX');

let x = 5;
let y = 2;

console.log(x^y);
