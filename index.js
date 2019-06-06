//enter items needed to purchase by entering text and hitting return or clicking add
//check and uncheck on the list using check button
//permanently remove items

'use strict';

$(function() {

  $('#js-shopping-list-form').on('submit', function(event){

    event.preventDefault();
    const foodItem = $( 'input' ).val();
    $('.shopping-list').append(
      `<li><span class="shopping-item">${foodItem}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`
    );
  });

  $('.shopping-list').on('click', '.shopping-item-toggle', function(item){
    item.preventDefault();
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });

  $('.shopping-list').on('click', '.shopping-item-delete', function() {
    this.closest('li').remove();
  });
});




