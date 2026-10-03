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
  let activeModal = null;
  let returnFocus = null;

  function closeModal(clearHash = true) {
    if (!activeModal) return;
    activeModal.classList.remove('open');
    activeModal.setAttribute('aria-hidden', 'true');
    activeModal.inert = true;
    activeModal = null;
    document.body.classList.remove('modal-open');
    document.body.style.overflow = '';
    document.querySelector('main').inert = false;
    document.getElementById('themeToggle').inert = false;
    if (clearHash) history.replaceState(null, '', location.pathname + location.search);
    if (returnFocus?.isConnected) returnFocus.focus();
  }

  function openModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    if (activeModal === modal) return;
    if (activeModal) closeModal(false);
    returnFocus = document.activeElement;
    activeModal = modal;
    modal.inert = false;
    modal.setAttribute('aria-hidden', 'false');
    modal.classList.add('open');
    document.body.classList.add('modal-open');
    document.body.style.overflow = 'hidden';
    document.querySelector('main').inert = true;
    document.getElementById('themeToggle').inert = true;
    (modal.querySelector('input') || modal.querySelector('h2') || modal.querySelector('button')).focus();
  }

  const guide = `
    <details class="docs-guide" id="gettingStarted">
      <summary>Getting started, permissions &amp; troubleshooting</summary>
      <div class="docs-guide-body">
        <h3>Read the syntax</h3>
        <p><code>&lt;value&gt;</code> is required; <code>[value]</code> is optional and may show a default. Don’t type the brackets. Replace example mentions and IDs with real targets. Quote multiword positional arguments; trailing text can contain spaces.</p>
        <p>The default prefix is <code>.</code>; administrators can change it. Slash commands use the exact path on each card, with Discord’s named option fields. Aliases apply to prefix commands. A group’s bare prefix command usually becomes its slash <code>overview</code> action—for example <code>.ticket</code> → <code>/ticket overview</code>. For durations, a bare number means minutes; use <code>s</code>, <code>m</code>, <code>h</code> or <code>d</code> for an explicit unit.</p>
        <h3>Set up your server</h3>
        <ol>
          <li>Invite Skye, review individual permissions and ensure it can view/send in the channels you use. Administrator is not requested.</li>
          <li>Put Skye’s role above the roles/members it must manage. You also need the required permissions and role position; Skye does not lend you its privileges.</li>
          <li>Use <code>.features</code> to inspect optional modules. Economy, leveling, giveaways, server options, games, bump reminders, counting, confessions, anti-nuke, anti-raid, logging and VoiceMaster start disabled. Some need setup before <code>.features enable &lt;name&gt;</code>.</li>
          <li>Use <code>.help</code>, <code>.commandinfo &lt;name&gt;</code> or the cards below for the command you need. Buttons, confirmations and modals are part of the feature, not separate text commands.</li>
        </ol>
        <h3>Common setup sequences</h3>
        <ul>
          <li><b>Tickets:</b> <code>.ticket setup main</code> → select category/support role → <code>.ticket panel main #support</code>.</li>
          <li><b>Voice rooms:</b> <code>.voicemaster setup</code> → use the generated join-to-create lobby and control panel.</li>
          <li><b>Economy / XP:</b> <code>.economy enable</code>; <code>.features enable leveling</code> → <code>.levelconfig</code>.</li>
          <li><b>Role automation:</b> <code>.features enable server_options</code> → configure <code>.serverconfig</code>, <code>.buttonrole</code> or <code>.reactionrole</code>. Cosmetic roles cannot grant private access or moderation authority.</li>
          <li><b>Security:</b> the server owner runs <code>.antinuke setup #staff-log</code>, reviews <code>.antinuke rules</code> and chooses responses. <code>.antiraid setup #staff-log</code> has separate thresholds. Review actions before enabling them.</li>
          <li><b>Filtering:</b> <code>.filter add blocked phrase</code> or <code>.filter spam enable</code> → <code>.filter enable</code>. Filtering is configured separately from the optional-module list.</li>
          <li><b>Community:</b> <code>.confessions setup #confessions</code>, <code>.counting setup #counting</code>, or <code>.bumpreminder setup #bump</code>.</li>
          <li><b>Logging:</b> <code>.logs setup #staff-log</code> → <code>.logs event messages on</code> if needed. Message events record metadata, not bodies.</li>
        </ul>
        <h3>Before destructive or private actions</h3>
        <p>Read confirmation prompts. Cleanup is bounded and rechecks permissions, but deletions can be irreversible. Anti-nuke is reactive and is not a backup. Old ticket channels without ownership records need manual administrator closure.</p>
        <p>Most responses are public in their channel. Confessions are anonymous to readers, not the operator. Use slash commands for ephemeral confession/bug-report acknowledgements, and a support ticket for sensitive requests. Never submit credentials. Message lookup and pins must run in the source channel.</p>
        <h3>If a command does not work</h3>
        <p>Check the server’s prefix, module setup, your permissions, Skye’s permissions and role order, then the cooldown. Timed-out members and members who cannot send in the channel cannot use Skye to bypass that restriction. Slash visibility can also be restricted in Discord’s Integrations settings. Missing presence data, unsupported server image/colour features and downtime may limit results.</p>
        <p>Use <code>.bugreport</code> for reproducible non-sensitive bugs. For privacy, deletion or security concerns, <a href="https://discord.gg/9nbMfAznsJ" target="_blank" rel="noopener noreferrer">join support and open a ticket</a>. Skye has no public nuke/reset-channel command.</p>
      </div>
    </details>`;

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
    list.innerHTML = (!query && !selected ? guide : '') + (results.length ? results.map(command => `
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
    if (!document.getElementById('commandsModal')) return;
    const hash = location.hash;
    if (hash === '#commands' || hash === '#guide' || hash.startsWith('#command=')) {
      openModal('commandsModal');
      if (hash === '#guide') {
        search.value = ''; category.value = ''; render();
        const details = document.getElementById('gettingStarted');
        details.open = true; details.querySelector('summary').focus();
      } else if (hash.startsWith('#command=')) {
        let name;
        try { name = decodeURIComponent(hash.slice(9)); } catch (_) { return; }
        search.value = name; category.value = ''; render();
        const card = [...list.querySelectorAll('[data-command]')].find(card => card.dataset.command === name);
        if (card) {
          card.querySelector('details').open = true;
          card.scrollIntoView({block: 'start'});
          card.querySelector('summary').focus();
        }
      }
    } else if (hash === '#terms' || hash === '#privacy') {
      openModal('termsModal');
      const section = document.getElementById(hash === '#privacy' ? 'privacyContent' : 'termsContent');
      section.scrollIntoView({block: 'start'}); section.focus({preventScroll: true});
    } else if (!hash) closeModal(false);
  }
  for (const [button, hash] of [['openCommands','#commands'], ['openTerms','#terms']]) {
    document.getElementById(button)?.addEventListener('click', () => {
      history.replaceState(null, '', hash); route();
      returnFocus = document.getElementById(button);
    });
  }
  for (const [modalId, closeId] of [['commandsModal','closeCommands'], ['termsModal','closeTerms']]) {
    const modal = document.getElementById(modalId);
    document.getElementById(closeId)?.addEventListener('click', () => closeModal());
    modal?.addEventListener('click', event => { if (event.target === modal) closeModal(); });
  }
  document.addEventListener('keydown', event => {
    if (!activeModal) return;
    if (event.key === 'Escape') { event.preventDefault(); closeModal(); }
    if (event.key === 'Tab') {
      const items = [...activeModal.querySelectorAll('button, input, select, a[href], summary, [tabindex="0"]')].filter(el => !el.disabled && el.getClientRects().length);
      const first = items[0], last = items[items.length - 1];
      if (event.shiftKey && (document.activeElement === first || !items.includes(document.activeElement))) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && (document.activeElement === last || !items.includes(document.activeElement))) { event.preventDefault(); first.focus(); }
    }
  });
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
