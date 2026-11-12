/* ============================================================
   REPOSITÓRIO DO SITE  —  é aqui que você preenche tudo.

   Imagens: coloque os arquivos na pasta  img/  e escreva o caminho,
   por exemplo:  "img/maria.jpg"
   Links: cole o link do Google Docs entre as aspas.
   Deixou vazio ("")? O site mostra um espaço reservado.
   ============================================================ */

(function () {
  "use strict";

  window.BIBLIOTECA = {

    /* ---------- Informações do grupo ---------- */
    grupo: {
      nome: "Biblioteca da Informação",
      turma: "148",
      escola: "IFSP - Cubatão",
      professor: "Nelson Junior & Fabiana vilaço",
      email: "cauanvictorcavalcanti@gmail.com",  
      ano: "2026"
    },

    /* ---------- Os 6 membros ----------
       Para trocar o nome de um membro, altere "nome" e, se quiser,
       renomeie o arquivo do cordel e atualize "paginaCordel".  */
    membros: [
      {
        nome: "Cauan Victor",
        foto: "./img/cauan.png",
        paginaCordel: "membro1_cordel.html",
        cordel:  { titulo: "Título do cordel", imagem: "" },
        conto:   { titulo: "Título do conto",  imagem: "", link: "" },
        resenha: { titulo: "Título da resenha", imagem: "", link: "" }
      },
      {
        nome: "Enzo Ricci",
        foto: "./img/ricci.png",
        paginaCordel: "membro2_cordel.html",
        cordel:  { titulo: "Título do cordel", imagem: "" },
        conto:   { titulo: "Título do conto",  imagem: "", link: "" },
        resenha: { titulo: "Título da resenha", imagem: "", link: "" }
      },
      {
        nome: "Enzo Novais",
        foto: "./img/novais.png",
        paginaCordel: "membro3_cordel.html",
        cordel:  { titulo: "Título do cordel", imagem: "" },
        conto:   { titulo: "Título do conto",  imagem: "", link: "" },
        resenha: { titulo: "Título da resenha", imagem: "", link: "" }
      },
      {
        nome: "Miguel Godke",
        foto: "./img/miguel.png",
        paginaCordel: "membro4_cordel.html",
        cordel:  { titulo: "Título do cordel", imagem: "" },
        conto:   { titulo: "Título do conto",  imagem: "", link: "" },
        resenha: { titulo: "Título da resenha", imagem: "", link: "" }
      },
      {
        nome: "Ruan Ribeiro",
        foto: "./img/ribeiro.png",
        paginaCordel: "membro5_cordel.html",
        cordel:  { titulo: "Título do cordel", imagem: "" },
        conto:   { titulo: "Título do conto",  imagem: "", link: "" },
        resenha: { titulo: "Título da resenha", imagem: "", link: "" }
      },
      {
        nome: "Lucas antônio",
        foto: "./img/lucas.png",
        paginaCordel: "membro6_cordel.html",
        cordel:  { titulo: "Título do cordel", imagem: "" },
        conto:   { titulo: "Título do conto",  imagem: "", link: "" },
        resenha: { titulo: "Título da resenha", imagem: "", link: "" }
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
