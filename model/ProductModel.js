const ProductModel = {
    Initialize: function (newData) {
      localStorage.setItem('products', JSON.stringify(PRODUCTS));
    },
    UpdateAll: function (data) {
      localStorage.setItem('products', JSON.stringify(data));
    },
    getAll: function () {
      return JSON.parse(localStorage.getItem('products'));
    },
    getTotalPage: function (document) {
        return Math.floor(totalPageUser =
          document.length % LIMIT == 0 ? document.length / LIMIT : document.length / LIMIT + 1);
    },

    getDocumentsByPage: function (page, document) {
        return document.slice((page - 1) * LIMIT, page * LIMIT);
    },
}

if(ProductModel.getAll() == null) {
    ProductModel.Initialize(PRODUCTS);
}