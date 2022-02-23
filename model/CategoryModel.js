const CategoryModel = {
    Initialize: function () {
      localStorage.setItem('categories', JSON.stringify(CATEGORIES));
    },
    UpdateAll: function (data) {
      localStorage.setItem('categories', JSON.stringify(data));
    },
    getAll: function () {
      return JSON.parse(localStorage.getItem('categories'));
    },
}

if (CategoryModel.getAll() == null) CategoryModel.Initialize();