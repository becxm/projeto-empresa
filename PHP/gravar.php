<?php
$nome = $_POST['nome'];
$descricao = $_POST['descricao'];
$valor = $_POST['valor'];
$quantidade = $_POST['quantidade'];

$nomeImagem = basename($_FILES['imagem']['name']);
$caminho = "imgBD/" . $nomeImagem;

// Cria a pasta se não existir
if (!is_dir("imgBD")) {
  mkdir("imgBD");
}

// Salva a imagem
if (move_uploaded_file($_FILES["imagem"]["tmp_name"], $caminho)) {
  if (!file_exists("produtos.txt")) {
    fopen("produtos.txt", "w");
  }

  $linha = "$nome|$descricao|$valor|$quantidade|$nomeImagem\n";
  file_put_contents("produtos.txt", $linha, FILE_APPEND);

  echo "Produto cadastrado com sucesso! <a href='catalogo.php'>Ver catálogo</a>";
} else {
  echo "Erro ao salvar imagem.";
}
?>
