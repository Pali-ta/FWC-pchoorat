$(document).ready(function() {
    const isPositiveInteger = (value) => {
        const num = Number(value);
        return Number.isInteger(num) && num >= 0 && value.trim() !== '';
    };

    const calculate = () => {
        const leftVal = $('#left').val();
        const rightVal = $('#right').val();
        const op = $('#op').val();

        if (!isPositiveInteger(leftVal) || !isPositiveInteger(rightVal)) {
            alert('Error :(');
            return;
        }

        const num1 = parseInt(leftVal, 10);
        const num2 = parseInt(rightVal, 10);

        if ((op === '/' || op === '%') && num2 === 0) {
            alert("It's over 9000!");
            console.log("It's over 9000!");
            return;
        }

        let result = 0;
        switch (op) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            case '%':
                result = num1 % num2;
                break;
        }

        alert(result);
        console.log(result);
    };

    $('#btn').click(calculate);

    setInterval(() => {
        alert('Please, use me...');
    }, 30000);
});