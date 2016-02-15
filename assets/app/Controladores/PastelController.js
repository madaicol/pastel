applicacion.controller('PastelController', ['$scope', '$stateParams', 'toastr', 'PastelesFactory', 'UsuarioFactory', 'IngredienteFactory', function ($scope, $stateParams, toastr, PastelesFactory, UsuarioFactory, IngredienteFactory) {

    console.log("Controlador de Pastel");
    var entry =  IngredienteFactory.get({id:$stateParams.idPastel},function(){
        console.log(entry);
    });
    $scope.usuario;
    $scope.pasteles;
    $scope.nuevoPastel = {
        nombre: '',
        tipo: '',
        foto: '',
        preparacion: '',
        idUsuario: ''
    };

    $scope.nuevoIngrediente = {
        nombre: '',
        idPastel: ''
    };


    UsuarioFactory.get({
        id: $stateParams.idUsuario
    }).$promise.then(
        function success(respuesta) {
            $scope.existeUsuario = true;
            $scope.usuario = respuesta;
            console.log($scope.usuario);
        },
        function error(error) {
            console.log($scope.error);
        });


    $scope.agregarIngrediente = function (pastel) {
        $scope.ingredientes = pastel.ingredientes;
        IngredienteFactory.save({
                nombre: $scope.nuevoIngrediente.nombre,
                idPastel: pastel.id
            })
            .$promise.then(
                function correcto(respuesta) {
                    console.log(respuesta);
                    $scope.nuevoIngrediente.nombre = '';
                    toastr.success('Eureka!!', 'El Ingrediente ha sido agregado con exito');

                },
                function error(error) {
                    console.log(error);
                });
    };



    $scope.agregarPastel = function () {

        PastelesFactory.save({
                nombre: $scope.nuevoPastel.nombre,
                tipo: $scope.nuevoPastel.tipo,
                foto: $scope.nuevoPastel.foto,
                preparacion: $scope.nuevoPastel.preparacion,
                idUsuario: $stateParams.idUsuario
            })
            .$promise.then(
                function correcto(respuesta) {
                    console.log(respuesta);
                    $scope.nuevoPastel.nombre = '';
                    $scope.nuevoPastel.tipo = '';
                    $scope.nuevoPastel.foto = '';
                    $scope.nuevoPastel.preparacion = '';
                    toastr.success('Eureka!!', 'El pastel ha sido agregado con exito');
                    $scope.pasteles.push(respuesta);

                },
                function error(error) {
                    console.log(error);
                });
    };

    
   
}]);