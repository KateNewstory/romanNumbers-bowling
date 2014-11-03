describe('Bowling', function () {

    it('should be defined', function () {
        expect(bowling).toBeDefined();
    });

    describe('throwBall:', function () {
        it('should be function', function () {
            expect(bowling.throwBall).toEqual(jasmine.any(Function));
        });
        describe('when input is undefined', function () {
            it('should return array', function () {
                expect(bowling.throwBall()).toEqual(jasmine.any(Array));
            })

        });
        describe('when input is undefined', function () {
            it('should return array of 10 elements', function () {
                expect(bowling.throwBall().length).toEqual(10);
            })
        });
    });
    describe('getResultThrow:', function () {
        it('should be function', function () {
            expect(bowling.getResultThrow).toEqual(jasmine.any(Function));
        });
        describe('strike - when input are [1,1,1,1,1,1,1,1,1,1] and 1', function () {
            it('should return {"show" : "X", "score" : 10, "pins" : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}', function () {
                var result = {"show":"X", "score":10, "pins" : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]};
                expect(bowling.getResultThrow([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1)).toEqual(result);
            });
        });
        describe('when input has array of 10 random 0 or 1', function () {
            it('should return {"show" : number of 1, "score" : number of 1, "pins" : array}', function () {
                var result = {"show":9, "score":9, "pins" : [1, 0, 1, 1, 1, 1, 1, 1, 1, 1]};
                expect(bowling.getResultThrow([1, 0, 1, 1, 1, 1, 1, 1, 1, 1], 1)).toEqual(result);
            });
        });
        describe('spare', function () {
            it('should return {"show" : "/", "score" : number of 1, "pins" : array}', function () {
                var result = {"show":"/", "score":1, "pins" : [0, 1, 0, 0, 0, 0, 0, 0, 0, 0]};
                bowling.cF = 0;
                bowling.frame[bowling.cF] = {};
                bowling.frame[bowling.cF].ball1 = bowling.getResultThrow([1, 0, 1, 1, 1, 1, 1, 1, 1, 1],1);
                bowling.frame[bowling.cF].ball2 = bowling.getResultThrow([0, 1, 0, 0, 0, 0, 0, 0, 0, 0], 2);
                
                expect(bowling.frame[0].ball2).toEqual(result);
            });
        });
    });
    describe('playGame:', function () {
        it('should be function', function () {
            expect(bowling.playGame).toEqual(jasmine.any(Function));
        });
        //Как тестировать дальше? Куча условий, циклов. Что проверять?
        //Приводить фрагменты кода как выше?
    });
    describe('setFrameScores:', function () {
        it('should be function', function () {
            expect(bowling.setFrameScores).toEqual(jasmine.any(Function));
        });
        //Как тестировать дальше? Куча условий, циклов. Что проверять?
        //Приводить фрагменты кода как выше?

    });
    describe('curFrame (cF)', function () {
        it('should be number', function () {
            expect(bowling.cF).toEqual(jasmine.any(Number));
        });
    });
    describe('frame', function () {
        it('should be array', function () {
            expect(bowling.frame).toEqual(jasmine.any(Array));
        });
    });
    describe('playGame:', function () {
        it('should be function', function () {
            expect(bowling.playGame).toEqual(jasmine.any(Function));
        });
    });


});