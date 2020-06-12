window.onload = function() {
    var pos = 0;
    var pos2 = 150;
    var redbox = document.getElementById('redbox');
    var blackbox2 = document.getElementById('blackbox2');
    var orangebox3 = document.getElementById('orangebox3');
    var whitebox4 = document.getElementById('whitebox4');
    
    var t = setInterval(move, 10);

    
  
    function move() {
        if(pos<=150) {
            pos += 1;
            blackbox2.style.left = pos +'px';
            whitebox4.style.left = pos +'px';
        }
        else if(pos<=300) {
            pos += 1;
            redbox.style.top = pos - 150 +'px';
            blackbox2.style.left = 300 - pos +'px';
            orangebox3.style.left = pos - 150 +'px';
            whitebox4.style.top = 300 - pos +'px';
        }
        else if(pos<=450) {
            pos += 1;
            redbox.style.left = pos - 300 +'px';
            blackbox2.style.left = pos - 300 +'px';
            orangebox3.style.left = 450 - pos +'px';
            whitebox4.style.left = 450 - pos +'px';
        } 
        else if(pos<=600) {
            pos += 1;
            redbox.style.top = 600 - pos +'px';
            blackbox2.style.left = 600 - pos +'px';
            orangebox3.style.left = pos - 450 +'px';
            whitebox4.style.top = pos - 450 +'px';
        }
        else if (pos<=750) {
            pos +=1;
            redbox.style.left = 750 - pos +'px';
            orangebox3.style.left = 750 - pos +'px';
        } 
    }
    };