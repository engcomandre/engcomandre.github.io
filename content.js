/* Conteúdo único dos 5 modelos. Edite aqui; todos os modelos refletem. */
window.SITE = {
  nome: "André Vieira da Silva",
  curto: "André Vieira",
  titulo: "Especialista de Engenharia de Software",
  local: "Fortaleza, Ceará",
  resumo:
    "Construo backends críticos em Java e Kotlin, com arquitetura hexagonal e orientada a eventos, para o setor financeiro. Fora do expediente, desenho e desenvolvo meus próprios produtos.",
  sobre: [
    "Engenheiro de computação pelo IFCE (2021), com mais de 10 anos em arquitetura distribuída e microsserviços. Passei por projetos financeiros críticos na Unicred, PagBank, PicPay e Banco Original, de PIX regulatório a marketplace de crédito.",
    "Desde maio de 2026 atuo como Especialista de Engenharia de Software na Sicredi. Antes, liderei tecnicamente os sistemas de Cobrança e Emissão da Unicred: governança de microsserviços, migração para Kubernetes, observabilidade e mentoria de times.",
  ],
  stats: [
    { valor: 10, sufixo: "+", rotulo: "anos de experiência" },
    { valor: 85, sufixo: "%+", rotulo: "de cobertura de testes nos projetos principais" },
    { valor: 25, sufixo: "%", rotulo: "de ganho de desempenho no Core PIX" },
    { valor: 35, sufixo: "%", rotulo: "menos tempo de atendimento operacional (Jarvis)" },
  ],
  links: {
    email: "sgavsnake@gmail.com",
    linkedin: "https://www.linkedin.com/in/andre-vieira-da-silva/",
    github: "https://github.com/engcomandre",
  },
  experiencia: [
    {
      empresa: "Sicredi",
      cargo: "Especialista de Engenharia de Software",
      periodo: "Mai 2026 – presente",
      atual: true,
      destaques: [],
    },
    {
      empresa: "Unicred do Brasil",
      cargo: "Tech Lead / Especialista Desenvolvedor",
      periodo: "Abr 2025 – Jan 2026",
      destaques: [
        "Liderança técnica dos sistemas de Cobrança e Emissão.",
        "Governança de microsserviços e migração para Kubernetes.",
        "Observabilidade com OpenTelemetry, Grafana, Prometheus e Loki.",
        "API de Instruções: baixa, alteração de vencimento e de dados do pagador em títulos.",
      ],
    },
    {
      empresa: "Invillia",
      cargo: "Senior Software Engineer",
      periodo: "Mar 2022 – Abr 2025",
      destaques: [
        "Backends de alta escala para PagBank e PicPay em Kotlin e Spring Boot, com arquitetura hexagonal e Kafka.",
        "Marketplace de Crédito PJ (PicPay): receita por fee na casa dos milhões em 3 meses e inadimplência sob gestão ativa.",
        "Autorizador de Cartões Múltiplos PJ (PicPay) e plataforma Jarvis (PagBank: KYC, fraude, PIX).",
        "Mesa de Cadastro Onboarding: compliance e chamados de cadastro reduzidos a quase zero.",
      ],
    },
    {
      empresa: "Banco Original",
      cargo: "Analista de Sistemas II",
      periodo: "Fev 2021 – Ago 2023",
      destaques: [
        "Referência técnica do Core PIX: limites e favoritos, em conformidade com o BACEN.",
        "Sistema entre os 10 melhores tempos de transação PIX; +25% de desempenho.",
        "Motor de análise de crédito PF: cerca de 20% menos registros de alto risco.",
      ],
    },
    {
      empresa: "IVIA",
      cargo: "Desenvolvedor",
      periodo: "Mai 2018 – Fev 2021",
      destaques: [
        "Sistemas críticos para uma das maiores operadoras de saúde do Brasil.",
        "PL/SQL, Oracle Forms e Reports, Java com Spring Boot e Android nativo.",
      ],
    },
  ],
  /* tipo: "autoral" (produto próprio em andamento) | "publico" (repositório aberto) */
  projetos: [
    {
      id: "sorteai",
      nome: "SorteAí",
      tipo: "autoral",
      estado: "MVP em desenvolvimento",
      descricao:
        "App Android de sorteios ao vivo: bingo 75 e 90, rifa, números, dados e lista de nomes. Funciona offline e sem cadastro, e cada resultado entra num registro encadeado por hash SHA-256 que permite provar a ordem do sorteio.",
      stack: ["Kotlin", "Android", "Room", "SHA-256"],
    },
    {
      id: "sorteai-plataforma",
      nome: "SorteAí Plataforma",
      tipo: "autoral",
      estado: "Especificação concluída",
      descricao:
        "SaaS da Fase 2: gestão de eventos de bingo com cartelas digitais e impressas, sorteio em tempo real, painéis e preço configurável por cliente. Planejado em 22 especificações.",
      stack: ["Kotlin", "Spring Boot", "Next.js", "PostgreSQL", "Keycloak"],
    },
    {
      id: "nao-pertube",
      nome: "Não Pertube",
      tipo: "autoral",
      estado: "MVP + prova de conceito",
      descricao:
        "App Android que rejeita automaticamente chamadas de números desconhecidos, 100% local. Uma versão em nuvem atende e grava recados, com criptografia AES-256-GCM e detecção de silêncio.",
      stack: ["Kotlin", "Android", "Python", "AES-256-GCM"],
    },
    {
      id: "campaignhub",
      nome: "CampaignHub",
      tipo: "autoral",
      estado: "Em estruturação",
      descricao:
        "Plataforma SaaS de campanhas promocionais, participantes e sorteios, em monorepo com backend modular hexagonal.",
      stack: ["Kotlin", "Spring Boot", "Next.js 15", "React 19"],
    },
    {
      id: "plat-orcamento",
      nome: "Plataforma Orçamento",
      tipo: "autoral",
      estado: "Fundação",
      descricao:
        "SaaS orçamento-first: cliente, produto, orçamento e PDF. Autenticação via Keycloak e persistência em PostgreSQL.",
      stack: ["Kotlin", "React", "Vite", "PostgreSQL"],
    },
    {
      id: "revisor-ai",
      nome: "Revisor AI",
      tipo: "autoral",
      estado: "Em andamento",
      descricao:
        "Assistente de revisão de Pull Requests: mostra o diff, recebe sugestões de agentes de IA (segurança, desempenho, estilo, arquitetura) e devolve a revisão consolidada ao GitHub.",
      stack: ["TypeScript", "IA", "GitHub API"],
    },
    {
      id: "agentic-sdlc",
      nome: "agentic-sdlc",
      tipo: "autoral",
      estado: "Em uso diário",
      descricao:
        "Kit de SDLC agêntico para Claude Code: 37 skills, regras, hooks e templates, com Spec Kit, harness de testes e gates de aprovação humana antes de qualquer código de feature.",
      stack: ["Python", "Shell", "Spec Kit", "CI/CD"],
    },
    {
      id: "local-infra",
      nome: "LocalDevelopmentInfrastructure",
      tipo: "publico",
      estado: "Público",
      descricao:
        "Infraestrutura local automatizada para desenvolver microsserviços, com Kubernetes na orquestração de containers.",
      stack: ["Shell", "Kubernetes"],
      link: "https://github.com/engcomandre/LocalDevelopmentInfrastructure",
    },
    {
      id: "smb",
      nome: "SMB-Server",
      tipo: "publico",
      estado: "Público",
      descricao: "Servidor SMB com upload e download de arquivos.",
      stack: ["Java"],
      link: "https://github.com/engcomandre/SMB-Server",
    },
    {
      id: "patterns",
      nome: "DesignPatterns",
      tipo: "publico",
      estado: "Público",
      descricao: "Estudos e implementações de padrões de projeto.",
      stack: ["Java"],
      link: "https://github.com/engcomandre/DesignPatterns",
    },
    {
      id: "batch",
      nome: "BatchMongoDbConfigTemplate",
      tipo: "publico",
      estado: "Público",
      descricao: "Modelo de configuração de Spring Batch com MongoDB.",
      stack: ["Java", "Spring Batch", "MongoDB"],
      link: "https://github.com/engcomandre/BatchMongoDbConfigTemplate",
    },
    {
      id: "chaves",
      nome: "ScriptCriacaoChaves",
      tipo: "publico",
      estado: "Público",
      descricao: "Script para criação de chaves.",
      stack: ["Python"],
      link: "https://github.com/engcomandre/ScriptCriacaoChaves",
    },
    {
      id: "next",
      nome: "Next-React-Plays",
      tipo: "publico",
      estado: "Público",
      descricao: "Experimentos com Next.js e React.",
      stack: ["TypeScript", "Next.js"],
      link: "https://github.com/engcomandre/Next-React-Plays",
    },
  ],
  competencias: [
    { grupo: "Linguagens", itens: ["Kotlin", "Java 8–21", "TypeScript", "Python", "C#", "PL/SQL"] },
    { grupo: "Backend", itens: ["Spring Boot", "Spring Security", "Spring Batch", "Hibernate", "Node.js", ".NET Core"] },
    { grupo: "Arquitetura", itens: ["Hexagonal", "DDD", "Microsserviços", "Event-driven", "Kafka", "REST"] },
    { grupo: "Dados", itens: ["Oracle", "MongoDB", "PostgreSQL", "MySQL", "SQLite"] },
    { grupo: "Plataforma", itens: ["Docker", "Kubernetes", "AWS", "GCP", "CI/CD", "OpenTelemetry", "Grafana", "Prometheus", "Loki"] },
    { grupo: "Frontend", itens: ["React", "Next.js", "Tailwind CSS"] },
  ],
};
