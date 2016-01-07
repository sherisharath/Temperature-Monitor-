var app=angular.module('app', []);

app.service('TemperatureMonitor', function(){
            this.recordTemperature = function(a) {
               if(isNaN(a))
               {
                 alert("enter numbers only");
               }
               else
               {
                 return a;
               }
            }
            this.getCurrentMedian=function(arr)
            {
              var len=arr.length;
              arr.sort(function(a, b){return a-b});
              var result,index;
              if(len%2===0)
              {
                index=len/2;
                result=(parseInt(arr[index-1])+parseInt(arr[index]))/2;
              }
              else
              {
                index=Math.floor(len/2);
                result=arr[index];
              }
              return result;
            }
         });
         
        app.controller('tempController', function($scope, TemperatureMonitor) {
            $scope.temp=[];
            $scope.recordTemperature = function() {
               $scope.result=TemperatureMonitor.recordTemperature($scope.temperature);
               if(isNaN($scope.result))
               {
               $scope.temperature="";                 
               }
               else
               {
               $scope.temp.push($scope.result);
               $scope.temperature="";
               }
            }
            $scope.getCurrentMedian=function(){
             $scope.len= TemperatureMonitor.getCurrentMedian($scope.temp);
            }
         });
