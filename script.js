// Folders with Tools Data
const folders = [
    {
        id: 'daily-essentials',
        name: 'Daily Essentials',
        icon: '🏠',
        emoji: '🏠',
        tools: ['calculator', 'todolist', 'notes', 'timer']
    },
    {
        id: 'utilities',
        name: 'Utilities',
        icon: '🛠️',
        emoji: '🛠️',
        tools: ['unitconverter', 'passwordgen', 'passwordsaver', 'passwordstrength', 'randomnamepicker']
    },
    {
        id: 'decision-fun',
        name: 'Decision & Fun',
        icon: '🎲',
        emoji: '🎲',
        tools: ['decisionmaker', 'dice', 'bottlespin']
    },
    {
        id: 'productivity',
        name: 'Productivity',
        icon: '📚',
        emoji: '📚',
        tools: ['focustimer', 'studyplanner']
    },
    {
        id: 'smart-tools',
        name: 'Smart Tools',
        icon: '🤖',
        emoji: '🤖',
        tools: ['aiplanner', 'doubtsolver', 'skillbuilder']
    },
    {
        id: 'pdf-tools',
        name: 'PDF Tools',
        icon: '📄',
        emoji: '📄',
        tools: ['imagetopdf', 'pdftoimage', 'mergepdf', 'rotatepdf']
    },
    {
        id: 'image',
        name: 'Image',
        icon: '🖼️',
        emoji: '🖼️',
        tools: ['compressimage', 'imageinfo']
    },
    {
        id: 'math-tools',
        name: 'Math Tools',
        icon: '📊',
        emoji: '📊',
        tools: ['discountcalc', 'percentagecalc', 'primenumber', 'palindrome', 'factorial', 'fibonacci']
    },
    {
        id: 'time-tools',
        name: 'Time Tools',
        icon: '⏰',
        emoji: '⏰',
        tools: ['daysbetween']
    },
    {
        id: 'text-tools',
        name: 'Text Tools',
        icon: '✍️',
        emoji: '✍️',
        tools: ['usernamegen', 'clipboardcleaner']
    },
    {
        id: 'student-tools',
        name: 'Student Tools',
        icon: '📚',
        emoji: '📚',
        tools: ['examcalc']
    },
    {
        id: 'quick-tools',
        name: 'Quick Tools',
        icon: '⚡',
        emoji: '⚡',
        tools: ['texttospeech']
    },
    {
        id: 'writing-tools',
        name: 'Writing Tools',
        icon: '✍️',
        emoji: '✍️',
        tools: ['wordcounter', 'textreverse', 'caseconverter', 'removeduplicates']
    }
];

// Tools Data
const tools = [
    {
        id: 'calculator',
        name: 'Calculator',
        icon: '🧮',
        description: 'Simple Calculator'
    },
    {
        id: 'todolist',
        name: 'To-Do List',
        icon: '✓',
        description: 'Manage your tasks'
    },
    {
        id: 'unitconverter',
        name: 'Unit Converter',
        icon: '📏',
        description: 'Convert units'
    },
    {
        id: 'passwordgen',
        name: 'Password Generator',
        icon: '🔐',
        description: 'Generate passwords'
    },
    {
        id: 'passwordsaver',
        name: 'Password Saver',
        icon: '🔒',
        description: 'Store passwords'
    },
    {
        id: 'decisionmaker',
        name: 'Decision Maker',
        icon: '🎲',
        description: 'Make random decisions'
    },
    {
        id: 'bottlespin',
        name: 'Bottle Spin',
        icon: '🌀',
        description: 'Spin the bottle'
    },
    {
        id: 'notes',
        name: 'Quick Notes',
        icon: '📝',
        description: 'Take quick notes'
    },
    {
        id: 'timer',
        name: 'Timer & Stopwatch',
        icon: '⏱️',
        description: 'Track time'
    },
    {
        id: 'dice',
        name: 'Dice Roller',
        icon: '🎯',
        description: 'Roll dice'
    },
    {
        id: 'focustimer',
        name: 'Focus Timer',
        icon: '⏲️',
        description: 'Pomodoro Timer',
        comingSoon: true
    },
    {
        id: 'studyplanner',
        name: 'Study Planner',
        icon: '📖',
        description: 'Plan your studies',
        comingSoon: true
    },
    {
        id: 'aiplanner',
        name: 'AI Planner',
        icon: '🤖',
        description: 'AI-powered planning',
        comingSoon: true
    },
    {
        id: 'doubtsolver',
        name: 'Doubt Solver',
        icon: '❓',
        description: 'Get help with doubts',
        comingSoon: true
    },
    {
        id: 'skillbuilder',
        name: 'Skill Builder',
        icon: '🎓',
        description: 'Learn new skills',
        comingSoon: true
    },
    {
        id: 'imagetopdf',
        name: 'Image to PDF',
        icon: '🖼️',
        description: 'Convert images to PDF'
    },
    {
        id: 'pdftoimage',
        name: 'PDF to Image',
        icon: '📸',
        description: 'Convert PDF pages to images'
    },
    {
        id: 'mergepdf',
        name: 'Merge PDF',
        icon: '📎',
        description: 'Combine multiple PDFs'
    },
    {
        id: 'rotatepdf',
        name: 'Rotate PDF',
        icon: '🔄',
        description: 'Rotate PDF pages'
    },
    {
        id: 'compressimage',
        name: 'Compress Image',
        icon: '🗜️',
        description: 'Reduce image file size'
    },
    {
        id: 'imageinfo',
        name: 'Image Info',
        icon: '📏',
        description: 'View image details'
    },
    {
        id: 'discountcalc',
        name: 'Discount Calculator',
        icon: '🧮',
        description: 'Calculate discounts'
    },
    {
        id: 'percentagecalc',
        name: 'Percentage Calculator',
        icon: '🔢',
        description: 'Calculate percentages'
    },
    {
        id: 'passwordstrength',
        name: 'Password Strength Checker',
        icon: '🔐',
        description: 'Check password strength'
    },
    {
        id: 'randomnamepicker',
        name: 'Random Name Picker',
        icon: '🎯',
        description: 'Pick random names'
    },
    {
        id: 'daysbetween',
        name: 'Days Between Dates',
        icon: '📅',
        description: 'Calculate days between dates'
    },
    {
        id: 'usernamegen',
        name: 'Username Generator',
        icon: '🔤',
        description: 'Generate usernames'
    },
    {
        id: 'clipboardcleaner',
        name: 'Clipboard Cleaner',
        icon: '📋',
        description: 'Clean text formatting'
    },
    {
        id: 'examcalc',
        name: 'Exam Marks Calculator',
        icon: '📝',
        description: 'Calculate exam scores'
    },
    {
        id: 'texttospeech',
        name: 'Text to Speech',
        icon: '🔊',
        description: 'Convert text to speech'
    },
    {
        id: 'primenumber',
        name: 'Prime Number Checker',
        icon: '🔢',
        description: 'Check if number is prime'
    },
    {
        id: 'palindrome',
        name: 'Palindrome Checker',
        icon: '🔁',
        description: 'Check if text is palindrome'
    },
    {
        id: 'factorial',
        name: 'Factorial Calculator',
        icon: '📊',
        description: 'Calculate factorial (n!)'
    },
    {
        id: 'fibonacci',
        name: 'Fibonacci Generator',
        icon: '🔢',
        description: 'Generate Fibonacci sequence'
    },
    {
        id: 'wordcounter',
        name: 'Word Counter',
        icon: '🔤',
        description: 'Count words and characters'
    },
    {
        id: 'textreverse',
        name: 'Text Reverser',
        icon: '🔁',
        description: 'Reverse text instantly'
    },
    {
        id: 'caseconverter',
        name: 'Case Converter',
        icon: '🔠',
        description: 'Change text case'
    },
    {
        id: 'removeduplicates',
        name: 'Remove Duplicate Words',
        icon: '🧹',
        description: 'Remove repeated words'
    }
];

// DOM Elements
const foldersGrid = document.getElementById('foldersGrid');
const toolsGrid = document.getElementById('toolsGrid');
const searchBar = document.getElementById('searchBar');
const modal = document.getElementById('toolModal');
const closeBtn = document.getElementById('closeBtn');
const toolContent = document.getElementById('toolContent');
const toolTitle = document.getElementById('toolTitle');
const toast = document.getElementById('toast');
const backButton = document.getElementById('backButton');
const backButtonContainer = document.getElementById('backButtonContainer');
const currentFolderTitle = document.getElementById('currentFolderTitle');
const searchResults = document.getElementById('searchResults');
const searchResultsList = document.getElementById('searchResultsList');
const noResults = document.getElementById('noResults');
const recentSearches = document.getElementById('recentSearches');

// App State
let calcDisplay = '';
let currentFolder = null;
let recentSearchesList = JSON.parse(localStorage.getItem('recentSearches')) || [];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadSettings();
    applySettings();
    renderFolders();
    setupEventListeners();
});

// Render folder cards
function renderFolders() {
    foldersGrid.innerHTML = '';

    folders.forEach(folder => {
        const card = document.createElement('div');
        card.className = 'folder-card';
        const toolCount = folder.tools.length;
        card.innerHTML = `
            <div class="folder-icon">${folder.emoji}</div>
            <div class="folder-name">${folder.name}</div>
            <div class="folder-count">${toolCount} tools</div>
        `;
        card.addEventListener('click', () => openFolder(folder));
        foldersGrid.appendChild(card);
    });
}

// Open folder
function openFolder(folder) {
    currentFolder = folder;
    foldersGrid.style.display = 'none';
    backButtonContainer.style.display = 'flex';
    searchResults.style.display = 'none';
    searchBar.value = '';
    
    currentFolderTitle.textContent = `${folder.emoji} ${folder.name}`;
    renderToolsInFolder(folder);
    
    toolsGrid.style.display = 'grid';
}

// Render tools in a folder
function renderToolsInFolder(folder) {
    toolsGrid.innerHTML = '';
    
    folder.tools.forEach(toolId => {
        const tool = tools.find(t => t.id === toolId);
        if (!tool) return;

        const card = document.createElement('div');
        card.className = 'tool-card';
        if (tool.comingSoon) {
            card.style.opacity = '0.6';
            card.style.cursor = 'not-allowed';
        }
        
        card.innerHTML = `
            <div class="tool-icon">${tool.icon}</div>
            <div class="tool-name">${tool.name}</div>
            ${tool.comingSoon ? '<div style="font-size: 0.8rem; margin-top: 5px; color: #999;">Coming Soon</div>' : ''}
        `;
        
        if (!tool.comingSoon) {
            card.addEventListener('click', () => openTool(tool.id, tool.name, tool.icon));
        }
        toolsGrid.appendChild(card);
    });
}

// Back to folders
function backToFolders() {
    toolsGrid.style.display = 'none';
    backButtonContainer.style.display = 'none';
    foldersGrid.style.display = 'grid';
    currentFolder = null;
    searchBar.value = '';
    searchResults.style.display = 'none';
}

// Setup event listeners
function setupEventListeners() {
    searchBar.addEventListener('focus', () => {
        if (searchBar.value.trim() === '') {
            showRecentSearches();
        }
    });

    searchBar.addEventListener('input', (e) => {
        const query = e.target.value.trim().toLowerCase();

        if (query === '') {
            showRecentSearches();
            return;
        }

        // Smart search through folders and tools
        const results = smartSearch(query);
        displaySearchResults(results);
    });

    // Close search results when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            searchResults.style.display = 'none';
        }
    });

    closeBtn.addEventListener('click', closeTool);
    window.addEventListener('click', (e) => {
        if (e.target === modal) closeTool();
    });

    backButton.addEventListener('click', backToFolders);
}

// Smart search function
function smartSearch(query) {
    const results = {
        folders: [],
        tools: []
    };

    // Search folders
    folders.forEach(folder => {
        if (folder.name.toLowerCase().includes(query)) {
            results.folders.push({
                type: 'folder',
                id: folder.id,
                name: folder.name,
                emoji: folder.emoji,
                data: folder
            });
        }
    });

    // Search tools
    tools.forEach(tool => {
        if (tool.name.toLowerCase().includes(query) || 
            tool.description.toLowerCase().includes(query)) {
            
            // Find which folder this tool belongs to
            let belongsToFolder = null;
            for (let folder of folders) {
                if (folder.tools.includes(tool.id)) {
                    belongsToFolder = folder;
                    break;
                }
            }

            results.tools.push({
                type: 'tool',
                id: tool.id,
                name: tool.name,
                icon: tool.icon,
                description: tool.description,
                folder: belongsToFolder,
                comingSoon: tool.comingSoon,
                data: tool
            });
        }
    });

    return results;
}

// Display search results
function displaySearchResults(results) {
    searchResultsList.innerHTML = '';
    noResults.style.display = 'none';
    recentSearches.innerHTML = '';

    const hasResults = results.folders.length > 0 || results.tools.length > 0;

    if (!hasResults) {
        noResults.style.display = 'block';
        searchResults.style.display = 'block';
        return;
    }

    // Display folders
    results.folders.forEach(result => {
        const item = document.createElement('div');
        item.className = 'search-result-item';
        item.innerHTML = `
            <div class="search-result-icon">${result.emoji}</div>
            <div class="search-result-content">
                <div class="search-result-name">${result.name}</div>
                <div class="search-result-type">📁 Folder</div>
            </div>
        `;
        item.addEventListener('click', () => {
            addToRecentSearches(result.name);
            openFolder(result.data);
            searchResults.style.display = 'none';
            searchBar.value = '';
        });
        searchResultsList.appendChild(item);
    });

    // Display tools
    results.tools.forEach(result => {
        const item = document.createElement('div');
        item.className = 'search-result-item';
        const opacityStyle = result.comingSoon ? 'opacity: 0.6;' : '';
        item.style.cssText = opacityStyle;
        
        item.innerHTML = `
            <div class="search-result-icon">${result.icon}</div>
            <div class="search-result-content">
                <div class="search-result-name">${result.name}</div>
                <div class="search-result-type">${result.comingSoon ? '🔒 Coming Soon' : 'Tool'}</div>
                ${result.folder ? `<div class="search-result-folder">${result.folder.emoji} ${result.folder.name}</div>` : ''}
            </div>
        `;
        
        if (!result.comingSoon) {
            item.style.cursor = 'pointer';
            item.addEventListener('click', () => {
                addToRecentSearches(result.name);
                openTool(result.id, result.name, result.icon);
                searchResults.style.display = 'none';
                searchBar.value = '';
            });
        } else {
            item.style.cursor = 'not-allowed';
        }
        
        searchResultsList.appendChild(item);
    });

    searchResults.style.display = 'block';
}

