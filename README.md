# Dietetica Curcuma - ecommerce

En este proyecto se ha creado a través de React, JavaScrpit, Css y HTML, un eccomerce sobre productos del rubro de deietético que se comercializan en un emprendimiento.

## Funcionalidades de la página
- El usuario podrá filtrar las categorías entre los productos desde el navbar.
- El usuario puede ingresar a cada producto seleccionando el botón de detalle. Dentro del mismo, podrá seleccionar la cantidad de productos a agregar al carrito y realizarlo.
- Pulsando en el carrito, es posible ingresar al mismo y obtener un resultado dinámico del precio y cantidades. Además que podrá modificarlo en tiempo real y se irá actualizando el precio.
- Una vez que disponga de los productos a comprar, se le renderizará un form para completar los datos para generar el pedido.
- Una vez desplegado el Form, se podrá avanzar una vez validado los campos.
- Si los campos están correctos, se habilitará la posibilidad de hacer el pedido. El mismo se enviará a FireBase y devolverá código de pedido.
- Finalmente, se borrará el carrito para poder comprar nuevamente e reiniciar el proceso.

### Se utilizaron las siguientes dependencias para generar una mejor experiencia de usuario:
* firebase
* react-dom
* react-router-dom
* react-loading
* sweetalert2

## Vista de la página
![Homeview](https://res.cloudinary.com/du2nplxsm/image/upload/v1729126500/uvk06fczuyik9xcqzobl.png)
**Homeview**


![Detalle de productos](https://res.cloudinary.com/du2nplxsm/image/upload/v1729126500/nbxqkjcv50ugtuyssjxx.png)
**Detalle de productos**

![Carrito dinámico](https://res.cloudinary.com/du2nplxsm/image/upload/v1729126500/rpk6wxs9i4lhx6euzdxv.png)
**Carrito dinámico**

![Form con validación](https://res.cloudinary.com/du2nplxsm/image/upload/v1729126500/vewswrdoveqlkbqqbsab.png)
**Form con validación**


![Resultado final](https://res.cloudinary.com/du2nplxsm/image/upload/v1729130150/Pedido_realizado_unf1bv.png)
**Resultado final**



## Instalación y ejecución
```
npm install
npm run dev
```

[Visita mi github] (https://github.com/JuanZoloaga/ProyectoFinal-Zoloaga-React)