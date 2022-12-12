
numeroMax();
function numeroMax(elemento ,index) {
    let num2 = [3, 5, 7, 1, 6];
    let max = num2[0];
    for (let i = 1; i < num2.length; ++i) {
        if (num2[i] > max) {
            max = num2[i];
        }
    }
    console.log(max);
}

numeroMin();
function numeroMin(elemento ,index) {
    let num2 = [-1, 2, 3, 4, 3, 21, 0];
    let max = num2[0];
    for (let i = 1; i < num2.length; ++i) {
        if (num2[i] < max) {
            max = num2[i];
        }
    }
    console.log(max);
}


encuentraDupli();
function encuentraDupli(elemento, index) {
    let num = [1, 22, 5, 17, 10, 5, 40, 5];
    for (let i = 0; i < num.length; i++) {
        for (let j = 0; j < num.length; j++) {
            if (i !== j) {
                if (num[i] == num[j]) {
                    console.log(num[i], num[j]);
                }
            }

        }
    }
}                                   