// Show recent searches
function showRecentSearches() {
    recentSearches.innerHTML = '';
    searchResultsList.innerHTML = '';
    noResults.style.display = 'none';

    if (recentSearchesList.length === 0) {
        searchResults.style.display = 'none';
        return;
    }

    const title = document.createElement('div');
    title.className = 'recent-search-title';
    title.textContent = 'Recent Searches';
    recentSearches.appendChild(title);

    recentSearchesList.slice(0, 5).forEach(search => {
        const item = document.createElement('div');
        item.className = 'recent-search-item';
        item.textContent = search;
        item.addEventListener('click', () => {
            searchBar.value = search;
            searchBar.dispatchEvent(new Event('input'));
        });
        recentSearches.appendChild(item);
    });

    searchResults.style.display = 'block';
}

// Add to recent searches
function addToRecentSearches(search) {
    // Remove if already exists
    recentSearchesList = recentSearchesList.filter(item => item !== search);
    
    // Add to beginning
    recentSearchesList.unshift(search);
    
    // Keep only last 10
    recentSearchesList = recentSearchesList.slice(0, 10);
    
    // Save to localStorage
    localStorage.setItem('recentSearches', JSON.stringify(recentSearchesList));
}

// Open tool
function openTool(toolId, toolName, toolIcon) {
    toolTitle.textContent = `${toolIcon} ${toolName}`;
    toolContent.innerHTML = '';

    switch(toolId) {
        case 'calculator':
            loadCalculator();
            break;
        case 'todolist':
            loadToDoList();
            break;
        case 'unitconverter':
            loadUnitConverter();
            break;
        case 'passwordgen':
            loadPasswordGenerator();
            break;
        case 'passwordsaver':
            loadPasswordSaver();
            break;
        case 'decisionmaker':
            loadDecisionMaker();
            break;
        case 'bottlespin':
            loadBottleSpin();
            break;
        case 'notes':
            loadQuickNotes();
            break;
        case 'timer':
            loadTimer();
            break;
        case 'dice':
            loadDiceRoller();
            break;
        case 'imagetopdf':
            loadImageToPDF();
            break;
        case 'pdftoimage':
            loadPDFToImage();
            break;
        case 'mergepdf':
            loadMergePDF();
            break;
        case 'rotatepdf':
            loadRotatePDF();
            break;
        case 'compressimage':
            loadCompressImage();
            break;
        case 'imageinfo':
            loadImageInfo();
            break;
        case 'discountcalc':
            loadDiscountCalculator();
            break;
        case 'percentagecalc':
            loadPercentageCalculator();
            break;
        case 'passwordstrength':
            loadPasswordStrengthChecker();
            break;
        case 'randomnamepicker':
            loadRandomNamePicker();
            break;
        case 'daysbetween':
            loadDaysBetween();
            break;
        case 'usernamegen':
            loadUsernameGenerator();
            break;
        case 'clipboardcleaner':
            loadClipboardCleaner();
            break;
        case 'examcalc':
            loadExamCalculator();
            break;
        case 'texttospeech':
            loadTextToSpeech();
            break;
        case 'primenumber':
            loadPrimeChecker();
            break;
        case 'palindrome':
            loadPalindromeChecker();
            break;
        case 'factorial':
            loadFactorialCalculator();
            break;
        case 'fibonacci':
            loadFibonacciGenerator();
            break;
        case 'wordcounter':
            loadWordCounter();
            break;
        case 'textreverse':
            loadTextReverser();
            break;
        case 'caseconverter':
            loadCaseConverter();
            break;
        case 'removeduplicates':
            loadRemoveDuplicates();
            break;
    }

    // Track recent tool usage
    addRecentTool(toolId, toolName);
    
    modal.style.display = 'block';
}

// Close tool
function closeTool() {
    modal.style.display = 'none';
    calcDisplay = '';
}

// Show toast notification
function showToast(message, type = 'success') {
    toast.textContent = message;
    toast.className = `toast ${type}`;
    toast.style.display = 'block';

    setTimeout(() => {
        toast.style.display = 'none';
    }, 3000);
}

// ==================== CALCULATOR ====================
let calculatorState = {
    expression: '', // Actual expression with *, /, -
    displayValue: '0' // What user sees
};

function loadCalculator() {
    calculatorState.expression = '';
    calculatorState.displayValue = '0';
    
    let html = `
        <div class="calculator-wrapper">
            <div class="calc-input-display">
                <input type="text" id="calcInput" class="calc-input-field" placeholder="0" readonly>
            </div>
            <div class="calculator">
    `;
    
    // Layout matching the image:
    // Row 1: AC, (), %, ÷
    // Row 2: 7, 8, 9, ×
    // Row 3: 4, 5, 6, −
    // Row 4: 1, 2, 3, +
    // Row 5: 0, ., ⌫, =
    
    const buttons = [
        // Row 1: Operations
        { symbol: 'AC', class: 'clear', action: 'clearCalc' },
        { symbol: '( )', class: 'operator', action: 'addNumber', value: '()' },
        { symbol: '%', class: 'percent', action: 'addOperator', value: '%' },
        { symbol: '÷', class: 'operator', action: 'addOperator', value: '/' },
        
        // Row 2: 7, 8, 9, ×
        { symbol: '7', class: 'number', action: 'addNumber', value: '7' },
        { symbol: '8', class: 'number', action: 'addNumber', value: '8' },
        { symbol: '9', class: 'number', action: 'addNumber', value: '9' },
        { symbol: '×', class: 'operator', action: 'addOperator', value: '*' },
        
        // Row 3: 4, 5, 6, −
        { symbol: '4', class: 'number', action: 'addNumber', value: '4' },
        { symbol: '5', class: 'number', action: 'addNumber', value: '5' },
        { symbol: '6', class: 'number', action: 'addNumber', value: '6' },
        { symbol: '−', class: 'operator', action: 'addOperator', value: '-' },
        
        // Row 4: 1, 2, 3, +
        { symbol: '1', class: 'number', action: 'addNumber', value: '1' },
        { symbol: '2', class: 'number', action: 'addNumber', value: '2' },
        { symbol: '3', class: 'number', action: 'addNumber', value: '3' },
        { symbol: '+', class: 'operator', action: 'addOperator', value: '+' },
        
        // Row 5: 0, ., ⌫, =
        { symbol: '0', class: 'number', action: 'addNumber', value: '0' },
        { symbol: '.', class: 'number', action: 'addDecimal', value: '.' },
        { symbol: '⌫', class: 'backspace', action: 'backspaceCalc' },
        { symbol: '=', class: 'equals', action: 'calculate' },
    ];

    buttons.forEach((btn) => {
        let onclickHandler = `handleCalcButton('${btn.action}'`;
        
        if (btn.value) {
            onclickHandler += `, '${btn.value}'`;
        }
        onclickHandler += ')';
        
        html += `<button class="calc-btn ${btn.class}" onclick="${onclickHandler}">${btn.symbol}</button>`;
    });

    html += `
            </div>
        </div>
    `;
    
    toolContent.innerHTML = html;
    updateCalcDisplay();
    
    // Add keyboard support
    const calcInput = document.getElementById('calcInput');
    if (calcInput) {
        calcInput.addEventListener('keydown', handleCalcKeyPress);
    }
}

function handleCalcButton(action, value) {
    switch(action) {
        case 'addNumber':
            addNumber(value);
            break;
        case 'addOperator':
            addOperator(value);
            break;
        case 'addDecimal':
            addDecimal();
            break;
        case 'clearCalc':
            clearCalc();
            break;
        case 'backspaceCalc':
            backspaceCalc();
            break;
        case 'calculate':
            calculateResult();
            break;
    }
}

function addNumber(num) {
    // Skip parentheses for now
    if (num === '()') {
        return;
    }
    
    // If expression is empty and display shows "0", replace it
    if (calculatorState.displayValue === '0') {
        calculatorState.expression = num;
    } else {
        calculatorState.expression += num;
    }
    updateCalcDisplay();
}

function addOperator(op) {
    // Handle percent
    if (op === '%') {
        if (calculatorState.expression === '') return;
        
        try {
            const result = eval(calculatorState.expression) / 100;
            calculatorState.expression = result.toString();
            updateCalcDisplay();
        } catch (e) {
            showToast('Invalid operation', 'error');
        }
        return;
    }
    
    const lastChar = calculatorState.expression.slice(-1);
    
    // Prevent multiple operators in a row
    if (['+', '-', '*', '/', '%'].includes(lastChar)) {
        return;
    }
    
    // If expression is empty, don't add operator
    if (calculatorState.expression === '') {
        return;
    }
    
    calculatorState.expression += op;
    updateCalcDisplay();
}

function addDecimal() {
    // Get the last number (after last operator)
    const lastOperatorIndex = Math.max(
        calculatorState.expression.lastIndexOf('+'),
        calculatorState.expression.lastIndexOf('-'),
        calculatorState.expression.lastIndexOf('*'),
        calculatorState.expression.lastIndexOf('/')
    );
    
    const lastNumber = calculatorState.expression.substring(lastOperatorIndex + 1);
    
    // Don't add decimal if already present in current number
    if (lastNumber.includes('.')) {
        return;
    }
    
    // If expression is empty or ends with operator, add "0."
    if (calculatorState.expression === '' || ['+', '-', '*', '/'].includes(calculatorState.expression.slice(-1))) {
        calculatorState.expression += '0.';
    } else {
        calculatorState.expression += '.';
    }
    
    updateCalcDisplay();
}

function updateCalcDisplay() {
    const input = document.getElementById('calcInput');
    
    if (input) {
        // Convert internal operators to display versions for showing
        const displayExpr = convertToDisplayFormat(calculatorState.expression);
        input.value = displayExpr || '0';
    }
    
    // Update internal display value
    calculatorState.displayValue = calculatorState.expression || '0';
}

function convertToDisplayFormat(expr) {
    return expr
        .replace(/\*/g, ' × ')
        .replace(/\//g, ' ÷ ')
        .replace(/\+/g, ' + ')
        .replace(/-(?!\.)/g, ' − '); // Don't replace minus in decimals
}

function calculateResult() {
    if (calculatorState.expression === '') {
        return;
    }
    
    try {
        // Evaluate the expression
        const result = eval(calculatorState.expression);
        
        // Check if result is a number
        if (typeof result === 'number' && !isNaN(result)) {
            // Convert to fixed decimals if needed (avoid floating point errors)
            const finalResult = Math.round(result * 100000000) / 100000000;
            
            // Show result
            calculatorState.expression = finalResult.toString();
            calculatorState.displayValue = finalResult.toString();
            updateCalcDisplay();
            
            // Show success toast
            showToast('✓ Calculation complete', 'success');
        } else {
            showToast('Invalid calculation', 'error');
            clearCalc();
        }
    } catch (e) {
        showToast('Error in calculation', 'error');
        clearCalc();
    }
}

function clearCalc() {
    calculatorState.expression = '';
    calculatorState.displayValue = '0';
    updateCalcDisplay();
}

function backspaceCalc() {
    if (calculatorState.expression.length > 0) {
        calculatorState.expression = calculatorState.expression.slice(0, -1);
    }
    calcDisplay = calculatorState.expression;
    updateCalcDisplay();
}

function handleCalcKeyPress(event) {
    const key = event.key;
    
    // Numbers
    if (key >= '0' && key <= '9') {
        addNumber(key);
    }
    // Decimal
    else if (key === '.') {
        addDecimal();
    }
    // Operators
    else if (key === '+') {
        addOperator('+');
    }
    else if (key === '-') {
        addOperator('-');
    }
    else if (key === '*') {
        addOperator('*');
    }
    else if (key === '/') {
        event.preventDefault(); // Prevent browser search
        addOperator('/');
    }
    else if (key === '%') {
        addOperator('%');
    }
    // Enter or equals
    else if (key === 'Enter' || key === '=') {
        event.preventDefault();
        calculateResult();
    }
    // Backspace
    else if (key === 'Backspace') {
        event.preventDefault();
        backspaceCalc();
    }
    // Delete key for clear
    else if (key === 'Delete') {
        event.preventDefault();
        clearCalc();
    }
}

// ==================== TO-DO LIST ====================
function loadToDoList() {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    
    let html = `
        <div class="todolist-content">
            <div class="todo-input-group">
                <input type="text" id="todoInput" placeholder="Add a new task...">
                <button onclick="addTodo()">Add</button>
            </div>
            <ul class="todo-list" id="todoList">
    `;

    if (todos.length === 0) {
        html += '<li class="empty-message">No tasks yet. Add one to get started!</li>';
    } else {
        todos.forEach((todo, index) => {
            html += `
                <li class="todo-item ${todo.completed ? 'completed' : ''}">
                    <input type="checkbox" ${todo.completed ? 'checked' : ''} 
                           onchange="toggleTodo(${index})">
                    <span>${escapeHtml(todo.text)}</span>
                    <button class="todo-delete" onclick="deleteTodo(${index})">Delete</button>
                </li>
            `;
        });
    }

    html += '</ul></div>';
    toolContent.innerHTML = html;

    document.getElementById('todoInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTodo();
    });
}

function addTodo() {
    const input = document.getElementById('todoInput');
    const text = input.value.trim();

    if (!text) {
        showToast('Please enter a task', 'error');
        return;
    }

    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.push({ text, completed: false });
    localStorage.setItem('todos', JSON.stringify(todos));
    loadToDoList(); // Refresh
    showToast('Task added!', 'success');
}

