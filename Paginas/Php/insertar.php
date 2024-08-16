<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menu/Ingreso</title>
    <link rel="stylesheet" href="../estilos/insertar.css" type="text/css">
</head>
</head>
<body>
    <div class="contenedor">
        <form action="#" method="post">
            <label for="nombre">
            Nombre:<input type="text" name="nombre" id="nombre"></label>
            <br>
            <label for="marca">
            Marca:<input type="text" name="marca" id="marca"></label>
            <br>
            <label for="stock">
            Stock:<input type="number" name="stock" id="stock"></label>
            <br>
            <label for="precio">
            Precio:<input type="number" name="precio" id="precio"></label>
            <br>
            <label for="enviar">
            <input type="submit" value="Ingresar" name="enviar" id="envi"></label>
        </form>
        <?php 
            if(isset($_POST['enviar'])){
                require("conexion.php");
                $nom=$_POST['nombre'];
                $mark=$_POST['marca'];
                $stock=$_POST['stock'];
                $pre=$_POST['precio'];
                $consulta="INSERT INTO  articulo(nombre,marca,stock,precio) VALUES ('$nom','$mark','$stock','$pre')";
                $resultado=mysqli_query($con,$consulta);
               
                if($resultado==false){
                    echo"Error";}

                else{echo"Articulo Ingresado";}  
                mysqli_close($con);}
        
        ?>
    </div>
</body>
</html>