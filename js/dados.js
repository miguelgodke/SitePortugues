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
        foto: "./img/perfis/cauan.png",
        paginaCordel: "cauan_cordel.html",
        cordel:  { titulo: "Liberdade Extinta", imagem: "./img/cordel_img/mauritania.jpg" },
        conto:   { titulo: "Hibisco Vermelho",  imagem: "./img/conto_img/hibisco_vermelho.png", link: "./pdf/cauanconto.pdf" },
        resenha: { titulo: "Maus", imagem: "./img/resenha_img/maus.webp", link: "./pdf/cauanresenha.pdf" }
      },
      {
        nome: "Enzo Ricci",
        foto: "./img/perfis/ricci.png",
        paginaCordel: "ricci_cordel.html",
        cordel:  { titulo: "Direito de Viver", imagem: "./img/cordel_img/direitodeviver.png" },
        conto:   { titulo: "Jardim do silêncio",  imagem: "./img/conto_img/ricciconto.png", link: "./pdf/ricciconto.pdf" },
        resenha: { titulo: "Coração de Tinta", imagem: "./img/resenha_img/tinta.jpg", link: "./pdf/ricciresenha.pdf" }
      },
      {
        nome: "Enzo Novais",
        foto: "./img/perfis/novais.png",
        paginaCordel: "novais_cordel.html",
        cordel:  { titulo: "Escravidão", imagem: "./img//cordel_img/escravidao.png" },
        conto:   { titulo: "Hibisco Silencioso",  imagem: "./img/conto_img/entredois.png", link: "./pdf/novaisconto.pdf" },
        resenha: { titulo: "Pintora de Henna", imagem: "./img/resenha_img/pintoradehenna.jpg", link: "./pdf/novaisresenha.pdf" }
      },
      {
        nome: "Miguel Godke",
        foto: "./img/perfis/miguel.png",
        paginaCordel: "godke_cordel.html",
        cordel:  { titulo: "Hipocrisia do próprio", imagem: "./img//cordel_img/DireitosHumanosSem_Fronteiras.png" },
        conto:   { titulo: "o Ultimo Domingo de Jaja",  imagem: "./img/conto_img/miguelconto.jpeg", link: "./pdf/miguelconto.pdf" },
        resenha: { titulo: "Percy Jackson e o ladrão de raios", imagem: "./img/resenha_img/percy_jackson.jpg", link: "./pdf/godkeresenha.pdf" }
      },
      {
        nome: "Ruan Ribeiro",
        foto: "./img/perfis/ribeiro.png",
        paginaCordel: "ruan_cordel.html",
        cordel:  { titulo: "Nóis é diferente, mas num é pior", imagem: "./img//cordel_img/numediferente.png" },
        conto:   { titulo: "a Fuga do abismo",  imagem: "./img/conto_img/ruanconto.png", link: "./pdf/ruanconto.pdf" },
        resenha: { titulo: "Diário de um Banana", imagem: "./img/resenha_img/banana.jpg", link: "./pdf/ruanresenha.pdf" }
      },
      {
        nome: "Lucas antônio",
        foto: "./img/perfis/lucas.png",
        paginaCordel: "lucas_cordel.html",
        cordel:  { titulo: "Direitos Humanos", imagem: "./img//cordel_img/direitos_humanos.jpg" },
        conto:   { titulo: "o Silêncio mudou",  imagem: "./img/conto_img/hibisco.png", link: "./pdf/lucasconto.pdf" },
        resenha: { titulo: "Iracema", imagem: "./img/resenha_img/iracema.jpg", link: "./pdf/Lucasresenha.pdf" }
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
        descricao: "Entrevista com Estudantes de Letras no IFSP, falando de literatura, fan-fics e histórias relacionadas"
      }
    ],
  };
})();