function toggleTodo(index) {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos[index].completed = !todos[index].completed;
    localStorage.setItem('todos', JSON.stringify(todos));
    loadToDoList();
}

function deleteTodo(index) {
    if (!confirm('Are you sure you want to delete this task?')) return;

    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(todos));
    loadToDoList();
    showToast('Task deleted!', 'success');
}

// ==================== UNIT CONVERTER ====================
function loadUnitConverter() {
    const converters = [
        { name: 'Length', unit1: 'Meters', unit2: 'Feet', factor: 3.28084 },
        { name: 'Weight', unit1: 'Kg', unit2: 'Lbs', factor: 2.20462 },
        { name: 'Temperature', unit1: 'Celsius', unit2: 'Fahrenheit', factor: null },
        { name: 'Volume', unit1: 'Liters', unit2: 'Gallons', factor: 0.264172 },
        { name: 'Speed', unit1: 'Km/h', unit2: 'Mph', factor: 0.621371 }
    ];

    let html = '<div class="tool-form">';

    converters.forEach((conv, idx) => {
        html += `
            <div class="form-group">
                <label>${conv.name}</label>
                <div class="converter-group">
                    <input type="number" id="conv${idx}_1" placeholder="${conv.unit1}" 
                           onchange="convertUnit(${idx})">
                    <span style="padding: 12px; color: #999;">→</span>
                    <input type="number" id="conv${idx}_2" placeholder="${conv.unit2}" readonly>
                </div>
            </div>
        `;
    });

    html += '</div>';
    toolContent.innerHTML = html;

    window.converterData = converters;
}

function convertUnit(index) {
    const converters = window.converterData;
    const conv = converters[index];
    const input1 = document.getElementById(`conv${index}_1`);
    const output = document.getElementById(`conv${index}_2`);
    const value = parseFloat(input1.value);

    if (isNaN(value)) {
        output.value = '';
        return;
    }

    let result;
    if (conv.name === 'Temperature') {
        result = (value * 9/5) + 32;
    } else {
        result = value * conv.factor;
    }

    output.value = result.toFixed(2);
}

// ==================== PASSWORD GENERATOR ====================
function loadPasswordGenerator() {
    let html = `
        <div class="tool-form">
            <div class="form-group">
                <label>Password Length:</label>
                <input type="range" id="pwdLength" min="8" max="32" value="12" 
                       oninput="updatePasswordLength(this.value)">
                <span id="lengthDisplay">12 characters</span>
            </div>

            <div class="password-options">
                <label class="checkbox-group">
                    <input type="checkbox" id="pwdUppercase" checked>
                    <span>Uppercase Letters (A-Z)</span>
                </label>
                <label class="checkbox-group">
                    <input type="checkbox" id="pwdLowercase" checked>
                    <span>Lowercase Letters (a-z)</span>
                </label>
                <label class="checkbox-group">
                    <input type="checkbox" id="pwdNumbers" checked>
                    <span>Numbers (0-9)</span>
                </label>
                <label class="checkbox-group">
                    <input type="checkbox" id="pwdSymbols" checked>
                    <span>Symbols (!@#$%)</span>
                </label>
            </div>

            <button onclick="generatePassword()">Generate Password</button>
            <div class="generated-password" id="generatedPwd">Click Generate</div>
            
            <div class="btn-group">
                <button onclick="copyPassword()">Copy</button>
                <button onclick="savePwd()" class="btn-secondary">Save This Password</button>
            </div>
        </div>
    `;
    toolContent.innerHTML = html;
}

function updatePasswordLength(value) {
    document.getElementById('lengthDisplay').textContent = `${value} characters`;
}

function generatePassword() {
    const length = parseInt(document.getElementById('pwdLength').value);
    const useUppercase = document.getElementById('pwdUppercase').checked;
    const useLowercase = document.getElementById('pwdLowercase').checked;
    const useNumbers = document.getElementById('pwdNumbers').checked;
    const useSymbols = document.getElementById('pwdSymbols').checked;

    let chars = '';
    if (useUppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (useLowercase) chars += 'abcdefghijklmnopqrstuvwxyz';
    if (useNumbers) chars += '0123456789';
    if (useSymbols) chars += '!@#$%^&*()_+-=[]{}|;:,.<>?';

    if (!chars) {
        showToast('Select at least one option', 'error');
        return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    document.getElementById('generatedPwd').textContent = password;
    window.currentPassword = password;
}

function copyPassword() {
    const pwd = window.currentPassword || document.getElementById('generatedPwd').textContent;
    if (pwd === 'Click Generate') {
        showToast('Generate a password first', 'error');
        return;
    }
    navigator.clipboard.writeText(pwd);
    showToast('Password copied!', 'success');
}

function savePwd() {
    const pwd = window.currentPassword;
    if (!pwd) {
        showToast('Generate a password first', 'error');
        return;
    }

    const appName = prompt('Enter application/service name:');
    if (!appName) return;

    const passwords = JSON.parse(localStorage.getItem('savedPasswords')) || [];
    passwords.push({ appName, password: pwd, date: new Date().toLocaleString() });
    localStorage.setItem('savedPasswords', JSON.stringify(passwords));
    showToast('Password saved!', 'success');
}

// ==================== PASSWORD SAVER ====================
function loadPasswordSaver() {
    const passwords = JSON.parse(localStorage.getItem('savedPasswords')) || [];

    let html = `
        <div class="tool-form">
            <div class="form-group">
                <label>Application Name:</label>
                <input type="text" id="appName" placeholder="e.g., Gmail, Laptop">
            </div>
            <div class="form-group">
                <label>Password:</label>
                <input type="password" id="appPassword" placeholder="Enter password">
            </div>
            <button onclick="saveSinglePassword()">Save Password</button>

            <hr style="margin: 20px 0; border: none; border-top: 2px solid #e0e0e0;">
            <h3 style="margin: 15px 0;">Saved Passwords</h3>
    `;

    if (passwords.length === 0) {
        html += '<p class="empty-message">No saved passwords yet</p>';
    } else {
        passwords.forEach((pwd, index) => {
            html += `
                <div class="password-item">
                    <div class="password-item-header">
                        <span class="password-app-name">${escapeHtml(pwd.appName)}</span>
                        <button class="password-toggle" onclick="togglePasswordVisibility(${index})">Show</button>
                    </div>
                    <div class="password-text" id="pwd${index}" style="display: none;">
                        ${escapeHtml(pwd.password)}
                    </div>
                    <small style="color: #999;">Saved: ${pwd.date}</small>
                    <div class="password-item-actions">
                        <button onclick="copyPasswordItem(${index})">Copy</button>
                        <button class="btn-danger" onclick="deletePasswordItem(${index})">Delete</button>
                    </div>
                </div>
            `;
        });
    }

    html += '</div>';
    toolContent.innerHTML = html;
}

function togglePasswordVisibility(index) {
    const element = document.getElementById(`pwd${index}`);
    const button = event.target;
    
    if (element.style.display === 'none') {
        element.style.display = 'block';
        button.textContent = 'Hide';
    } else {
        element.style.display = 'none';
        button.textContent = 'Show';
    }
}

function saveSinglePassword() {
    const appName = document.getElementById('appName').value.trim();
    const password = document.getElementById('appPassword').value;

    if (!appName || !password) {
        showToast('Please fill all fields', 'error');
        return;
    }

    const passwords = JSON.parse(localStorage.getItem('savedPasswords')) || [];
    passwords.push({ appName, password, date: new Date().toLocaleString() });
    localStorage.setItem('savedPasswords', JSON.stringify(passwords));
    
    document.getElementById('appName').value = '';
    document.getElementById('appPassword').value = '';
    loadPasswordSaver();
    showToast('Password saved!', 'success');
}

function copyPasswordItem(index) {
    const passwords = JSON.parse(localStorage.getItem('savedPasswords')) || [];
    navigator.clipboard.writeText(passwords[index].password);
    showToast('Password copied!', 'success');
}

function deletePasswordItem(index) {
    if (!confirm('Are you sure you want to delete this password?')) return;

    const passwords = JSON.parse(localStorage.getItem('savedPasswords')) || [];
    passwords.splice(index, 1);
    localStorage.setItem('savedPasswords', JSON.stringify(passwords));
    loadPasswordSaver();
    showToast('Password deleted!', 'success');
}

// ==================== DECISION MAKER ====================
function loadDecisionMaker() {
    const decisions = ['YES', 'NO', 'MAYBE', 'ASK LATER', 'DEFINITELY', 'NOT NOW', 'GO FOR IT!', 'HOLD ON', 'ABSOLUTELY', 'NOPE'];

    let html = `
        <div class="decision-maker">
            <p>Ask a yes/no question and get a decision...</p>
            <button class="decision-button" onclick="makeDecision()">🎲 Make Decision 🎲</button>
            <div class="decision-display" id="decisionDisplay">Ask your question...</div>
        </div>
    `;
    toolContent.innerHTML = html;

    window.decisions = decisions;
}

function makeDecision() {
    const decisions = window.decisions;
    const randomIndex = Math.floor(Math.random() * decisions.length);
    const decision = decisions[randomIndex];

    const display = document.getElementById('decisionDisplay');
    display.style.animation = 'none';
    setTimeout(() => {
        display.textContent = decision;
        display.style.animation = 'fadeIn 0.5s ease';
    }, 10);
}

// ==================== BOTTLE SPIN ====================
function loadBottleSpin() {
    const people = ['You', 'Friend 1', 'Friend 2', 'Friend 3', 'Friend 4'];

    let html = `
        <div class="bottle-spinner">
            <p>Spin the bottle to pick someone!</p>
            <button onclick="spinBottle()" class="decision-button">SPIN! 🌀</button>
            <div class="bottle-container">
                <div class="bottle" id="bottle">🍾</div>
            </div>
            <div class="spin-result" id="spinResult">Click SPIN to start</div>
        </div>
    `;
    toolContent.innerHTML = html;

    window.bottlePeople = people;
}

function spinBottle() {
    const bottle = document.getElementById('bottle');
    const result = document.getElementById('spinResult');

    // Disable button during spin
    event.target.disabled = true;

    bottle.style.animation = 'none';
    setTimeout(() => {
        bottle.style.animation = 'spin 2s linear';

        setTimeout(() => {
            const randomPerson = window.bottlePeople[
                Math.floor(Math.random() * window.bottlePeople.length)
            ];
            result.textContent = `🎯 ${randomPerson}!`;
            event.target.disabled = false;
        }, 2000);
    }, 10);
}

// ==================== QUICK NOTES ====================
function loadQuickNotes() {
    const notes = JSON.parse(localStorage.getItem('quickNotes')) || [];

    let html = `
        <div class="tool-form">
            <textarea id="noteInput" placeholder="Write your notes here..." 
                      style="height: 150px; resize: vertical;"></textarea>
            <button onclick="saveNote()">Save Note</button>

            <hr style="margin: 20px 0; border: none; border-top: 2px solid #e0e0e0;">
            <h3 style="margin: 15px 0;">Your Notes</h3>
            <ul class="todo-list" id="notesList">
    `;

    if (notes.length === 0) {
        html += '<li class="empty-message">No notes yet</li>';
    } else {
        notes.forEach((note, index) => {
            html += `
                <li class="todo-item">
                    <div style="flex: 1;">
                        <div style="font-weight: 600;">${escapeHtml(note.title)}</div>
                        <div style="font-size: 0.9rem; color: #666; margin-top: 5px;">${escapeHtml(note.content)}</div>
                        <small style="color: #999;">${note.date}</small>
                    </div>
                    <button class="todo-delete" onclick="deleteNote(${index})">Delete</button>
                </li>
            `;
        });
    }

    html += '</ul></div>';
    toolContent.innerHTML = html;
}

function saveNote() {
    const input = document.getElementById('noteInput');
    const content = input.value.trim();

    if (!content) {
        showToast('Please write something', 'error');
        return;
    }

    const title = content.substring(0, 50);
    const notes = JSON.parse(localStorage.getItem('quickNotes')) || [];
    notes.push({ title, content, date: new Date().toLocaleString() });
    localStorage.setItem('quickNotes', JSON.stringify(notes));

    input.value = '';
    loadQuickNotes();
    showToast('Note saved!', 'success');
}

function deleteNote(index) {
    if (!confirm('Are you sure?')) return;

    const notes = JSON.parse(localStorage.getItem('quickNotes')) || [];
    notes.splice(index, 1);
    localStorage.setItem('quickNotes', JSON.stringify(notes));
    loadQuickNotes();
    showToast('Note deleted!', 'success');
}

// ==================== TIMER & STOPWATCH ====================
function loadTimer() {
    let html = `
        <div class="tool-form">
            <div style="margin-bottom: 20px;">
                <h3>⏱️ Timer Mode</h3>
                <div class="form-group">
                    <label>Minutes:</label>
                    <input type="number" id="timerMin" min="0" max="59" value="1">
                </div>
                <div class="form-group">
                    <label>Seconds:</label>
                    <input type="number" id="timerSec" min="0" max="59" value="0">
                </div>
                <div style="display: flex; gap: 10px;">
                    <button onclick="startTimer()">Start</button>
                    <button class="btn-secondary" onclick="stopTimer()">Stop</button>
                    <button class="btn-secondary" onclick="resetTimer()">Reset</button>
                </div>
            </div>

            <hr style="margin: 20px 0; border: none; border-top: 2px solid #e0e0e0;">

            <div>
                <h3>⏱️ Stopwatch Mode</h3>
                <div style="font-size: 2rem; text-align: center; font-weight: bold; margin: 20px 0; font-family: monospace;">
                    <span id="stopwatchDisplay">00:00:00</span>
                </div>
                <div style="display: flex; gap: 10px;">
                    <button onclick="startStopwatch()">Start</button>
                    <button class="btn-secondary" onclick="stopStopwatch()">Stop</button>
                    <button class="btn-secondary" onclick="resetStopwatch()">Reset</button>
                </div>
            </div>
        </div>
    `;
    toolContent.innerHTML = html;

    window.timerInterval = null;
    window.stopwatchInterval = null;
    window.stopwatchTime = 0;
}

function startTimer() {
    if (window.timerInterval) return;

    let minutes = parseInt(document.getElementById('timerMin').value) || 0;
    let seconds = parseInt(document.getElementById('timerSec').value) || 0;

    if (minutes === 0 && seconds === 0) {
        showToast('Set a time first', 'error');
        return;
    }

    window.timerInterval = setInterval(() => {
        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(window.timerInterval);
                showToast('Time\'s up!', 'success');
                return;
            }
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }

        document.getElementById('timerMin').value = minutes;
        document.getElementById('timerSec').value = seconds;
    }, 1000);
}

