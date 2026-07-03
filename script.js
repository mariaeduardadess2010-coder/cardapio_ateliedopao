// ========== DADOS DOS PRODUTOS ==========
const produtos = [
  // 🥖 Pães
  { id: 1, nome: "Pão Francês", desc: "Casquinha crocante, miolo macio.", preco: "R$1,25/un", categoria: "pães", imagem: "images/pao-frances.jpg", tag: "Mais vendido", popular: true },
  { id: 2, nome: "Pão Italiano", desc: "Massa rústica com azeite e ervas.", preco: "R$18,00", categoria: "pães", imagem: "images/pao-italiano.jpg", tag: "Artesanal", popular: true },
  { id: 3, nome: "Pão Integral", desc: "Grãos selecionados, rico em fibras.", preco: "R$16,00", categoria: "pães", imagem: "images/pao-integral.jpg", tag: "", popular: false },
  { id: 4, nome: "Baguete", desc: "Autêntica baguete francesa artesanal.", preco: "R$12,00", categoria: "pães", imagem: "images/baguete.jpg", tag: "", popular: false },
  { id: 5, nome: "Ciabatta", desc: "Massa leve, alveolada, com azeite extravirgem.", preco: "R$14,00", categoria: "pães", imagem: "images/ciabatta.jpg", tag: "Novo", popular: false },

  // 🍰 Bolos
  { id: 6, nome: "Bolo de Cenoura", desc: "Cobertura de chocolate belga cremosa.", preco: "R$15,00/fatia", categoria: "bolos", imagem: "images/bolo-cenoura.jpg", tag: "Mais vendido", popular: true },
  { id: 7, nome: "Bolo de Chocolate", desc: "Massa úmida com cacau 70% importado.", preco: "R$18,00/fatia", categoria: "bolos", imagem: "images/bolo-chocolate.jpg", tag: "", popular: false },
  { id: 8, nome: "Red Velvet", desc: "Clássico aveludado com cream cheese.", preco: "R$20,00/fatia", categoria: "bolos", imagem: "images/red-velvet.jpg", tag: "Artesanal", popular: true },
  { id: 9, nome: "Bolo de Limão", desc: "Massa leve com raspas de limão siciliano.", preco: "R$14,00/fatia", categoria: "bolos", imagem: "images/bolo-limao.jpg", tag: "", popular: false },

  // 🍩 Doces
  { id: 10, nome: "Sonho", desc: "Recheio generoso de creme de baunilha.", preco: "R$9,00", categoria: "doces", imagem: "images/sonho.jpg", tag: "Mais vendido", popular: true },
  { id: 11, nome: "Croissant de Chocolate", desc: "Massa folhada com cacau belga premium.", preco: "R$14,00", categoria: "doces", imagem: "images/croissant-chocolate.jpg", tag: "", popular: false },
  { id: 12, nome: "Cinnamon Roll", desc: "Rolo de canela com cobertura de cream cheese.", preco: "R$12,00", categoria: "doces", imagem: "images/cinnamon-roll.jpg", tag: "Novo", popular: true },
  { id: 13, nome: "Cookie", desc: "Cookie americano com gotas de chocolate.", preco: "R$8,00", categoria: "doces", imagem: "images/cookie.jpg", tag: "", popular: false },

  // 🥐 Salgados
  { id: 14, nome: "Croissant de Frango", desc: "Recheio cremoso de frango com catupiry.", preco: "R$15,00", categoria: "salgados", imagem: "images/croissant-frango.jpg", tag: "Mais vendido", popular: true },
  { id: 15, nome: "Empada", desc: "Massa podre artesanal, recheio de palmito.", preco: "R$10,00", categoria: "salgados", imagem: "images/empada.jpg", tag: "Artesanal", popular: false },
  { id: 16, nome: "Quiche", desc: "Quiche Lorraine com bacon e alho-poró.", preco: "R$13,00", categoria: "salgados", imagem: "images/quiche.jpg", tag: "", popular: false },
  { id: 17, nome: "Esfiha", desc: "Esfiha aberta de carne com especiarias.", preco: "R$9,00", categoria: "salgados", imagem: "images/esfiha.jpg", tag: "", popular: false },

  // ☕ Cafés
  { id: 18, nome: "Espresso", desc: "Café espresso intenso com grãos especiais.", preco: "R$7,00", categoria: "cafés", imagem: "images/espresso.jpg", tag: "", popular: true },
  { id: 19, nome: "Cappuccino", desc: "Cappuccino cremoso com toque de canela.", preco: "R$10,00", categoria: "cafés", imagem: "images/cappuccino.jpg", tag: "Mais vendido", popular: true },
  { id: 20, nome: "Latte", desc: "Café latte com leite vaporizado e espuma.", preco: "R$11,00", categoria: "cafés", imagem: "images/latte.jpg", tag: "", popular: false },
  { id: 21, nome: "Mocha", desc: "Mocha de chocolate belga com chantilly.", preco: "R$14,00", categoria: "cafés", imagem: "images/mocha.jpg", tag: "Novo", popular: false },

  // 🥤 Bebidas
  { id: 22, nome: "Suco Natural", desc: "Suco de laranja espremido na hora.", preco: "R$12,00", categoria: "bebidas", imagem: "images/suco-natural.jpg", tag: "", popular: false },
  { id: 23, nome: "Chocolate Quente", desc: "Chocolate cremoso belga com chantilly.", preco: "R$16,00", categoria: "bebidas", imagem: "images/chocolate-quente.jpg", tag: "Mais vendido", popular: true },
  { id: 24, nome: "Chá Gelado", desc: "Chá preto gelado com limão e hortelã.", preco: "R$10,00", categoria: "bebidas", imagem: "images/cha-gelado.jpg", tag: "", popular: false },
  { id: 25, nome: "Água", desc: "Água mineral sem gás 500ml.", preco: "R$5,00", categoria: "bebidas", imagem: "images/agua.jpg", tag: "", popular: false }
];

