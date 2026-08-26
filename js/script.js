// ========================================
// JAVA CODE TYPING EFFECT - INFINITE LOOP
// ========================================
(function() {
  const codeLines = [
    { line: 1, tokens: [
      { text: 'public ', class: 'kw' },
      { text: 'class ', class: 'kw' },
      { text: 'Cleydson', class: 'type' },
      { text: ' {', class: 'punct' }
    ]},
    { line: 2, tokens: [
      { text: '    ', class: '' },
      { text: 'public ', class: 'kw' },
      { text: 'static ', class: 'kw' },
      { text: 'void ', class: 'kw' },
      { text: 'main', class: 'fn' },
      { text: '(', class: 'punct' },
      { text: 'String', class: 'type' },
      { text: '[', class: 'punct' },
      { text: ']', class: 'punct' },
      { text: ' ', class: '' },
      { text: 'args', class: '' },
      { text: ') {', class: 'punct' }
    ]},
    { line: 3, tokens: [
      { text: '        ', class: '' },
      { text: 'System', class: 'type' },
      { text: '.', class: 'punct' },
      { text: 'out', class: '' },
      { text: '.', class: 'punct' },
      { text: 'println', class: 'fn' },
      { text: '(', class: 'punct' },
      { text: '"', class: 'str' },
      { text: 'Hello World!', class: 'str' },
      { text: '"', class: 'str' },
      { text: ');', class: 'punct' }
    ]},
    { line: 4, tokens: [
      { text: '        ', class: '' },
      { text: 'System', class: 'type' },
      { text: '.', class: 'punct' },
      { text: 'out', class: '' },
      { text: '.', class: 'punct' },
      { text: 'println', class: 'fn' },
      { text: '(', class: 'punct' },
      { text: '"', class: 'str' },
      { text: 'Seja bem-vindo ao meu portfólio', class: 'str' },
      { text: '"', class: 'str' },
      { text: ');', class: 'punct' }
    ]},
    { line: 5, tokens: [
      { text: '    ', class: '' },
      { text: '}', class: 'punct' }
    ]},
    { line: 6, tokens: []},
    { line: 7, tokens: [
      { text: '}', class: 'punct' }
    ]},
    { line: 8, tokens: []}
  ];

  const allTokens = [];
  codeLines.forEach((lineData, lineIdx) => {
    lineData.tokens.forEach(token => {
      allTokens.push({ ...token, lineIndex: lineIdx });
    });
    if (lineIdx < codeLines.length - 1) {
      allTokens.push({ text: '\n', class: '', lineIndex: lineIdx, isNewline: true });
    }
  });

  let tokenIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let currentLine = 0;

  const typingSpeed = 35;
  const deletingSpeed = 15;
  const pauseAfterComplete = 2500;
  const pauseAfterDelete = 600;

  const lineElements = {};
  for (let i = 1; i <= 8; i++) {
    lineElements[i] = document.getElementById(`line-${i}`);
  }

  function escapeHtml(text) {
    return text.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>').replace(/ /g, '&nbsp;');
  }

  function renderCurrentState() {
    for (let i = 1; i <= 8; i++) {
      if (lineElements[i]) lineElements[i].innerHTML = '';
    }

    let currentLineRender = 0;
    let lineBuffer = '';

    for (let i = 0; i <= tokenIndex; i++) {
      const token = allTokens[i];
      if (token.isNewline) {
        if (lineElements[currentLineRender + 1]) {
          lineElements[currentLineRender + 1].innerHTML = lineBuffer;
        }
        currentLineRender++;
        lineBuffer = '';
      } else {
        const cls = token.class ? ` class="${token.class}"` : '';
        lineBuffer += `<span${cls}>${escapeHtml(token.text)}</span>`;
      }
    }

    if (tokenIndex < allTokens.length) {
      const currentToken = allTokens[tokenIndex];
      if (!currentToken.isNewline && charIndex > 0) {
        const partialText = currentToken.text.slice(0, charIndex);
        const cls = currentToken.class ? ` class="${currentToken.class}"` : '';
        lineBuffer += `<span${cls}>${escapeHtml(partialText)}</span>`;
      }
      if (lineElements[currentLineRender + 1]) {
        lineElements[currentLineRender + 1].innerHTML = lineBuffer + '<span class="typing-cursor" aria-hidden="true"></span>';
      }
    }
  }

  function typeLoop() {
    if (tokenIndex >= allTokens.length) {
      if (!isDeleting) {
        isDeleting = true;
        setTimeout(typeLoop, pauseAfterComplete);
      } else {
        tokenIndex = 0;
        charIndex = 0;
        currentLine = 0;
        isDeleting = false;
        setTimeout(typeLoop, pauseAfterDelete);
      }
      return;
    }

    const token = allTokens[tokenIndex];

    if (!isDeleting) {
      if (token.isNewline) {
        tokenIndex++; charIndex = 0; currentLine++;
      } else {
        charIndex++;
        if (charIndex >= token.text.length) { tokenIndex++; charIndex = 0; }
      }
    } else {
      if (tokenIndex === 0) { isDeleting = false; }
      else {
        const prevToken = allTokens[tokenIndex - 1];
        if (prevToken.isNewline) { tokenIndex--; currentLine--; }
        else if (charIndex === 0) {
          tokenIndex--;
          if (tokenIndex >= 0) {
            const newCurrent = allTokens[tokenIndex];
            if (!newCurrent.isNewline) charIndex = newCurrent.text.length;
          }
        } else { charIndex--; }
      }
    }

    renderCurrentState();
    setTimeout(typeLoop, isDeleting ? deletingSpeed : typingSpeed);
  }

  setTimeout(typeLoop, 500);
})();

