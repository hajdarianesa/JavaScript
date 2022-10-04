
        //slider
        const slider = [
            "background.webp","background2.webp"
        ]
        let index = 0;
        setInterval(() => {
        index++
        if(index >= slider.length) index=0
        document.querySelector('img').src=`assets/images/${slider[index]}`
        },3000)
        //slider-end
        
        
        //searchBar
        
        const searchBar = document.getElementById("search");
        const cartsName = document.querySelectorAll(".card-body h5")
        
        searchBar.addEventListener("keyup", filterSearch)
        
        function filterSearch(e) {
          const text = e.target.value.toLowerCase();
        
          cartsName.forEach(function(item){
            const product = item.firstChild.textContent;
            if(product.toLowerCase().indexOf(text) != -1) {
              item.parentElement.parentElement.style.display = 'block';
            }else{
              item.parentElement.parentElement.style.display = 'none';
            }
          })
        }
         ///filter products
        
         const buttons = document.querySelectorAll('.nav-link');
         const cardProducts = document.querySelectorAll('.card');
        
         let buttonRight = document.getElementById('slide-right');
        let buttonLeft = document.getElementById('slide-left');
        
        buttonRight.addEventListener('click', function(){
            products.scrollLeft -= 125;
        })
        
        buttonLeft.addEventListener('click', function(){
            products.scrollLeft += 125;
        })
        
        
        
        
         for(i=0;i<buttons.length;i++) {
          buttons[i].addEventListener('click',(e) => {
            e.preventDefault();
        
            const filter = e.target.dataset.filter;
            console.log(filter);
        
            cardProducts.forEach((item) => {
              if(filter === 'shopAll') {
        
                item.style.display = 'block'
              }else {
                if(item.classList.contains(filter)) {
                   item.style.display = 'block'
                }else {
                  item.style.display = 'none'
                }
               
              }
            })
          })
         }
        
         
        
            const cart = document.getElementById('cart');
            const products = document.getElementById('productsList');
            const listOfCarts = document.querySelector('#list-cart tbody');
            const removeAllBtn = document.getElementById('cart-bank');
        
           
        
        
            addEvent()
            function addEvent() {
        
                products.addEventListener('click',addCart);
                cart.addEventListener('click',remove);
                 removeAllBtn.addEventListener('click',removeAll);
            }
        
            function addCart(e){
        e.preventDefault();
        if(e.target.classList.contains('addCart')) {
            const cart = e.target.parentElement.parentElement;
        
            cartsInfo(cart);
            
        }
        }
        
        function cartsInfo(cart) {
            const info = {
                image: cart.querySelector('img').src,
                title :cart.querySelector('h5').textContent,
            price : cart.querySelector('.discount').textContent,
            id: cart.querySelector('a').getAttribute('data-id')
            }
            insert(info)
        }
            
        function insert(cart){
            const row = document.createElement('tr');
            row.innerHTML = `
            <td>
          <img src="${cart.image}" width=100>
          </td>
          <td>${cart.title}</td>
          <td>${cart.price}</td>
          <td>
          <a href="#" class="delete" data-id="${cart.id}">X</a>
          </td>
          `;
            listOfCarts.appendChild(row);
        
            
        }
        
        
        function remove(e) {
          e.preventDefault();
          let card, cardId;
          if(e.target.classList.contains('delete')) {
            e.target.parentElement.parentElement.remove();
            card = e.target.parentElement.parentElement;
            cardId = card.querySelectors('a').getAttribute('data-id')
        
          }
        }
        
        function removeAll(){
          while(listOfCarts.firstChild) {
            listOfCarts.removeChild(listOfCarts.firstChild)
          }
        }