import SimpleTimer from '../src/SimpleTimer';
import assert from 'assert';

describe('SimpleTimer 유닛테스트', function() {
    describe('정상적으로 파싱 가능한지', function() {
        it('Getter 테스트 - Clean case', function() {
            let timer = new SimpleTimer(3600);
            assert.equal(0, timer.getDays());
            assert.equal(1, timer.getHours());
            assert.equal(0, timer.getMinutes());
            assert.equal(0, timer.getSeconds());
        });

        it('Getter 테스트 - Dirty case', function() {
            let timer = new SimpleTimer(172799);
            assert.equal(1, timer.getDays());
            assert.equal(23, timer.getHours());
            assert.equal(59, timer.getMinutes());
            assert.equal(59, timer.getSeconds());
        });
    });

    describe('정상적인 카운트 다운이 되는지', function() {
        it('countdown 테스트 - Case D-1 23:59:59', function() {
            let timer = new SimpleTimer(172799);
            timer.countdown();
            assert.equal(1, timer.getDays());
            assert.equal(23, timer.getHours());
            assert.equal(59, timer.getMinutes());
            assert.equal(58, timer.getSeconds());
        });

        it('countdown 테스트 - Case D-2 00:00:00', function() {
            let timer = new SimpleTimer(172800);
            timer.countdown();
            assert.equal(1, timer.getDays());
            assert.equal(23, timer.getHours());
            assert.equal(59, timer.getMinutes());
            assert.equal(59, timer.getSeconds());
        });

        it('countdown 테스트 - Case D-0 00:00:00', function() {
            let timer = new SimpleTimer(0);
            assert.notEqual(true, timer.countdown());
        });
    });
});