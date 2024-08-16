<?php
if(isset($_GET['modificar'])){
    $edit_id = $_GET['modificar'];

    $consulta = "SELECT * FROM articulo WHERE id ='$edit_id'";
    $ejecutar = mysqli_query($con, $consulta);

    if($fila = mysqli_fetch_array($ejecutar)){
        $nombre = $fila['nombre'];
        $marca = $fila['marca'];
        $stock = $fila['stock'];
        $precio = $fila['precio'];
    }
}

?>

<br>

<form action="" method="post" enctype="multipart/form-data">
    <input type="text" name="nombre" value="<?php echo isset($nombre) ? $nombre : ''; ?>" id="1"><br>
    <input type="text" name="marca" value="<?php echo isset($marca) ? $marca : ''; ?>" id="2"><br>
    <input type="number" name="stock" value="<?php echo isset($stock) ? $stock : ''; ?>" id="3"><br>
    <input type="number" name="precio" value="<?php echo isset($precio) ? $precio : ''; ?>" id="4"><br>
    <input type="submit" name="enviar" value="Actualizar datos">
</form>

<?php
if(isset($_POST['enviar'])){
    $nuevoNombre = $_POST['nombre'];
    $nuevoStock = $_POST['stock'];
    $nuevoPrecio = $_POST['precio'];
    $nuevoMarca = $_POST['marca'];

    $nuevo = "UPDATE articulo SET nombre = '$nuevoNombre', marca = '$nuevoMarca', precio = '$nuevoPrecio', 
    stock = '$nuevoStock' WHERE ID = '$edit_id'";
    
    $ejecutar = mysqli_query($con, $nuevo);

    if($ejecutar){
        echo "Datos actualizados correctamente";
    } else{
        echo "Error: " . mysqli_error($con);
    }

    mysqli_close($con);
}
?>