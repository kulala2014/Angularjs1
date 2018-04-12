(function () {
    angular.module('myAngularApplication').filter('Power', function() {
        return function(input, powerValue) {
            if(!powerValue){
                powerValue=1;
            }

            return Math.pow(input,powerValue);
        }
    });
}());