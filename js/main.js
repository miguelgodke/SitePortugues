/* Biblioteca da Informação — scripts simples */
(function () {
  "use strict";

  var dados = window.BIBLIOTECA;

  /* ---------- Tema escuro ---------- */
  var botaoTema = document.getElementById("botao-tema");

  function aplicarTema(escuro) {
    document.documentElement.classList.toggle("escuro", escuro);
    if (botaoTema) botaoTema.textContent = escuro ? "Tema claro" : "Tema escuro";
  }

  var temaSalvo = false;
  try { temaSalvo = localStorage.getItem("tema") === "escuro"; } catch (e) {}
  aplicarTema(temaSalvo);

  if (botaoTema) {
    botaoTema.addEventListener("click", function () {
      var escuro = !document.documentElement.classList.contains("escuro");
      aplicarTema(escuro);
      try { localStorage.setItem("tema", escuro ? "escuro" : "claro"); } catch (e) {}
    });
  }

  /* ---------- Funções auxiliares ---------- */
  function criar(tag, classe, texto) {
    var el = document.createElement(tag);
    if (classe) el.className = classe;
    if (texto) el.textContent = texto;
    return el;
  }

  function caixaImagem(src, alt) {
    var caixa = criar("div", "card-imagem");
    if (src) {
      var img = document.createElement("img");
      img.src = src;
      img.alt = alt || "";
      caixa.appendChild(img);
    } else {
      caixa.textContent = "Espaço para imagem";
    }
    return caixa;
  }

  function linkYoutube(url) {
    if (!url) return "";
    var m = url.match(/(?:youtu\.be\/|v=|embed\/)([\w-]{11})/);
    return m ? "https://www.youtube.com/embed/" + m[1] : url;
  }

  /* ---------- Rodapé: lista de membros ---------- */
  var rodapeMembros = document.getElementById("rodape-membros");
  if (rodapeMembros && dados) {
    dados.membros.forEach(function (m) {
      rodapeMembros.appendChild(criar("li", "", m.nome));
    });
  }
  var rodapeAno = document.getElementById("rodape-ano");
  if (rodapeAno && dados) rodapeAno.textContent = dados.grupo.ano;

  /* ---------- Home: membros ---------- */
  var gridMembros = document.getElementById("grid-membros");
  if (gridMembros && dados) {
    dados.membros.forEach(function (m) {
      var card = criar("article", "card membro");
      card.appendChild(caixaImagem(m.foto, m.nome));
      var corpo = criar("div", "card-corpo");
      corpo.appendChild(criar("h3", "", m.nome));
      card.appendChild(corpo);
      gridMembros.appendChild(card);
    });
  }

  var infoGrupo = document.querySelectorAll("[data-grupo]");
  if (dados) {
    infoGrupo.forEach(function (el) {
      var chave = el.getAttribute("data-grupo");
      if (dados.grupo[chave]) el.textContent = dados.grupo[chave];
    });
  }

  /* ---------- Páginas de trabalhos (cordel, contos, resenha) ---------- */
  var lista = document.getElementById("lista-trabalhos");
  if (lista && dados) {
    var tipo = lista.getAttribute("data-tipo");

    dados.membros.forEach(function (m) {
      var trabalho = m[tipo];
      var card = criar("article", "card item-filtravel");
      card.setAttribute("data-busca", (trabalho.titulo + " " + m.nome).toLowerCase());
      card.setAttribute("data-membro", m.nome);

      card.appendChild(caixaImagem(trabalho.imagem, trabalho.titulo));

      var corpo = criar("div", "card-corpo");
      corpo.appendChild(criar("h3", "", trabalho.titulo));
      corpo.appendChild(criar("p", "autor", "Por " + m.nome));
      card.appendChild(corpo);

      var rodape = criar("div", "card-rodape");
      var botao = criar("a", "botao");

      if (tipo === "cordel") {
        botao.textContent = "Ler cordel";
        botao.href = m.paginaCordel;
      } else if (trabalho.link) {
        botao.textContent = "Acessar trabalho";
        botao.href = trabalho.link;
        botao.target = "_blank";
        botao.rel = "noopener";
        rodape.appendChild(botao);
        rodape.appendChild(criar("p", "card-aviso", "Abre o Google Docs em outra aba."));
      } else {
        botao.textContent = "Link em breve";
        botao.className = "botao desativado";
      }
      if (!botao.parentNode) rodape.appendChild(botao);

      card.appendChild(rodape);
      lista.appendChild(card);
    });

    /* menu de filtro por membro */
    var selectMembro = document.getElementById("filtro-membro");
    if (selectMembro) {
      dados.membros.forEach(function (m) {
        var op = criar("option", "", m.nome);
        op.value = m.nome;
        selectMembro.appendChild(op);
      });
    }
  }

  /* ---------- Pesquisa + filtro (mesma lógica em todas as páginas) ---------- */
  var campoBusca = document.getElementById("campo-busca");
  var filtroMembro = document.getElementById("filtro-membro");
  var semResultado = document.getElementById("sem-resultado");

  function filtrar() {
    var termo = campoBusca ? campoBusca.value.trim().toLowerCase() : "";
    var membro = filtroMembro ? filtroMembro.value : "";
    var itens = document.querySelectorAll(".item-filtravel");
    var visiveis = 0;

    itens.forEach(function (item) {
      var okTexto = item.getAttribute("data-busca").indexOf(termo) !== -1;
      var okMembro = !membro || item.getAttribute("data-membro") === membro;
      var mostrar = okTexto && okMembro;
      item.style.display = mostrar ? "" : "none";
      if (mostrar) visiveis++;
    });

    if (semResultado) semResultado.style.display = visiveis === 0 ? "block" : "none";
  }

  /* ---------- Apresentação: vídeos ---------- */
  var gridVideos = document.getElementById("grid-videos");
  if (gridVideos && dados) {
    dados.videos.forEach(function (v) {
      var caixa = criar("article", "video-caixa item-filtravel");
      caixa.setAttribute("data-busca", (v.titulo + " " + v.descricao).toLowerCase());
      caixa.setAttribute("data-membro", "");

      var tela = criar("div", "video-tela");
      var embed = linkYoutube(v.link);
      if (embed) {
        var frame = document.createElement("iframe");
        frame.src = embed;
        frame.title = v.titulo;
        frame.allowFullscreen = true;
        frame.loading = "lazy";
        tela.appendChild(frame);
      } else {
        tela.textContent = "Espaço para o vídeo";
      }
      caixa.appendChild(tela);

      var info = criar("div", "video-info");
      info.appendChild(criar("h3", "", v.titulo));
      info.appendChild(criar("p", "", v.descricao));
      caixa.appendChild(info);

      gridVideos.appendChild(caixa);
    });
  }

  if (campoBusca) campoBusca.addEventListener("input", filtrar);
  if (filtroMembro) filtroMembro.addEventListener("change", filtrar);

  /* ---------- Página individual de cordel: imagem ---------- */
  var imagemCordel = document.getElementById("imagem-cordel");
  if (imagemCordel && dados) {
    var pagina = location.pathname.split("/").pop();
    dados.membros.forEach(function (m) {
      if (m.paginaCordel === pagina) {
        imagemCordel.appendChild(caixaImagem(m.cordel.imagem, m.cordel.titulo));
        var tituloEl = document.getElementById("cordel-titulo");
        var autorEl = document.getElementById("cordel-autor");
        if (tituloEl) tituloEl.textContent = m.cordel.titulo;
        if (autorEl) autorEl.textContent = "Por " + m.nome;
        document.title = m.cordel.titulo + " | Biblioteca da Informação";
      }
    });
  }

  /* ---------- Contato: galeria com filtros ---------- */
  var galeria = document.getElementById("galeria");
  var botoesFiltro = document.getElementById("filtros-galeria");
  if (galeria && dados) {
    var categorias = ["Todas"];
    dados.galeria.forEach(function (f) {
      if (categorias.indexOf(f.categoria) === -1) categorias.push(f.categoria);

      var fig = criar("figure", "card");
      fig.setAttribute("data-categoria", f.categoria);
      fig.appendChild(caixaImagem(f.src, f.legenda));
      fig.appendChild(criar("figcaption", "", f.legenda));
      galeria.appendChild(fig);
    });

    categorias.forEach(function (cat, i) {
      var b = criar("button", "filtro-btn" + (i === 0 ? " ativo" : ""), cat);
      b.type = "button";
      b.addEventListener("click", function () {
        botoesFiltro.querySelectorAll(".filtro-btn").forEach(function (x) {
          x.classList.remove("ativo");
        });
        b.classList.add("ativo");
        galeria.querySelectorAll("figure").forEach(function (fig) {
          var ok = cat === "Todas" || fig.getAttribute("data-categoria") === cat;
          fig.style.display = ok ? "" : "none";
        });
      });
      botoesFiltro.appendChild(b);
    });
  }

  /* ---------- Contato: formulário ---------- */
  var form = document.getElementById("form-contato");
  if (form && dados) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = document.getElementById("form-status");
      var nome = form.nome.value.trim();
      var assunto = form.assunto.value;
      var mensagem = form.mensagem.value.trim();

      if (!dados.grupo.email) {
        status.textContent = "Mensagem pronta! Defina o e-mail do grupo em js/dados.js para enviar.";
        return;
      }
      var corpo = "Nome: " + nome + "\nE-mail: " + form.email.value.trim() + "\n\n" + mensagem;
      location.href = "mailto:" + dados.grupo.email +
        "?subject=" + encodeURIComponent(assunto) +
        "&body=" + encodeURIComponent(corpo);
      status.textContent = "Abrindo seu aplicativo de e-mail...";
    });
  }
})();
