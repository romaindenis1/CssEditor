document.addEventListener("DOMContentLoaded", function() {
    const applyButton = document.getElementById("apply-styles");
    const justifySelect = document.getElementById("justify-option");
    const alignSelect = document.getElementById("align-option");
    const flexDirectionSelect = document.getElementById("flex-direction");
    const flexWrapSelect = document.getElementById("flex-wrap");
    const gapInput = document.getElementById("gap");
    const boxContainer = document.querySelector(".box-container");
    const cssCodeElement = document.getElementById("css-code");

    function applyLayoutStyles() {
        const justifyValue = justifySelect.value;
        const alignValue = alignSelect.value;
        const flexDirectionValue = flexDirectionSelect.value;
        const flexWrapValue = flexWrapSelect.value;
        const gapValue = gapInput.value;

        boxContainer.style.display = "flex";
        boxContainer.style.justifyContent = justifyValue || "flex-start";
        boxContainer.style.alignItems = alignValue || "stretch";
        boxContainer.style.flexDirection = flexDirectionValue || "row";
        boxContainer.style.flexWrap = flexWrapValue || "nowrap";
        boxContainer.style.gap = gapValue ? `${gapValue}px` : "0px";

        const cssCode = `
.preview {
    display: flex;
    justify-content: ${justifyValue || 'flex-start'};
    align-items: ${alignValue || 'stretch'};
    flex-direction: ${flexDirectionValue || 'row'};
    flex-wrap: ${flexWrapValue || 'nowrap'};
    gap: ${gapValue ? `${gapValue}px` : '0px'};
}

.box1 {
    background-color: #3498db;
}

.box2 {
    background-color: #e74c3c;
}

.box3 {
    background-color: #2ecc71;
}`;
        cssCodeElement.textContent = cssCode;
    }

    applyButton.addEventListener("click", function() {
        applyLayoutStyles();
    });

    document.getElementById('theme-toggle').addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');

        const themeToggle = document.getElementById('theme-toggle');
        if (document.body.classList.contains('dark-mode')) {
            themeToggle.src = 'theme-light.svg';
        } else {
            themeToggle.src = 'theme-dark.svg';
        }
    });
});
