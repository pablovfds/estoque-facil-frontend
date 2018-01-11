app.config(function ($routeProvider) {
    $routeProvider.when("/",{
      templateUrl: "view/search-product.html",
      controller: "SearchProductCtrl"
    }).when("/products",{
        templateUrl: "view/search-product.html",
        controller: "SearchProductCtrl"
    }).when("/products/create-product",{
        templateUrl: "view/create-product.html",
        controller: "CreateProductCtrl"
    }).otherwise({
        redirectTo: '/'
    });
});
