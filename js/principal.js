var banners = ["Do lixo ao luxo!","Reaproveitar � aproveitar!"];
//restante do arquivo
["Os melhores do Brasil!", "Qualidade e pre�o baixo!"];
var bannerAtual = 0;
function trocaBanner() {
bannerAtual = (bannerAtual + 1) % 2;
document.querySelector(�h2#mensagem�).textContent =
banners[bannerAtual];
}
setInterval(trocaBanner, 1000);
