//enter items needed to purchase by entering text and hitting return or clicking add
//check and uncheck on the list using check button
//permanently remove items

'use strict';

$(function() {

    const item = $("#shopping-list-entry");

    $("[type = 'submit']").click(function(item){
       $('ul').append(
           '<li>' + <span class="shopping-item">item</span>
           <div class="shopping-item-controls">
             <button class="shopping-item-toggle">
               <span class="button-label">check</span>
             </button>
             <button class="shopping-item-delete">
               <span class="button-label">delete</span>
             </button>
           </div> +
             '</li>'
       );
    });
});



