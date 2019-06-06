//enter items needed to purchase by entering text and hitting return or clicking add
//check and uncheck on the list using check button
//permanently remove items

'use strict';

$(function() {

  $('#js-shopping-list-form').on('submit', function(event){
    console.log();
    event.preventDefault();
    const foodItem = $( 'input' ).val();
    console.log(foodItem);
    $('.shopping-list').append(
      `<li><span class="shopping-item">${foodItem}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`
    );
  });
});

$(function(){
  $('.shopping-item-toggle').click(function(){

    console.log($(this));
    console.log($(this).closest('li').find('.shopping-item'));
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });

  $('.shopping-item-delete').click(function() {
    this.closest('li').remove();
  });
});



