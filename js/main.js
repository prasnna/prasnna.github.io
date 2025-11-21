import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
import { architectureDiagram } from './architecture-diagram.js';

// Initialize Mermaid
mermaid.initialize({
    startOnLoad: false,
    theme: 'dark',
    securityLevel: 'loose',
    themeVariables: {
        fontFamily: 'Inter',
        primaryColor: '#3b82f6',
        primaryTextColor: '#fff',
        primaryBorderColor: '#1d4ed8',
        lineColor: '#94a3b8',
        secondaryColor: '#1e293b',
        tertiaryColor: '#0f172a'
    }
});

// Render architecture diagram
// Render architecture diagram
document.addEventListener('DOMContentLoaded', async () => {
    const diagramContainer = document.querySelector('#architecture .mermaid');
    if (diagramContainer) {
        try {
            // Clear any existing content
            diagramContainer.innerHTML = '';

            // Render the diagram to SVG
            // mermaid.render(id, text) returns { svg }
            const { svg } = await mermaid.render('architecture-graph', architectureDiagram);

            // Insert the SVG
            diagramContainer.innerHTML = svg;
        } catch (error) {
            console.error('Mermaid rendering failed:', error);
            diagramContainer.innerHTML = `<div style="color: #ef4444; padding: 1rem; border: 1px solid #ef4444; border-radius: 0.5rem;">
                <strong>Error rendering diagram:</strong><br/>
                ${error.message}
            </div>`;
        }
    }
});
