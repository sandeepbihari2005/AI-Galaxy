document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const contentArea = document.getElementById('contentArea');
    const searchInput = document.getElementById('searchInput');
    const categoryFilters = document.getElementById('categoryFilters');
    const resultsCount = document.getElementById('resultsCount');
    const toggleBtns = document.querySelectorAll('.toggle-btn');

    // State Variables
    let currentView = 'tools'; // 'tools', 'agents', 'workflows', 'prompts'
    let searchQuery = '';
    let currentCategory = 'All';

    // Verify data loaded
    if (typeof studentData === 'undefined') {
        contentArea.innerHTML = '<p style="color:red">Error: Data failed to load. Please ensure student_data.js is linked correctly.</p>';
        return;
    }

    // ---- Initializing View ---- //
    function init() {
        setupEventListeners();
        renderCategories();
        renderContent();
    }

    // ---- Event Listeners ---- //
    function setupEventListeners() {
        // Toggle views
        toggleBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const view = e.currentTarget.getAttribute('data-view');
                switchView(view);
            });
        });

        // Search Input
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.toLowerCase();
            renderContent();
        });
    }

    // ---- Logic Handlers ---- //
    function switchView(view) {
        currentView = view;
        currentCategory = 'All'; // Reset category when switching views

        // Update Buttons Visuals
        toggleBtns.forEach(btn => btn.classList.remove('active'));
        document.querySelector(`[data-view="${view}"]`).classList.add('active');

        // Update Search Placeholder
        if (view === 'tools') searchInput.placeholder = "Search AI tools, categories or features...";
        else if (view === 'agents') searchInput.placeholder = "Search Agents, frameworks, or tasks...";
        else if (view === 'prompts') searchInput.placeholder = "Search prompt library...";

        // Update Layout classes (Grid vs Timeline)
        contentArea.className = 'grid';

        renderCategories();
        renderContent();
    }

    function renderCategories() {
        categoryFilters.innerHTML = '';
        addFilterButton('All', currentCategory === 'All');

        const uniqueCategories = new Set();

        if (currentView === 'tools') {
            studentData.tools.forEach(tool => uniqueCategories.add(tool.category));
        } else if (currentView === 'agents') {
            studentData.agents.forEach(agent => uniqueCategories.add(agent.type_of_agent));
        } else if (currentView === 'prompts') {
            studentData.prompts.forEach(p => uniqueCategories.add(p.category));
        }

        Array.from(uniqueCategories).sort().forEach(cat => {
            addFilterButton(cat, currentCategory === cat);
        });
    }

    function addFilterButton(categoryName, isActive) {
        const btn = document.createElement('button');
        btn.className = `filter-chip ${isActive ? 'active' : ''}`;
        btn.textContent = categoryName;

        btn.addEventListener('click', () => {
            currentCategory = categoryName;
            document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
            btn.classList.add('active');
            renderContent();
        });

        categoryFilters.appendChild(btn);
    }

    function renderContent() {
        contentArea.innerHTML = '';

        // Select base data
        let displayData = [];
        if (currentView === 'tools') displayData = studentData.tools;
        else if (currentView === 'agents') displayData = studentData.agents;
        else if (currentView === 'prompts') displayData = studentData.prompts;

        // Apply Filters
        const filteredData = displayData.filter(item => {
            let matchesCategory = true;
            if (currentCategory !== 'All') {
                if (currentView === 'tools') matchesCategory = item.category === currentCategory;
                else if (currentView === 'agents') matchesCategory = item.type_of_agent === currentCategory;
                else if (currentView === 'prompts') matchesCategory = item.category === currentCategory;
            }

            let matchesSearch = true;
            if (searchQuery !== '') {
                const textToSearch = JSON.stringify(item).toLowerCase();
                matchesSearch = textToSearch.includes(searchQuery);
            }

            return matchesCategory && matchesSearch;
        });

        // Update Stats
        resultsCount.textContent = `Showing ${filteredData.length} ${currentView}`;

        // Render HTML
        if (filteredData.length === 0) {
            contentArea.innerHTML = `<p style="text-align: center; width: 100%; color: var(--text-muted); padding-top: 40px;">No matches found for your search.</p>`;
            return;
        }

        filteredData.forEach(item => {
            if (currentView === 'tools') contentArea.appendChild(createToolCard(item));
            else if (currentView === 'agents') contentArea.appendChild(createAgentCard(item));
            else if (currentView === 'prompts') contentArea.appendChild(createPromptCard(item));
        });
    }

    // ---- HTML Generators ---- //

    function createToolCard(tool) {
        const card = document.createElement('div');
        card.className = 'card';

        const isPaid = tool.pricing.toLowerCase().includes('paid');
        const priceIcon = isPaid ? 'fa-sack-dollar' : 'fa-tag';
        const priceClass = isPaid ? 'paid' : '';

        const featuresHTML = tool.features.slice(0, 3).map(f => `<span class="feature-tag">${f}</span>`).join('');
        const useCasesHTML = tool.best_for.slice(0, 3).map(uc => `
            <div class="use-case-item"><i class="fa-solid fa-check"></i> ${uc}</div>
        `).join('');

        card.innerHTML = `
            <div class="card-header">
                <h3 class="card-title">${tool.tool_name}</h3>
                <span class="card-category">${tool.category}</span>
            </div>
            <p class="card-purpose">${tool.main_purpose}</p>
            <div class="pricing-tag ${priceClass}">
                <i class="fa-solid ${priceIcon}"></i> ${tool.pricing}
            </div>
            <div class="feature-list">${featuresHTML}</div>
            <div class="use-cases">
                <div class="use-cases-title">Best For Students</div>
                ${useCasesHTML}
            </div>
            <a href="${tool.website}" target="_blank" rel="noopener noreferrer" class="card-link">
                Visit Website <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
        `;
        return card;
    }

    function createAgentCard(agent) {
        const card = document.createElement('div');
        card.className = 'card';

        const tasksHTML = agent.tasks_performed.slice(0, 3).map(t => `<span class="feature-tag">${t}</span>`).join('');
        const appsHTML = agent.example_applications.slice(0, 3).map(app => `
            <div class="use-case-item"><i class="fa-solid fa-code-branch"></i> ${app}</div>
        `).join('');

        card.innerHTML = `
            <div class="card-header">
                <h3 class="card-title">${agent.agent_name}</h3>
                <span class="card-category agent-type">${agent.type_of_agent}</span>
            </div>
            <div class="framework-tag">
                <i class="fa-solid fa-layer-group"></i> ${agent.framework_or_platform_used}
            </div>
            <div class="feature-list">${tasksHTML}</div>
            <div class="use-cases">
                <div class="use-cases-title">Examples</div>
                ${appsHTML}
            </div>
            <div style="flex-grow: 1;"></div>
        `;
        return card;
    }

    function createWorkflowStep(wf) {
        const step = document.createElement('div');
        step.className = 'workflow-step';

        step.innerHTML = `
            <div class="step-number">Step ${wf.step_number} • ${wf.workflow_category.toUpperCase()}</div>
            <div class="step-desc">${wf.task_description}</div>
            <div class="step-tool">
                <strong><i class="fa-solid fa-star"></i> Recommended Tool: ${wf.recommended_ai_tool}</strong>
                <span>${wf.purpose_of_the_tool}</span>
            </div>
        `;
        return step;
    }

    function createPromptCard(prompt) {
        const card = document.createElement('div');
        card.className = 'prompt-card';

        let escapedText = prompt.text.replace(/"/g, '&quot;');

        card.innerHTML = `
            <div class="card-header" style="margin-bottom:0px;">
                <span class="card-category" style="background: rgba(129, 140, 248, 0.15); border-color: rgba(129, 140, 248, 0.3); color: #818cf8;">${prompt.category}</span>
            </div>
            <div class="prompt-text">${prompt.text}</div>
            <button class="copy-btn" onclick="navigator.clipboard.writeText('${escapedText}'); this.innerHTML = '<i class=\\'fa-solid fa-check\\'></i> Copied!'; setTimeout(() => this.innerHTML = '<i class=\\'fa-regular fa-copy\\'></i> Copy Prompt', 2000);">
                <i class="fa-regular fa-copy"></i> Copy Prompt
            </button>
        `;
        return card;
    }

    // Run Initialization
    init();
});