const combos = [
  { nome: "Café da Manhã", desc: "Pão Francês + Espresso + Suco Natural.", preco: "R$18,00", imagem: "images/combo-cafe-manha.png" },
  { nome: "Café da Tarde", desc: "Bolo de Cenoura + Cappuccino.", preco: "R$22,00", imagem: "images/combo-cafe-tarde.png" },
  { nome: "Combo Família", desc: "4 Pães variados + Bolo de Chocolate + 4 Cafés.", preco: "R$55,00", imagem: "images/combo-familia.png" },
  { nome: "Combo Doce", desc: "Sonho + Cinnamon Roll + Cookie + 2 Cappuccinos.", preco: "R$35,00", imagem: "images/combo-doce.png" }
];

const estacao = [
  { nome: "Chocolate Quente Especial", desc: "Cremoso com especiarias natalinas e chantilly.", preco: "R$18,00", imagem: "images/chocolate-quente-especial.jpg" },
  { nome: "Panetone Artesanal", desc: "Panetone recheado com frutas cristalizadas.", preco: "R$45,00", imagem: "images/panetone.jpg" },
  { nome: "Bolo de Milho", desc: "Bolo cremoso de milho verde fresco da estação.", preco: "R$18,00", imagem: "images/bolo-milho.jpg" },
  { nome: "Canjica Cremosa", desc: "Canjica com leite condensado, coco e canela.", preco: "R$14,00", imagem: "images/canjica.jpg" }
];

// ========== ELEMENTOS DO DOM ==========
const cardapioGrid = document.getElementById('cardapioGrid');
const destaquesGrid = document.getElementById('destaquesGrid');
const combosGrid = document.getElementById('combosGrid');
const estacaoGrid = document.getElementById('estacaoGrid');
const searchInput = document.getElementById('searchInput');
const filtrosContainer = document.getElementById('filtrosCategorias');
const modalOverlay = document.getElementById('modalOverlay');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');
const backToTop = document.getElementById('backToTop');
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');
const semResultados = document.getElementById('semResultados');
const carrinhoBtn = document.getElementById('carrinhoBtn');
const carrinhoContador = document.getElementById('carrinhoContador');
const carrinhoOverlay = document.getElementById('carrinhoOverlay');
const carrinhoItens = document.getElementById('carrinhoItens');
const carrinhoTotal = document.getElementById('carrinhoTotal');
const carrinhoFooter = document.getElementById('carrinhoFooter');
const carrinhoFechar = document.getElementById('carrinhoFechar');
const btnFinalizar = document.getElementById('btnFinalizar');
const carrinhoLimpar = document.getElementById('carrinhoLimpar');
const filtroPreco = document.getElementById('filtroPreco');

let categoriaAtiva = 'populares';

// ========== CARRINHO ==========
let carrinho = [];

// ========== CONFIGURAÇÃO WHATSAPP ==========
const whatsappNumber = "5511963912526";

// ========== FUNÇÃO WHATSAPP ==========
function gerarLinkWhatsApp(nome, preco) {
  const mensagem = `Olá! 👋%0A%0AGostaria de fazer o seguinte pedido no Ateliê do Pão:%0A%0A🍞 Produto:%0A${nome}%0A%0A💰 Valor:%0A${preco}%0A%0AObrigado!`;
  return `https://wa.me/${whatsappNumber}?text=${mensagem}`;
}

// ========== FUNÇÕES DO CARRINHO ==========
function adicionarAoCarrinho(nome, preco, imagem, quantidade = 1, btnElement = null) {
  const precoLimpo = parseFloat(preco.replace('R$', '').replace(',', '.').replace('/fatia', '').replace('/un', '').trim());

  for (let i = 0; i < quantidade; i++) {
    carrinho.push({
      nome: nome,
      preco: precoLimpo,
      imagem: imagem
    });
  }

  atualizarCarrinho();

  if (btnElement) {
    const textoOriginal = btnElement.innerHTML;
    btnElement.innerHTML = '<i data-lucide="check"></i> Adicionado!';
    btnElement.style.background = 'var(--dourado)';
    btnElement.style.color = 'white';
    btnElement.style.border = '1.5px solid var(--dourado)';
    lucide.createIcons();

    setTimeout(() => {
      btnElement.innerHTML = textoOriginal;
      btnElement.style.background = '';
      btnElement.style.color = '';
      btnElement.style.border = '';
      lucide.createIcons();
    }, 2000);
  }
}

function adicionarAoCarrinhoComQuantidade(btn, nome, preco, imagem) {
  const wrapper = btn.closest('.modal-preco-final').querySelector('.quantidade-input');
  const quantidade = parseInt(wrapper.value) || 1;
  adicionarAoCarrinho(nome, preco, imagem, quantidade, btn);
  wrapper.value = 1;
}

function aumentarQuantidade(btn) {
  const input = btn.parentElement.querySelector('.quantidade-input');
  let valor = parseInt(input.value);
  if (valor < 20) input.value = valor + 1;
}

function diminuirQuantidade(btn) {
  const input = btn.parentElement.querySelector('.quantidade-input');
  let valor = parseInt(input.value);
  if (valor > 1) input.value = valor - 1;
}

function removerDoCarrinho(index) {
  carrinho.splice(index, 1);
  atualizarCarrinho();
}

function removerItemAgrupado(nome) {
  const index = carrinho.findIndex(item => item.nome === nome);
  if (index !== -1) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
  }
}

function aumentarItemCarrinho(nome, preco, imagem) {
  const precoLimpo = parseFloat(preco.replace('R$', '').replace(',', '.').replace('/fatia', '').replace('/un', '').trim());
  carrinho.push({
    nome: nome,
    preco: precoLimpo,
    imagem: imagem
  });
  atualizarCarrinho();
}

function diminuirItemCarrinho(nome) {
  const index = carrinho.findIndex(item => item.nome === nome);
  if (index !== -1) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
  }
}

