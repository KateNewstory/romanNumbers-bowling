var functions = {
        getRandomInt: function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        arraySum: function (arr) {
            var sum = 0;
            for (var i = 0; i < arr.length; i++) {
                sum += arr[i];
            }
            return sum;
        }
    }
    ;

var bowling = {
    //current frame
    cF: 0,
    //current throwBall
    cT: 0,
    frame: [],
    throwBall: function (throwNum) {
        throwNum = throwNum || 1;
        var result = [];

        var throws = this.setThrows();
        if (throws.length) {
            //Play initialized game
            this.cT += 1;
            return throws[this.cT - 1]
        } else {
            //Play random game
            if (throwNum == 1) {
                for (var i = 0; i <= 9; i++) {
                    result[i] = functions.getRandomInt(0, 1);
                }
            } else {
                result = this.frame[this.cF].ball1.pins.slice();
                for (var i = 0; i < result.length; i++) {
                    if (!result[i]) {
                        result[i] = functions.getRandomInt(0, 1);
                    } else {
                        result[i] = 0;
                    }
                }
            }
        }
        return result;
    },
    getResultThrow: function (pins, throwNum) {
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
    setFrameScores: function () {
        this.frame[this.cF].score = this.frame[this.cF].ball1.score + this.frame[this.cF].ball2.score;
        if ((this.cF - 1) >= 0) {
            this.frame[this.cF].score += this.frame[this.cF - 1].score;
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
    playGame: function () {
        while (this.cF <= 9) {
            this.frame[this.cF] = {};
            this.frame[this.cF].ball1 = this.getResultThrow(this.throwBall(1), 1);
            if (this.frame[this.cF].ball1.show == 'X') {
                this.frame[this.cF].ball2 = {};
                this.frame[this.cF].ball2.show = '';
                this.frame[this.cF].ball2.score = 0;
                this.frame[this.cF].ball2.pins = [];
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
    showGame: function () {
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
            pinsInfo.innerHTML = bowling.frame[i].ball1.pins.join(',') + '</br>' + bowling.frame[i].ball2.pins.join(',');
            pinsInfo.className = 'pins-info';

            li.appendChild(pinsInfo);
            ul.appendChild(li);
        }
        document.body.appendChild(ul);
    },
    setThrows: function () {
        var throws = [];
        //Frame 0
        //Score 1+4=5
        throws.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);//1
        throws.push([0, 0, 0, 0, 0, 1, 1, 1, 1, 0]);//4

        //Frame 1
        //Score 4+5+5=14
        throws.push([0, 0, 0, 0, 0, 0, 1, 1, 1, 1]);//4
        throws.push([0, 1, 1, 1, 1, 1, 0, 0, 0, 0]);//5

        //Frame 2
        //Score 4+6+14=24 + next throwBall(5)=29
        throws.push([0, 0, 0, 0, 1, 1, 1, 1, 1, 1]);//6
        throws.push([1, 1, 1, 1, 0, 0, 0, 0, 0, 0]);//4

        //Frame 3
        //Score 5+5+29=39 + next throwBall(10)=49
        throws.push([0, 0, 0, 0, 0, 1, 1, 1, 1, 1]);//5
        throws.push([1, 1, 1, 1, 1, 0, 0, 0, 0, 0]);//5

        //Frame 4
        //Score 10+49=59 + 2 next throwBall(0+1)=60
        throws.push([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);//10

        //Frame 5
        //Score 0+1+60=61
        throws.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);//0
        throws.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);//1

        //Frame 6
        //Score 7+3+61=71+ next throwBall(6)=77
        throws.push([1, 1, 1, 1, 1, 1, 1, 0, 0, 0]);//7
        throws.push([0, 0, 0, 0, 0, 0, 0, 1, 1, 1]);//3

        //Frame 7
        //Score 6+4+77=81+ next throwBall(10)=87
        throws.push([1, 1, 1, 1, 1, 1, 0, 0, 0, 0]);//6
        throws.push([0, 0, 0, 0, 0, 0, 1, 1, 1, 1]);//4

        //Frame 8
        //Score 10+87=97 + 2 next throwBall(2+8)=117
        throws.push([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);//10

        //Frame 9
        //Score 2+8+117=127 + next throwBall(6)=133
        throws.push([1, 1, 0, 0, 0, 0, 0, 0, 0, 0]);//2
        throws.push([0, 0, 1, 1, 1, 1, 1, 1, 1, 1]);//8

        //Frame 10 (addition)
        throws.push([1, 1, 1, 1, 1, 1, 0, 0, 0, 0]);//6

        return throws;
    }

};