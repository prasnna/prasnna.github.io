// Enterprise Cognitive Architecture Diagram
export const architectureDiagram = `
graph TD
    User([Enterprise Users]) --> Gateway[API Gateway]

    subgraph Orchestration[Orchestration Layer]
        Gateway --> Router{Semantic Router}
        Router -->|Task| Workflow[Deterministic Workflows]
        Router -->|Query| RAG[RAG Orchestrator]
        Router -->|Action| Agent[Agent Swarm]

        Context[Context Manager] -.-> Router
        Context -.-> Agent
    end

    subgraph Cognitive[Cognitive Services]
        LLM[LLM Gateway<br/>Bedrock / Gemini / GPT]
        Guardrails[Enterprise Guardrails<br/>PII / Safety]

        Agent --> Guardrails
        Guardrails --> LLM
        RAG --> Guardrails
    end

    subgraph DataTools[Enterprise Data]
        VectorDB[(Vector KB)]
        SQL[(Data Warehouse)]
        APIs[Microservices]

        RAG --> VectorDB
        Agent --> APIs
        Workflow --> SQL
    end

    Observability[Observability & Audit]
    Orchestration -.-> Observability

    classDef layer fill:#1e293b,stroke:#475569,color:#cbd5e1,stroke-width:2px,stroke-dasharray:5 5
    classDef component fill:#0f172a,stroke:#3b82f6,color:#fff,stroke-width:1px
    classDef active fill:#1e3a8a,stroke:#60a5fa,color:#fff,stroke-width:2px
    classDef data fill:#0f172a,stroke:#10b981,color:#fff

    class Orchestration,Cognitive,DataTools layer
    class Gateway,Router,Workflow,RAG,Agent,Context,Guardrails,Observability component
    class LLM active
    class VectorDB,SQL,APIs data
`;
