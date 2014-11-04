var functions = {
        getRandomInt:function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        arraySum:function (arr) {
            var sum = 0;
            for (var i = 0; i < arr.length; i++) {
                sum += arr[i];
            }
            return sum;
        }
    }
    ;

var bowling = {
    cF:0,
    frame:[],
    throwBall:function (throwNum) {
        throwNum = throwNum || 1;
        var result = [];
        if (throwNum == 1) {
            for (var i = 0; i <= 9; i++) {
                result[i] = functions.getRandomInt(0, 1);
            }
        } else {
            result = this.frame[this.cF].ball1.pins.slice();
            for (var i = 0; i < result.length; i++) {
                if (!result[i]) {
                    result[i] = functions.getRandomInt(0, 1);
                } else{
                    result[i] = 0;
                }
            }
        }

        return result;
    },
    getResultThrow:function (pins, throwNum) {
        var result = {};
        result.pins = pins;
        result.score = result.show = functions.arraySum(pins);
        if (result.score == 10 && throwNum == 1) {
            result.show = 'X';
        }
        if (throwNum == 2 && (result.score + this.frame[this.cF].ball1.score) == 10) {
            result.show = '/';
        }
        return result;
    },
    setFrameScores:function () {
        this.frame[this.cF].score = this.frame[this.cF].ball1.score + this.frame[this.cF].ball2.score;
        if ((this.cF - 1) >= 0) {
            this.frame[this.cF].score += this.frame[this.cF-1].score;
            if (this.frame[this.cF - 1].ball2.show == '/') {
                this.frame[this.cF - 1].score += this.frame[this.cF].score;
            }
        }
        if ((this.cF - 2) >= 0) {
            if (this.frame[this.cF - 1].ball1.show == 'X') {
                this.frame[this.cF - 1].score += this.frame[this.cF].score;
            }
            if (this.frame[this.cF - 2].ball1.show == 'X') {
                this.frame[this.cF - 2].score += this.frame[this.cF].score;
            }
        }
    },
    playGame:function () {
        while (this.cF <= 9) {
            this.frame[this.cF] = {};
            this.frame[this.cF].ball1 = this.getResultThrow(this.throwBall(1), 1);
            if (this.frame[this.cF].ball1.show == 'X') {
                this.setFrameScores();
                this.cF++;
                continue;
            }
            this.frame[this.cF].ball2 = this.getResultThrow(this.throwBall(2), 2);
            this.setFrameScores();
            this.cF++;
        }
        this.showGame();
    },
    showGame : function () {
        var ul = document.createElement('ul');
        var frameInfo, span, li;
        for (var i = 0; i < bowling.frame.length; i++) {
            li = document.createElement('li');

            frameInfo = document.createElement('div');
            frameInfo.className = 'frame-info';
            span = document.createElement('span');
            span.className = 'ball1';
            span.innerHTML = bowling.frame[i].ball1.show;
            frameInfo.appendChild(span);
            span = document.createElement('span');
            span.className = 'ball2';
            span.innerHTML = bowling.frame[i].ball2.show;
            frameInfo.appendChild(span);
            span = document.createElement('span');
            span.className = 'score';
            span.innerHTML = bowling.frame[i].score;
            frameInfo.appendChild(span);

            li.appendChild(frameInfo);

            pinsInfo = document.createElement('div');
            pinsInfo.innerHTML = bowling.frame[i].ball1.pins.join(',')+'</br>'+bowling.frame[i].ball2.pins.join(',');
            pinsInfo.className = 'pins-info';

            li.appendChild(pinsInfo);
            ul.appendChild(li);
        }
        document.body.appendChild(ul);
    }

};