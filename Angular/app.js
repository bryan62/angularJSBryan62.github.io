var app =angular.module("lunchApp",[])

app.controller('lunchAppController', function($scope){
    $scope.dataLunch="";
    $scope.checkLunch =function(){
        if($scope.dataLunch.trim() == "")
            $scope.msg = "Please, fill in the textbox"
        else if($scope.dataLunch.split(",").length > 3)
            $scope.msg = "too much!!";
        else if($scope.dataLunch.split(",").length <=3)
            $scope.msg = "enjoy";
    }
   
})