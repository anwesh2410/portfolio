import snap from './assets/snap.png';
import IITJ from './assets/IITJ.png';
import face_mask_detection from './assets/face_mask_detection.png'; // Placeholder, replace with actual image path
import TrustworthyAI from './assets/TrustworthyAI.jpg'; // Placeholder, replace with actual image path
import bitcoin from './assets/bitcoin.jpeg'; // Placeholder, replace with actual image path
import book from './assets/book.jpeg'; // Placeholder, replace with actual image path
import remote from './assets/remote.jpg'; // Placeholder, replace with actual image path
import quantum from './assets/quantum.jpg'; // Placeholder, replace with actual image path

export const techStack = [
  // Programming Languages
  { name: "Python", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Java", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "C/C++", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "SQL", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" }, // Or a generic SQL icon
  { name: "PostgreSQL", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Shell Script", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" }, // Bash icon for shell
  { name: "RISC-V Assembly", link: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/RISC-V-logo.svg/1200px-RISC-V-logo.svg.png" }, // Placeholder, find a better icon if possible

  // Machine Learning & AI
  { name: "TensorFlow", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "PyTorch", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
  { name: "Keras", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg" },
  { name: "Scikit-Learn", link: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/1200px-Scikit_learn_logo_small.svg.png" },
  // Time-Series Analysis, Computer Vision, Transfer Learning, Ensemble Learning are concepts, not tools with icons usually.

  // Data Engineering
  { name: "Docker", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Apache Spark", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg" },
  { name: "Kafka", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" },
  { name: "Elasticsearch", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg" },
  // DVC - Data Version Control - find appropriate icon if available

  // DevOps & Cloud
  { name: "AWS", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
  { name: "Kubernetes", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  // REST APIs are a concept

  // Development Tools
  { name: "Git", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Linux", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { name: "OpenCV", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
  // Streamlit, Java Swing, HTML/CSS, Tkinter, JDBC, Oracle
  { name: "HTML5", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "VS Code", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "PyCharm", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg" },


  // Specialized Libraries
  { name: "Pandas", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
  { name: "NumPy", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
  // Langchain, Matplotlib, Seaborn
  { name: "Matplotlib", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" },
  { name: "Seaborn", link: "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg" }, // Official logo

  // Quantum Computing
  { name: "Qiskit", link: "https://qiskit.org/images/qiskit-logo.svg" }, // Official logo
];

export const contactLinks = [
  // { name: 'Stack Overflow', url: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/40/000000/external-stack-overflow-is-a-question-and-answer-site-for-professional-logo-color-tal-revivo.png', link: 'https://stackoverflow.com/users/11788531/aakash-sharma' },
  // { name: 'Instagram', url: 'https://img.icons8.com/doodle/40/000000/instagram-new--v2.png', link: 'https://www.instagram.com/aakashsh1999/' },
  { name: 'Github', url: 'https://img.icons8.com/doodle/40/000000/github--v1.png', link: 'https://github.com/anwesh2410' }, // Replace with your GitHub link
  { name: 'LinkedIn', url: 'https://img.icons8.com/doodle/40/000000/linkedin--v2.png', link: 'https://www.linkedin.com/in/anwesh-ale-ba893b25a/' } // Replace with your LinkedIn link
];

export const professionalExperienceData = [
  {
    name: 'Business Analyst Intern - Snapmint Credit Advisory Pvt. Ltd',
    role: 'Business Analyst Intern',
    company: 'Snapmint Credit Advisory Pvt. Ltd',
    duration: 'Jun 2025 - Aug 2025 (Expected)',
    desc: "Secured competitive internship with ₹25,000 monthly stipend at India's leading Zero Cost EMI fintech platform. Developing advanced data analytics and business intelligence capabilities in BNPL sector. Gaining expertise in credit risk assessment, consumer behavior analysis, and regulatory compliance. Working with platform serving 4+ million consumers and handling ₹2,000+ crores in transactions.",
    img: snap // Use the imported image variable
  },
  {
    name: 'Plant Phenomics R&D Intern',
    role: 'Plant Phenomics Research and Development Intern',
    company: 'IIT Jodhpur & IARI',
    duration: 'Apr 2024 - Aug 2024',
    desc: "Research position under Dr. Bikash Santra, partnering with Indian Agricultural Research Institute (IARI). Engineered custom annotation and predictive analysis tool with 30 advanced features. Generated high-quality dataset of 150 specialized images for model training. Implemented 10 state-of-the-art ML models including RCNN, Faster R-CNN, YOLO, Mask R-CNN, U-Net, and DeepLab. Achieved significant accuracy improvements: 61% initial accuracy progressing to 71% IOU accuracy.",
    img: IITJ // Use the imported image variable
  },
];

export const projectData = [
  {
    id: 1,
    title: "Real-Time Face Mask Detection with Ensemble Deep Learning",
    description: "Developed sophisticated ensemble system combining 4 deep learning architectures (ResNet18, ResNet50, YOLOv8, Faster R-CNN). Achieved 79.3% IOU accuracy across three categories on challenging imbalanced dataset. Processed 853 images with 4,072 labeled faces demonstrating robust performance. Implemented custom transfer learning pipeline with progressive unfreezing and layer-wise learning rates. Delivered real-time inference system with sub-100ms processing time for production deployment.",
    technologies: "Python, PyTorch, OpenCV, TensorFlow, Transfer Learning, CNN Architecture Design, Ensemble Learning",
    imageUrl: face_mask_detection , // Replace with actual project image
    link: "https://huggingface.co/spaces/eagle2346/facemask" // Replace with actual project link or GitHub repo
  },
  {
    id: 2,
    title: "Trustworthy AI Explainable Adversarial Classification",
    description: "Architected interpretation system with dual attribution methods enabling explanations across 290 labels. Achieved 65% dimensionality reduction while maintaining explanation quality. Engineered advanced defenses resulting in 118% resilience improvement against adversarial attacks. Created enhanced ECLARE algorithm reducing attack success rate by 72%.",
    technologies: "Python, TensorFlow, scikit-learn, Label Embeddings, Graph Neural Networks",
    imageUrl: TrustworthyAI , // Replace with actual project image
    link: "https://github.com/anwesh2410/Explainable_AI"
  },
  {
    id: 3,
    title: "Bitcoin Price Prediction Using Machine Learning",
    description: "Developed comprehensive prediction system using multiple regression and time series models. Leveraged historical data from CoinMarketCap for robust model training. Implemented diverse algorithms: Elastic-Net, Polynomial, Bayesian Regression, Time Series models. Achieved optimal RMSE of 154.32 with SARIMAX model demonstrating superior prediction accuracy.",
    technologies: "Python, Machine Learning, Time Series Analysis, ARIMA, SARIMAX, GARCH",
    imageUrl: bitcoin , // Replace with actual project image
    link: "https://github.com/anwesh2410/Bitcoin-Price-Prediction"
  },
  {
    id: 4,
    title: "Community Reader Analysis - Data Engineering Project",
    description: "Designed comprehensive data reliability framework and pipeline for reading habit analysis. Architected Lambda Architecture pipeline integrating batch processing with Spark and real-time streams with Kafka. Implemented Docker containerization reducing deployment time by 40%. Built normalized PostgreSQL database (3NF compliant) with Elasticsearch integration.",
    technologies: "Python, Docker, PostgreSQL, Elasticsearch, DVC, Spark, Kafka",
    imageUrl: book , // Replace with actual project image
    link: "https://github.com/anwesh2410/Community-Reader-Analysis"
  },
  {
    id: 5,
    title: "Remote Desktop Application",
    description: "Developed robust client-server remote desktop application in Java under Dr. Sumit Kalra. Constructed comprehensive GUI components with Java Swing for seamless user experience. Achieved real-time screen updates with latency under 100ms supporting up to 30 fps.",
    technologies: "Java, DataInputStream, DataOutputStream, ServerSocket, Socket Programming",
    imageUrl: remote , // Replace with actual project image
    link: "https://github.com/anwesh2410/RemoteDesk"
  },
  {
    id: 6,
    title: "Optimizing Parameters for Quantum Computing",
    description: "Research project under Dr. Atul Kumar focusing on quantum state optimization. Optimized entanglement states and parameters for enhanced quantum computing performance.",
    technologies: "Python, Qiskit, FidelityQuantumKernel",
    imageUrl: quantum, // Replace with actual project image
    // link: ""
  }
];