function stopTimer() {
    clearInterval(window.timerInterval);
    window.timerInterval = null;
}

function resetTimer() {
    stopTimer();
    document.getElementById('timerMin').value = '0';
    document.getElementById('timerSec').value = '0';
}

function startStopwatch() {
    if (window.stopwatchInterval) return;

    window.stopwatchInterval = setInterval(() => {
        window.stopwatchTime++;
        updateStopwatchDisplay();
    }, 1000);
}

function stopStopwatch() {
    clearInterval(window.stopwatchInterval);
    window.stopwatchInterval = null;
}

function resetStopwatch() {
    stopStopwatch();
    window.stopwatchTime = 0;
    updateStopwatchDisplay();
}

function updateStopwatchDisplay() {
    const hours = Math.floor(window.stopwatchTime / 3600);
    const minutes = Math.floor((window.stopwatchTime % 3600) / 60);
    const seconds = window.stopwatchTime % 60;

    document.getElementById('stopwatchDisplay').textContent = 
        `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(num) {
    return num.toString().padStart(2, '0');
}

// ==================== DICE ROLLER ====================
function loadDiceRoller() {
    let html = `
        <div class="tool-form">
            <div class="form-group">
                <label>Number of Dice:</label>
                <input type="number" id="diceCount" min="1" max="10" value="1">
            </div>
            <div class="form-group">
                <label>Dice Type:</label>
                <select id="diceType">
                    <option value="6">D6 (6-sided)</option>
                    <option value="4">D4 (4-sided)</option>
                    <option value="8">D8 (8-sided)</option>
                    <option value="10">D10 (10-sided)</option>
                    <option value="12">D12 (12-sided)</option>
                    <option value="20">D20 (20-sided)</option>
                    <option value="100">D100 (100-sided)</option>
                </select>
            </div>
            <button onclick="rollDice()">🎲 Roll Dice</button>
            
            <div id="diceResults" style="background: #f0f0f0; padding: 20px; border-radius: 8px; margin-top: 20px; display: none;">
                <div id="diceRolls" style="margin-bottom: 15px; text-align: center;"></div>
                <div style="font-size: 2rem; font-weight: bold; text-align: center; color: #667eea;">
                    Total: <span id="diceTotal">0</span>
                </div>
            </div>
        </div>
    `;
    toolContent.innerHTML = html;
}

function rollDice() {
    const count = parseInt(document.getElementById('diceCount').value);
    const sides = parseInt(document.getElementById('diceType').value);

    if (count <= 0) {
        showToast('Invalid dice count', 'error');
        return;
    }

    let rolls = [];
    let total = 0;

    for (let i = 0; i < count; i++) {
        const roll = Math.floor(Math.random() * sides) + 1;
        rolls.push(roll);
        total += roll;
    }

    document.getElementById('diceRolls').textContent = 
        `Rolling ${count}x D${sides}: ${rolls.join(', ')}`;
    document.getElementById('diceTotal').textContent = total;
    document.getElementById('diceResults').style.display = 'block';

    showToast(`Rolled ${count}x D${sides} = ${total}`, 'success');
}

// ==================== PDF TOOLS ====================

// Helper: Create drag-drop file upload area
function createFileUploadArea(acceptTypes, maxFiles = 1, helpText = '') {
    return `
        <div class="pdf-upload-area" ondrop="handlePDFDrop(event)" ondragover="event.preventDefault()" ondragleave="event.target.classList.remove('drag-active')" ondragenter="event.target.classList.add('drag-active')">
            <div class="pdf-upload-content">
                <div class="pdf-upload-icon">📁</div>
                <div class="pdf-upload-text">
                    <h3>Drag & drop your files here</h3>
                    <p>or click to browse</p>
                    ${helpText ? `<small>${helpText}</small>` : ''}
                </div>
            </div>
            <input type="file" id="pdfFileInput" accept="${acceptTypes}" multiple="${maxFiles > 1}" style="display: none;">
        </div>
        <div id="filePreview" class="file-preview"></div>
    `;
}

// Drag drop handler
function handlePDFDrop(event) {
    event.preventDefault();
    event.target.classList.remove('drag-active');
    
    const files = event.dataTransfer.files;
    const input = document.getElementById('pdfFileInput');
    
    if (input) {
        input.files = files;
        showFilePreview(files);
    }
}

// Show file preview
function showFilePreview(files) {
    const preview = document.getElementById('filePreview');
    if (!preview) return;
    
    preview.innerHTML = '<div class="file-items">';
    
    for (let file of files) {
        preview.innerHTML += `
            <div class="file-item">
                <div class="file-icon">📄</div>
                <div class="file-info">
                    <div class="file-name">${file.name}</div>
                    <div class="file-size">${(file.size / 1024 / 1024).toFixed(2)} MB</div>
                </div>
            </div>
        `;
    }
    
    preview.innerHTML += '</div>';
}

// Progress indicator
function showProgress(message, progress = 0) {
    return `
        <div class="pdf-progress">
            <div class="progress-message">${message}</div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${progress}%"></div>
            </div>
            <div class="progress-percent">${progress}%</div>
        </div>
    `;
}

// PDF Editor
// ==================== PDF TOOLS ====================
let pdfState = {
    currentFiles: [],
    currentImages: [],
    converterFile: null,
};

// Set up PDF.js worker
if (typeof pdfjsLib !== 'undefined') {
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
}

// Ensure libraries are available
const PDFLibModule = window.PDFLib || {};
const jsPDFLib = window.jspdf || {};

// ========== IMAGE TO PDF ==========
function loadImageToPDF() {
    let html = `
        <div class="tool-form">
            <h3>🖼️ Image to PDF</h3>
            <div class="pdf-upload-area" ondrop="handleImageDrop(event)" ondragover="event.preventDefault()" ondragleave="event.preventDefault()">
                <div class="pdf-upload-content">
                    <div class="pdf-upload-icon">🖼️</div>
                    <h3>Upload Images</h3>
                    <p>Drag & drop or click to select multiple images</p>
                </div>
                <input type="file" id="imageFileInput" accept=".jpg,.jpeg,.png,.gif,.bmp" multiple style="display: none;">
            </div>
            <div id="imagePreviewContainer" style="margin-top: 15px;"></div>
            <div class="form-group" style="margin-top: 15px;">
                <label>Page Size:</label>
                <select id="pageSize">
                    <option value="a4">A4 (210 x 297mm)</option>
                    <option value="letter">Letter (8.5 x 11in)</option>
                    <option value="a3">A3 (297 x 420mm)</option>
                </select>
            </div>
            <div class="form-group">
                <label>Fit to Page:</label>
                <select id="fitMode">
                    <option value="contain">Fit (Maintain Aspect)</option>
                    <option value="cover">Fill Page</option>
                    <option value="original">Original Size</option>
                </select>
            </div>
            <button id="convertBtn" onclick="convertImagesToPDF()" style="width: 100%; margin-top: 15px; display: none;">⬇️ Convert to PDF</button>
        </div>
    `;
    toolContent.innerHTML = html;
    setupImageToPDFUpload();
}

function setupImageToPDFUpload() {
    const uploadArea = document.querySelector('.pdf-upload-area');
    const fileInput = document.getElementById('imageFileInput');
    
    if (uploadArea && fileInput) {
        uploadArea.addEventListener('click', () => fileInput.click());
        fileInput.addEventListener('change', (e) => {
            handleImageSelect(e.target.files);
        });
    }
}

function handleImageDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    const files = e.dataTransfer.files;
    handleImageSelect(files);
}

async function handleImageSelect(files) {
    pdfState.currentImages = [];
    const container = document.getElementById('imagePreviewContainer');
    container.innerHTML = '<h4>Selected Images:</h4><div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(80px, 1fr)); gap: 10px;">';
    
    for (let file of files) {
        const reader = new FileReader();
        reader.onload = (e) => {
            pdfState.currentImages.push({ name: file.name, data: e.target.result });
            container.innerHTML += `<img src="${e.target.result}" style="width: 100%; height: 80px; object-fit: cover; border-radius: 4px; border: 2px solid #ddd;">`;
        };
        reader.readAsDataURL(file);
    }
    
    container.innerHTML += '</div>';
    document.getElementById('convertBtn').style.display = 'block';
}

async function convertImagesToPDF() {
    if (pdfState.currentImages.length === 0) {
        showToast('No images selected', 'error');
        return;
    }
    
    try {
        showProgress('Converting images to PDF...', 30);
        const { jsPDF } = window.jspdf;
        const pageSize = document.getElementById('pageSize').value;
        const fitMode = document.getElementById('fitMode').value;
        
        let pageWidth = 210, pageHeight = 297; // A4 default
        if (pageSize === 'letter') { pageWidth = 215.9; pageHeight = 279.4; }
        else if (pageSize === 'a3') { pageWidth = 297; pageHeight = 420; }
        
        const pdf = new jsPDF({ orientation: 'p', unit: 'mm', format: [pageWidth, pageHeight] });
        
        for (let i = 0; i < pdfState.currentImages.length; i++) {
            const img = new Image();
            img.src = pdfState.currentImages[i].data;
            
            await new Promise(resolve => {
                img.onload = () => {
                    const MAX_WIDTH = pageWidth - 10;
                    const MAX_HEIGHT = pageHeight - 10;
                    let width = MAX_WIDTH, height = (img.height * MAX_WIDTH) / img.width;
                    
                    if (height > MAX_HEIGHT) {
                        height = MAX_HEIGHT;
                        width = (img.width * MAX_HEIGHT) / img.height;
                    }
                    
                    const x = (pageWidth - width) / 2;
                    const y = (pageHeight - height) / 2;
                    
                    pdf.addImage(pdfState.currentImages[i].data, 'JPEG', x, y, width, height);
                    if (i < pdfState.currentImages.length - 1) pdf.addPage();
                    
                    showProgress(`Converting images to PDF...`, 30 + (60 * (i + 1) / pdfState.currentImages.length));
                    resolve();
                };
            });
        }
        
        showProgress('Finalizing PDF...', 95);
        pdf.save('images-to-pdf.pdf');
        showToast('✓ PDF created successfully', 'success');
    } catch (e) {
        showToast('Error converting images: ' + e.message, 'error');
    }
}

// ========== PDF TO IMAGE ==========
function loadPDFToImage() {
    let html = `
        <div class="tool-form">
            <h3>📸 PDF to Image</h3>
            <div class="pdf-upload-area" ondrop="handlePDFDrop(event, 'toimage')" ondragover="event.preventDefault()" ondragleave="event.preventDefault()">
                <div class="pdf-upload-content">
                    <div class="pdf-upload-icon">📁</div>
                    <h3>Upload PDF to Convert</h3>
                    <p>Drag & drop or click to select</p>
                </div>
                <input type="file" id="pdfToImageInput" accept=".pdf" style="display: none;">
            </div>
            <div class="form-group" style="margin-top: 15px;">
                <label>Output Format:</label>
                <select id="imageFormat">
                    <option value="jpg">JPG (Smaller)</option>
                    <option value="png">PNG (Better Quality)</option>
                </select>
            </div>
            <div class="form-group">
                <label>DPI (Quality):</label>
                <select id="imageDPI">
                    <option value="72">72 DPI (Web)</option>
                    <option value="150" selected>150 DPI (Standard)</option>
                    <option value="300">300 DPI (High Quality)</option>
                </select>
            </div>
            <div id="conversionResult" style="margin-top: 15px;"></div>
            <button id="startConversionBtn" onclick="startPDFToImageConversion()" style="width: 100%; margin-top: 15px; display: none;">🔄 Convert to Images</button>
        </div>
    `;
    toolContent.innerHTML = html;
    setupPDFToImageUpload();
}

function setupPDFToImageUpload() {
    const fileInput = document.getElementById('pdfToImageInput');
    const uploadArea = document.querySelector('.pdf-upload-area');
    
    if (uploadArea && fileInput) {
        uploadArea.addEventListener('click', () => fileInput.click());
        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                pdfState.converterFile = file;
                document.getElementById('startConversionBtn').style.display = 'block';
            }
        });
    }
}

function handlePDFDrop(e, mode) {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
        if (mode === 'toimage') {
            pdfState.converterFile = files[0];
            document.getElementById('startConversionBtn').style.display = 'block';
        } else if (mode === 'rotate') {
            document.getElementById('rotateFileInput').files = files;
            const event = new Event('change', { bubbles: true });
            document.getElementById('rotateFileInput').dispatchEvent(event);
        }
    }
}

async function startPDFToImageConversion() {
    if (!pdfState.converterFile) {
        showToast('No PDF selected', 'error');
        return;
    }
    
    try {
        showProgress('Loading PDF...', 20);
        const arrayBuffer = await pdfState.converterFile.arrayBuffer();
        const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
        const format = document.getElementById('imageFormat').value;
        const dpi = parseInt(document.getElementById('imageDPI').value);
        const scale = dpi / 72;
        
        const resultDiv = document.getElementById('conversionResult');
        resultDiv.innerHTML = '<h4>Converting pages...</h4><div id="imagesList" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); gap: 10px;"></div>';
        
        const imagesList = document.getElementById('imagesList');
        
        for (let pageNum = 1; pageNum <= Math.min(pdf.numPages, 20); pageNum++) {
            const page = await pdf.getPage(pageNum);
            const viewport = page.getViewport({ scale });
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            canvas.width = viewport.width;
            canvas.height = viewport.height;
            
            await page.render({ canvasContext: context, viewport }).promise;
            
            const imgData = canvas.toDataURL(`image/${format}`, 0.95);
            const img = document.createElement('img');
            img.src = imgData;
            img.style.cssText = 'width: 100%; border-radius: 4px; border: 1px solid #ddd; cursor: pointer;';
            img.onclick = () => downloadImage(imgData, `page-${pageNum}.${format}`);
            imagesList.appendChild(img);
            
            showProgress(`Converting page ${pageNum}/${Math.min(pdf.numPages, 20)}`, 20 + (70 * pageNum / Math.min(pdf.numPages, 20)));
        }
        
        showToast('✓ PDF converted! Click images to download', 'success');
    } catch (e) {
        showToast('Error converting PDF: ' + e.message, 'error');
    }
}

function downloadImage(imgData, filename) {
    const a = document.createElement('a');
    a.href = imgData;
    a.download = filename;
    a.click();
}

// ========== MERGE PDF ==========
function loadMergePDF() {
    let html = `
        <div class="tool-form">
            <h3>📎 Merge PDF</h3>
            <div class="pdf-upload-area" ondrop="handleMergeDrop(event)" ondragover="event.preventDefault()" ondragleave="event.preventDefault()">
                <div class="pdf-upload-content">
                    <div class="pdf-upload-icon">📁</div>
                    <h3>Upload Multiple PDFs</h3>
                    <p>Select 2 or more PDFs to merge</p>
                </div>
                <input type="file" id="mergeFileInput" accept=".pdf" multiple style="display: none;">
            </div>
            <div id="mergeFilesList" style="margin-top: 15px;"></div>
            <button id="mergeBtn" onclick="performMergePDF()" style="width: 100%; margin-top: 15px; display: none;">📎 Merge PDFs</button>
        </div>
    `;
    toolContent.innerHTML = html;
    setupMergePDFUpload();
}

function setupMergePDFUpload() {
    const uploadArea = document.querySelector('.pdf-upload-area');
    const fileInput = document.getElementById('mergeFileInput');
    
    if (uploadArea && fileInput) {
        uploadArea.addEventListener('click', () => fileInput.click());
        fileInput.addEventListener('change', (e) => {
            handleMergeSelect(e.target.files);
        });
    }
}

function handleMergeDrop(e) {
    e.preventDefault();
    handleMergeSelect(e.dataTransfer.files);
}

function handleMergeSelect(files) {
    if (files.length < 2) {
        showToast('Please select at least 2 PDFs', 'error');
        return;
    }
    
    pdfState.currentFiles = Array.from(files);
    const filesList = document.getElementById('mergeFilesList');
    filesList.innerHTML = '<h4>Files to Merge:</h4><ol>';
    
    for (let i = 0; i < pdfState.currentFiles.length; i++) {
        filesList.innerHTML += `<li style="margin: 8px 0;">${pdfState.currentFiles[i].name}</li>`;
    }
    filesList.innerHTML += '</ol>';
    document.getElementById('mergeBtn').style.display = 'block';
}

async function performMergePDF() {
    if (pdfState.currentFiles.length < 2) {
        showToast('Need at least 2 PDFs to merge', 'error');
        return;
    }
    
    if (!window.PDFLib) {
        showToast('PDF library not loaded yet, please try again', 'error');
        return;
    }
    
    try {
        showProgress('Merging PDFs...', 20);
        const mergedPdf = await window.PDFLib.PDFDocument.create();
        
        for (let i = 0; i < pdfState.currentFiles.length; i++) {
            const arrayBuffer = await pdfState.currentFiles[i].arrayBuffer();
            const pdf = await window.PDFLib.PDFDocument.load(arrayBuffer);
            const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
            copiedPages.forEach(page => mergedPdf.addPage(page));
            showProgress(`Merging PDFs...`, 20 + (70 * (i + 1) / pdfState.currentFiles.length));
        }
        
        showProgress('Finalizing...', 95);
        const mergedPdfBytes = await mergedPdf.save();
        const blob = new Blob([mergedPdfBytes], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'merged.pdf';
        a.click();
        URL.revokeObjectURL(url);
        showToast('✓ PDFs merged successfully', 'success');
    } catch (e) {
        showToast('Error merging PDFs: ' + e.message, 'error');
    }
}

// ========== COMPRESS IMAGE ==========
function loadCompressImage() {
    let html = `
        <div class="tool-form">
            <h3>🗜️ Compress Image</h3>
            <div class="image-upload-area" ondrop="handleImageDropForCompress(event)" ondragover="event.preventDefault()" ondragleave="event.preventDefault()">
                <div class="image-upload-content">
                    <div class="image-upload-icon">📸</div>
                    <h3>Upload Image</h3>
                    <p>JPG, PNG (Drag & drop or click)</p>
                </div>
                <input type="file" id="compressImageInput" accept=".jpg,.jpeg,.png" style="display: none;">
            </div>
            
            <div id="imagePreviewSection" style="display: none; margin-top: 15px;">
                <div style="display: flex; gap: 15px; flex-wrap: wrap;">
                    <div style="flex: 1; min-width: 200px;">
                        <label style="font-weight: bold; display: block; margin-bottom: 8px;">Original Image:</label>
                        <img id="originalPreview" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;" />
                        <div id="originalSize" style="margin-top: 8px; font-size: 0.9rem; color: #666;"></div>
                    </div>
                    <div style="flex: 1; min-width: 200px;">
                        <label style="font-weight: bold; display: block; margin-bottom: 8px;">Compressed Preview:</label>
                        <img id="compressedPreview" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px; display: none;" />
                        <div id="compressedSize" style="margin-top: 8px; font-size: 0.9rem; color: #666;"></div>
                    </div>
                </div>
                
                <div class="form-group" style="margin-top: 15px;">
                    <label>Compression Level:</label>
                    <div style="display: flex; gap: 10px;">
                        <button onclick="setCompressionLevel('0.3')" class="compression-btn" data-level="0.3" style="flex: 1;">🟢 High (30%)</button>
                        <button onclick="setCompressionLevel('0.6')" class="compression-btn" data-level="0.6" style="flex: 1;">🟡 Medium (60%)</button>
                        <button onclick="setCompressionLevel('0.8')" class="compression-btn" data-level="0.8" style="flex: 1;">🔴 Low (80%)</button>
                    </div>
                </div>
                
                <div style="margin-top: 15px; padding: 12px; background: #f0f0f0; border-radius: 4px;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                        <span>Size Reduction:</span>
                        <span id="sizeReduction" style="font-weight: bold; color: #28a745;">--%</span>
                    </div>
                </div>
                
                <button id="downloadCompressedBtn" onclick="downloadCompressedImage()" style="width: 100%; margin-top: 15px; display: none;">⬇️ Download Compressed Image</button>
            </div>
        </div>
    `;
    toolContent.innerHTML = html;
    setupCompressImageUpload();
}

let imageState = {
    originalFile: null,
    originalCanvas: null,
    compressedCanvas: null,
    compressionQuality: 0.6,
};

function setupCompressImageUpload() {
    const uploadArea = document.querySelector('.image-upload-area');
    const fileInput = document.getElementById('compressImageInput');
    
    if (uploadArea && fileInput) {
        uploadArea.addEventListener('click', () => fileInput.click());
        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                loadImageForCompression(file);
            }
        });
    }
}

function handleImageDropForCompress(event) {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files.length > 0) {
        const file = files[0];
        if (file.type.startsWith('image/')) {
            loadImageForCompression(file);
        } else {
            showToast('Please upload a valid image file (JPG, PNG)', 'error');
        }
    }
}

function loadImageForCompression(file) {
    const validTypes = ['image/jpeg', 'image/png'];
    if (!validTypes.includes(file.type)) {
        showToast('Only JPG and PNG images are supported', 'error');
        return;
    }
    
    imageState.originalFile = file;
    imageState.compressionQuality = 0.6; // Reset to medium
    
    const reader = new FileReader();
    reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
            document.getElementById('imagePreviewSection').style.display = 'block';
            document.getElementById('originalPreview').src = img.src;
            document.getElementById('originalSize').textContent = `📊 Size: ${getFileSizeString(file.size)}`;
            document.getElementById('compressedPreview').style.display = 'none';
            document.getElementById('compressedSize').textContent = '';
            document.getElementById('sizeReduction').textContent = '--%';
            document.getElementById('downloadCompressedBtn').style.display = 'none';
            
            // Reset button styles
            document.querySelectorAll('.compression-btn').forEach(btn => {
                btn.style.background = '';
                btn.style.transform = '';
            });
            
            // Create original canvas
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            imageState.originalCanvas = canvas;
            imageState.compressedCanvas = null;
            
            showToast('✓ Image loaded. Select compression level.', 'success');
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

function setCompressionLevel(quality) {
    imageState.compressionQuality = parseFloat(quality);
    
    // Update button styles
    document.querySelectorAll('.compression-btn').forEach(btn => {
        btn.style.background = '';
        btn.style.transform = '';
    });
    document.querySelector(`[data-level="${quality}"]`).style.background = '#667eea';
    document.querySelector(`[data-level="${quality}"]`).style.color = 'white';
    document.querySelector(`[data-level="${quality}"]`).style.transform = 'scale(1.05)';
    
    if (!imageState.originalCanvas) {
        showToast('Please load an image first', 'error');
        return;
    }
    
    showToast('⏳ Compressing image...', 'info');
    
    setTimeout(() => {
        compressImageCanvas();
    }, 100);
}

function compressImageCanvas() {
    if (!imageState.originalCanvas) return;
    
    const canvas = document.createElement('canvas');
    canvas.width = imageState.originalCanvas.width;
    canvas.height = imageState.originalCanvas.height;
    
    const ctx = canvas.getContext('2d');
    ctx.drawImage(imageState.originalCanvas, 0, 0);
    
    imageState.compressedCanvas = canvas;
    
    const compressedDataUrl = canvas.toDataURL('image/jpeg', imageState.compressionQuality);
    const compressedSize = Math.ceil((compressedDataUrl.length * 3) / 4);
    const originalSize = imageState.originalFile.size;
    const reduction = ((originalSize - compressedSize) / originalSize * 100).toFixed(1);
    
    document.getElementById('compressedPreview').src = compressedDataUrl;
    document.getElementById('compressedPreview').style.display = 'block';
    document.getElementById('compressedSize').textContent = `📊 Size: ${getFileSizeString(compressedSize)}`;
    document.getElementById('sizeReduction').textContent = `${reduction}%`;
    document.getElementById('downloadCompressedBtn').style.display = 'block';
    
    showToast(`✓ Image compressed by ${reduction}%`, 'success');
}

function getFileSizeString(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

function downloadCompressedImage() {
    if (!imageState.compressedCanvas) {
        showToast('Please compress an image first', 'error');
        return;
    }
    
    const link = document.createElement('a');
    link.href = imageState.compressedCanvas.toDataURL('image/jpeg', imageState.compressionQuality);
    
    const originalName = imageState.originalFile.name.replace(/\.[^.]+$/, '');
    link.download = `${originalName}-compressed.jpg`;
    link.click();
    
    showToast('✓ Image downloaded successfully', 'success');
}

// ========== IMAGE INFO ==========
function loadImageInfo() {
    let html = `
        <div class="tool-form">
            <h3>📏 Image Info</h3>
            <div class="image-upload-area" ondrop="handleImageInfoDrop(event)" ondragover="event.preventDefault()" ondragleave="event.preventDefault()">
                <div class="image-upload-content">
                    <div class="image-upload-icon">📸</div>
                    <h3>Upload Image</h3>
                    <p>JPG, PNG, WEBP (Drag & drop or click)</p>
                </div>
                <input type="file" id="imageInfoInput" accept=".jpg,.jpeg,.png,.webp" style="display: none;">
            </div>
            
            <div id="imageInfoResultSection" style="display: none; margin-top: 20px;">
                <div style="display: flex; gap: 15px; flex-wrap: wrap; margin-bottom: 20px;">
                    <div style="flex: 1; min-width: 200px;">
                        <img id="imageInfoPreview" style="max-width: 100%; border: 1px solid #ddd; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" />
                    </div>
                    <div style="flex: 1; min-width: 250px; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                        <h4 style="color: #667eea; margin-bottom: 15px; font-size: 1.1rem;">Image Details</h4>
                        <div style="display: flex; flex-direction: column; gap: 12px;">
                            <div style="padding: 10px; background: #f5f7fa; border-radius: 6px; border-left: 4px solid #667eea;">
                                <div style="font-size: 0.85rem; color: #666; margin-bottom: 4px;">📐 Width</div>
                                <div id="imageInfoWidth" style="font-size: 1.3rem; font-weight: bold; color: #333;">-</div>
                            </div>
                            <div style="padding: 10px; background: #f5f7fa; border-radius: 6px; border-left: 4px solid #764ba2;">
                                <div style="font-size: 0.85rem; color: #666; margin-bottom: 4px;">📐 Height</div>
                                <div id="imageInfoHeight" style="font-size: 1.3rem; font-weight: bold; color: #333;">-</div>
                            </div>
                            <div style="padding: 10px; background: #f5f7fa; border-radius: 6px; border-left: 4px solid #28a745;">
                                <div style="font-size: 0.85rem; color: #666; margin-bottom: 4px;">📦 File Size</div>
                                <div id="imageInfoSize" style="font-size: 1.3rem; font-weight: bold; color: #333;">-</div>
                            </div>
                            <div style="padding: 10px; background: #f5f7fa; border-radius: 6px; border-left: 4px solid #ffc107;">
                                <div style="font-size: 0.85rem; color: #666; margin-bottom: 4px;">📁 File Name</div>
                                <div id="imageInfoName" style="font-size: 1rem; font-weight: bold; color: #333; word-break: break-all;">-</div>
                            </div>
                            <div style="padding: 10px; background: #f5f7fa; border-radius: 6px; border-left: 4px solid #17a2b8;">
                                <div style="font-size: 0.85rem; color: #666; margin-bottom: 4px;">🔍 Format</div>
                                <div id="imageInfoFormat" style="font-size: 1.3rem; font-weight: bold; color: #333;">-</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    toolContent.innerHTML = html;
    setupImageInfoUpload();
}

