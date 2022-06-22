var count = 0,
    num = 1;

while (count < 20) {
    for (var i = 1; i <= 20; i++) {
        if (num % i == 0) {
            count++;
        } else {
            count = 0;
            break;
        }
    }
    if (count == 20) {
        console.log(num);
        break;
    } else {
        num++;
    }
}