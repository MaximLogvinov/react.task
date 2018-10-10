console.log('Increasing sequence');
function* increasingSequence() {
    for ( let i = 0; ; i++ )
        yield i
}

let increasItem = increasingSequence();

for ( let i = 0; i < 3; i++ ) {
    console.log(increasItem.next());
}

console.log('decreasing sequence');

function* decreasingSequence() {
    for ( let i = 0; ; i-- )
        yield i
}

let decreasItem = decreasingSequence();

for ( let i = 0; i < 3; i++ ) {
    console.log(decreasItem.next());
}

console.log('random number less then 10000');
function* randomNumberSequense() {
    for ( let i = 0; ; i++ )
        yield Math.round(Math.random() * (10000))
}

let randomItem = randomNumberSequense();
for ( let i = 0; i < 3; i++ ) {
    console.log(randomItem.next());
}

console.log('traffic light');

function* trafficLightsOrder() {
    let [red, yellow, green] = ['red', 'yellow', 'green'];
    yield red;
    yield yellow;
    yield green;
}
function* trafficLightStart() {
    while (true)
    yield* trafficLightsOrder();
}

let traffic = trafficLightStart();
for ( let i = 0; i < 6; i++ ) {
    console.log(traffic.next())
}
