var cout=0;

var app=angular.module("myApp",[])
       .controller("ctrl",function($scope){
          $scope.newEmployees=null;
          $scope.Employee=[];
          $scope.Employees=[];
          var Employees=[
              {dob:new Date(01/2/2020)}
          ];
          
          $scope.saveRecord=function(){
              if($scope.newEmployees.id==null){
                  cout=cout+1;
                  $scope.newEmployees.id=cout;
                  $scope.Employees.push($scope.newEmployees);
              }
              else{
                for(i in $scope.Employees){
                    if($scope.Employees[i].id==$scope.newEmployees.id){
                        $scope.Employees[i]=$scope.newEmployees;
              }
            }
        }
              $scope.newEmployees=null;
            }
            $scope.newEmployees=null;
              
              $scope.edit=function(id){
                  for(var i in $scope.Employees){
                      if($scope.Employees[i].id==id){
                          $scope.newEmployees=angular.copy($scope.Employees[i]);
                      }
                  }
              }

              $scope.delete=function(id){
                  for(var i in $scope.Employees){
                      if($scope.Employees[i].id==id){
                          $scope.Employees.splice(i,1);
                          $scope.newEmployees ={};
                      }
                  }
              }
              
          

          
       });