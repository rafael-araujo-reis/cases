document.getElementById('upload-file').addEventListener('change', () => gravarArquivo(event.target.value));

function gravarArquivo(file) {
  console.log(file);
  document.getElementById('file').innerText = file;
}