let imageInfoState = {
    file: null,
    width: 0,
    height: 0
};

function setupImageInfoUpload() {
    const uploadArea = document.querySelector('.image-upload-area');
    const fileInput = document.getElementById('imageInfoInput');
    
    if (uploadArea && fileInput) {
        uploadArea.addEventListener('click', () => fileInput.click());
        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                loadImageInfoData(file);
            }
        });
    }
}

function handleImageInfoDrop(event) {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files.length > 0) {
        const file = files[0];
        if (file.type.startsWith('image/')) {
            loadImageInfoData(file);
        } else {
            showToast('Please upload a valid image file (JPG, PNG, WEBP)', 'error');
        }
    }
}

function loadImageInfoData(file) {
    const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (!validTypes.includes(file.type)) {
        showToast('Only JPG, PNG, and WEBP images are supported', 'error');
        return;
    }
    
    imageInfoState.file = file;
    
    const reader = new FileReader();
    reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
            imageInfoState.width = img.width;
            imageInfoState.height = img.height;
            
            // Display the results
            document.getElementById('imageInfoResultSection').style.display = 'block';
            document.getElementById('imageInfoPreview').src = img.src;
            document.getElementById('imageInfoWidth').textContent = `${img.width}px`;
            document.getElementById('imageInfoHeight').textContent = `${img.height}px`;
            document.getElementById('imageInfoSize').textContent = getFileSizeString(file.size);
            document.getElementById('imageInfoName').textContent = file.name;
            
            // Get format from MIME type
            const formatMap = {
                'image/jpeg': 'JPG',
                'image/png': 'PNG',
                'image/webp': 'WEBP'
            };
            document.getElementById('imageInfoFormat').textContent = formatMap[file.type] || 'Unknown';
            
            showToast('✓ Image info loaded successfully', 'success');
        };
        img.onerror = () => {
            showToast('Error loading image', 'error');
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

// ========== DISCOUNT CALCULATOR ==========
function loadDiscountCalculator() {
    let html = `
        <div class="tool-form">
            <h3>🧮 Discount Calculator</h3>
            <div class="form-group">
                <label>Original Price (€)</label>
                <input type="number" id="originalPrice" placeholder="Enter price" min="0" step="0.01" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 1rem;">
            </div>
            <div class="form-group">
                <label>Discount (%)</label>
                <input type="number" id="discountPercent" placeholder="Enter discount %" min="0" max="100" step="0.01" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 1rem;">
            </div>
            <div style="background: white; padding: 20px; border-radius: 8px; margin-top: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                    <div style="padding: 15px; background: #f5f7fa; border-radius: 6px;">
                        <div style="font-size: 0.85rem; color: #666;">Discount Amount</div>
                        <div id="discountAmount" style="font-size: 1.5rem; font-weight: bold; color: #28a745; margin-top: 5px;">€ 0.00</div>
                    </div>
                    <div style="padding: 15px; background: #f5f7fa; border-radius: 6px;">
                        <div style="font-size: 0.85rem; color: #666;">Final Price</div>
                        <div id="finalPrice" style="font-size: 1.5rem; font-weight: bold; color: #667eea; margin-top: 5px;">€ 0.00</div>
                    </div>
                </div>
            </div>
        </div>
    `;
    toolContent.innerHTML = html;
    document.getElementById('originalPrice').addEventListener('input', calculateDiscount);
    document.getElementById('discountPercent').addEventListener('input', calculateDiscount);
}

function calculateDiscount() {
    const price = parseFloat(document.getElementById('originalPrice').value) || 0;
    const discount = parseFloat(document.getElementById('discountPercent').value) || 0;
    const discountAmount = (price * discount) / 100;
    const finalPrice = price - discountAmount;
    
    document.getElementById('discountAmount').textContent = '€ ' + discountAmount.toFixed(2);
    document.getElementById('finalPrice').textContent = '€ ' + finalPrice.toFixed(2);
}

// ========== PERCENTAGE CALCULATOR ==========
function loadPercentageCalculator() {
    let html = `
        <div class="tool-form">
            <h3>🔢 Percentage Calculator</h3>
            <div class="form-group">
                <label>Number</label>
                <input type="number" id="percentNumber" placeholder="Enter number" step="0.01" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 1rem;">
            </div>
            <div class="form-group">
                <label>Percentage (%)</label>
                <input type="number" id="percentage" placeholder="Enter percentage" step="0.01" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 1rem;">
            </div>
            <div style="background: white; padding: 20px; border-radius: 8px; margin-top: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                <div style="text-align: center;">
                    <div style="font-size: 0.9rem; color: #666; margin-bottom: 8px;">Result</div>
                    <div id="percentResult" style="font-size: 2rem; font-weight: bold; color: #667eea;">0</div>
                </div>
            </div>
        </div>
    `;
    toolContent.innerHTML = html;
    document.getElementById('percentNumber').addEventListener('input', calculatePercentage);
    document.getElementById('percentage').addEventListener('input', calculatePercentage);
}

function calculatePercentage() {
    const number = parseFloat(document.getElementById('percentNumber').value) || 0;
    const percent = parseFloat(document.getElementById('percentage').value) || 0;
    const result = (number * percent) / 100;
    
    document.getElementById('percentResult').textContent = result.toFixed(2);
}

// ========== PASSWORD STRENGTH CHECKER ==========
function loadPasswordStrengthChecker() {
    let html = `
        <div class="tool-form">
            <h3>🔐 Password Strength Checker</h3>
            <div class="form-group">
                <label>Enter Password</label>
                <input type="password" id="passwordInput" placeholder="Enter password" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 1rem;">
            </div>
            <button onclick="togglePasswordVisibility('passwordInput')" style="width: 100%; padding: 10px; background: #ddd; border: none; border-radius: 6px; cursor: pointer; margin-bottom: 15px;">👁️ Show/Hide</button>
            <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                <div style="margin-bottom: 15px;">
                    <div style="font-size: 0.9rem; color: #666; margin-bottom: 8px;">Strength: <span id="strengthLevel" style="font-weight: bold;">-</span></div>
                    <div id="strengthBar" style="height: 8px; background: #ddd; border-radius: 4px; overflow: hidden;">
                        <div id="strengthFill" style="height: 100%; width: 0%; background: #999; transition: width 0.3s, background 0.3s;"></div>
                    </div>
                </div>
                <div id="strengthRules" style="font-size: 0.85rem; color: #666;"></div>
            </div>
        </div>
    `;
    toolContent.innerHTML = html;
    document.getElementById('passwordInput').addEventListener('input', checkPasswordStrength);
}

function checkPasswordStrength() {
    const password = document.getElementById('passwordInput').value;
    let strength = 0;
    const rules = [];
    
    if (password.length >= 8) { strength++; rules.push('✓ Length ≥ 8'); } else rules.push('✗ Length < 8');
    if (/[a-z]/.test(password)) { strength++; rules.push('✓ Lowercase'); } else rules.push('✗ No lowercase');
    if (/[A-Z]/.test(password)) { strength++; rules.push('✓ Uppercase'); } else rules.push('✗ No uppercase');
    if (/\d/.test(password)) { strength++; rules.push('✓ Numbers'); } else rules.push('✗ No numbers');
    if (/[!@#$%^&*]/.test(password)) { strength++; rules.push('✓ Symbols'); } else rules.push('✗ No symbols');
    
    let level = 'Weak', color = '#dc3545', percent = 20;
    if (strength >= 3) { level = 'Medium'; color = '#ffc107'; percent = 60; }
    if (strength >= 4) { level = 'Strong'; color = '#28a745'; percent = 100; }
    
    document.getElementById('strengthLevel').textContent = level;
    document.getElementById('strengthFill').style.width = percent + '%';
    document.getElementById('strengthFill').style.background = color;
    document.getElementById('strengthRules').innerHTML = rules.join('<br>');
}

// ========== RANDOM NAME PICKER ==========
function loadRandomNamePicker() {
    let html = `
        <div class="tool-form">
            <h3>🎯 Random Name Picker</h3>
            <div class="form-group">
                <label>Enter Names (comma or line separated)</label>
                <textarea id="namesList" placeholder="john, jane, bob&#10;or&#10;john&#10;jane&#10;bob" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 1rem; resize: vertical; min-height: 120px;"></textarea>
            </div>
            <button onclick="pickRandomName()" style="width: 100%; padding: 12px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 1rem; font-weight: bold;">🎲 Pick Random Name</button>
            <div id="resultBox" style="display: none; background: white; padding: 20px; border-radius: 8px; margin-top: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); text-align: center;">
                <div style="font-size: 0.9rem; color: #666; margin-bottom: 10px;">Selected Name</div>
                <div id="pickedName" style="font-size: 2.5rem; font-weight: bold; color: #667eea; margin-bottom: 15px;">-</div>
            </div>
        </div>
    `;
    toolContent.innerHTML = html;
}

function pickRandomName() {
    const input = document.getElementById('namesList').value;
    let names = [];
    
    if (input.includes(',')) {
        names = input.split(',').map(n => n.trim()).filter(n => n);
    } else {
        names = input.split('\n').map(n => n.trim()).filter(n => n);
    }
    
    if (names.length === 0) {
        showToast('Please enter at least one name', 'error');
        return;
    }
    
    const picked = names[Math.floor(Math.random() * names.length)];
    document.getElementById('resultBox').style.display = 'block';
    document.getElementById('pickedName').textContent = picked;
    showToast('✓ Name picked!', 'success');
}

// ========== DAYS BETWEEN DATES ==========
function loadDaysBetween() {
    let html = `
        <div class="tool-form">
            <h3>📅 Days Between Dates</h3>
            <div class="form-group">
                <label>Start Date</label>
                <input type="date" id="startDate" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 1rem;">
            </div>
            <div class="form-group">
                <label>End Date</label>
                <input type="date" id="endDate" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 1rem;">
            </div>
            <button onclick="calculateDays()" style="width: 100%; padding: 12px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 1rem; font-weight: bold;">Calculate Days</button>
            <div id="daysResult" style="display: none; background: white; padding: 20px; border-radius: 8px; margin-top: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); text-align: center;">
                <div style="font-size: 0.9rem; color: #666; margin-bottom: 10px;">Total Days</div>
                <div id="daysBetween" style="font-size: 2.5rem; font-weight: bold; color: #28a745;">0</div>
            </div>
        </div>
    `;
    toolContent.innerHTML = html;
}

function calculateDays() {
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    
    if (!startDate || !endDate) {
        showToast('Please select both dates', 'error');
        return;
    }
    
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    document.getElementById('daysResult').style.display = 'block';
    document.getElementById('daysBetween').textContent = diffDays;
    showToast('✓ Days calculated!', 'success');
}

// ========== USERNAME GENERATOR ==========
function loadUsernameGenerator() {
    let html = `
        <div class="tool-form">
            <h3>🔤 Username Generator</h3>
            <div class="form-group">
                <label>Name / Keyword</label>
                <input type="text" id="usernameKeyword" placeholder="e.g., john" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 1rem;">
            </div>
            <button onclick="generateUsernames()" style="width: 100%; padding: 12px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 1rem; font-weight: bold; margin-bottom: 15px;">Generate Suggestions</button>
            <div id="usernamesBox" style="background: white; padding: 15px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                <div id="suggestionsList" style="display: flex; flex-direction: column; gap: 8px;"></div>
            </div>
        </div>
    `;
    toolContent.innerHTML = html;
}

function generateUsernames() {
    const keyword = document.getElementById('usernameKeyword').value.trim();
    if (!keyword) {
        showToast('Please enter a name or keyword', 'error');
        return;
    }
    
    const suggestions = [
        keyword,
        keyword + Math.floor(Math.random() * 999),
        'the' + keyword,
        keyword + '_x',
        keyword + '007',
        keyword + 'pro',
        keyword + 'dev',
        '_' + keyword,
        keyword + '_',
        'mr_' + keyword
    ];
    
    const html = suggestions.map(u => `
        <div style="padding: 10px; background: #f5f7fa; border-radius: 6px; display: flex; justify-content: space-between; align-items: center;">
            <span style="font-family: monospace;">${u}</span>
            <button onclick="copyToClip('${u}')" style="padding: 6px 12px; background: #667eea; color: white; border: none; border-radius: 4px; cursor: pointer;">📋 Copy</button>
        </div>
    `).join('');
    
    document.getElementById('suggestionsList').innerHTML = html;
    showToast('✓ Usernames generated!', 'success');
}

function copyToClip(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast('✓ Copied: ' + text, 'success');
    });
}

// ========== CLIPBOARD CLEANER ==========
function loadClipboardCleaner() {
    let html = `
        <div class="tool-form">
            <h3>📋 Clipboard Cleaner</h3>
            <div class="form-group">
                <label>Enter Text to Clean</label>
                <textarea id="dirtyText" placeholder="Paste text here..." style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 1rem; resize: vertical; min-height: 150px;"></textarea>
            </div>
            <button onclick="cleanText()" style="width: 100%; padding: 12px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 1rem; font-weight: bold; margin-bottom: 15px;">🧹 Clean Text</button>
            <div style="background: white; padding: 15px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                <label style="font-weight: bold; display: block; margin-bottom: 10px;">Cleaned Result</label>
                <textarea id="cleanedText" readonly style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 1rem; resize: vertical; min-height: 150px; background: #f5f7fa;"></textarea>
                <button onclick="copyCleanedText()" style="width: 100%; margin-top: 10px; padding: 10px; background: #28a745; color: white; border: none; border-radius: 6px; cursor: pointer;">📋 Copy Cleaned Text</button>
            </div>
        </div>
    `;
    toolContent.innerHTML = html;
}

function cleanText() {
    const dirty = document.getElementById('dirtyText').value;
    const cleaned = dirty
        .replace(/\s+/g, ' ')
        .trim();
    
    document.getElementById('cleanedText').value = cleaned;
    showToast('✓ Text cleaned!', 'success');
}

function copyCleanedText() {
    const text = document.getElementById('cleanedText').value;
    navigator.clipboard.writeText(text).then(() => {
        showToast('✓ Copied to clipboard!', 'success');
    });
}

// ========== EXAM MARKS CALCULATOR ==========
function loadExamCalculator() {
    let html = `
        <div class="tool-form">
            <h3>📝 Exam Marks Calculator</h3>
            <div id="subjectsContainer" style="margin-bottom: 15px;"></div>
            <button onclick="addSubject()" style="width: 100%; padding: 10px; background: #ddd; border: none; border-radius: 6px; cursor: pointer; margin-bottom: 15px; font-weight: bold;">➕ Add Subject</button>
            <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                    <div style="padding: 15px; background: #f5f7fa; border-radius: 6px;">
                        <div style="font-size: 0.85rem; color: #666;">Total Marks</div>
                        <div id="totalMarks" style="font-size: 1.5rem; font-weight: bold; color: #667eea; margin-top: 5px;">0</div>
                    </div>
                    <div style="padding: 15px; background: #f5f7fa; border-radius: 6px;">
                        <div style="font-size: 0.85rem; color: #666;">Percentage</div>
                        <div id="totalPercent" style="font-size: 1.5rem; font-weight: bold; color: #28a745; margin-top: 5px;">0%</div>
                    </div>
                </div>
            </div>
        </div>
    `;
    toolContent.innerHTML = html;
    examSubjects = [];
    addSubject();
}

let examSubjects = [];

function addSubject() {
    const id = examSubjects.length;
    examSubjects.push({ name: '', marks: 0, total: 100 });
    const html = `
        <div id="subject-${id}" style="padding: 12px; background: white; border-radius: 6px; margin-bottom: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
            <div style="display: grid; grid-template-columns: 2fr 1fr 1fr auto; gap: 8px; align-items: end;">
                <input type="text" placeholder="Subject name" value="" onchange="updateMarks()" style="padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
                <input type="number" placeholder="Marks" value="0" min="0" onchange="updateMarks()" style="padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
                <input type="number" placeholder="Out of" value="100" min="1" onchange="updateMarks()" style="padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
                <button onclick="removeSubject(${id})" style="padding: 8px 12px; background: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer;">🗑️</button>
            </div>
        </div>
    `;
    document.getElementById('subjectsContainer').innerHTML += html;
}

function removeSubject(id) {
    const elem = document.getElementById('subject-' + id);
    if (elem) elem.remove();
    updateMarks();
}

function updateMarks() {
    let total = 0, outOf = 0;
    document.querySelectorAll('#subjectsContainer > div').forEach((elem, i) => {
        const inputs = elem.querySelectorAll('input');
        const marks = parseFloat(inputs[1].value) || 0;
        const outOfVal = parseFloat(inputs[2].value) || 100;
        total += marks;
        outOf += outOfVal;
    });
    const percent = outOf > 0 ? ((total / outOf) * 100).toFixed(1) : 0;
    document.getElementById('totalMarks').textContent = total;
    document.getElementById('totalPercent').textContent = percent + '%';
}

// ========== TEXT TO SPEECH ==========
function loadTextToSpeech() {
    let html = `
        <div class="tool-form">
            <h3>🔊 Text to Speech</h3>
            <div class="form-group">
                <label>Enter Text</label>
                <textarea id="speechText" placeholder="Enter text to be spoken..." style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 1rem; resize: vertical; min-height: 150px;"></textarea>
            </div>
            <div class="form-group">
                <label>Speed</label>
                <input type="range" id="speechSpeed" min="0.5" max="2" step="0.1" value="1" style="width: 100%;"> <span id="speedValue">1x</span>
            </div>
            <div class="form-group">
                <label>Pitch</label>
                <input type="range" id="speechPitch" min="0.5" max="2" step="0.1" value="1" style="width: 100%;"> <span id="pitchValue">1</span>
            </div>
            <button onclick="speakText()" style="width: 100%; padding: 12px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 1rem; font-weight: bold; margin-bottom: 10px;">🔊 Speak</button>
            <button onclick="stopSpeech()" style="width: 100%; padding: 12px; background: #dc3545; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 1rem; font-weight: bold;">⏹️ Stop</button>
        </div>
    `;
    toolContent.innerHTML = html;
    document.getElementById('speechSpeed').addEventListener('input', (e) => {
        document.getElementById('speedValue').textContent = e.target.value + 'x';
    });
    document.getElementById('speechPitch').addEventListener('input', (e) => {
        document.getElementById('pitchValue').textContent = e.target.value;
    });
}

function speakText() {
    const text = document.getElementById('speechText').value;
    if (!text.trim()) {
        showToast('Please enter some text', 'error');
        return;
    }
    
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = parseFloat(document.getElementById('speechSpeed').value);
        utterance.pitch = parseFloat(document.getElementById('speechPitch').value);
        speechSynthesis.speak(utterance);
        showToast('🔊 Speaking...', 'success');
    } else {
        showToast('Speech Synthesis not supported in this browser', 'error');
    }
}

