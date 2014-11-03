describe('Roman', function () {
    it('should be defined', function () {
        expect(roman).toBeDefined();
    });
    describe('convert:', function () {
        it('should be a function', function () {
            expect(roman.convert).toEqual(jasmine.any(Function));
        });

        describe('when input is undefined', function () {
            it('should return empty string', function () {
                expect(roman.convert()).toEqual('');
            })
        });

        describe('when input can not be converted to a number', function () {
            it('should return empty string', function () {
                expect(roman.convert('test')).toEqual('');
            })
        });
        describe('when input number is negative', function () {
            it('should return empty string', function () {
                expect(roman.convert('-10')).toEqual('');
            })
        });

        describe('when input is 0', function () {
            it('should return -', function () {
                expect(roman.convert(0)).toEqual('-');
            })
        });
        describe('when input is 1', function () {
            it('should return I', function () {
                expect(roman.convert(1)).toEqual('I');
            })
        });
        describe('when input is 2', function () {
            it('should return II', function () {
                expect(roman.convert(2)).toEqual('II');
            })
        });
        describe('when input is 3', function () {
            it('should return III', function () {
                expect(roman.convert(3)).toEqual('III');
            })
        });
        describe('when input is 4', function () {
            it('should return IV', function () {
                expect(roman.convert(4)).toEqual('IV');
            })
        });
        describe('when input is 5', function () {
            it('should return V', function () {
                expect(roman.convert(5)).toEqual('V');
            })
        });
        describe('when input is 6', function () {
            it('should return VI', function () {
                expect(roman.convert(6)).toEqual('VI');
            })
        });
        describe('when input is 7', function () {
            it('should return VII', function () {
                expect(roman.convert(7)).toEqual('VII');
            })
        });
        describe('when input is 8', function () {
            it('should return VIII', function () {
                expect(roman.convert(8)).toEqual('VIII');
            })
        });
        describe('when input is 9', function () {
            it('should return IX', function () {
                expect(roman.convert(9)).toEqual('IX');
            })
        });
        describe('when input is 10', function () {
            it('should return X', function () {
               // debugger;
                expect(roman.convert(10)).toEqual('X');
            })
        });
        describe('when input is 11', function () {
            it('should return XI', function () {
                expect(roman.convert(11)).toEqual('XI');
            })
        });
        describe('when input is 12', function () {
            it('should return XII', function () {
                expect(roman.convert(12)).toEqual('XII');
            })
        });
        describe('when input is 13', function () {
            it('should return XIII', function () {
                expect(roman.convert(13)).toEqual('XIII');
            })
        });
        describe('when input is 14', function () {
            it('should return XIV', function () {
                expect(roman.convert(14)).toEqual('XIV');
            })
        });
        describe('when input is 15', function () {
            it('should return XV', function () {
                expect(roman.convert(15)).toEqual('XV');
            })
        });
        describe('when input is 16', function () {
            it('should return XVI', function () {
                expect(roman.convert(16)).toEqual('XVI');
            })
        });
        describe('when input is 17', function () {
            it('should return XVII', function () {
                expect(roman.convert(17)).toEqual('XVII');
            })
        });
        describe('when input is 18', function () {
            it('should return XVIII', function () {
                expect(roman.convert(18)).toEqual('XVIII');
            })
        });
        describe('when input is 19', function () {
            it('should return XIX', function () {
                expect(roman.convert(19)).toEqual('XIX');
            })
        });
        describe('when input is 20', function () {
            it('should return XX', function () {
                expect(roman.convert(20)).toEqual('XX');
            })
        });
        describe('when input is between 20 and 30', function () {
            it('should return XX and converted number of units', function () {
                expect(roman.convert(21)).toEqual('XXI');
            })
        });
        describe('when input is between 30 and 40', function () {
            it('should return XXX and converted number of units', function () {
                expect(roman.convert(31)).toEqual('XXXI');
            })
        });
        describe('when input is between 40 and 50', function () {
            it('should return XL and converted number of units', function () {
                expect(roman.convert(42)).toEqual('XLII');
            })
        });
        describe('when input is between 50 and 60', function () {
            it('should return L and converted number of units', function () {
                expect(roman.convert(53)).toEqual('LIII');
            })
        });
        describe('when input is between 60 and 70', function () {
            it('should return LX and converted number of units', function () {
                expect(roman.convert(64)).toEqual('LXIV');
            })
        });
        describe('when input is between 70 and 80', function () {
            it('should return LXX and converted number of units', function () {
                expect(roman.convert(75)).toEqual('LXXV');
            })
        });
        describe('when input is between 90 and 100', function () {
            it('should return XC and converted number of units', function () {
                expect(roman.convert(96)).toEqual('XCVI');
            })
        });
        describe('when input is 100', function () {
            it('should return C', function () {
                expect(roman.convert(100)).toEqual('C');
            })
        });
        describe('when input is between 100 and 110', function () {
            it('should return C and converted number of units', function () {
                expect(roman.convert(107)).toEqual('CVII');
            })
        });
        describe('when input is between 110 and 120', function () {
            it('should return CX and converted number of units', function () {
                expect(roman.convert(118)).toEqual('CXVIII');
            })
        });
        describe('when input is 200', function () {
            it('should return CC', function () {
                expect(roman.convert(200)).toEqual('CC');
            })
        });
        describe('when input is 300', function () {
            it('should return CCC', function () {
                expect(roman.convert(300)).toEqual('CCC');
            })
        });
        describe('when input is between 300 and 400', function () {
            it('should return CCC and converted number of tens and units', function () {
                expect(roman.convert(328)).toEqual('CCCXXVIII');
            })
        });
        describe('when input is between 400 and 500', function () {
            it('should return CD and converted number of tens and units', function () {
                expect(roman.convert(439)).toEqual('CDXXXIX');
            })
        });
        describe('when input is between 500 and 900', function () {
            it('should return DC(1-3) and converted number of tens and units', function () {
                expect(roman.convert(688)).toEqual('DCLXXXVIII');
            })
        });
        describe('when input is between 900 and 1000', function () {
            it('should return CM and converted number of tens and units', function () {
                expect(roman.convert(999)).toEqual('CMXCIX');
            })
        });
        describe('when input is  1000', function () {
            it('should return M', function () {
                expect(roman.convert(1000)).toEqual('M');
            })
        });
        describe('when input is between 1000 and 4000', function () {
            it('should return M(1-3) and converted number of hundreds, tens and units', function () {
                expect(roman.convert(2999)).toEqual('MMCMXCIX');
            })
        });
        describe('when input is more then 3000', function () {
            it('should return empty string', function () {
                expect(roman.convert(4000)).toEqual('');
            })
        });
    });
});