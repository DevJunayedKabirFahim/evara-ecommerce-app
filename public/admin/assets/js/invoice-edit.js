(()=>{"use strict";var e,t,n,c,i;function r(){$(".select2-show-search").select2({minimumResultsForSearch:"",width:"100%"})}function d(e){return e.id?$('<span><img src="https://laravel8.spruko.com/noa/assets/images/users/'+e.element.value.toLowerCase()+'.jpg" class="rounded-circle avatar-sm" /> '+e.text+"</span>"):e.text}e=document.querySelector("#shipping-address"),(t=document.querySelector("#addShippingAddress")).addEventListener("click",(function(){e.classList.contains("d-none")?e.classList.remove("d-none"):e.classList.add("d-none"),t.classList.add("d-none")})),c=document.querySelector(".product-description-list"),i=document.querySelector(".product-description-each"),function(){function e(e){c.removeChild(e.target.parentElement)}setInterval((function(){setTimeout((function(){for(var t=document.querySelectorAll(".delete-row-btn"),n=0;n<t.length;n++)t[n].addEventListener("click",e)}),1)}),1)}(),n=i.cloneNode(!0),document.querySelector(".ad-invoice-item-btn").addEventListener("click",(function(){for(var e=n.cloneNode(!0),t=e.children[0].children[1].children[0].children,i=0;i<t.length;i++)t[0].children.defaultValue=" ",console.log(t[0].children.value);c.appendChild(e),r()})),$((function(){$("#inv-datepicker").datepicker({autoclose:!0,format:"dd-mm-yyyy",todayHighlight:!0}).datepicker("update","10-09-2021"),$("#due-datepicker").datepicker({autoclose:!0,format:"dd-mm-yyyy",todayHighlight:!0}).datepicker("update","11-11-2021")})),$(".select2").select2({minimumResultsForSearch:1/0,width:"100%"}),r(),$(".select2-client-search").select2({templateResult:d,templateSelection:d,escapeMarkup:function(e){return e}})})();
