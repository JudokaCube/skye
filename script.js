/* Skye — the original dashboard, with a source-verified command reference. */
'use strict';
document.addEventListener('DOMContentLoaded', function () {
  const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const code = value => `<code>${escape(value)}</code>`;
  const commands = window.SKYE_DOCS?.commands || [];
  const list = document.getElementById('commandsList');
  const search = document.getElementById('commandsSearch');
  const category = document.getElementById('commandsCategory');
  const count = document.getElementById('commandsCount');
  const sort = document.getElementById('commandsSort');
  const compareNames = (a, b) => a.name.localeCompare(b.name, 'en', {numeric: true});
  const requiredArguments = command => command.parameters.filter(parameter => parameter.required).length;
  function parameterMarkup(parameter) {
    const limits = [];
    if ('default' in parameter) limits.push(`Default: ${code(parameter.default)}`);
    if (parameter.minimum !== null || parameter.maximum !== null) limits.push(`Range: ${escape(parameter.minimum ?? 'no minimum')}–${escape(parameter.maximum ?? 'no maximum')}`);
    if (parameter.choices.length) limits.push(`Choices: ${parameter.choices.map(code).join(', ')}`);
    return `<li>${code(parameter.name)} <span class="docs-param-type">${escape(parameter.type)} · ${parameter.required ? 'required' : 'optional'}</span><p>${escape(parameter.description)}${limits.length ? '<br>' + limits.join(' · ') : ''}</p></li>`;
  }

  function render() {
    if (!list || !search) return;
    const query = search.value.trim().toLowerCase();
    const selected = category.value;
    const terms = query.split(/\s+/).filter(Boolean);
    const exactPath = commands.find(command => command.slash.toLowerCase() === query || ('.' + command.name).toLowerCase() === query);
    const results = commands.filter(command => {
      const searchable = [command.name, '.' + command.name, command.slash, command.category, command.description, command.access,
        ...command.aliases, ...(command.searchAliases || []), ...command.features, ...command.notes,
        ...command.parentAliases.flatMap(parent => parent.aliases)].join(' ').toLowerCase();
      return (!selected || command.category === selected) && (exactPath ? command === exactPath : terms.every(term => searchable.includes(term)));
    });
    results.sort((a, b) => {
      switch (sort.value) {
        case 'name-desc': return compareNames(b, a);
        case 'category': return a.category.localeCompare(b.category, 'en') || compareNames(a, b);
        case 'access': return Number(b.access === 'Everyone') - Number(a.access === 'Everyone') || a.access.localeCompare(b.access, 'en') || compareNames(a, b);
        case 'arguments': return requiredArguments(a) - requiredArguments(b) || compareNames(a, b);
        default: return compareNames(a, b);
      }
    });
    count.textContent = `${results.length} / ${commands.length}`;
    list.innerHTML = (results.length ? results.map(command => `
      <article class="dragon-card" data-command="${escape(command.name)}">
        <div class="dragon-card-head"><h3 class="dragon-card-name">${escape('.' + command.name)}</h3><span class="dragon-card-class">${escape(command.category)}</span></div>
        <p class="dragon-card-behaviour">${escape(command.description)}</p>
        <div class="dragon-card-stats"><span><b>Slash:</b> ${code(command.slash)}</span><span><b>Access:</b> ${escape(command.access)}</span></div>
        <details class="docs-command-details">
          <summary>Usage, aliases &amp; examples</summary>
          <div class="docs-command-body">
            <p><b>Prefix syntax</b><br>${code(command.prefix)}</p>
            <p><b>Slash syntax</b><br>${code(command.slash + command.parameters.map(p => ' ' + p.name + ':' + (p.required ? '<value>' : '[value]')).join(''))}</p>
            <p><b>Aliases:</b> ${command.aliases.length ? command.aliases.map(code).join(', ') : 'None'}</p>
            <p><b>Where:</b> ${command.serverOnly ? 'Servers only.' : 'Server or DM where the selected action is supported.'}</p>
            ${command.parentAliases.length ? `<p><b>Parent aliases:</b> ${command.parentAliases.map(p => `${code(p.name)} → ${p.aliases.map(code).join(', ')}`).join('; ')}. Use these in the same position as the parent name.</p>` : ''}
            <p><b>Module:</b> ${command.features.length ? command.features.map(code).join(', ') + ' must be enabled.' : 'No separate module gate listed; configuration and action-specific checks still apply.'}</p>
            <p><b>Bot permissions:</b> ${escape(command.botPermissions.join(', ') || 'Base channel access and permissions needed for the requested action.')} Channel overrides, hierarchy and Discord capabilities also apply.</p>
            <p><b>Cooldown:</b> ${escape(command.cooldown)}${command.concurrency ? '<br><b>Concurrency:</b> ' + escape(command.concurrency) : ''}. Additional shared safety limits may apply.</p>
            ${command.parameters.length ? '<h4>Arguments</h4><ul class="docs-parameters">' + command.parameters.map(parameterMarkup).join('') + '</ul>' : '<p>This command takes no arguments.</p>'}
            <div class="docs-example"><p><b>Example</b><br>${code(command.example)}</p><button class="docs-small-button" type="button" data-copy="${escape(command.example)}" aria-label="Copy example for ${escape(command.name)}">Copy</button></div>
            ${command.notes.length ? '<h4>Details &amp; limits</h4><ul class="docs-notes">' + command.notes.map(note => '<li>' + escape(note) + '</li>').join('') + '</ul>' : ''}
            <a class="docs-command-link" href="#command=${encodeURIComponent(command.name)}">Link to this command ↗</a>
          </div>
        </details>
      </article>`).join('') : '<p class="book-list-empty">No commands match. Try a shorter search or clear the category filter.</p>');
    list.scrollTop = 0;
  }

  if (list && search && category) {
    [...new Set(commands.map(c => c.category))].sort().forEach(value => {
      const option = document.createElement('option');
      option.value = option.textContent = value;
      category.append(option);
    });
    render();
    search.addEventListener('input', render);
    category.addEventListener('change', render);
    sort.addEventListener('change', render);
    document.getElementById('commandsClear').addEventListener('click', () => {
      search.value = ''; category.value = ''; render(); search.focus();
    });
    list.addEventListener('click', async event => {
      const button = event.target.closest('[data-copy]');
      if (!button) return;
      try {
        await navigator.clipboard.writeText(button.dataset.copy);
        button.textContent = 'Copied';
      } catch (_) {
        button.textContent = 'Select text';
        const range = document.createRange();
        range.selectNodeContents(button.previousElementSibling.querySelector('code'));
        const selection = window.getSelection();
        selection.removeAllRanges(); selection.addRange(range);
      }
      setTimeout(() => { if (button.isConnected) button.textContent = 'Copy'; }, 1800);
    });
  }

  function route() {
    const hash = location.hash;
    if (!list) {
      if (location.pathname.endsWith('policies.html')) {
        if (hash === '#terms') location.hash = 'termsContent';
        if (hash === '#privacy') location.hash = 'privacyContent';
      } else if (hash === '#commands' || hash === '#guide' || hash.startsWith('#command=')) location.replace('docs.html' + hash);
      else if (hash === '#terms' || hash === '#privacy') location.replace('policies.html' + hash);
      return;
    }
    if (!hash.startsWith('#command=')) return;
    let name;
    try { name = decodeURIComponent(hash.slice(9)); } catch (_) { return; }
    search.value = '.' + name; category.value = ''; render();
    const card = [...list.querySelectorAll('[data-command]')].find(card => card.dataset.command === name);
    if (card) { card.querySelector('details').open = true; card.scrollIntoView({block: 'start'}); card.querySelector('summary').focus(); }
  }
  window.addEventListener('hashchange', route);
  route();
/* ── Per-tile subtle 3D tilt ── */
try {
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const tiles = document.querySelectorAll('.tile');
  const MAX_TILT = 4; // degrees, kept subtle

  tiles.forEach((tile) => {
    let rect = null;
    let pending = null;

    tile.addEventListener('mouseenter', () => {
      rect = tile.getBoundingClientRect();
      tile.classList.remove('tile-resetting');
    });

    tile.addEventListener('mousemove', (e) => {
      if (!rect) rect = tile.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (pending) return;
      pending = requestAnimationFrame(() => {
        pending = null;
        const px = (x / rect.width) - 0.5;
        const py = (y / rect.height) - 0.5;
        const rotateY = (px * MAX_TILT * 2).toFixed(2);
        const rotateX = (py * -MAX_TILT * 2).toFixed(2);
        tile.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`;
      });
    });

    tile.addEventListener('mouseleave', () => {
      rect = null;
      tile.classList.add('tile-resetting');
      tile.style.transform = '';
    });
  });
})();
} catch (e) { console.error('tile tilt setup failed:', e); }



/* ── Theme toggle (dark / light) ── */
try {
(function () {
  const root   = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  if (!toggle) return;

  toggle.addEventListener('click', () => {
    const isLight = root.getAttribute('data-theme') === 'light';
    if (isLight) {
      root.removeAttribute('data-theme');
      try { localStorage.setItem('jdkcube-theme', 'dark'); } catch (_) {}
    } else {
      root.setAttribute('data-theme', 'light');
      try { localStorage.setItem('jdkcube-theme', 'light'); } catch (_) {}
    }
  });
})();
} catch (e) { console.error('theme toggle setup failed:', e); }

});
