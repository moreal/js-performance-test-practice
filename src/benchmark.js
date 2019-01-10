import Benchmark from 'benchmark';
import PartialTimer from './PartialTimer';
import SimpleTimer from './SimpleTimer';

let countdownSuite = new Benchmark.Suite;

countdownSuite.add('SimpleTimer#countdown', function() {
    let timer = new SimpleTimer(172799);
    while (timer.countdown());
})
.add('PartialTimer#countdown', function() {
    let timer = new PartialTimer(172799);
    while (timer.countdown());
})
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
.run({ 'async': true });

let countdownAndGetterSuite = new Benchmark.Suite;

countdownAndGetterSuite.add('SimpleTimer#countdownAndGetter', function() {
  let timer = new SimpleTimer(172799);
  while (timer.countdown()) {
    timer.getDays();
    timer.getHours();
    timer.getMinutes();
    timer.getSeconds();
  }
})
.add('PartialTimer#countdownAndGetter', function() {
  let timer = new PartialTimer(172799);
  while (timer.countdown()) {
    timer.getDays();
    timer.getHours();
    timer.getMinutes();
    timer.getSeconds();
  }
})
.on('cycle', function(event) {
console.log(String(event.target));
})
.on('complete', function() {
console.log('Fastest is ' + this.filter('fastest').map('name'));
})
.run({ 'async': true });

let GetterSuite = new Benchmark.Suite;

GetterSuite.add('SimpleTimer#Getter', function() {
  let timer = new SimpleTimer(172799);
  for (let i = 0; i < 10000; ++i) {
    timer.getDays();
    timer.getHours();
    timer.getMinutes();
    timer.getSeconds();
  }
})
.add('PartialTimer#Getter', function() {
  let timer = new PartialTimer(172799);
  for (let i = 0; i < 10000; ++i) {
    timer.getDays();
    timer.getHours();
    timer.getMinutes();
    timer.getSeconds();
  }
})
.on('cycle', function(event) {
console.log(String(event.target));
})
.on('complete', function() {
console.log('Fastest is ' + this.filter('fastest').map('name'));
})
.run({ 'async': true });
