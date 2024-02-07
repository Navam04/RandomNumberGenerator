

function generate_random() {

    var val = 0;

    var min = document.getElementById("minimum").value;
    var max = document.getElementById("maximum").value;

    if (max < min) {
        alert("MAX must be greater than or equal to MIN.");
        return;
    }

        var ele = document.getElementsByName('gen_option');
        var i;
        for (i = 0; i < ele.length; i++) {
            if (ele[i].checked) {
                if (ele[i].value == "even") {
                    val = gen_even(max, min)
                } else if (ele[i].value == "odd") {
                    val = gen_odd(max, min)
                } else if (ele[i].value == "prime") {
                    val = gen_prime(max, min);
                } else {
                    val = Math.floor(Math.random() * (max - min) + min);
                }
            }
        }

    alert(val)
}   

function gen_even(max, min) {
    if (max == min && min % 2 != 0) {
        return "Do not set MIN and MAX as the same odd number!";
    }
    var gen = Math.floor(Math.random() * (max - min) + min);
    while (!(gen % 2 == 0)) {
        gen = Math.floor(Math.random() * (max - min) + min);
    }
    return gen;
}
function gen_odd(max, min){

    if (max == min && min % 2 == 0) {
        return "Do not set MIN and MAX as the same number!";
    }

    var gen = Math.floor(Math.random() * (max - min) + min);
    while (!(gen % 2 == 1)) {
        gen = Math.floor(Math.random() * (max - min) + min);
    }
    return gen;
}
function gen_prime(max, min){

    if (max + min == 0) {
        return "The MIN and MAX values must be greater than ZERO to generate a prime number!";
    }
    
   
    var isPrime = false;

    while (!isPrime) {
        var gen = Math.floor(Math.random(max, min) * (max - min) + min);
        
        if (gen == 1 || gen == 2 || gen == 3 || gen == 5 || gen == 7) {
            isPrime = true;
        } else if (gen % 2 != 0 && gen % 3 != 0 && gen % 7 != 0 && gen % 5 != 0) {
            isPrime = true;
        }
    }

    return gen; 

}

function get_fact(n) {
    var ret = 1;

    for (i = 1; i <= n; i++) {
        ret += ret * i;
    }
    return ret;
}

