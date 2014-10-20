var crud_modulo = angular.module('curso_crud', []);

crud_modulo.directive('cursoform', function () {
    return {
        restrict: 'E',
        templateUrl: '/static/curso/html/curso_form.html',
        replace: true,
        scope: {},
        controller: ['$scope','$http', function ($scope, $http) {
            $scope.curso = {titulo: "", preco: ""};

            $scope.salvar = function () {
                var promessa = $http.post('/cursos/rest/new', $scope.curso);
                promessa.success(function (curso_salvo) {
                    console.log(curso_salvo);
                    $scope.curso = {titulo: "", preco: ""};
                });
            }

        }]
    }
});