function atualizarCarrinho() {
  if (carrinho.length > 0) {
    carrinhoContador.style.display = 'flex';
    carrinhoContador.textContent = carrinho.length;
    carrinhoLimpar.style.display = 'flex';
  } else {
    carrinhoContador.style.display = 'none';
    carrinhoLimpar.style.display = 'none';
  }

  if (carrinho.length === 0) {
    carrinhoItens.innerHTML = '<p class="carrinho-vazio">Seu carrinho está vazio</p>';
    carrinhoFooter.style.display = 'none';
  } else {
    const agrupado = [];
    carrinho.forEach(item => {
      const existente = agrupado.find(i => i.nome === item.nome);
      if (existente) {
        existente.quantidade++;
      } else {
        agrupado.push({ ...item, quantidade: 1 });
      }
    });

    carrinhoItens.innerHTML = agrupado.map((item, index) => `
      <div class="carrinho-item">
        <img src="${item.imagem}" alt="${item.nome}" class="carrinho-item-img" onerror="this.src='images/placeholder.jpg'">
        <div class="carrinho-item-info">
          <div class="carrinho-item-nome">${item.quantidade > 1 ? item.quantidade + 'x ' : ''}${item.nome}</div>
          <div class="carrinho-item-preco">R$ ${item.preco.toFixed(2).replace('.', ',')} ${item.quantidade > 1 ? 'cada' : ''}</div>
          ${item.quantidade > 1 ? `
          <div class="carrinho-editar-qtd">
            <button class="qtd-menos" onclick="diminuirItemCarrinho('${item.nome}')">−</button>
            <span>${item.quantidade}</span>
            <button class="qtd-mais" onclick="aumentarItemCarrinho('${item.nome}', '${item.preco.toFixed(2).replace('.', ',')}', '${item.imagem}')">+</button>
          </div>
          ` : ''}
        </div>
        <button class="carrinho-item-remover" onclick="removerItemAgrupado('${item.nome}')" title="Remover">
          <i data-lucide="trash-2"></i>
        </button>
      </div>
    `).join('');

    const total = carrinho.reduce((soma, item) => soma + item.preco, 0);
    carrinhoTotal.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
    carrinhoFooter.style.display = 'block';
  }

  lucide.createIcons();
}

function gerarMensagemCarrinho() {
  let mensagem = `Olá! 👋%0A%0AGostaria de fazer o seguinte pedido no Ateliê do Pão:%0A%0A`;

  const agrupado = {};
  carrinho.forEach(item => {
    if (agrupado[item.nome]) {
      agrupado[item.nome].quantidade++;
    } else {
      agrupado[item.nome] = { ...item, quantidade: 1 };
    }
  });

  for (const key in agrupado) {
    const item = agrupado[key];
    mensagem += `🍞 ${item.quantidade}x ${item.nome}%0A   R$ ${item.preco.toFixed(2).replace('.', ',')} cada%0A%0A`;
  }

  const total = carrinho.reduce((soma, item) => soma + item.preco, 0);
  mensagem += `💰 Total: R$ ${total.toFixed(2).replace('.', ',')}%0A%0AObrigado!`;

  return mensagem;
}

function finalizarPedido() {
  if (carrinho.length === 0) return;

  const mensagem = gerarMensagemCarrinho();
  const link = `https://wa.me/${whatsappNumber}?text=${mensagem}`;
  window.open(link, '_blank');

  // Limpar carrinho após finalizar
  carrinho = [];
  atualizarCarrinho();

  // Fechar o modal do carrinho
  carrinhoOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

// ========== RENDERIZAÇÃO ==========
function criarCard(produto, mostrarTag = true) {
  const tagHTML = produto.tag
    ? `<span class="card-tag">${produto.tag}</span>`
    : `<span class="card-tag" style="background: transparent; color: transparent;">.</span>`;
  const linkWhatsApp = gerarLinkWhatsApp(produto.nome, produto.preco);

  return `
    <div class="card" data-id="${produto.id}">
      <img src="${produto.imagem}" alt="${produto.nome}" class="card-img" onerror="this.src='images/placeholder.jpg'">
      <div class="card-body">
        ${mostrarTag ? tagHTML : ''}
        <h3 class="card-nome">${produto.nome}</h3>
        <p class="card-desc">${produto.desc}</p>
        <span class="card-preco">${produto.preco}</span>
        <div class="card-botoes">
          <button class="btn-detalhes" data-id="${produto.id}">Ver detalhes</button>
          <a href="${linkWhatsApp}" target="_blank" class="btn-whatsapp" onclick="event.stopPropagation()">Pedir</a>
        </div>
      </div>
    </div>
  `;
}

function renderizarCardapio(itens) {
  cardapioGrid.innerHTML = itens.map(p => criarCard(p)).join('');
  semResultados.style.display = itens.length ? 'none' : 'block';
}

function filtrarProdutos() {
  const termo = searchInput.value.toLowerCase().trim();
  let filtrados = [];

  if (categoriaAtiva === 'populares') {
    filtrados = produtos.filter(p => p.popular);
  } else {
    filtrados = produtos.filter(p => p.categoria === categoriaAtiva);
  }

  if (termo) {
    filtrados = filtrados.filter(p => p.nome.toLowerCase().includes(termo));
  }

  // Ordenar por preço
  const ordem = filtroPreco.value;
  if (ordem === 'mais-barato') {
    filtrados.sort((a, b) => {
      const precoA = parseFloat(a.preco.replace('R$', '').replace(',', '.').replace('/fatia', '').replace('/un', '').trim());
      const precoB = parseFloat(b.preco.replace('R$', '').replace(',', '.').replace('/fatia', '').replace('/un', '').trim());
      return precoA - precoB;
    });
  } else if (ordem === 'mais-caro') {
    filtrados.sort((a, b) => {
      const precoA = parseFloat(a.preco.replace('R$', '').replace(',', '.').replace('/fatia', '').replace('/un', '').trim());
      const precoB = parseFloat(b.preco.replace('R$', '').replace(',', '.').replace('/fatia', '').replace('/un', '').trim());
      return precoB - precoA;
    });
  }

  renderizarCardapio(filtrados);
}

// Inicialização
function init() {
  filtrarProdutos();

  const destaques = produtos.filter(p => p.popular).slice(0, 4);
  destaquesGrid.innerHTML = destaques.map(p => criarCard(p, true)).join('');

  combosGrid.innerHTML = combos.map(c => {
    const linkWhatsApp = gerarLinkWhatsApp(c.nome, c.preco);
    return `
    <div class="card">
      <img src="${c.imagem}" alt="${c.nome}" class="card-img" onerror="this.src='images/placeholder.jpg'">
      <div class="card-body">
        <h3 class="card-nome">${c.nome}</h3>
        <p class="card-desc">${c.desc}</p>
        <span class="card-preco">${c.preco}</span>
        <div class="card-botoes">
          <button class="btn-detalhes" data-combo="${c.nome}">Ver detalhes</button>
          <a href="${linkWhatsApp}" target="_blank" class="btn-whatsapp" onclick="event.stopPropagation()">Pedir</a>
        </div>
      </div>
    </div>`;
  }).join('');

  estacaoGrid.innerHTML = estacao.map(e => {
    const linkWhatsApp = gerarLinkWhatsApp(e.nome, e.preco);
    return `
    <div class="card">
      <img src="${e.imagem}" alt="${e.nome}" class="card-img" onerror="this.src='images/placeholder.jpg'">
      <div class="card-body">
        <h3 class="card-nome">${e.nome}</h3>
        <p class="card-desc">${e.desc}</p>
        <span class="card-preco">${e.preco}</span>
        <div class="card-botoes">
          <button class="btn-detalhes" data-estacao="${e.nome}">Ver detalhes</button>
          <a href="${linkWhatsApp}" target="_blank" class="btn-whatsapp" onclick="event.stopPropagation()">Pedir</a>
        </div>
      </div>
    </div>`;
  }).join('');
}

// ========== EVENTOS ==========
searchInput.addEventListener('input', filtrarProdutos);

// 🆕 Filtro por preço
filtroPreco.addEventListener('change', () => {
  filtrarProdutos();
});

filtrosContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('filtro-btn')) {
    document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    categoriaAtiva = e.target.dataset.categoria;
    filtrarProdutos();
  }
});

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn-detalhes') || e.target.closest('.btn-detalhes')) {
    const btn = e.target.closest('.btn-detalhes');

    if (btn.dataset.id) {
      const id = parseInt(btn.dataset.id);
      const produto = produtos.find(p => p.id === id);
      if (produto) abrirModal(produto);
    }

    if (btn.dataset.combo) {
      const combo = combos.find(c => c.nome === btn.dataset.combo);
      if (combo) abrirModalCombo(combo);
    }

    if (btn.dataset.estacao) {
      const item = estacao.find(e => e.nome === btn.dataset.estacao);
      if (item) abrirModalEstacao(item);
    }
  }
});

