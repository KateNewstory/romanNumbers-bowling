var functions = {
    addListener:function (target, eventName, handlerName) {
        if (target.addEventListener) {
            target.addEventListener(eventName, handlerName, false);
        } else if (target.attachEvent) {
            target.attachEvent("on" + eventName, handlerName);
        } else {
            target["on" + eventName] = handlerName;
        }
    }
}
var roman = {
    convert:function (number) {
        var result = '';
        number = parseInt(number, 10);
        if (isNaN(number) || number < 0 || number > 3000) {
            return result;
        }
        if (number == 0) {
            result = '-';
            return result;
        }
        var units = number % 10;
        var tens = Math.floor(number / 10) % 10;
        var hundreds = Math.floor(number / 100) % 10;
        var thousands = Math.floor(number / 1000) % 10;


        result = this.getRThousands(thousands) + this.getRHundreds(hundreds) + this.getRTens(tens) + this.getRUnits(units);

        return result;
    },
    getRUnits:function (number) {
        var result = '';
        if (number == 0) {
            return result;
        }
        if (number >= 1 && number <= 3) {
            for (var i = 0; i < number; i++) {
                result += 'I';
            }
            return result;
        }
        if (number == 4) {
            result = 'IV';
            return result;
        }
        if (number >= 5 && number <= 8) {
            result = 'V';
            for (var i = 0; i < (number - 5); i++) {
                result += 'I';
            }
            return result;
        }
        if (number == 9) {
            result = 'IX';
            return result;
        }
    },
    getRTens:function (number) {
        var result = '';
        if (number == 0) {
            return result;
        }
        if (number >= 1 && number <= 3) {
            for (var i = 0; i < number; i++) {
                result += 'X';
            }
            return result;
        }
        if (number == 4) {
            result = 'XL';
            return result;
        }
        if (number >= 5 && number <= 8) {
            result = 'L';
            for (var i = 0; i < (number - 5); i++) {
                result += 'X';
            }
            return result;
        }
        if (number == 9) {
            result = 'XC';
            return result;
        }
    },
    getRHundreds:function (number) {
        var result = '';
        if (number == 0) {
            return result;
        }
        if (number >= 1 && number <= 3) {
            for (var i = 0; i < number; i++) {
                result += 'C';
            }
            return result;
        }
        if (number == 4) {
            result = 'CD';
            return result;
        }
        if (number >= 5 && number <= 8) {
            result = 'D';
            for (var i = 0; i < (number - 5); i++) {
                result += 'C';
            }
            return result;
        }
        if (number == 9) {
            result = 'CM';
            return result;
        }
    },
    getRThousands:function (number) {
        var result = '';
        if (number == 0) {
            return result;
        }
        if (number >= 1 && number <= 3) {
            for (var i = 0; i < number; i++) {
                result += 'M';
            }
            return result;
        }
    }, init:function () {
        var btn =  document.getElementById('convertBtn');
        functions.addListener(btn, "click", this.startConvert);
    },
    startConvert:function () {
        var arabicN = document.getElementById('arabicNumber');
        var romanN = document.getElementById('romanNumber');
        console.log(this);
        console.log(this);
       romanN.value = roman.convert(arabicN.value);
    }
}
