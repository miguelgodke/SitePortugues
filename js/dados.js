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
      turma: "Turma / Série aqui",
      escola: "Nome da escola aqui",
      professor: "Nome do professor(a) aqui",
      email: "",           // e-mail do grupo (usado no formulário de contato)
      ano: "2026"
    },

    /* ---------- Os 6 membros ----------
       Para trocar o nome de um membro, altere "nome" e, se quiser,
       renomeie o arquivo do cordel e atualize "paginaCordel".  */
    membros: [
      {
        nome: "Membro 1",
        foto: "",
        paginaCordel: "membro1_cordel.html",
        cordel:  { titulo: "Título do cordel", imagem: "" },
        conto:   { titulo: "Título do conto",  imagem: "", link: "" },
        resenha: { titulo: "Título da resenha", imagem: "", link: "" }
      },
      {
        nome: "Membro 2",
        foto: "",
        paginaCordel: "membro2_cordel.html",
        cordel:  { titulo: "Título do cordel", imagem: "" },
        conto:   { titulo: "Título do conto",  imagem: "", link: "" },
        resenha: { titulo: "Título da resenha", imagem: "", link: "" }
      },
      {
        nome: "Membro 3",
        foto: "",
        paginaCordel: "membro3_cordel.html",
        cordel:  { titulo: "Título do cordel", imagem: "" },
        conto:   { titulo: "Título do conto",  imagem: "", link: "" },
        resenha: { titulo: "Título da resenha", imagem: "", link: "" }
      },
      {
        nome: "Membro 4",
        foto: "",
        paginaCordel: "membro4_cordel.html",
        cordel:  { titulo: "Título do cordel", imagem: "" },
        conto:   { titulo: "Título do conto",  imagem: "", link: "" },
        resenha: { titulo: "Título da resenha", imagem: "", link: "" }
      },
      {
        nome: "Membro 5",
        foto: "",
        paginaCordel: "membro5_cordel.html",
        cordel:  { titulo: "Título do cordel", imagem: "" },
        conto:   { titulo: "Título do conto",  imagem: "", link: "" },
        resenha: { titulo: "Título da resenha", imagem: "", link: "" }
      },
      {
        nome: "Membro 6",
        foto: "",
        paginaCordel: "membro6_cordel.html",
        cordel:  { titulo: "Título do cordel", imagem: "" },
        conto:   { titulo: "Título do conto",  imagem: "", link: "" },
        resenha: { titulo: "Título da resenha", imagem: "", link: "" }
      }
    ],

    /* ---------- Vídeos da apresentação ----------
       link: cole o link normal do YouTube (watch?v=... ou youtu.be/...) */
    videos: [
      {
        titulo: "Vídeo 1",
        link: "",
        descricao: "Descrição do vídeo 1 aqui."
      },
      {
        titulo: "Vídeo 2",
        link: "",
        descricao: "Descrição do vídeo 2 aqui."
      }
    ],

    /* ---------- Galeria da página de contato ----------
       categoria: use o mesmo texto para agrupar (aparece como filtro). */
    galeria: [
      { src: "", legenda: "Legenda da foto 1", categoria: "Grupo" },
      { src: "", legenda: "Legenda da foto 2", categoria: "Grupo" },
      { src: "", legenda: "Legenda da foto 3", categoria: "Bastidores" },
      { src: "", legenda: "Legenda da foto 4", categoria: "Bastidores" },
      { src: "", legenda: "Legenda da foto 5", categoria: "Trabalhos" },
      { src: "", legenda: "Legenda da foto 6", categoria: "Trabalhos" }
    ]
  };
})();
