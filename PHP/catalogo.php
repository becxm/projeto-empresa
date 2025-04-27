<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Catálogo de Produtos</title>
  <link rel="stylesheet" href="../CSS/styleservicos.css">
</head>
<body>
  <section class="form-container">
    <div id="logo-text">Catálogo de Serviços</div>
  </section>

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
      <p>Pessoas atuando no serviço: $quantidade</p>
    </div>";
  }
  echo "</div>";
} else {
  echo "<p>Nenhum serviço cadastrado ainda.</p>";
}
?>

</body>
</html>
