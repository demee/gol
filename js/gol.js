var current = [
                [0,1,0,0,0,0,0,0,0,0], 
                [0,0,1,0,0,0,0,0,0,0], 
                [1,1,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,1,0,0,0,0,0,0,0,0],
                [0,0,1,0,0,0,0,0,0,0],
                [1,1,1,0,0,0,0,0,0,0]
              ];

var next = [
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0]
           ]; 


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

function print(){
    var o = "<table><tbody>"; 
    for(var x = 0; x < current.length; x++){
        o+="<tr>"; 
        for (var y = 0; y < current[x].length; y++) {
            o+="<td>" + current[x][y] + "</td>"; 
        }
        o+="</tr>";
   }

   o += "</tbody></table>"; 
   
   document.getElementById("display").innerHTML = o;
}

print(); 


window.setInterval(function(){
    nextGeneration(); 
    print(); 
}, 1000);



