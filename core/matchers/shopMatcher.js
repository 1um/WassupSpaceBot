exports.match = function(str){
  if(str.match(/shop/i) || str.match(/buy/i)){
    return [{
      rate: 1,
      present: function(presenter) {
        presenter.showShop();
      }
    }];
  }
}
