var fs = require('fs');
var current = [];
var next = current;
var generation = 0;

function nextGeneration(){
    for(var x = 0; x < current.length; x++){
        for (var y = 0; y < current[x].length; y++) {
            var n = 0;
            try {
            current[x-1][y-1] ? n++ : n;
            current[x]  [y-1] ? n++ : n;
            current[x+1][y-1] ? n++ : n;
            current[x-1][y]   ? n++ : n;
            current[x+1][y]   ? n++ : n;
            current[x-1][y+1] ? n++ : n;
            current[x]  [y+1] ? n++ : n;
            current[x+1][y+1] ? n++ : n;
            } catch (e){
//                console.log(e);
            }
            if(current[x][y]){
                if(n < 2){
                    next[x][y] = 0;
                } else if (n > 3){
                    next[x][y] = 0;
                } else {
                     next[x][y] = 1;
                }
            } else {
                if(n == 3){
                    next[x][y] = 1;
                }
            }
        };
    }

    for(var x = 0; x < current.length; x++){
        for (var y = 0; y < current[x].length; y++) {
            current[x][y] = next[x][y];
        }
    }

}

function read(){
    fs.readFile('../input/input.txt', 'utf8', function (error, data) {
            if (error) {
                console.error(error);
                return;
            }
            var lines = data.split('\n');
            lines.forEach(function (line, lineIndex) {
                if(line.length > 0){
                    current[lineIndex] = line.split('');
                    current[lineIndex].forEach(function (cell, cellIndex) {
                        current[lineIndex][cellIndex] = parseInt(current[lineIndex][cellIndex]);
                    });
                }
            });
    });
}

function print(){
    console.log('\033c');
    console.log(current.map(function (line) {
        return line.map(function (cell) {
            return cell ? '\uD83D\uDC1E' : ' ';
        }).join('');
    }).join('\n'));
}

function printNative() {
    console.log(current);
}

read();

setInterval(function () {
    nextGeneration();
    print();
    console.log('Generation:' + generation++);
}, 100);
