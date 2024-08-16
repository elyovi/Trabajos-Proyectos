<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Encabezado aquí -->
</head>
<body>
    <div class="contenedor">
        <form action="#" method="post">
            <label for="id">
                ID a Eliminar: 
                <select name="id" id="id" required>
                    <?php
                    require("conexion.php");
                    $consulta = "SELECT ID FROM articulo";
                    $resultado = mysqli_query($con, $consulta);
                    while ($fila = mysqli_fetch_array($resultado, MYSQLI_ASSOC)) {
                        $idArticulo = $fila['ID'];
                        echo "<option value='$idArticulo'>$idArticulo</option>";
                    }
                    mysqli_close($con);
                    ?>
                </select>
            </label>
            <br>
            <label for="enviar">
                <input type="submit" value="Eliminar" name="enviar" id="envi">
            </label>
        </form>

        <?php 
            if(isset($_POST['enviar'])){
                require("conexion.php");
                $id = $_POST['id'];
                // Realizar la eliminación en la base de datos usando la consulta DELETE
                $consulta = "DELETE FROM articulo WHERE ID='$id'";
                $resultado = mysqli_query($con, $consulta);
                
                if($resultado === false){
                    echo "Error al eliminar el artículo: " . mysqli_error($con);
                } else {
                    echo "Artículo eliminado exitosamente";
                }
                mysqli_close($con);
            }
        ?>
    </div>
</body>
</html>