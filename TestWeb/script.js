// script.js
document.getElementById('apply-styles').addEventListener('click', function() {
    let textContent = document.getElementById('text-content').value;
    let backgroundColor = document.getElementById('background-color').value;
    let textColor = document.getElementById('text-color').value;
    let fontSize = document.getElementById('font-size').value;
    let fontFamily = document.getElementById('font-family').value;
    let outputText = document.getElementById('output-text');
    let cssCode = document.getElementById('css-code');

    let cssText = '';

    if (textContent) {
        outputText.textContent = textContent;
        cssText += `content: "${textContent}";\n`;
    }

    if (backgroundColor) {
        outputText.style.backgroundColor = backgroundColor;
        cssText += `background-color: ${backgroundColor};\n`;
    }

    if (textColor) {
        outputText.style.color = textColor;
        cssText += `color: ${textColor};\n`;
    }

    if (fontSize) {
        outputText.style.fontSize = fontSize;
        cssText += `font-size: ${fontSize};\n`;
    }

    if (fontFamily) {
        outputText.style.fontFamily = fontFamily;
        cssText += `font-family: ${fontFamily};\n`;
    }

    cssCode.textContent = `#output-text {\n${cssText}}`;
});

document.getElementById('theme-toggle').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
});
