<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Plana Iniciar sessio</title>
</head>
<body>
    <div class="container" id="i_sessio">
        <h1>LOG IN</h1>
        <input type="text" placeholder="User">
        <input type="password" placeholder="Password">
        <button>No recuerdo la contraseña</button>
        <button>Log In</button>
        <button>Sing Up</button>
    </div>

    <div class="container" id="singUp">
        <h1>REGISTER</h1>
        <label for="">DNI</label><input type="text" placeholder="DNI" name="dni">
        <label for="">Nom</label><input type="text" placeholder="Nom" name="nom">
        <label for="">Cognoms</label><input type="text" placeholder="Cognom" name="apellido">
        <label for="">Data Naixement</label><input type="date" placeholder="Data Naixement" name="data">
        <label for="">Telefono</label><input type="numeric" placeholder="telefon" name="tel">
        <label for="">Email</label><input type="text" placeholder="Email" name="mail">
        <label for="">Adreça</label><input type="text" placeholder="Adreça" name="adress">
        <label for="">Poblacio</label><input type="text" placeholder="Poblacio" name="town">
        <label for="">Codi Postal</label><input type="numeric" placeholder="CP" name="cp">
        <button>Go back</button>
        <button onclick="registrar()">Registrar</button>
    </div>
    
    <?php
        $dni = $_POST['dni'];
        $nom = $_POST['nom'];
        $appelido = $_POST['apellido'];
        $data = $_POST['data'];
        $telefon = $_POST['tel'];
        $email = $_POST['mail'];
        $adress = $_POST['adress'];
        $poblacion = $_POST['town'];
        $codi = $_POST['cp'];

        if (!empty($dni) && !empty($nom) && !empty($appelido) && !empty($data) && !empty($telefon) && !empty($email) && 
            !empty($adress) &&!empty($poblacion) &&!empty($codi)) {
            $sql = "INSERT INTO usuari (DNI, nom, cognom, data_naixement, telefon, email, adreca, poblacio, codi_postal) VALUES (:dni, :nom, :cognom, :datan, :tele, :ema, :adre, :pobla, :cp)";
            $stmt = $pdo->prepare($sql);
            $stmt->execute([
            'dni' => $dni,
            'nom' => $nom,
            'cognom' => $appelido,
            'datan' => $data,
            'tele' => $telefon,
            'ema' => $email,
            'adre' => $adress,
            'pobla' => $poblacion,
            'cp' => $codi
            ]);
            echo "tus datos han sido guardados!";
        }
    ?>
</body>
</html>