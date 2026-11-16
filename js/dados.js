(function () {
  "use strict";

  window.BIBLIOTECA = {

    /* ---------- Informações do grupo ---------- */
    grupo: {
      nome: "Biblioteca da Informação",
      turma: "148",
      escola: "IFSP - Cubatão",
      professor: "Nelson Junior & Fabiana vilaço",
      ano: "2026"
    },

    /* ---------- Os 6 membros ----------
       Para trocar o nome de um membro, altere "nome" e, se quiser,
       renomeie o arquivo do cordel e atualize "paginaCordel".  */
    membros: [
      {
        nome: "Cauan Victor",
        foto: "./img/cauan.png",
        paginaCordel: "cauan_cordel.html",
        cordel:  { titulo: "Liberdade Extinta", imagem: "./img/mauritania.jpg" },
        conto:   { titulo: "Hibisco Vermelho",  imagem: "./img/hibisco_vermelho.png", link: "./pdf/cauanconto.pdf" },
        resenha: { titulo: "Maus", imagem: "./img/maus.webp", link: "./pdf/cauanresenha.pdf" }
      },
      {
        nome: "Enzo Ricci",
        foto: "./img/ricci.png",
        paginaCordel: "ricci_cordel.html",
        cordel:  { titulo: "Direito de Viver", imagem: "./img/direitodeviver.png" },
        conto:   { titulo: "Título do conto",  imagem: "", link: "" },
        resenha: { titulo: "Título da resenha", imagem: "", link: "" }
      },
      {
        nome: "Enzo Novais",
        foto: "./img/novais.png",
        paginaCordel: "novais_cordel.html",
        cordel:  { titulo: "Escravidão", imagem: "./img/escravidao.png" },
        conto:   { titulo: "Hibisco Silencioso",  imagem: "./img/hibisco_silencioso.png", link: "./pdf/novaisconto.pdf" },
        resenha: { titulo: "Título da resenha", imagem: "./img/pintoradehenna.jpg", link: "./pdf/novaisresenha.pdf" }
      },
      {
        nome: "Miguel Godke",
        foto: "./img/miguel.png",
        paginaCordel: "godke_cordel.html",
        cordel:  { titulo: "Hipocrisia do próprio", imagem: "./img/DireitosHumanosSem_Fronteiras.png" },
        conto:   { titulo: "Conto Deletado",  imagem: "", link: "" },
        resenha: { titulo: "Percy Jackson e o ladrão de raios", imagem: "./img/percy_jackson.jpg", link: "./pdf/godkeresenha.pdf" }
      },
      {
        nome: "Ruan Ribeiro",
        foto: "./img/ribeiro.png",
        paginaCordel: "ruan_cordel.html",
        cordel:  { titulo: "Título do cordel", imagem: "" },
        conto:   { titulo: "Título do conto",  imagem: "", link: "" },
        resenha: { titulo: "Título da resenha", imagem: "./img/banana.jpg", link: "./pdf/ruanresenha.pdf" }
      },
      {
        nome: "Lucas antônio",
        foto: "./img/lucas.png",
        paginaCordel: "lucas_cordel.html",
        cordel:  { titulo: "Título do cordel", imagem: "" },
        conto:   { titulo: "o Silêncio mudou",  imagem: "./img/hibisco.png", link: "./pdf/lucasconto.pdf" },
        resenha: { titulo: "Iracema", imagem: "./img/iracema.jpg", link: "./pdf/lucasresenha.pdf" }
      }
    ],

    /* ---------- Vídeos da apresentação ---------- */
    videos: [
      {
        titulo: "Cultura Sob Censura: uma reflexão da Cultura no periodo da Ditadura Militar",
        link: "https://www.youtube.com/watch?v=sXm7iSGr_Eo",
        descricao: "Um debate acerca da Cultura durante o tempo de 1964 até 1985 quando ocorreu a ditadura Militar no Brasil"
      },
      {
        titulo: "Quantos livros você lê por dia?",
        link: "https://youtu.be/Gxpd4j7glek?si=RXO3OyGk1x0-QSw-",
        descricao: "grupo Lucas, Ruan, Luiz"
      }
    ],
  };
})();
