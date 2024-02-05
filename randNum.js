function generate_random() {

    var val = 0;

    var min = document.getElementById("minimum").value;
    var max = document.getElementById("maximum").value;

    

    val = Math.random() * (max - min) + min;

    if (val < 0) {
        val = Math.ceil(val);
    } else {
        val = Math.floor(val);
    }

    alert(val)
}

function gen_even(){}
function gen_odd(){}
function gen_prime(){}
