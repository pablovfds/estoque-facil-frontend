app.controller("SearchProductCtrl", function ($scope, $uibModal) {

  $scope.title = "SearchProductCtrl"

  $scope.open = function() {
    $uibModal.open({
      ariaLabelledBy: 'Adicionar Produto',
      ariaDescribedBy: 'Formulario para adição de um novo produto',
      templateUrl: 'view/create-product.html',
      controller: 'CreateProductCtrl'
    });
  };
});

app.controller("CreateProductCtrl", function ($scope, $uibModalInstance) {

  $scope.listaDeSituacoes = [
    {
      nome: "Disponivel",
      valor: 1
    }, {
      nome: "Em Falta",
      valor: 2
    }
  ]

  $scope.createProduct = function (product) {
    console.log(product);
  }

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
