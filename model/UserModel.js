const UserModel = {
    Initialize: function () {
      localStorage.setItem('users', JSON.stringify(USERS));
    },
  
    UpdateAll: function (data) {
      localStorage.setItem('users', JSON.stringify(data));
    },

    Insert: function (document) {
        result = this.getAll();
        result.push(document);
        this.UpdateAll(result);
      },
  
    getAll: function () {
      return JSON.parse(localStorage.getItem('users'));
    },

    updateUserCurrent: function (user) {
        localStorage.setItem('userCurrent', JSON.stringify(user));
    },

    getUserCurrent: function (user) {
        return JSON.parse(localStorage.getItem('userCurrent'));
    }
}

if (UserModel.getAll() == null) UserModel.Initialize();

