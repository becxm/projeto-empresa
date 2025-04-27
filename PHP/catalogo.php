<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Catálogo de Produtos</title>
  <link rel="stylesheet" href="../CSS/styleservicos.css">
</head>
<body>
  <div id="logo-text"> - Catálogo de Produtos</div>

<?php
if (file_exists("produtos.txt")) {
  $linhas = file("produtos.txt");
  echo "<div class='catalogo'>";
  foreach ($linhas as $linha) {
    list($nome, $descricao, $valor, $quantidade, $imagem) = explode("|", trim($linha));
    echo "
    <div class='produto'>
      <img src='imgBD/$imagem' alt='$nome'>
      <h3>$nome</h3>
      <p>$descricao</p>
      <p><strong>R$ $valor</strong></p>
      <p>Estoque: $quantidade</p>
    </div>";
  }
  echo "</div>";
} else {
  echo "<p>Nenhum produto cadastrado ainda.</p>";
}
?>

</body>
</html>
