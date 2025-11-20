export const projectsData = [
    {
        id: 1,
        name: 'Système de Gestion des Dossiers Médicaux Vétérinaires', 
        description: "J'ai développé une API RESTful robuste pour remplacer la gestion papier des dossiers médicaux d'animaux. Le système centralise l'historique médical, les traitements et les vaccinations. J'ai mis en place l'authentification JWT et la journalisation pour la traçabilité. Le projet utilise Spring Security et une base de données PostgreSQL.", tools: ['Java 17', 'Spring Boot', 'Spring Data JPA', 'Spring Security', 'PostgreSQL', 'JUnit 5', 'Mockito', 'Docker', 'AWS EC2'], 
        role: 'Backend Developer',
        code: '',
        demo: '',
    },
    {
        id: 2, 
        name: 'Plateforme de Gestion des Stages en Entreprise',
        description: "J'ai automatisé le suivi des stagiaires, de l'affectation à l'évaluation, en créant les services backend pour la gestion des profils et des rapports. L'application gère différents rôles (Stagiaire, Tuteur, RH) et utilise Spring Data REST pour les endpoints de gestion. Les notifications par email sont assurées par JavaMailSender.", tools: ['Java 17', 'Spring Boot', 'Spring Data REST', 'MySQL', 'Flyway', 'JavaMailSender', 'GitLab CI'], 
        role: 'Backend Developer',
        code: '',
        demo: '',
    },
    {
        id: 3, 
        name: 'Moteur de Collecte et d Analyse de Feedbacks Clients',
        description: "J'ai conçu un service asynchrone pour l'ingestion et la normalisation des retours clients multi-canaux. Le service utilise Spring Boot WebFlux pour une gestion non bloquante des requêtes et MongoDB pour la flexibilité des données non structurées. Redis est utilisé pour le caching des agrégats et AWS S3 pour le stockage des pièces jointes.", tools: ['Java 17', 'Spring Boot WebFlux', 'Spring Data MongoDB', 'MongoDB', 'Redis', 'Docker Compose', 'AWS S3', 'Rate Limiting'], 
        role: 'Backend Developer',
        code: '',
        role: 'Full Stack Developer',
        demo: '',
    },
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
// },