import snap from './assets/snap.png';
import IITJ from './assets/IITJ.png';
import face_mask_detection from './assets/face_mask_detection.png';
import TrustworthyAI from './assets/TrustworthyAI.jpg';
import bitcoin from './assets/bitcoin.jpeg';
import book from './assets/book.jpeg';
import remote from './assets/remote.jpg';
import quantum from './assets/quantum.jpg';
import aiBanner from './assets/Artificial-Intelligence-and-Machine-Learning-in-Data-Analytics.png';
import aiGeneric from './assets/images.jpeg';

export const techStack = [
  // Languages
  { name: "Python", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "SQL (PostgreSQL)", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Java", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "C/C++", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },

  // ML / Deep Learning
  { name: "PyTorch", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
  { name: "TensorFlow", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "Keras", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg" },
  { name: "Scikit-Learn", link: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/1200px-Scikit_learn_logo_small.svg.png" },
  { name: "XGBoost", link: "https://upload.wikimedia.org/wikipedia/commons/6/69/XGBoost_logo.png" },
  { name: "OpenCV", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
  { name: "Pandas", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
  { name: "NumPy", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },

  // LLM & Agents
  { name: "LangChain", link: "https://python.langchain.com/img/brand/wordmark.png" },
  { name: "LangGraph", link: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4" },
  { name: "OpenAI", link: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" },
  { name: "Anthropic", link: "https://upload.wikimedia.org/wikipedia/commons/7/78/Anthropic_logo.svg" },
  { name: "Google Gemini", link: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg" },

  // Data & Infra
  { name: "Apache Spark", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg" },
  { name: "Apache Kafka", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" },
  { name: "Apache Airflow", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apacheairflow/apacheairflow-original.svg" },
  { name: "PostgreSQL", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Redis", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { name: "Elasticsearch", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg" },
  { name: "BigQuery", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },

  // Cloud & DevOps
  { name: "AWS", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
  { name: "GCP", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
  { name: "Docker", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Kubernetes", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name: "FastAPI", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  { name: "Git", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Linux", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
];

export const contactLinks = [
  { name: 'Github', url: 'https://img.icons8.com/doodle/40/000000/github--v1.png', link: 'https://github.com/anwesh2410' },
  { name: 'LinkedIn', url: 'https://img.icons8.com/doodle/40/000000/linkedin--v2.png', link: 'https://www.linkedin.com/in/anwesh-ale/' }
];

export const professionalExperienceData = [
  {
    name: 'Founding AI Engineer - Wisemate',
    role: 'Founding AI Engineer',
    company: 'Wisemate (London, UK · Remote)',
    duration: 'Mar 2026 - Present',
    desc: "First AI hire at an early-stage AI sales-agent platform; owning the 0→1 ML + data stack and shipping the MVP's ICP profiling and outbound outreach agents. Architecting agentic workflows with LangGraph, orchestrating multi-provider LLM calls (OpenAI, Anthropic, Gemini) behind a unified FastAPI service with provider fallback and cost routing. Building internal evaluation harnesses and collaborating directly with founders on product, model selection, and infrastructure decisions.",
    img: aiBanner
  },
  {
    name: 'Data Science Intern - Kavida.ai',
    role: 'Data Science Intern',
    company: 'Kavida.ai (Remote)',
    duration: 'Oct 2025 - Nov 2025',
    desc: "Shipped a production SQL Explainer agent translating LLM-generated SQL (from an upstream text-to-SQL agent) into plain-English explanations, improving analyst trust for an AI procurement-automation platform. Integrated Apache Flink for real-time stream processing of query telemetry, enabling continuous feedback on agent SQL quality.",
    img: aiGeneric
  },
  {
    name: 'AI Engineer Intern - ActionSync',
    role: 'AI Engineer Intern',
    company: 'ActionSync (Remote, India)',
    duration: 'Sep 2025 - Oct 2025',
    desc: "Architected an asynchronous data pipeline over Google Drive & OneDrive, cutting redundant processing by 80% via an intelligent change-detection module (MD5 checksums + Changes API + Redis state). Deployed a hybrid agentic search system (sole owner) with LangChain & OpenAI, arbitrating between keyword and vector search to reduce query latency by 40% across thousands of daily queries.",
    img: aiGeneric
  },
  {
    name: 'Data Science & Business Analyst Intern - Snapmint',
    role: 'Data Science & Business Analyst Intern',
    company: 'Snapmint Credit Advisory (Bengaluru)',
    duration: 'Jun 2025 - Aug 2025',
    desc: "Built an end-to-end ML pipeline over 700K+ user records at India's leading Zero-Cost EMI fintech (4M+ consumers, ~₹2,000 Cr in transactions). Trained XGBoost and neural-network propensity-scoring models (50+ engineered features, SMOTE for class imbalance) that lifted campaign CTR and purchase rate by 4x (300%) in a live A/B test. In model-driven pilot campaigns, reduced Customer Acquisition Cost by 40% and lifted sales originations by 25%; operationalized scoring via Airflow DAGs and shipped Redash + BigQuery dashboards.",
    img: snap
  },
  {
    name: 'R&D Intern (Computer Vision) - IIT-J × IARI',
    role: 'Research & Development Intern',
    company: 'IIT Jodhpur × Indian Agricultural Research Institute (IARI)',
    duration: 'Apr 2024 - Aug 2024',
    desc: "Research position under Dr. Bikash Santra, partnering with the Indian Agricultural Research Institute (IARI). Engineered a custom annotation and predictive-analysis tool with 30+ advanced features. Implemented 10 state-of-the-art ML models including RCNN, Faster R-CNN, YOLO, Mask R-CNN, U-Net, and DeepLab, improving segmentation accuracy from 61% to 71% IOU through iterative model refinement.",
    img: IITJ
  },
];

export const projectData = [
  {
    id: 1,
    title: "DyG-RAG: Dynamic-Graph Temporal QA System",
    description: "Bachelor Thesis under Dr. Binod Kumar. Extended the open-source RingBDStack/DyG-RAG framework into an event-centric dynamic-graph RAG system for temporal question answering over PDFs; added PDF ingestion, a Streamlit UI, 2D/3D interactive network visualizations with cluster detection, and multi-format export. Cut LLM operating cost by 96% vs. GPT-4o by integrating Gemini 2.5, achieved 100% event-extraction success on the benchmark set, and delivered 3–6 second query latency via GPU-accelerated BERT NER + cross-encoder reranking, plus 90% savings on repeated queries via multi-level caching.",
    technologies: "Python, Google Gemini 2.5, BERT NER (CUDA), NetworkX, NanoVectorDB, Streamlit, Plotly, PyVis",
    imageUrl: aiBanner,
    link: "https://github.com/anwesh2410"
  },
  {
    id: 2,
    title: "Real-Time Face Mask Detection with Ensemble Deep Learning",
    description: "Solved severe class imbalance (minority = 4%) and overfitting with a custom transfer-learning pipeline combining focal loss, progressive unfreezing, and an AdamW optimizer across a 4-model ensemble (ResNet18, ResNet50, YOLOv8, Faster R-CNN). Built a low-latency majority-voting inference system hitting 79.3% IOU at sub-100 ms on standard hardware, deployed as a live demo on Hugging Face.",
    technologies: "Python, PyTorch, OpenCV, Transfer Learning, Ensemble Learning, Computer Vision",
    imageUrl: face_mask_detection,
    link: "https://github.com/anwesh2410/Face-Mask-Detection"
  },
  {
    id: 3,
    title: "Community Reader Analytics — Lambda Architecture on Spark + Kafka",
    description: "Built a production-grade big-data pipeline using Lambda Architecture: Apache Spark for batch analytics over reader-behavior logs + Apache Kafka for real-time event streams; orchestrated via Docker Compose cutting deployment time by 40%. Designed a 3NF PostgreSQL warehouse with Elasticsearch for full-text and faceted search.",
    technologies: "Python, Apache Spark, Apache Kafka, Docker, PostgreSQL, Elasticsearch, DVC",
    imageUrl: book,
    link: "https://github.com/anwesh2410/Book-Recommendation-Site"
  },
  {
    id: 4,
    title: "Trustworthy AI — Explainable & Adversarially-Robust Classification",
    description: "Built a dual-attribution interpretation system for an extreme multi-label classifier covering 290+ labels with 65% dimensionality reduction while preserving explanation fidelity. Evaluated robustness under FGSM and PGD adversarial attacks and engineered defenses using an enhanced ECLARE algorithm over GNN-based label embeddings.",
    technologies: "Python, TensorFlow, scikit-learn, Label Embeddings, Graph Neural Networks, Adversarial Defense",
    imageUrl: TrustworthyAI,
    link: "https://github.com/anwesh2410/Explainable_AI"
  },
  {
    id: 5,
    title: "Bitcoin Price Prediction Using Machine Learning",
    description: "Comprehensive cryptocurrency price-prediction system built on multiple regression and time-series models. Implemented Elastic-Net, Polynomial Regression, Bayesian Regression, ARIMA, SARIMAX, and GARCH; achieved an optimal RMSE of 154.32 with SARIMAX on historical CoinMarketCap data.",
    technologies: "Python, Time Series Analysis, ARIMA, SARIMAX, GARCH, Regression Models",
    imageUrl: bitcoin,
    link: "https://github.com/anwesh2410/Bitcoin-Price-Prediction"
  },
  {
    id: 6,
    title: "Remote Desktop Application",
    description: "Client-server remote desktop application in Java built under Dr. Sumit Kalra. GUI implemented with Java Swing; achieved real-time screen updates with latency under 100 ms supporting up to 30 fps over TCP sockets.",
    technologies: "Java, Socket Programming, DataInputStream, DataOutputStream, ServerSocket, Swing GUI",
    imageUrl: remote,
    link: "https://github.com/anwesh2410/RemoteDesk"
  },
  {
    id: 7,
    title: "Plant Phenomics — Deep-Learning Image Segmentation",
    description: "Research project with IIT-J × IARI (Dr. Bikash Santra). Trained and compared U-Net, Mask R-CNN, DeepLab, Faster R-CNN, and YOLO for agricultural phenotype segmentation on a curated dataset of 158 specialized images; lifted IOU accuracy from 61% to 71% through iterative model tuning. Delivered a custom annotation + predictive-analysis tool with 30+ features for internal IARI researchers.",
    technologies: "Python, PyTorch, TensorFlow, OpenCV, U-Net, Mask R-CNN, DeepLab",
    imageUrl: IITJ,
    link: "https://github.com/anwesh2410"
  },
  {
    id: 8,
    title: "Optimizing Parameters for Quantum Computing",
    description: "Research project under Dr. Atul Kumar focusing on quantum-state optimization and entanglement-parameter tuning for enhanced quantum computing performance.",
    technologies: "Python, Qiskit, FidelityQuantumKernel",
    imageUrl: quantum,
  }
];
