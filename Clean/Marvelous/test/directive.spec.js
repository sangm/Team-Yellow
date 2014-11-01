describe('Hello World', function() {
    var element;
    beforeEach(function() {
        element = angular.element("<div>{{2 + 2}}</div>");
    });

    it('should equal 4', function() {
        expect(element.html()).toBe('4'); 
    });


});