function stopSpeech() {
    if ('speechSynthesis' in window) {
        speechSynthesis.cancel();
        showToast('Speech stopped', 'info');
    }
}

// ========== PRIME NUMBER CHECKER ==========
function loadPrimeChecker() {
    let html = `
        <div class="tool-form">
            <h3>🔢 Prime Number Checker</h3>
            <div class="form-group">
                <label>Enter Number</label>
                <input type="number" id="primeInput" placeholder="Enter a number" min="2" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 1rem;">
            </div>
            <button onclick="checkPrime()" style="width: 100%; padding: 12px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 1rem; font-weight: bold;">Check Prime</button>
            <div id="primeResult" style="display: none; background: white; padding: 20px; border-radius: 8px; margin-top: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); text-align: center;">
                <div style="font-size: 0.9rem; color: #666; margin-bottom: 10px;">Result</div>
                <div id="primeStatus" style="font-size: 2rem; font-weight: bold; color: #667eea;">-</div>
            </div>
        </div>
    `;
    toolContent.innerHTML = html;
}

function checkPrime() {
    const num = parseInt(document.getElementById('primeInput').value);
    if (isNaN(num) || num < 2) {
        showToast('Please enter a number greater than 1', 'error');
        return;
    }
    
    let isPrime = true;
    if (num === 2) isPrime = true;
    else if (num % 2 === 0) isPrime = false;
    else {
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
    
    const status = isPrime ? '✓ Prime' : '✗ Not Prime';
    const color = isPrime ? '#28a745' : '#dc3545';
    document.getElementById('primeResult').style.display = 'block';
    document.getElementById('primeStatus').textContent = status;
    document.getElementById('primeStatus').style.color = color;
    showToast(status, isPrime ? 'success' : 'info');
}

// ========== PALINDROME CHECKER ==========
function loadPalindromeChecker() {
    let html = `
        <div class="tool-form">
            <h3>🔁 Palindrome Checker</h3>
            <div class="form-group">
                <label>Enter Text or Number</label>
                <input type="text" id="palindromeInput" placeholder="e.g., 121 or racecar" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 1rem;">
            </div>
            <button onclick="checkPalindrome()" style="width: 100%; padding: 12px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 1rem; font-weight: bold;">Check Palindrome</button>
            <div id="palindromeResult" style="display: none; background: white; padding: 20px; border-radius: 8px; margin-top: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); text-align: center;">
                <div style="font-size: 0.9rem; color: #666; margin-bottom: 10px;">Result</div>
                <div id="palindromeStatus" style="font-size: 2rem; font-weight: bold; color: #667eea;">-</div>
            </div>
        </div>
    `;
    toolContent.innerHTML = html;
}

function checkPalindrome() {
    const input = document.getElementById('palindromeInput').value.trim();
    if (!input) {
        showToast('Please enter text or number', 'error');
        return;
    }
    
    const cleaned = input.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversed = cleaned.split('').reverse().join('');
    const isPalindrome = cleaned === reversed;
    
    const status = isPalindrome ? '✓ Palindrome' : '✗ Not Palindrome';
    const color = isPalindrome ? '#28a745' : '#dc3545';
    document.getElementById('palindromeResult').style.display = 'block';
    document.getElementById('palindromeStatus').textContent = status;
    document.getElementById('palindromeStatus').style.color = color;
    showToast(status, isPalindrome ? 'success' : 'info');
}

// ========== FACTORIAL CALCULATOR ==========
function loadFactorialCalculator() {
    let html = `
        <div class="tool-form">
            <h3>📊 Factorial Calculator</h3>
            <div class="form-group">
                <label>Enter Number (n!)</label>
                <input type="number" id="factorialInput" placeholder="e.g., 5" min="0" max="20" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 1rem;">
            </div>
            <button onclick="calculateFactorial()" style="width: 100%; padding: 12px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 1rem; font-weight: bold;">Calculate Factorial</button>
            <div id="factorialResult" style="display: none; background: white; padding: 20px; border-radius: 8px; margin-top: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                <div style="font-size: 0.85rem; color: #666; margin-bottom: 8px;">Result</div>
                <div id="factorialValue" style="font-size: 2rem; font-weight: bold; color: #667eea; word-break: break-all;">0</div>
            </div>
        </div>
    `;
    toolContent.innerHTML = html;
}

function calculateFactorial() {
    const num = parseInt(document.getElementById('factorialInput').value);
    if (isNaN(num) || num < 0) {
        showToast('Please enter a non-negative number', 'error');
        return;
    }
    if (num > 20) {
        showToast('Maximum value is 20', 'error');
        return;
    }
    
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    
    document.getElementById('factorialResult').style.display = 'block';
    document.getElementById('factorialValue').textContent = num + '! = ' + result;
    showToast('✓ Factorial calculated!', 'success');
}

// ========== FIBONACCI GENERATOR ==========
function loadFibonacciGenerator() {
    let html = `
        <div class="tool-form">
            <h3>🔢 Fibonacci Generator</h3>
            <div class="form-group">
                <label>Number of Terms</label>
                <input type="number" id="fibonacciTerms" placeholder="e.g., 5" min="1" max="30" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 1rem;">
            </div>
            <button onclick="generateFibonacci()" style="width: 100%; padding: 12px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 1rem; font-weight: bold;">Generate Sequence</button>
            <div id="fibonacciResult" style="display: none; background: white; padding: 20px; border-radius: 8px; margin-top: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                <div style="font-size: 0.85rem; color: #666; margin-bottom: 8px;">Fibonacci Sequence</div>
                <div id="fibonacciSeq" style="font-size: 1.1rem; font-weight: bold; color: #667eea; word-break: break-word; padding: 10px; background: #f5f7fa; border-radius: 4px;">0</div>
            </div>
        </div>
    `;
    toolContent.innerHTML = html;
}

function generateFibonacci() {
    const terms = parseInt(document.getElementById('fibonacciTerms').value);
    if (isNaN(terms) || terms < 1) {
        showToast('Please enter at least 1 term', 'error');
        return;
    }
    if (terms > 30) {
        showToast('Maximum is 30 terms', 'error');
        return;
    }
    
    const sequence = [];
    let a = 0, b = 1;
    for (let i = 0; i < terms; i++) {
        sequence.push(a);
        [a, b] = [b, a + b];
    }
    
    document.getElementById('fibonacciResult').style.display = 'block';
    document.getElementById('fibonacciSeq').textContent = sequence.join(', ');
    showToast('✓ Sequence generated!', 'success');
}

// ========== WORD COUNTER ==========
function loadWordCounter() {
    let html = `
        <div class="tool-form">
            <h3>🔤 Word Counter</h3>
            <div class="form-group">
                <label>Enter Text</label>
                <textarea id="counterText" placeholder="Paste your text here..." style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 1rem; resize: vertical; min-height: 150px;"></textarea>
            </div>
            <button onclick="countWords()" style="width: 100%; padding: 12px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 1rem; font-weight: bold; margin-bottom: 15px;">Count Words</button>
            <div id="counterResult" style="display: none; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                    <div style="padding: 15px; background: #f5f7fa; border-radius: 6px;">
                        <div style="font-size: 0.85rem; color: #666;">Words</div>
                        <div id="wordCount" style="font-size: 1.5rem; font-weight: bold; color: #667eea; margin-top: 5px;">0</div>
                    </div>
                    <div style="padding: 15px; background: #f5f7fa; border-radius: 6px;">
                        <div style="font-size: 0.85rem; color: #666;">Characters</div>
                        <div id="charCount" style="font-size: 1.5rem; font-weight: bold; color: #28a745; margin-top: 5px;">0</div>
                    </div>
                </div>
            </div>
        </div>
    `;
    toolContent.innerHTML = html;
    document.getElementById('counterText').addEventListener('input', countWords);
}

function countWords() {
    const text = document.getElementById('counterText').value;
    const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
    const characters = text.length;
    
    if (text.trim().length > 0) {
        document.getElementById('counterResult').style.display = 'block';
        document.getElementById('wordCount').textContent = words;
        document.getElementById('charCount').textContent = characters;
    }
}

// ========== TEXT REVERSER ==========
function loadTextReverser() {
    let html = `
        <div class="tool-form">
            <h3>🔁 Text Reverser</h3>
            <div class="form-group">
                <label>Enter Text</label>
                <input type="text" id="reverseInput" placeholder="e.g., hello" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 1rem;">
            </div>
            <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-top: 15px;">
                <div style="font-size: 0.85rem; color: #666; margin-bottom: 8px;">Reversed Text</div>
                <div id="reverseOutput" style="font-size: 1.3rem; font-weight: bold; color: #667eea; padding: 10px; background: #f5f7fa; border-radius: 4px; min-height: 40px; display: flex; align-items: center;">-</div>
                <button onclick="copyReverseText()" style="width: 100%; margin-top: 10px; padding: 10px; background: #28a745; color: white; border: none; border-radius: 6px; cursor: pointer;">📋 Copy Reversed</button>
            </div>
        </div>
    `;
    toolContent.innerHTML = html;
    document.getElementById('reverseInput').addEventListener('input', reverseText);
}

function reverseText() {
    const input = document.getElementById('reverseInput').value;
    const reversed = input.split('').reverse().join('');
    document.getElementById('reverseOutput').textContent = reversed || '-';
}

function copyReverseText() {
    const text = document.getElementById('reverseOutput').textContent;
    if (text !== '-') {
        navigator.clipboard.writeText(text).then(() => {
            showToast('✓ Copied!', 'success');
        });
    }
}

// ========== CASE CONVERTER ==========
function loadCaseConverter() {
    let html = `
        <div class="tool-form">
            <h3>🔠 Case Converter</h3>
            <div class="form-group">
                <label>Enter Text</label>
                <textarea id="caseInput" placeholder="Enter text..." style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 1rem; resize: vertical; min-height: 100px;"></textarea>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; margin-bottom: 15px;">
                <button onclick="convertCase('upper')" style="padding: 10px; background: #667eea; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">UPPER</button>
                <button onclick="convertCase('lower')" style="padding: 10px; background: #667eea; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">lower</button>
                <button onclick="convertCase('capitalize')" style="padding: 10px; background: #667eea; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">Capitalize</button>
            </div>
            <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                <div style="font-size: 0.85rem; color: #666; margin-bottom: 8px;">Result</div>
                <textarea id="caseOutput" readonly style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 1rem; resize: vertical; min-height: 100px; background: #f5f7fa;"></textarea>
                <button onclick="copyCaseText()" style="width: 100%; margin-top: 10px; padding: 10px; background: #28a745; color: white; border: none; border-radius: 6px; cursor: pointer;">📋 Copy Result</button>
            </div>
        </div>
    `;
    toolContent.innerHTML = html;
}

function convertCase(type) {
    const input = document.getElementById('caseInput').value;
    let output = '';
    
    if (type === 'upper') output = input.toUpperCase();
    else if (type === 'lower') output = input.toLowerCase();
    else if (type === 'capitalize') {
        output = input.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
    }
    
    document.getElementById('caseOutput').value = output;
    showToast('✓ Converted!', 'success');
}

function copyCaseText() {
    const text = document.getElementById('caseOutput').value;
    if (text) {
        navigator.clipboard.writeText(text).then(() => {
            showToast('✓ Copied!', 'success');
        });
    }
}

// ========== REMOVE DUPLICATE WORDS ==========
function loadRemoveDuplicates() {
    let html = `
        <div class="tool-form">
            <h3>🧹 Remove Duplicate Words</h3>
            <div class="form-group">
                <label>Enter Text</label>
                <textarea id="duplicateInput" placeholder="Enter text with duplicates..." style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 1rem; resize: vertical; min-height: 120px;"></textarea>
            </div>
            <button onclick="removeDuplicates()" style="width: 100%; padding: 12px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 1rem; font-weight: bold; margin-bottom: 15px;">Remove Duplicates</button>
            <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                <div style="font-size: 0.85rem; color: #666; margin-bottom: 8px;">Cleaned Text</div>
                <textarea id="duplicateOutput" readonly style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 1rem; resize: vertical; min-height: 120px; background: #f5f7fa;"></textarea>
                <button onclick="copyDuplicateText()" style="width: 100%; margin-top: 10px; padding: 10px; background: #28a745; color: white; border: none; border-radius: 6px; cursor: pointer;">📋 Copy Result</button>
            </div>
        </div>
    `;
    toolContent.innerHTML = html;
}

function removeDuplicates() {
    const input = document.getElementById('duplicateInput').value;
    const words = input.split(/\s+/).filter(w => w);
    const unique = [...new Set(words)];
    const output = unique.join(' ');
    
    document.getElementById('duplicateOutput').value = output;
    showToast('✓ Duplicates removed!', 'success');
}

function copyDuplicateText() {
    const text = document.getElementById('duplicateOutput').value;
    if (text) {
        navigator.clipboard.writeText(text).then(() => {
            showToast('✓ Copied!', 'success');
        });
    }
}

// ========== SETTINGS SYSTEM ==========
let appSettings = {
    theme: 'light',
    fontSize: 'medium',
    cardSize: 'normal',
    animationsEnabled: true,
    favorites: [],
    recentTools: [],
    usageStats: {}
};

function loadSettings() {
    const saved = localStorage.getItem('infinityKitSettings');
    if (saved) {
        try {
            appSettings = JSON.parse(saved);
        } catch (e) {
            console.log('Error loading settings, using defaults');
        }
    }
    updateSettingsUI();
}

function saveSettings() {
    localStorage.setItem('infinityKitSettings', JSON.stringify(appSettings));
}

function applySettings() {
    // Apply theme
    document.body.classList.remove('dark-mode');
    if (appSettings.theme === 'dark') {
        document.body.classList.add('dark-mode');
    }
    
    // Apply font size
    document.body.classList.remove('font-small', 'font-medium', 'font-large');
    document.body.classList.add('font-' + appSettings.fontSize);
    
    // Apply card size
    document.body.classList.remove('card-compact', 'card-normal');
    document.body.classList.add('card-' + appSettings.cardSize);
    
    // Apply animation preference
    document.body.classList.remove('no-animations');
    if (!appSettings.animationsEnabled) {
        document.body.classList.add('no-animations');
    }
}

function updateSettingsUI() {
    // Update theme radio buttons
    document.querySelector(`input[name="theme"][value="${appSettings.theme}"]`).checked = true;
    
    // Update font size radio buttons
    document.querySelector(`input[name="fontSize"][value="${appSettings.fontSize}"]`).checked = true;
    
    // Update card size radio buttons
    document.querySelector(`input[name="cardSize"][value="${appSettings.cardSize}"]`).checked = true;
    
    // Update animations toggle
    document.getElementById('animToggle').checked = appSettings.animationsEnabled;
    
    // Update favorites list
    updateFavoritesList();
}

function openSettings() {
    const settingsModal = document.getElementById('settingsModal');
    settingsModal.classList.add('show');
}

function closeSettings() {
    const settingsModal = document.getElementById('settingsModal');
    settingsModal.classList.remove('show');
}

// Close settings when clicking outside
const settingsModal = document.getElementById('settingsModal');
if (settingsModal) {
    settingsModal.addEventListener('click', (e) => {
        if (e.target === settingsModal) {
            closeSettings();
        }
    });
}

function setTheme(theme) {
    appSettings.theme = theme;
    saveSettings();
    applySettings();
    showToast(`✓ Theme changed to ${theme} mode`, 'success');
}

function setFontSize(size) {
    appSettings.fontSize = size;
    saveSettings();
    applySettings();
    showToast(`✓ Font size set to ${size}`, 'success');
}

function setCardSize(size) {
    appSettings.cardSize = size;
    saveSettings();
    applySettings();
    showToast(`✓ Card size changed to ${size}`, 'success');
}

function toggleAnimations() {
    appSettings.animationsEnabled = document.getElementById('animToggle').checked;
    saveSettings();
    applySettings();
    showToast(`✓ Animations ${appSettings.animationsEnabled ? 'enabled' : 'disabled'}`, 'success');
}

function updateFavoritesList() {
    const favoritesList = document.getElementById('favoritesList');
    
    if (appSettings.favorites.length === 0) {
        favoritesList.innerHTML = '<p style="color: #999; font-size: 0.9rem;">No favorites yet</p>';
        return;
    }
    
    const html = appSettings.favorites.map(toolId => {
        const tool = tools.find(t => t.id === toolId);
        const name = tool ? tool.name : toolId;
        return `
            <div class="favorite-item">
                <span>${name}</span>
                <button onclick="removeFavorite('${toolId}')">Remove</button>
            </div>
        `;
    }).join('');
    
    favoritesList.innerHTML = html;
}

function addFavorite(toolId) {
    if (!appSettings.favorites.includes(toolId)) {
        appSettings.favorites.push(toolId);
        saveSettings();
        showToast('✓ Added to favorites', 'success');
    }
}

function removeFavorite(toolId) {
    appSettings.favorites = appSettings.favorites.filter(id => id !== toolId);
    saveSettings();
    updateFavoritesList();
    showToast('✓ Removed from favorites', 'success');
}

function clearAllFavorites() {
    if (appSettings.favorites.length === 0) {
        showToast('No favorites to clear', 'info');
        return;
    }
    if (confirm('Are you sure you want to clear all favorites?')) {
        appSettings.favorites = [];
        saveSettings();
        updateFavoritesList();
        showToast('✓ All favorites cleared', 'success');
    }
}

function addRecentTool(toolId, toolName) {
    // Remove if already exists
    appSettings.recentTools = appSettings.recentTools.filter(t => t.id !== toolId);
    
    // Add to beginning
    appSettings.recentTools.unshift({ id: toolId, name: toolName, timestamp: Date.now() });
    
    // Keep only last 10
    appSettings.recentTools = appSettings.recentTools.slice(0, 10);
    
    // Update usage stats
    if (!appSettings.usageStats[toolId]) {
        appSettings.usageStats[toolId] = 0;
    }
    appSettings.usageStats[toolId]++;
    
    saveSettings();
}

function clearRecentTools() {
    if (appSettings.recentTools.length === 0) {
        showToast('No recent tools to clear', 'info');
        return;
    }
    if (confirm('Are you sure you want to clear recent tools history?')) {
        appSettings.recentTools = [];
        saveSettings();
        showToast('✓ Recent tools cleared', 'success');
    }
}

function clearUsageStats() {
    if (Object.keys(appSettings.usageStats).length === 0) {
        showToast('No usage stats to clear', 'info');
        return;
    }
    if (confirm('Are you sure you want to reset usage statistics?')) {
        appSettings.usageStats = {};
        saveSettings();
        showToast('✓ Usage stats reset', 'success');
    }
}

function resetAllSettings() {
    if (confirm('⚠️ This will reset ALL settings, preferences, and data. Are you sure?')) {
        if (confirm('Really reset everything? This cannot be undone.')) {
            appSettings = {
                theme: 'light',
                fontSize: 'medium',
                cardSize: 'normal',
                animationsEnabled: true,
                favorites: [],
                recentTools: [],
                usageStats: {}
            };
            localStorage.removeItem('infinityKitSettings');
            saveSettings();
            loadSettings();
            applySettings();
            showToast('✓ All settings reset to default', 'success');
        }
    }
}

// ========== ROTATE PDF ==========
function loadRotatePDF() {
    let html = `
        <div class="tool-form">
            <h3>🔄 Rotate PDF</h3>
            <div class="pdf-upload-area" ondrop="handlePDFDrop(event, 'rotate')" ondragover="event.preventDefault()" ondragleave="event.preventDefault()">
                <div class="pdf-upload-content">
                    <div class="pdf-upload-icon">📁</div>
                    <h3>Upload PDF to Rotate</h3>
                    <p>Drag & drop or click to select</p>
                </div>
                <input type="file" id="rotateFileInput" accept=".pdf" style="display: none;">
            </div>
            <div class="form-group" style="margin-top: 15px;">
                <label>Page Selection:</label>
                <select id="pageSelection">
                    <option value="all">All Pages</option>
                    <option value="odd">Odd Pages Only</option>
                    <option value="even">Even Pages Only</option>
                </select>
            </div>
            <div class="form-group">
                <label>Rotation:</label>
                <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                    <button onclick="performRotatePDF(90)" style="flex: 1; min-width: 100px;">↶ 90° Left</button>
                    <button onclick="performRotatePDF(270)" style="flex: 1; min-width: 100px;">↷ 90° Right</button>
                    <button onclick="performRotatePDF(180)" style="flex: 1; min-width: 100px;">↻ 180°</button>
                </div>
            </div>
            <button style="width: 100%; margin-top: 15px; display: none;" id="rotateBtn">🔄 Rotate PDF</button>
        </div>
    `;
    toolContent.innerHTML = html;
    setupRotatePDFUpload();
}

function setupRotatePDFUpload() {
    const fileInput = document.getElementById('rotateFileInput');
    const uploadArea = document.querySelector('.pdf-upload-area');
    
    if (uploadArea && fileInput) {
        uploadArea.addEventListener('click', () => fileInput.click());
        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                pdfState.rotateFile = file;
                document.getElementById('rotateBtn').style.display = 'block';
            }
        });
    }
}

