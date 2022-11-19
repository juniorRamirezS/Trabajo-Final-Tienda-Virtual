function catalogo() {
    let i;
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
    const objprod = JSON.parse(product);
    for (i = 0; i < 9; i++) {
        document.getElementById('ti'+i).innerHTML = `${objprod.producto[i].marca} ${objprod.producto[i].modelo}`;
        document.getElementById('de'+i).innerHTML = `N° de núcleos: ${objprod.producto[i].nucleos}<br>
                 N° hilos: ${objprod.producto[i].hilos} <br>
                 Frecuencia: ${objprod.producto[i].frecuencia} <br>
                 Tipo de memoria:${objprod.producto[i].memoria}<br> 
                 Gráfica:${objprod.producto[i].grafica} <br>
                 Código de producto: ${objprod.producto[i].codigo}`;
        document.getElementById('st'+i).innerHTML = `Stock: ${objprod.producto[i].stock}`;
        document.getElementById('pe'+i).innerHTML = `$${objprod.producto[i].Precio}`;
    }
}