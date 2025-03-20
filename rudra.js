
document.getElementById('emergency-btn').addEventListener('click', () => {
    displayInfo('If you are in immediate danger, please call 108 or your local emergency number.');
    loadIcon('emergency', 'emergency.png');
});

document.getElementById('resources-btn').addEventListener('click', () => {
    displayInfo('<strong>Resources:</strong> Here are some helpful mental health resources:<br>' +
                '<a href="https://www.mentalhealth.gov" target="_blank">Mental Health Government Resources</a><br>' +
                '<a href="https://www.nami.org" target="_blank">National Alliance on Mental Illness (NAMI)</a><br>' +
                '<a href="https://www.suicidepreventionlifeline.org" target="_blank">National Suicide Prevention Lifeline</a>');
    loadIcon('resources', 'resources-icon.png');
});

document.getElementById('self-help-btn').addEventListener('click', () => {
    displayInfo('<strong>Self-Help Tools:</strong> Try these tools to support your mental health:<br>' +
                '<a href="https://www.headspace.com" target="_blank">Headspace (Meditation)</a><br>' +
                '<a href="https://www.calm.com" target="_blank">Calm (Relaxation)</a><br>' +
                '<a href="https://www.wysa.io" target="_blank">Wysa (AI-powered Mental Health Assistant)</a>');
    loadIcon('self-help', 'self-help-icon.png');
});

document.getElementById('chat-btn').addEventListener('click', () => {
    displayInfo('Click here to start a live chat with a mental health professional.');
    loadIcon('chat', 'chat-icon.png');
});

// Function to dynamically display information
function displayInfo(content) {
    const infoSection = document.getElementById('info-section');
    infoSection.innerHTML = content;
    infoSection.classList.add('active');
}

// Function to dynamically load an icon next to the button text
function loadIcon(buttonId, iconSrc) {
    const button = document.getElementById(`${buttonId}-btn`);
    const iconElement = document.createElement('img');
    iconElement.src = iconSrc;
    iconElement.alt = `${buttonId} icon`;
    iconElement.classList.add('button-icon');
    
    // Clear any previous icons and append the new one
    const existingIcon = button.querySelector('.button-icon');
    if (existingIcon) {
        button.removeChild(existingIcon);
    }

    button.insertBefore(iconElement, button.firstChild);
}