async function performRotatePDF(angle) {
    if (!pdfState.rotateFile) {
        showToast('No PDF selected', 'error');
        return;
    }
    
    if (!window.PDFLib) {
        showToast('PDF library not loaded yet, please try again', 'error');
        return;
    }
    
    try {
        showProgress('Loading PDF...', 20);
        const arrayBuffer = await pdfState.rotateFile.arrayBuffer();
        const pdfDoc = await window.PDFLib.PDFDocument.load(arrayBuffer);
        const pageSelection = document.getElementById('pageSelection').value;
        
        const pages = pdfDoc.getPages();
        let rotatedCount = 0;
        
        pages.forEach((page, i) => {
            let shouldRotate = false;
            if (pageSelection === 'all') shouldRotate = true;
            else if (pageSelection === 'odd' && (i + 1) % 2 === 1) shouldRotate = true;
            else if (pageSelection === 'even' && (i + 1) % 2 === 0) shouldRotate = true;
            
            if (shouldRotate) {
                page.setRotation(window.PDFLib.degrees(angle + (page.getRotation().angle || 0)));
                rotatedCount++;
            }
        });
        
        showProgress('Finalizing...', 80);
        const rotatedBytes = await pdfDoc.save();
        downloadFile(rotatedBytes, 'rotated.pdf');
        showToast(`✓ Rotated ${rotatedCount} pages successfully`, 'success');
    } catch (e) {
        showToast('Error rotating PDF: ' + e.message, 'error');
    }
}

// ========== HELPER FUNCTIONS ==========
function togglePasswordVisibility(id) {
    const input = document.getElementById(id);
    if (input) {
        input.type = input.type === 'password' ? 'text' : 'password';
    }
}

function downloadFile(data, filename) {
    const blob = new Blob([data], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
}

function showProgress(message, percent) {
    showToast(`${message} ${percent}%`, 'info');
}

// ==================== UTILITY FUNCTIONS ====================
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