// ========== DADOS DETALHADOS PARA O MODAL ==========
const detalhesModal = {
  "Pão Francês": {
    descricao: "Casquinha crocante e miolo macio. Preparado diariamente com fermentação natural.",
    ingredientes: ["Farinha de trigo especial", "Água filtrada", "Fermento natural", "Sal marinho"],
    info: ["Contém glúten"],
    sugestao: "Perfeito para acompanhar um café espresso fresquinho logo pela manhã."
  },
  "Pão Italiano": {
    descricao: "Massa rústica enriquecida com azeite extravirgem e ervas finas selecionadas.",
    ingredientes: ["Farinha de trigo especial", "Azeite extravirgem", "Ervas finas", "Fermento natural", "Sal marinho"],
    info: ["Contém glúten"],
    sugestao: "Ideal para uma tábua de frios com queijos artesanais e um bom vinho."
  },
  "Pão Integral": {
    descricao: "Rico em fibras e nutrientes, com grãos selecionados. Uma opção saudável e saborosa.",
    ingredientes: ["Farinha integral orgânica", "Centeio", "Linhaça dourada", "Gergelim", "Mel orgânico", "Fermento natural"],
    info: ["Contém glúten"],
    sugestao: "Combina perfeitamente com geleia caseira e manteiga fresca no café da manhã."
  },
  "Baguete": {
    descricao: "Autêntica baguete francesa com casquinha fina e crocante, miolo leve e alveolado.",
    ingredientes: ["Farinha de trigo francesa", "Água", "Fermento", "Sal", "Malte natural"],
    info: ["Contém glúten"],
    sugestao: "Sirva com manteiga de ervas ou como acompanhamento de uma sopa quente."
  },
  "Ciabatta": {
    descricao: "Pão italiano de massa leve e altamente hidratada, com alvéolos generosos e textura única.",
    ingredientes: ["Farinha de trigo", "Azeite extravirgem", "Fermento natural", "Sal", "Água"],
    info: ["Contém glúten"],
    sugestao: "Perfeito para sanduíches gourmet ou mergulhado em azeite com ervas."
  },
  "Bolo de Cenoura": {
    descricao: "Clássico bolo de cenoura preparado diariamente, coberto com cremosa ganache de chocolate belga 70%.",
    ingredientes: ["Cenoura fresca", "Farinha de trigo", "Ovos caipiras", "Açúcar mascavo", "Chocolate belga 70%", "Manteiga"],
    info: ["Contém glúten", "Contém ovos", "Contém leite"],
    sugestao: "Experimente com um cappuccino cremoso durante uma pausa à tarde."
  },
  "Bolo de Chocolate": {
    descricao: "Bolo intenso e úmido, preparado com cacau 70% importado. Massa densa que derrete na boca.",
    ingredientes: ["Cacau 70% belga", "Farinha de trigo", "Ovos", "Manteiga", "Açúcar demerara", "Fermento"],
    info: ["Contém glúten", "Contém ovos", "Contém leite"],
    sugestao: "Acompanhe com um latte quente e chantilly para uma experiência completa."
  },
  "Red Velvet": {
    descricao: "Bolo aveludado com cor natural de beterraba, recheado e coberto com cream cheese artesanal.",
    ingredientes: ["Farinha de trigo", "Cacau em pó", "Beterraba", "Cream cheese", "Manteiga", "Ovos"],
    info: ["Contém glúten", "Contém ovos", "Contém leite"],
    sugestao: "A combinação perfeita para celebrações especiais. Sirva com chá preto gelado."
  },
  "Bolo de Limão": {
    descricao: "Bolo leve e perfumado com raspas de limão siciliano fresco e cobertura glazeada.",
    ingredientes: ["Limão siciliano", "Farinha de trigo", "Ovos", "Manteiga", "Açúcar", "Raspas de limão"],
    info: ["Contém glúten", "Contém ovos", "Contém leite"],
    sugestao: "Refrescante e perfeito para dias quentes. Experimente com chá gelado de hortelã."
  },
  "Sonho": {
    descricao: "Sonho fofinho com recheio generoso de creme de baunilha artesanal. Polvilhado com açúcar de confeiteiro.",
    ingredientes: ["Farinha de trigo", "Ovos", "Manteiga", "Açúcar", "Creme de baunilha", "Fermento"],
    info: ["Contém glúten", "Contém ovos", "Contém leite"],
    sugestao: "Irresistível com um chocolate quente cremoso em dias frios."
  },
  "Croissant de Chocolate": {
    descricao: "Massa folhada amanteigada com camadas finíssimas, recheada com chocolate belga premium.",
    ingredientes: ["Farinha de trigo", "Manteiga francesa", "Chocolate belga", "Fermento", "Ovos", "Açúcar"],
    info: ["Contém glúten", "Contém ovos", "Contém leite"],
    sugestao: "Aqueça levemente antes de saborear com um espresso duplo."
  },
  "Cinnamon Roll": {
    descricao: "Rolo de canela do ceilão com massa macia e cobertura generosa de cream cheese.",
    ingredientes: ["Farinha de trigo", "Canela do ceilão", "Manteiga", "Açúcar mascavo", "Cream cheese", "Ovos"],
    info: ["Contém glúten", "Contém ovos", "Contém leite"],
    sugestao: "Perfeito para um café da tarde especial acompanhado de latte quente."
  },
  "Cookie": {
    descricao: "Cookie americano artesanal com bordas crocantes e centro macio, recheado com gotas de chocolate belga.",
    ingredientes: ["Farinha de trigo", "Manteiga", "Açúcar mascavo", "Gotas de chocolate belga", "Ovos", "Baunilha"],
    info: ["Contém glúten", "Contém ovos", "Contém leite"],
    sugestao: "Peça quentinho com um copo de leite gelado. Simples e inesquecível."
  },
  "Croissant de Frango": {
    descricao: "Croissant salgado com massa folhada amanteigada e recheio cremoso de frango desfiado com catupiry.",
    ingredientes: ["Farinha de trigo", "Manteiga", "Frango desfiado", "Catupiry", "Temperos naturais", "Ovos"],
    info: ["Contém glúten", "Contém ovos", "Contém leite"],
    sugestao: "Acompanhe com um suco natural de laranja para um almoço leve e saboroso."
  },
  "Empada": {
    descricao: "Empada de massa podre artesanal que desmancha na boca, recheada com palmito fresco e temperos selecionados.",
    ingredientes: ["Farinha de trigo", "Manteiga", "Palmito fresco", "Ovos", "Temperos naturais"],
    info: ["Contém glúten", "Contém ovos", "Contém leite"],
    sugestao: "Ideal como entrada acompanhada de uma salada verde fresca."
  },
  "Quiche": {
    descricao: "Quiche Lorraine autêntica com bacon artesanal e alho-poró, massa crocante e recheio cremoso gratinado.",
    ingredientes: ["Farinha de trigo", "Manteiga", "Bacon artesanal", "Alho-poró", "Creme de leite", "Ovos", "Queijo"],
    info: ["Contém glúten", "Contém ovos", "Contém leite"],
    sugestao: "Sirva quentinha com uma taça de vinho branco para um jantar especial."
  },
  "Esfiha": {
    descricao: "Esfiha aberta com massa levinha e recheio de carne moída temperada com especiarias árabes autênticas.",
    ingredientes: ["Farinha de trigo", "Carne moída", "Tomate", "Especiarias árabes", "Limão", "Hortelã"],
    info: ["Contém glúten"],
    sugestao: "Perfeita como lanche rápido acompanhada de chá gelado com limão."
  },
  "Espresso": {
    descricao: "Café espresso intenso preparado com grãos 100% arábica de torra média. Extraído na hora, com crema aveludada.",
    ingredientes: ["Grãos 100% arábica selecionados", "Torra média artesanal"],
    info: [],
    sugestao: "A base perfeita para começar o dia ou após uma refeição especial."
  },
  "Cappuccino": {
    descricao: "Cappuccino cremoso com espresso intenso, leite vaporizado e espuma aveludada. Finalizado com canela.",
    ingredientes: ["Café espresso", "Leite integral vaporizado", "Canela em pó", "Chocolate em pó"],
    info: ["Contém leite"],
    sugestao: "Combina perfeitamente com nosso Cinnamon Roll para uma pausa reconfortante."
  },
  "Latte": {
    descricao: "Café latte suave e cremoso, com espresso encorpado e leite vaporizado finalizado com espuma sedosa.",
    ingredientes: ["Café espresso", "Leite integral vaporizado", "Espuma de leite"],
    info: ["Contém leite"],
    sugestao: "Acompanhe com um Cookie quentinho para um momento de puro prazer."
  },
  "Mocha": {
    descricao: "Mocha especial com espresso, chocolate belga derretido e leite vaporizado, coroado com chantilly artesanal.",
    ingredientes: ["Café espresso", "Chocolate belga 70%", "Leite vaporizado", "Chantilly artesanal"],
    info: ["Contém leite"],
    sugestao: "Experimente com nosso Bolo de Chocolate para uma explosão de cacau."
  },
  "Suco Natural": {
    descricao: "Suco de laranja espremido na hora, sem adição de açúcar ou conservantes. Puro frescor.",
    ingredientes: ["Laranjas frescas selecionadas"],
    info: [],
    sugestao: "A companhia perfeita para nosso Croissant de Frango no almoço."
  },
  "Chocolate Quente": {
    descricao: "Chocolate quente cremoso preparado com chocolate belga 70% e leite integral, finalizado com chantilly.",
    ingredientes: ["Chocolate belga 70%", "Leite integral", "Chantilly", "Cacau em pó"],
    info: ["Contém leite"],
    sugestao: "Nosso Sonho recheado é o par perfeito para esta delícia quentinha."
  },
  "Chá Gelado": {
    descricao: "Chá preto orgânico gelado com limão espremido e hortelã fresca. Refrescante e aromático.",
    ingredientes: ["Chá preto orgânico", "Limão fresco", "Hortelã", "Gelo"],
    info: [],
    sugestao: "Ideal para dias quentes, acompanhado de uma fatia de Bolo de Limão."
  },
  "Água": {
    descricao: "Água mineral sem gás 500ml, perfeita para hidratação e acompanhamento.",
    ingredientes: ["Água mineral natural"],
    info: [],
    sugestao: "Essencial para acompanhar qualquer pedido e se refrescar."
  },
  "Chocolate Quente Especial": {
    descricao: "Chocolate quente cremoso com especiarias natalinas, preparado com chocolate belga 70% e finalizado com chantilly artesanal e toque de canela.",
    ingredientes: ["Chocolate belga 70%", "Leite integral", "Chantilly artesanal", "Canela em pau", "Cravo", "Noz-moscada"],
    info: ["Contém leite"],
    sugestao: "A bebida perfeita para aquecer os dias frios. Experimente com nosso Panetone Artesanal."
  },
  "Panetone Artesanal": {
    descricao: "Panetone artesanal recheado com frutas cristalizadas e uvas passas maceradas. Massa fofinha e aromática, preparada com fermentação natural.",
    ingredientes: ["Farinha de trigo especial", "Manteiga", "Ovos", "Frutas cristalizadas", "Uvas passas", "Fermento natural", "Baunilha"],
    info: ["Contém glúten", "Contém ovos", "Contém leite"],
    sugestao: "Sirva fatias generosas com uma xícara de Chocolate Quente Especial nas celebrações de fim de ano."
  },
  "Bolo de Milho": {
    descricao: "Bolo cremoso de milho verde fresco da estação, preparado com ingredientes selecionados. Textura úmida e sabor autêntico que lembra comida de casa.",
    ingredientes: ["Milho verde fresco", "Farinha de trigo", "Ovos caipiras", "Leite", "Açúcar", "Manteiga", "Coco ralado"],
    info: ["Contém glúten", "Contém ovos", "Contém leite"],
    sugestao: "Perfeito para um café da tarde em família. Acompanhe com um café coado na hora."
  },
  "Canjica Cremosa": {
    descricao: "Canjica cremosa preparada com leite condensado, leite de coco e finalizada com canela em pó. Uma sobremesa tradicional que aquece o coração.",
    ingredientes: ["Canjica branca", "Leite condensado", "Leite de coco", "Canela em pó", "Cravo", "Coco ralado"],
    info: ["Contém leite"],
    sugestao: "Sirva quentinha em dias frios, finalizada com canela em pó e um toque de coco ralado."
  },
  "Café da Manhã": {
    descricao: "Combo completo para começar o dia com energia. Inclui nosso Pão Francês artesanal, um Espresso intenso e um Suco Natural de laranja espremido na hora.",
    ingredientes: ["Pão Francês artesanal", "Café Espresso 100% arábica", "Suco de laranja natural"],
    info: ["Contém glúten"],
    sugestao: "A combinação perfeita para um café da manhã equilibrado e saboroso."
  },
  "Café da Tarde": {
    descricao: "Combo especial para uma pausa à tarde. Acompanha uma fatia generosa do nosso clássico Bolo de Cenoura com cobertura de chocolate belga e um Cappuccino cremoso.",
    ingredientes: ["Bolo de Cenoura artesanal", "Café Espresso", "Leite vaporizado", "Canela", "Chocolate belga"],
    info: ["Contém glúten", "Contém ovos", "Contém leite"],
    sugestao: "Perfeito para uma pausa reconfortante no meio da tarde."
  },
  "Combo Família": {
    descricao: "Combo generoso para compartilhar em família. Inclui 4 pães variados, um Bolo de Chocolate inteiro e 4 cafés especiais à sua escolha.",
    ingredientes: ["4 Pães artesanais variados", "Bolo de Chocolate 70% cacau", "4 Cafés especiais"],
    info: ["Contém glúten", "Contém ovos", "Contém leite"],
    sugestao: "Ideal para um café da manhã em família no fim de semana."
  },
  "Combo Doce": {
    descricao: "Combo para os amantes de doces. Inclui um Sonho recheado, um Cinnamon Roll, um Cookie artesanal e 2 Cappuccinos cremosos.",
    ingredientes: ["Sonho com creme de baunilha", "Cinnamon Roll", "Cookie de chocolate belga", "2 Cappuccinos"],
    info: ["Contém glúten", "Contém ovos", "Contém leite"],
    sugestao: "A pedida certa para uma tarde de conversas e momentos doces."
  }
};

