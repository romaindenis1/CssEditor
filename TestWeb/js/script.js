document.getElementById('apply-styles').addEventListener('click', function() {
    let textContent = document.getElementById('text-content').value;
    let backgroundColor = document.getElementById('background-color').value;
    let textColor = document.getElementById('text-color').value;
    let fontSize = document.getElementById('font-size').value;
    let fontFamily = document.getElementById('font-family').value;
    let outputText = document.getElementById('output-text');
    let cssCode = document.getElementById('css-code');

    let isBold = document.getElementById('bold').checked;
    let isItalic = document.getElementById('italic').checked;
    let isUnderline = document.getElementById('underline').checked;
    let isLineThrough = document.getElementById('line-through').checked;

    
    let booTheme = true;

    let cssText = '';

    if (textContent) {
        outputText.textContent = textContent;
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

    let justifyOption = document.querySelector('input[name="justify-option"]:checked'); // Get selected justify option
    if (justifyOption) {
        outputText.style.textAlign = justifyOption.value;
        cssText += `text-align: ${justifyOption.value};\n`;
    }

    outputText.style.fontWeight = isBold ? 'bold' : 'normal';
    cssText += isBold ? 'font-weight: bold;\n' : 'font-weight: normal;\n';

    outputText.style.fontStyle = isItalic ? 'italic' : 'normal';
    cssText += isItalic ? 'font-style: italic;\n' : 'font-style: normal;\n';

    if (isUnderline && isLineThrough) {
        outputText.style.textDecoration = 'underline line-through';
        cssText += 'text-decoration: underline line-through;\n';
    } else if (isUnderline) {
        outputText.style.textDecoration = 'underline';
        cssText += 'text-decoration: underline;\n';
    } else if (isLineThrough) {
        outputText.style.textDecoration = 'line-through';
        cssText += 'text-decoration: line-through;\n';
    } else {
        outputText.style.textDecoration = 'none';
        cssText += 'text-decoration: none;\n';
    }
    cssCode.textContent = `#output-text {\n${cssText}}`;
});

document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    const themeToggle = document.getElementById("theme-toggle");
    if (themeToggle.getAttribute("src") === "theme-dark.svg") {
        themeToggle.setAttribute("src", "theme-light.svg");
    } else {
        themeToggle.setAttribute("src", "theme-dark.svg");
    }
});

