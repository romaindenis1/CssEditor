document.addEventListener("DOMContentLoaded", function() {
    const applyButton = document.getElementById("apply-styles");
    const justifySelect = document.getElementById("justify-option");
    const alignSelect = document.getElementById("align-option");
    const flexDirectionSelect = document.getElementById("flex-direction");
    const flexWrapSelect = document.getElementById("flex-wrap");
    const gapInput = document.getElementById("gap");
    const previewContainer = document.querySelector(".preview");
    const cssCodeElement = document.getElementById("css-code");

    
    function applyLayoutStyles() {
        const justifyValue = justifySelect.value;
        const alignValue = alignSelect.value;
        const flexDirectionValue = flexDirectionSelect.value;
        const flexWrapValue = flexWrapSelect.value;
        const gapValue = gapInput.value;

        
        previewContainer.style.display = "flex"; 
        previewContainer.style.justifyContent = justifyValue || "flex-start"; 
        previewContainer.style.alignItems = alignValue || "stretch"; 
        previewContainer.style.flexDirection = flexDirectionValue || "row"; 
        previewContainer.style.flexWrap = flexWrapValue || "nowrap"; 
        previewContainer.style.gap = gapValue ? `${gapValue}px` : "0px"; 

        
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
});
