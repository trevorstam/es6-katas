// 2: template strings - multiline
// To do: make all tests pass, leave the asserts unchanged!
// Follow the hints of the failure messages!

describe('Template string, can contain multiline content', function () {
    it('wrap it in backticks (`) and add a newline, to span across two lines', function () {
        var normalString = `line1
line2`;
        assert.equal(normalString, 'line1\nline2');
    });
    it('even over more than two lines', function () {
        var multiline = `line1
                      line2
                      line3
                      line4`;


        assert.equal(multiline.split('\n').length, 4);
    });
    describe('and expressions inside work too', function () {
        var x = 42;
        it('like simple variables', function () {
            var multiline = `line1
${x}`;
            assert.equal(multiline, 'line1\n42');
        });
        it('also here spaces matter', function () {
            var multiline = `line1
${x}`;
            assert.equal(multiline, 'line1\n42');
        });
    });
});

