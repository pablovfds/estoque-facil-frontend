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

app.controller("CreateProductCtrl", function ($scope, $uibModalInstance, $http, toastr) {

  $scope.product = {}

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

    if (product.situacao !== null && product.situacao !== undefined &&
      product.situacao.value !== null && product.situacao.value !== undefined) {
        if (product.situacao.value === 1) {
          product.situacao = 1
        } else {
          product.situacao = 1
        }
      }

      $http.post("http://localhost:8080/api/produto/", JSON.stringify(product))
        .then(function success(response) {
          if (response.status === 201) {
            toastr.success("Produto adicionado com sucesso!");
            $scope.product = {}
            $uibModalInstance.close();
          }
        }, function error(error) {
          console.log(error);
          toastr.error("Problemas ao tentar adicionar produto.");
        });
    }

    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  });