// ========== FUNÇÕES DO MODAL ==========
function abrirModal(produto) {
  const detalhes = detalhesModal[produto.nome] || {
    descricao: produto.desc || "Produto artesanal preparado diariamente com ingredientes selecionados.",
    ingredientes: ["Ingredientes selecionados", "Preparo artesanal"],
    info: [],
    sugestao: "Peça junto com um café especial para uma experiência completa."
  };

  const imagens = [
    produto.imagem,
    produto.imagem.replace('.jpg', '-2.jpg').replace('.png', '-2.png'),
    produto.imagem.replace('.jpg', '-3.jpg').replace('.png', '-3.png')
  ];

  const tagsHTML = produto.tag ? `<div class="modal-tags"><span class="modal-tag">${produto.tag}</span></div>` : '';

  const ingredientesHTML = detalhes.ingredientes.map(ing => `<li>${ing}</li>`).join('');

  const infoHTML = detalhes.info.length > 0 ? detalhes.info.map(info => {
    let icon = 'info';
    if (info.includes('glúten')) icon = 'alert-circle';
    if (info.includes('leite')) icon = 'milk';
    if (info.includes('ovos')) icon = 'egg';
    return `<div class="modal-info-item"><i data-lucide="${icon}"></i> ${info}</div>`;
  }).join('') : '';

  const precoLimpo = produto.preco.replace('/fatia', '').replace('/un', '').trim();
  const unidade = produto.preco.includes('/fatia') ? 'por fatia' : produto.preco.includes('/un') ? 'por unidade' : '';

  modalBody.innerHTML = `
    <div class="modal-carrossel" id="modalCarrossel">
      <div class="modal-carrossel-track" id="modalTrack">
        <img src="${imagens[0]}" alt="${produto.nome}" onerror="this.src='images/placeholder.jpg'">
        <img src="${imagens[1]}" alt="${produto.nome}" onerror="this.src='${imagens[0]}'">
        <img src="${imagens[2]}" alt="${produto.nome}" onerror="this.src='${imagens[0]}'">
      </div>
      <button class="modal-carrossel-btn prev" id="modalPrev"><i data-lucide="chevron-left"></i></button>
      <button class="modal-carrossel-btn next" id="modalNext"><i data-lucide="chevron-right"></i></button>
      <div class="modal-carrossel-dots" id="modalDots">
        <button class="modal-carrossel-dot active" data-index="0"></button>
        <button class="modal-carrossel-dot" data-index="1"></button>
        <button class="modal-carrossel-dot" data-index="2"></button>
      </div>
    </div>
    <div class="modal-text">
      <h2>${produto.nome}</h2>
      ${tagsHTML}
      <hr class="modal-divider">
      <h3 class="modal-secao-titulo">Descrição</h3>
      <p class="modal-descricao">${detalhes.descricao}</p>
      <hr class="modal-divider">
      <h3 class="modal-secao-titulo">Ingredientes</h3>
      <ul class="modal-ingredientes">${ingredientesHTML}</ul>
      ${detalhes.info.length > 0 ? `<hr class="modal-divider"><h3 class="modal-secao-titulo">Informações</h3><div class="modal-info-grid">${infoHTML}</div>` : ''}
      <div class="modal-sugestao"><i data-lucide="sparkles"></i><p><strong>Sugestão da casa:</strong> ${detalhes.sugestao}</p></div>
      <hr class="modal-divider">
      <div class="modal-preco-final">
        <div class="preco-valor">${precoLimpo}</div>
        ${unidade ? `<div class="preco-unidade">${unidade}</div>` : ''}
        <a href="${gerarLinkWhatsApp(produto.nome, produto.preco)}" target="_blank" class="btn-whatsapp-modal">Pedir pelo WhatsApp</a>
        <div class="modal-carrinho-container">
          <div class="quantidade-wrapper">
            <button class="quantidade-btn" onclick="diminuirQuantidade(this)">−</button>
            <input type="number" class="quantidade-input" value="1" min="1" max="20" readonly>
            <button class="quantidade-btn" onclick="aumentarQuantidade(this)">+</button>
          </div>
          <button class="btn-carrinho-modal" onclick="adicionarAoCarrinhoComQuantidade(this, '${produto.nome}', '${produto.preco}', '${produto.imagem}')"><i data-lucide="shopping-bag"></i> Carrinho</button>
        </div>
      </div>
    </div>
  `;

  abrirModalFinal();
}

