'use strict';

class WordPress {
  constructor ($http) {
    this.$http = $http;
    this.url = '';
  }

  get(params) {
    return this.$http({
      url: this.url + 'posts/',
      params: params
    });
  }

  single(id, params) {
    return this.$http({
      url: this.url + 'posts/' + id,
      params: params
    });
  }
}

WordPress.$inject = ['$http'];

export default WordPress;