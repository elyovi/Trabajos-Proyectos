<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tienda</title>
    <link rel="stylesheet" href="estilos/menu.css">
</head>
<body>
    <div class="contenedor">
        <header class="menu">
            <h1>Tienda</h1>
        </header>
        <div class="opciones">
            <div class="insert">
                <a href="consultas/insertar.php"><h2>Ingresar artículo</h2></a>
            </div>
            <div class="mostrar">
                <a href="menu.php?mostrar"><h2>Mostrar</h2></a>
            </div>
            <div class="modificar">
                <a href="consultas/modificar.php"><h2>Modificar</h2></a>
            </div>
            <div class="eliminar">
                <a href="consultas/eliminar.php"><h2>Eliminar</h2></a>
            </div>
        </div>

        <?php
        if (isset($_GET['mostrar'])) {
            require("consultas/conexion.php");
            $consulta = "SELECT * FROM articulo";
            $resultado = mysqli_query($con, $consulta);
        ?>
        <table>
            <tr>
                <td>ID</td>
                <td>Nombre</td>
                <td>Marca</td>
                <td>Stock</td>
                <td>Precio</td>
                <td>Editar</td>
                <td>Borrar</td>
            </tr>
            <?php
            while ($fila = mysqli_fetch_array($resultado, MYSQL_ASSOC)) {
                $idPOST = $fila['ID'];
                $nombrePOST = $fila['nombre'];
                $marcaPOST = $fila['marca'];
                $stockPOST = $fila['stock'];
                $precioPOST = $fila['precio'];
                echo "<tr>
                        <td>$idPOST</td>
                        <td>$nombrePOST</td>
                        <td>$marcaPOST</td>
                        <td>$stockPOST</td>
                        <td>$precioPOST</td>
                        <td><a class='color' href='consultas/modificar.php?id=$idPOST'>Editar</a></td>
                        <td><a class='color' href='consultas/eliminar.php?id=$idPOST'>Borrar</a></td>
                    </tr>";
            }}
            ?>
        </table>
    </div>
</body>
</html>
