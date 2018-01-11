app.config(function ($routeProvider) {
    $routeProvider.when("/",{
        templateUrl: "view/products-list.html",
        controller: "ProductsListCtrl"
    }).when("/create-product",{
        templateUrl: "view/create-product.html",
        controller: "CreateProductCtrl"
    }).otherwise({
        redirectTo: '/'
    });
});
