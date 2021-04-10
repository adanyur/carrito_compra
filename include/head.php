<?php
  define('RUTA_GLOBAL', dirname(dirname(__FILE__)));  
?>
<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="description" content="">
<meta name="author" content="">
<title>Digital Shopping Cart </title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
<link rel="stylesheet" href="../assets/css/style.css">
</head>
<body>
<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark"> 
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"> 
    <span class="navbar-toggler-icon"></span>
</button>
<div class="container-cart-count">
<button type="button" class="btn btn-primary"  id="listProducto">
  carrito <span class="badge badge-light" id="countCarrito"></span>
</button>
</div>

<div class="collapse navbar-collapse" id="navbarCollapse">
  <ul class="navbar-nav mr-auto">
        <li class="nav-item active"> <a class="nav-link" href="index.php">Start <span class="sr-only">(current)</span></a> </li>   
        <li class="nav-item"> <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a> </li>
        <li class="nav-item"> <a class="nav-link" href="about.html">About <span class="sr-only">(current)</span></a> </li>
        <li class="nav-item"> <a class="nav-link" href="contact.html">Contact <span class="sr-only">(current)</span></a> </li>
        <li class="nav-item"> <a class="nav-link" href="contact.html">Carrito <span class="sr-only">(current)</span></a> </li>
  </ul> 
</div>
</nav>