function abrirModalCombo(combo) {
  const detalhes = detalhesModal[combo.nome] || {
    descricao: combo.desc || "Combo especial preparado com produtos artesanais selecionados.",
    ingredientes: ["Produtos artesanais selecionados"],
    info: [],
    sugestao: "A combinação perfeita para qualquer momento do dia."
  };

  const ingredientesHTML = detalhes.ingredientes.map(ing => `<li>${ing}</li>`).join('');

  const infoHTML = detalhes.info.length > 0 ? detalhes.info.map(info => {
    let icon = 'info';
    if (info.includes('glúten')) icon = 'alert-circle';
    if (info.includes('leite')) icon = 'milk';
    if (info.includes('ovos')) icon = 'egg';
    return `<div class="modal-info-item"><i data-lucide="${icon}"></i> ${info}</div>`;
  }).join('') : '';

  modalBody.innerHTML = `
    <div class="modal-img-wrapper"><img src="${combo.imagem}" alt="${combo.nome}" onerror="this.src='images/placeholder.jpg'"></div>
    <div class="modal-text">
      <h2>${combo.nome}</h2>
      <div class="modal-tags"><span class="modal-tag">Combo</span></div>
      <hr class="modal-divider"><h3 class="modal-secao-titulo">Descrição</h3><p class="modal-descricao">${detalhes.descricao}</p>
      <hr class="modal-divider"><h3 class="modal-secao-titulo">Inclui</h3><ul class="modal-ingredientes">${ingredientesHTML}</ul>
      ${detalhes.info.length > 0 ? `<hr class="modal-divider"><h3 class="modal-secao-titulo">Informações</h3><div class="modal-info-grid">${infoHTML}</div>` : ''}
      <div class="modal-sugestao"><i data-lucide="sparkles"></i><p><strong>Sugestão da casa:</strong> ${detalhes.sugestao}</p></div>
      <hr class="modal-divider">
      <div class="modal-preco-final">
        <div class="preco-valor">${combo.preco}</div>
        <a href="${gerarLinkWhatsApp(combo.nome, combo.preco)}" target="_blank" class="btn-whatsapp-modal">Pedir pelo WhatsApp</a>
        <div class="modal-carrinho-container">
          <div class="quantidade-wrapper">
            <button class="quantidade-btn" onclick="diminuirQuantidade(this)">−</button>
            <input type="number" class="quantidade-input" value="1" min="1" max="20" readonly>
            <button class="quantidade-btn" onclick="aumentarQuantidade(this)">+</button>
          </div>
          <button class="btn-carrinho-modal" onclick="adicionarAoCarrinhoComQuantidade(this, '${combo.nome}', '${combo.preco}', '${combo.imagem}')"><i data-lucide="shopping-bag"></i> Carrinho</button>
        </div>
      </div>
    </div>
  `;

  abrirModalSemCarrossel();
}

