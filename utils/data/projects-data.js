export const projectsData = [
    {
        id: 1,
        name: 'AI Powered Financial App',
        description: "My team and I built an end-to-end movie recommendation system using a hybrid collaborative filtering Multilayer Perceptron model with cold-start handling and ranking-based evaluation using Precision@K, Recall@K, NDCG@K, and Hit Rate@K. The system was deployed as containerized microservices with Docker Compose, supporting canary rollouts (80/20 traffic split), Kafka-based stream processing, and monitoring with Prometheus and Grafana on AWS. We automated data ingestion, preprocessing, evaluation, and deployment using GitLab CI/CD to ensure reproducible and production-ready MLOps workflows.",
        tools: ['GitLab', 'Kafka', 'Pytorch','Flask' ,'Pandas','Docker','AWS S3', 'AWS IAM', 'Grafana', 'Prometheus',  'Nginx'],
        role: 'Data Pipeline and Cloud Architecture',
        code: 'https://github.com/charbelB7/mlops-movie-recommendation-system',
        demo: '',
    },
    {
        id: 2,
        name: 'InftyThink With Cross-Chain Memory',
        description: 'My team and I worked on a memory-augmented LLM reasoning system that extends InftyThink with an embedding-based cache to reuse successful reasoning steps during inference. The system improves accuracy on structured benchmarks while exposing scalability and robustness limits in heterogeneous domains. This project emphasizes evaluation pipelines, retrieval design, and practical trade-offs in deploying reasoning-enhanced LLM systems.',
        tools: ['OpenAI API', 'Jupyter', "Matplotlib", 'Git'],
        role: 'Simulation Setup and Refinining',
        code: 'https://github.com/charbelB7/InftyThink-with-Cross-Chain-Memory',
        demo: '',
    },
    {
        id: 3,
        name: 'Bitcoin Trading Agent with Take Profit & Stop Loss',
        description: 'I developed a supervised learning time-series classification system using a Temporal Convolutional Network (TCN) in PyTorch to predict discrete market actions on Bitcoin/USDT data. The project includes a realistic backtesting and evaluation pipeline with position management, transaction cost modeling, and risk-aware metrics such as Sharpe ratio and maximum drawdown. An automated data ingestion and experiment pipeline enables reproducible training, evaluation, and visualization through Dockerized workflows.',
        tools: ['Docker', 'Pytorch', 'Pandas', 'CCXT API'],
        code: 'https://github.com/charbelB7/TCN_Bitcoin_Trader',
        role: '',
        demo: '',
    },
    {
        id: 4,
        name: 'Network Packet Classifier',
        description: "My team and I built a modular machine learning pipeline to classify network traffic from Ethernet and Wi-Fi packet captures using statistical feature extraction. The system processes large packet-level datasets and applies supervised learning models to perform application-level classification across services such as YouTube and Zoom. The project emphasizes scalable preprocessing, reproducible experimentation, and robust evaluation across diverse traffic sources.",
        tools: ['Pandas', 'WireShark', 'Jupyter' ,'Sci-kit learn'],
        code: 'https://github.com/charbelB7/NetworkPacketClassifier',
        demo: '',
        role: 'Data Collection, Preprocessing and Analysis'
    }
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
