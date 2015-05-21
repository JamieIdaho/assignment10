$(document).ready(function (){

var resultsList = $('#contentResults');
var resultsImage, resultsTitle, resultsPrice, resultsCurrencyCode, resultsShop, resultsHolder;
var urlImage;

items.results.forEach(function(item) {

  urlImage = item.Images[0].url_170x135;
  resultsTitle = '<p class="resultsTitle">' + item.title + '</p>';
  resultsShop = '<p class="resultsShop">' + item.Shop.shop_name + '</p>';
  resultsPrice = '<p class="resultsPrice">' + item.price + '</p>';
  resultsCurrencyCode = '<p class="resultsCurrencyCode">' + item.currency_code + '</p>';
  resultsImage = '<img src="' + urlImage + '" />';
  resultsHolder = '<li>' + resultsImage + resultsTitle + '\n' + resultsShop + ' ' + resultsPrice + ' ' + resultsCurrencyCode + '</li>';

  resultsList.append(resultsHolder);

  });

});