function abrirModalEstacao(item) {
  const detalhes = detalhesModal[item.nome] || {
    descricao: item.desc || "Produto sazonal preparado com ingredientes frescos da estação.",
    ingredientes: ["Ingredientes sazonais selecionados"],
    info: [],
    sugestao: "Aproveite enquanto está disponível em nossa estação!"
  };

  const ingredientesHTML = detalhes.ingredientes.map(ing => `<li>${ing}</li>`).join('');

  const infoHTML = detalhes.info.length > 0 ? detalhes.info.map(info => {
    let icon = 'info';
    if (info.includes('glúten')) icon = 'alert-circle';
    if (info.includes('leite')) icon = 'milk';
    if (info.includes('ovos')) icon = 'egg';
    return `<div class="modal-info-item"><i data-lucide="${icon}"></i> ${info}</div>`;
  }).join('') : '';

  modalBody.innerHTML = `
    <div class="modal-img-wrapper"><img src="${item.imagem}" alt="${item.nome}" onerror="this.src='images/placeholder.jpg'"></div>
    <div class="modal-text">
      <h2>${item.nome}</h2>
      <div class="modal-tags"><span class="modal-tag">Estação</span></div>
      <hr class="modal-divider"><h3 class="modal-secao-titulo">Descrição</h3><p class="modal-descricao">${detalhes.descricao}</p>
      <hr class="modal-divider"><h3 class="modal-secao-titulo">Ingredientes</h3><ul class="modal-ingredientes">${ingredientesHTML}</ul>
      ${detalhes.info.length > 0 ? `<hr class="modal-divider"><h3 class="modal-secao-titulo">Informações</h3><div class="modal-info-grid">${infoHTML}</div>` : ''}
      <div class="modal-sugestao"><i data-lucide="sparkles"></i><p><strong>Sugestão da casa:</strong> ${detalhes.sugestao}</p></div>
      <hr class="modal-divider">
      <div class="modal-preco-final">
        <div class="preco-valor">${item.preco}</div>
        <a href="${gerarLinkWhatsApp(item.nome, item.preco)}" target="_blank" class="btn-whatsapp-modal">Pedir pelo WhatsApp</a>
        <div class="modal-carrinho-container">
          <div class="quantidade-wrapper">
            <button class="quantidade-btn" onclick="diminuirQuantidade(this)">−</button>
            <input type="number" class="quantidade-input" value="1" min="1" max="20" readonly>
            <button class="quantidade-btn" onclick="aumentarQuantidade(this)">+</button>
          </div>
          <button class="btn-carrinho-modal" onclick="adicionarAoCarrinhoComQuantidade(this, '${item.nome}', '${item.preco}', '${item.imagem}')"><i data-lucide="shopping-bag"></i> Carrinho</button>
        </div>
      </div>
    </div>
  `;

  abrirModalSemCarrossel();
}

