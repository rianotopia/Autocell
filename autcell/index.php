<!DOCTYPE html>
<html lang="fr">
    <head>
        <title>BUCHI Baptiste</title>
        <meta charset="utf-8">
        <meta name="keywords" content="">
        <meta name="description" content="">
        <meta name="author" content="BUCHI Baptiste">
        <script src="./js/jquery-3.1.0.min.js"></script>
        <script src="./js/script.js"></script>
        <link rel="stylesheet" type="text/css" href="css/style.css">
    </head>
    <body>
        <main>
          Règle de Wolfram : <input type="text" value ="0" id="val_wolfram" onblur="mutationLigneWolfram();"></input>
             Règle autre sens binaire : <input type="text" value ="0" id="val_fonction" onblur="mutationLigne();"></input>
          <br/><br/>
          <?php
          $tailleX = 200;
          $tailleY = 200;
          echo "<table style='border-collapse: collapse;'>";
          for($i=0;$i<$tailleX;$i++)
          {
              echo "<tr>";
              for($j=0;$j<$tailleY;$j++)
              {

                  echo "<td id='".$i."_".$j."' style='border : 1px solid #aaa;background-color : #ddd; height: 2px; width: 2px'></td>";
              }
              echo "</tr>";
          }
          ?>
        </main>
    </body>
</html>
