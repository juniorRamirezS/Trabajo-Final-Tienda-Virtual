let product = '{"producto":[' +
    '{"marca": "Intel","modelo": "Core i3  11th Gen","nucleos": "4","hilos": "8","frecuencia": "3.50 GHz","memoria": "DDR4","grafica": "Gráficos Intel® UHD 750","stock": "50","Precio": "100.00","codigo": "0001","imagen": "core 3 11va.jpg"},' +
    '{"marca": "Intel","modelo": "Core i5 11th Gen","nucleos": "6","hilos": "12","frecuencia": "4.40 GHz","memoria": "DDR4","grafica": "Gráficos Intel® UHD 750","stock": "50","Precio": "174.00","codigo": "0002","imagen": "core 5 11va.jpg"},' +
    '{"marca": "Intel","modelo": "Core i7 11th Gen","nucleos": "8","hilos": "16","frecuencia": "4.70 GHz","memoria": "DDR4","grafica": "Gráficos Intel® UHD 750","stock": "50","Precio": "440.00","codigo": "0003","imagen": "core 7 11va.jpg"},' +
    '{"marca": "AMD","modelo": "Ryzen 3 3200G","nucleos": "4","hilos": "8","frecuencia": "4.20 GHz","memoria": "DDR4","grafica": "Radeon™ Graphics","stock": "50","Precio": "95.00","codigo": "0004","imagen": "ryzen 3.jpg"},' +
    '{"marca": "Intel","modelo": "Ryzen 5 5600 G","nucleos": "6","hilos": "12","frecuencia": "4.40 GHz","memoria": "DDR4","grafica": "Radeon™ Graphics","stock": "50","Precio": "155.00","codigo": "0005","imagen": "ryzen 5.jpg"},' +
    '{"marca": "AMD","modelo": "Ryzen 7 5700G","nucleos": "8","hilos": "16","frecuencia": "4.60 GHz","memoria": "DDR4","grafica": "Radeon™ Graphics","stock": "50","Precio": "355.00","codigo": "0006","imagen": "ryzen 7.jpg"},' +
    '{"marca": "AMD","modelo": "Ryzen 9 5900X","nucleos": "12","hilos": "24","frecuencia": "4.80 GHz","memoria": "DDR4","grafica": "Radeon™ Graphics","stock": "50","Precio": "445.00","codigo": "0007","imagen": "ryzen 9.jpg"},' +
    '{"marca": "Intel","modelo": "Core 9 12th Gen","nucleos": "16","hilos": "24","frecuencia": "5.00 GHz","memoria": "DDR4","grafica": "Gráficos UHD Intel® 770","stock": "50","Precio": "668.00","codigo": "0008","imagen": "core 9 12g.jpg"},' +
    '{"marca": "AMD","modelo": "Ryzen™ Threadripper™ PRO 5995WX","nucleos": "64","hilos": "128","frecuencia": "5.50 GHz","memoria": "DDR4","grafica": "Radeon™ Graphics","stock": "50","Precio": "8260.00","codigo": "0009","imagen": "ryzen threadripper.jpg"}]}';

//const objprod = JSON.parse(product);

const $conte = document.querySelector('.card')
const $tbody = document.querySelector('.tbody')

const carrito = []

function addcarrito() {
    const title = document.querySelector('.card-title').textContent;
    const img = document.querySelector('.card-img-top').src;
    const precio = document.querySelector('.precio').textContent;

    const newItem = {
        titulo: title,
        imge: img,
        precio: precio,
        cantidad: 1
    }
    carrito=newItem.map(function(element){
        return element;
    });
   // addItemCarrito(newItem)
    console.log(newItem);
    console.log(carrito);
}
function addItemCarrito(newItem) {
    const Item = newItem;
    const alert = document.querySelector('.alert')
    let x;
    setTimeout(function () {
        alert.classList.add('hide')
    }, 2000)
    alert.classList.remove('hide')

    let placerholder = document.querySelector(".tbody");
    let out = "";
    for (let carr of Item) {
        const tr = document.createElement('tr')
        tr.classList.add('ItemCarrito')
        out += `
            <th scope="row">1</th>
                    <td class="table__productos">
                      <img src=${carr.imge}  alt="">
                      <h6 class="title">${carr.titulo}</h6>
                    </td>
                    <td class="table__price"><p>${carr.precio}</p></td>
                    <td class="table__cantidad">
                      <input type="number" min="1" value=${carr.cantidad} class="input__elemento">
                      <button class="delete btn btn-danger">x</button>
                    </td>
            `;
    };
    tr.placerholder.innerHTML = out;
    tbody.append(tr)
    //carrito.push(newItem)
    renderCarrito()
}
function renderCarrito() {
    tbody.innerHTML = "";
    carrito.map(item => {
        const tr = document.createElement('tr')
        tr.classList.add('ItemCarrito')
        const Content = `
      <th scope="row">1</th>
              <td class="table__productos">
                <img src=${item.img}  alt="">
                <h6 class="title">${item.title}</h6>
              </td>
              <td class="table__price"><p>${item.precio}</p></td>
              <td class="table__cantidad">
                <input type="number" min="1" value=${item.cantidad} class="input__elemento">
                <button class="delete btn btn-danger">x</button>
              </td>
      `
        tr.innerHTML = Content;
        tbody.append(tr)

        tr.querySelector(".delete").addEventListener('click', removeItemCarrito)
        tr.querySelector(".input__elemento").addEventListener('change', sumaCantidad)
    })
    CarritoTotal()
}