function abrirModalSemCarrossel() {
  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  const modalContent = document.querySelector('.modal-content');
  if (modalContent) modalContent.scrollTop = 0;
  setTimeout(() => lucide.createIcons(), 50);
}

function abrirModalFinal() {
  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  const modalContent = document.querySelector('.modal-content');
  if (modalContent) modalContent.scrollTop = 0;
  setTimeout(() => lucide.createIcons(), 50);

  const track = document.getElementById('modalTrack');
  const dots = document.querySelectorAll('#modalDots .modal-carrossel-dot');
  const prevBtn = document.getElementById('modalPrev');
  const nextBtn = document.getElementById('modalNext');
  let currentIndex = 0;
  const totalSlides = 3;

  function updateCarrossel(index) {
    currentIndex = index;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, i) => dot.classList.toggle('active', i === currentIndex));
  }

  prevBtn.addEventListener('click', () => updateCarrossel(currentIndex === 0 ? totalSlides - 1 : currentIndex - 1));
  nextBtn.addEventListener('click', () => updateCarrossel(currentIndex === totalSlides - 1 ? 0 : currentIndex + 1));
  dots.forEach(dot => dot.addEventListener('click', () => updateCarrossel(parseInt(dot.dataset.index))));

  let touchStartX = 0;
  const carrossel = document.getElementById('modalCarrossel');
  carrossel.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].screenX; });
  carrossel.addEventListener('touchend', (e) => {
    const diff = touchStartX - e.changedTouches[0].screenX;
    if (Math.abs(diff) > 50) {
      updateCarrossel(diff > 0 ? (currentIndex === totalSlides - 1 ? 0 : currentIndex + 1) : (currentIndex === 0 ? totalSlides - 1 : currentIndex - 1));
    }
  });
}

function fecharModal() {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
  document.body.style.paddingRight = '';
}

modalClose.addEventListener('click', fecharModal);
modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) fecharModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modalOverlay.classList.contains('active')) fecharModal(); });

// ========== EVENTOS DO CARRINHO ==========
carrinhoBtn.addEventListener('click', () => {
  carrinhoOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  atualizarCarrinho();
});

carrinhoFechar.addEventListener('click', () => {
  carrinhoOverlay.classList.remove('active');
  document.body.style.overflow = '';
});

carrinhoOverlay.addEventListener('click', (e) => {
  if (e.target === carrinhoOverlay) {
    carrinhoOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
});

carrinhoLimpar.addEventListener('click', () => {
  carrinho = [];
  atualizarCarrinho();
});

btnFinalizar.addEventListener('click', finalizarPedido);

// Scroll suave
document.getElementById('explorarBtn').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('cardapio').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});

// Navbar
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
  backToTop.classList.toggle('show', window.scrollY > 500);
});
backToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Mobile menu
mobileMenuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const menuIcon = document.querySelector('.menu-icon');
  const closeIcon = document.querySelector('.close-icon');
  menuIcon.style.display = navLinks.classList.contains('open') ? 'none' : 'block';
  closeIcon.style.display = navLinks.classList.contains('open') ? 'block' : 'none';
});

// Fade-in
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('appear'); });
}, { threshold: 0.2 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Fechar menu mobile ao clicar
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    document.querySelector('.menu-icon').style.display = 'block';
    document.querySelector('.close-icon').style.display = 'none';
  });
});

// ========== LOADING COM DIGITAÇÃO ==========
const texto = 'Ateliê do Pão';
let i = 0;
const logoElement = document.getElementById('loadingLogo');

function digitar() {
  if (i < texto.length) {
    logoElement.textContent += texto.charAt(i);
    i++;
    setTimeout(digitar, 150);
  } else {
    // Texto completo, espera um pouco e esconde
    setTimeout(() => {
      document.getElementById('loading').classList.add('hidden');
    }, 800);
  }
}

// Iniciar digitação
digitar();

// Voltar ao topo ao recarregar
window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0);
});

// Iniciar
window.scrollTo(0, 0);
init();
lucide.createIcons();