// ========================================
// NAME TYPING EFFECT - RUNS ONCE ONLY
// ========================================
(function() {
  const nameEl = document.getElementById('hero-name');
  const fullName = 'Cleydson Soares de Freitas';
  let nameIndex = 0;
  const nameTypingSpeed = 70;
  const startDelay = 2500;

  nameEl.style.minWidth = '1ch';
  nameEl.style.width = 'auto';

  function escapeHtmlName(text) {
    return text.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>');
  }

  function typeName() {
    if (nameIndex < fullName.length) {
      const partial = fullName.slice(0, nameIndex + 1);
      nameEl.innerHTML =
        '<span class="bracket">{ </span>' + escapeHtmlName(partial) +
        '<span class="typing-cursor-name" aria-hidden="true"></span>';
      nameIndex++;
      setTimeout(typeName, nameTypingSpeed);
    } else {
      nameEl.innerHTML =
        '<span class="bracket">{ </span>' + escapeHtmlName(fullName) +
        '<span class="bracket"> }</span>';
      nameEl.style.width = 'max-content';
      nameEl.style.maxWidth = '100%';
      nameEl.style.overflow = 'visible';
      nameEl.style.whiteSpace = 'nowrap';
    }
  }

  function escapeHtmlName(text) {
    return text.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>');
  }

  setTimeout(typeName, startDelay);
})();

// ========================================
// PROJECT FILTER
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.card-proj');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});

// ========================================
// SMART SCROLL - TOGGLE UNIFORME PARA TODAS AS SEÇÕES
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    const THRESHOLD = 100; // px - margem do topo

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || targetId === '') return;

            const targetSection = document.querySelector(targetId);
            if (!targetSection) return;

            e.preventDefault();

            const rect = targetSection.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const sectionTop = rect.top;
            const sectionBottom = rect.bottom;
            const sectionHeight = rect.height;

            // Verifica se a seção está COMPLETAMENTE VISÍVEL no viewport
            const isFullyVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
            
            // Verifica se o topo da seção está próximo do topo da viewport (margem)
            const nearTop = Math.abs(sectionTop) < 100;

            // Verifica se a seção está MAJORITARIAMENTE VISÍVEL (mais de 50%)
            const visibleHeight = Math.min(sectionBottom, window.innerHeight) - Math.max(rect.top, 0);
            const visibilityRatio = sectionHeight > 0 ? visibleHeight / sectionHeight : 0;
            const isMostlyVisible = visibilityRatio > 0.5;

            // LÓGICA UNIFORME PARA TODAS AS SEÇÕES:
            // Se a seção JÁ ESTÁ VISÍVEL (maioria ou topo próximo) → VOLTA AO TOPO
            // Se NÃO ESTÁ VISÍVEL → DESCE ATÉ ELA
            const isAlreadyThere = (isMostlyVisible || Math.abs(sectionTop) < 100);

            if (isAlreadyThere) {
                // Já está na seção → VOLTA AO TOPO
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                // Não está na seção → DESCE ATÉ ELA
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});