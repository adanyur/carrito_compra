const getProductAll = () => {
  $.get("Controller/ProductoController.php", (data) => {
    console.log(data);
  });
};

getProductAll();
