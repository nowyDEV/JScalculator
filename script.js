$(document).ready(function() {
    var lcdScreen = $('#screen');
    $('.button-wrapper button').on('click', function () {
        var value = $(this).val();
        lcdScreen.append(value);
    });

    $('#btn-clear').on('click', function () {
        lcdScreen.text('');
    });

    var calculator = {
        operand1: 0,
        operand2: 0,
        result: 0,
        add: function () {
            return this.operand1 + this.operand2;
        },
        subtract: function () {
            return this.operand1 - this.operand2;
        },
        multiply: function () {
            return this.operand1 * this.operand2;
        },
        divide: function () {
            return this.operand1 / this.operand2;
        }
    };

    $('#btn-equals').on('click', function () {
        counting(lcdScreen.text());
    });

    function counting(textString) {
        if (textString.indexOf('+') !== -1) {
            splitter(textString, '+');
            calculator.result = calculator.add();
            lcdScreen.text(calculator.result);
        }
        else if (textString.indexOf('-') !== -1) {
            splitter(textString, '-');
            calculator.result = calculator.subtract();
            lcdScreen.text(calculator.result);
        }
        else if (textString.indexOf('*') !== -1) {
            splitter(textString, '*');
            calculator.result = calculator.multiply();
            lcdScreen.text(calculator.result);
        }
        else if (textString.indexOf('/') !== -1) {
            splitter(textString, '/');
            calculator.result = calculator.divide();
            lcdScreen.text(calculator.result);
        }
        else {
            lcdScreen.text('');
        }
    }

    function splitter(textStr, operator) {
        var splitString = textStr.split(operator);
        calculator.operand1 = parseInt(splitString[0]);
        calculator.operand2 = parseInt(splitString[1]);
    }
});





