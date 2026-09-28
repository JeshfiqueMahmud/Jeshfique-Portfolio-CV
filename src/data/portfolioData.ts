import { ProfileData, Project, SkillCategory, ExperienceItem } from '../types';

export const PROFILE_DATA: ProfileData = {
  name: 'Jeshfique Mahmud',
  title: 'Blockchain & C++ Developer | AI & Full-Stack Engineer',
  subtitles: [
    'Blockchain & C++ Developer — Bitcoin Core Architecture',
    'AI & Automation Engineer (Claude Code, Next.js, Vercel)',
    'Multimodal Transformer & Deep Learning Researcher',
    'B.Sc. in Computer Science & Engineering (North South University)'
  ],
  email: 'mjeshfique@gmail.com',
  phone: '+8801790137500',
  location: 'Mirpur DOHS, Dhaka, Bangladesh',
  github: 'JeshfiqueMahmud',
  githubUrl: 'https://github.com/JeshfiqueMahmud',
  bio: 'A passionate C++ & Blockchain Developer with expertise in Bitcoin Core architecture, consensus validation, custom Script execution (SegWit/P2SH), and multimodal AI fusion models. Experienced in building AI-assisted production websites (Claude Code, Next.js, Sanity CMS, Resend), distributed socket systems, and low-level system software.',
  stats: [
    { label: 'Core Systems', value: 'C++ & Bitcoin', detail: 'Script/EvalScript/VerifyScript' },
    { label: 'AI & Full-Stack', value: 'Claude Code & v0', detail: 'Next.js, Sanity CMS & Resend' },
    { label: 'ML Benchmark', value: '65.1% Acc / 0.72 AUC', detail: 'AutoGluon & TabPFN Models' },
    { label: 'Language Score', value: 'IELTS 7.5 eq.', detail: 'Fluent English & Native Bengali' }
  ],
  languages: [
    { name: 'Bengali', proficiency: 'Native' },
    { name: 'English', proficiency: 'Fluent (IELTS 7.5 equivalent)' }
  ],
  softSkills: [
    'Hard-working',
    'Eye for Detail',
    'Self-Learner',
    'Team Player',
    'Analytical Thinker',
    'Problem Solver',
    'Quick Learner'
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'ai_llm',
    title: 'AI & LLM Tools',
    iconName: 'Sparkles',
    color: 'from-purple-500 to-indigo-600',
    skills: [
      { name: 'Claude Code', level: 95, tag: 'AI Coding Agent', highlight: 'AI-assisted full-stack development & agentic workflows' },
      { name: 'v0 (Vercel)', level: 92, tag: 'AI App Builder', highlight: 'Generative UI development, rapid prototyping & shadcn/ui' },
      { name: 'Prompt Engineering', level: 92, tag: 'LLM Systems', highlight: 'Structured reasoning, context distillation & few-shot prompts' },
      { name: 'AI-Assisted Development', level: 94, tag: 'Engineering', highlight: 'Integrating LLMs into production pipelines & CI/CD' },
      { name: 'AutoGluon', level: 88, tag: 'AutoML', highlight: 'Stacked ensemble models & automated hyperparameter tuning' }
    ]
  },
  {
    id: 'blockchain_systems',
    title: 'Blockchain & Systems',
    iconName: 'Boxes',
    color: 'from-amber-500 to-orange-600',
    skills: [
      { name: 'Bitcoin Core', level: 95, tag: 'Core Arch', highlight: 'Interpreter behavior, opcode execution & consensus rules' },
      { name: 'C++ Systems', level: 95, tag: 'Low Level', highlight: 'EvalScript/VerifyScript debugging & memory safety' },
      { name: 'OP_SHA256 & P2SH', level: 92, tag: 'Bitcoin Script', highlight: 'Custom unlocking logic & script verification' },
      { name: 'SegWit & UTXO', level: 90, tag: 'Consensus', highlight: 'Replace-by-fee, witness validation & UTXO handling' },
      { name: 'Regtest & P2P Net', level: 90, tag: 'Simulation', highlight: 'Multi-node regtest consensus & mempool policies' },
      { name: 'TCP Sockets', level: 88, tag: 'Networking', highlight: 'Coordinator-worker distributed task execution over TCP' },
      { name: 'BIP152 & Schnorr', level: 86, tag: 'Protocol', highlight: 'Compact blocks, Schnorr verification & Bitcoin P2P' },
      { name: 'Linux Debugging', level: 88, tag: 'Systems', highlight: 'GDB opcode tracing, stack inspection & CLI tools' }
    ]
  },
  {
    id: 'languages',
    title: 'Programming Languages',
    iconName: 'Code2',
    color: 'from-blue-500 to-indigo-600',
    skills: [
      { name: 'Python', level: 95, tag: 'ML / Scripting', highlight: 'PyTorch, Transformers, AutoGluon, Sockets, Pandas' },
      { name: 'TypeScript', level: 92, tag: 'Modern Web', highlight: 'Next.js App Router, strict types, schema validation' },
      { name: 'C / C++', level: 95, tag: 'Primary Low-Level', highlight: 'High performance systems, Bitcoin Core interpreter & opcodes' },
      { name: 'JavaScript', level: 90, tag: 'Full Stack', highlight: 'Modern ES6+, Node.js, async APIs & browser DOM' },
      { name: 'PHP', level: 82, tag: 'Backend', highlight: 'CodeIgniter MVC, REST APIs, dynamic invoicing' },
      { name: 'Java', level: 80, tag: 'OOP', highlight: 'Object-oriented architecture, data structures & algorithms' },
      { name: 'ARM Assembly', level: 75, tag: 'Low-Level', highlight: 'Register manipulation, low-level stack handling & memory' }
    ]
  },
  {
    id: 'frameworks_ml',
    title: 'Frameworks & Machine Learning',
    iconName: 'BrainCircuit',
    color: 'from-emerald-500 to-teal-600',
    skills: [
      { name: 'Next.js', level: 92, tag: 'Web Framework', highlight: 'App Router, Server Components & Vercel deployment' },
      { name: 'React', level: 92, tag: 'UI Library', highlight: 'Hooks, responsive states, custom components & shadcn/ui' },
      { name: 'Tailwind CSS', level: 94, tag: 'Styling', highlight: 'Modern utility styling, fluid animations & design tokens' },
      { name: 'PyTorch', level: 88, tag: 'Deep Learning', highlight: 'Multimodal fusion architectures & GPU training loops' },
      { name: 'Transformers & BERT', level: 88, tag: 'NLP', highlight: 'Pretrained text representations & classification fine-tuning' },
      { name: 'ResNeXt-50 & OpenCV', level: 86, tag: 'Computer Vision', highlight: 'Visual feature extraction, augmentation & processing' },
      { name: 'Scikit-Learn & XGBoost', level: 88, tag: 'Data Science', highlight: 'TabPFN, Random Forest, SVM & stacked ensembles' },
      { name: 'Streamlit', level: 90, tag: 'AI Web Apps', highlight: 'Real-time prediction interactive dashboards' },
      { name: 'CodeIgniter', level: 85, tag: 'PHP MVC', highlight: 'Full-featured POS app with RBAC & invoice generation' },
      { name: 'NumPy & Pandas', level: 92, tag: 'Data Wrangling', highlight: 'Feature engineering, normalization & merge workflows' }
    ]
  },
  {
    id: 'apis_integrations',
    title: 'APIs & Integrations',
    iconName: 'Cpu',
    color: 'from-cyan-500 to-blue-600',
    skills: [
      { name: 'REST APIs', level: 92, tag: 'API Architecture', highlight: 'JSON endpoint architecture, status codes & schema design' },
      { name: 'JSON-RPC', level: 88, tag: 'Remote Execution', highlight: 'Bitcoin Core RPC commands & node protocol interaction' },
      { name: 'Resend Email API', level: 90, tag: 'Email Infrastructure', highlight: 'Transactional enquiry endpoint with delivery logging' },
      { name: 'Sanity Headless CMS', level: 88, tag: 'Content Engine', highlight: 'Embedded Studio setup & GROQ content queries' },
      { name: 'Form Validation & Security', level: 90, tag: 'Defense', highlight: 'Honeypot spam checks, rate limiting & input sanitization' },
      { name: 'Authentication & RBAC', level: 86, tag: 'Access Control', highlight: 'Role-based access control, session & token security' }
    ]
  },
  {
    id: 'database_systems',
    title: 'Database Systems',
    iconName: 'Database',
    color: 'from-violet-500 to-purple-600',
    skills: [
      { name: 'MySQL', level: 88, tag: 'Relational DB', highlight: 'Multi-business schema design, indexes, joins & transactions' },
      { name: 'SQLite', level: 85, tag: 'Embedded DB', highlight: 'Lightweight local database & fast file-based persistence' }
    ]
  },
  {
    id: 'tools_platforms',
    title: 'Tools & Platforms',
    iconName: 'Wrench',
    color: 'from-pink-500 to-rose-600',
    skills: [
      { name: 'Git & GitHub', level: 94, tag: 'Version Control', highlight: 'Git branching, collaborative PRs, actions & repositories' },
      { name: 'Vercel', level: 92, tag: 'Deployment', highlight: 'CI/CD continuous deployment, env configuration & SEO rules' },
      { name: 'Docker', level: 82, tag: 'Containerization', highlight: 'Containerized environments & reproducible runtime setup' },
      { name: 'Postman', level: 88, tag: 'Testing', highlight: 'API contract testing, environment variables & automated tests' },
      { name: 'Linux / Bash', level: 90, tag: 'OS & CLI', highlight: 'Environment administration, shell scripting & CLI debugging' },
      { name: 'Cisco Packet Tracer', level: 88, tag: 'Network Simulation', highlight: 'IP subnetting, static routing, DHCP & DNS simulation' },
      { name: 'VS Code', level: 95, tag: 'Development IDE', highlight: 'Primary editor setup with TypeScript & C++ toolchains' },
      { name: 'Google Colab & Kaggle', level: 88, tag: 'Cloud Compute', highlight: 'Cloud GPU acceleration, model benchmarking & datasets' },
      { name: 'Overleaf (LaTeX)', level: 88, tag: 'Documentation', highlight: 'Academic paper formatting & engineering thesis writing' }
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'acts_asset_website',
    title: 'ACTS Asset Ltd. — Company Website',
    subtitle: 'Client Project for Real-Estate Developer (Claude Code & Next.js)',
    period: '2026',
    institution: 'Client Project (Freelance)',
    tools: ['Claude Code', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Sanity CMS', 'Resend API', 'Vercel'],
    description: [
      'Built a full company website for a Dhaka real-estate developer using AI-assisted development with Claude Code.',
      'Integrated Sanity as a headless CMS with GROQ queries and an embedded Studio so the client’s team can edit content.',
      'Built an enquiry API endpoint that validates form submissions and emails them via the Resend API, with honeypot spam checks, rate limiting, and privacy-safe logging.',
      'Set up environment-based configuration for Vercel deployments and SEO: sitemap, robots rules, structured data, and Open Graph images.',
      'Wrote a pre-launch checklist documenting placeholder content, deployment steps, and open client questions.'
    ],
    githubUrl: 'https://github.com/JeshfiqueMahmud/acts-asset',
    category: 'ai_automation',
    badge: 'Freelance Client',
    featured: true,
    stars: 18,
    architectureDetails: 'Claude Code AI Dev -> Next.js App Router -> Sanity Headless CMS (GROQ) -> Resend API Enquiry Endpoints -> Vercel Production Deploy'
  },
  {
    id: 'personal_portfolio_website',
    title: 'Personal Portfolio Website',
    subtitle: 'AI-Crafted Interactive Portfolio (v0, Next.js, shadcn/ui)',
    period: '2026',
    institution: 'Personal Project',
    tools: ['v0 (AI app builder)', 'Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Vercel'],
    description: [
      'Generated and refined a portfolio site with an AI app builder, keeping all CV content in a single typed data file.',
      'Configured continuous deployment so every merge to main publishes automatically on Vercel.'
    ],
    githubUrl: 'https://github.com/JeshfiqueMahmud',
    category: 'ai_automation',
    badge: 'Personal Project',
    featured: true,
    stars: 24,
    architectureDetails: 'v0 AI Component Generation -> Next.js / TypeScript -> Single Typed Data File Architecture -> Automated CI/CD Vercel Deploy'
  },
  {
    id: 'cricket_ml_prediction',
    title: 'ODI Cricket Match Outcome Prediction',
    subtitle: 'End-to-End ML Pipeline on ~7,000 Matches (AutoGluon, XGBoost, TabPFN)',
    period: '2025',
    institution: 'North South University',
    tools: ['Python', 'Pandas', 'AutoGluon', 'XGBoost', 'TabPFN', 'Scikit-Learn', 'SVM'],
    description: [
      'Built an end-to-end ML pipeline predicting ODI match winners from pre-match data across ~7,000 matches.',
      'Enriched match records with historical weather data by normalizing dates and venues and merging both sources.',
      'Compared SVM, XGBoost, Random Forest, TabPFN, and an AutoGluon stacked ensemble; final model reached 65.1% accuracy and 0.72 ROC AUC.'
    ],
    githubUrl: 'https://github.com/JeshfiqueMahmud/Cricket_ML_project',
    category: 'ai_ml',
    badge: 'Machine Learning',
    featured: true,
    stars: 20,
    architectureDetails: '~7,000 Matches + Historical Weather Normalization -> Feature Pipeline -> SVM / XGBoost / TabPFN / AutoGluon Ensemble -> 65.1% Acc & 0.72 ROC AUC'
  },
  {
    id: 'fake_news_multimodal',
    title: 'Multimodal Fake News Detection AI',
    subtitle: 'Deep Learning Fusion Model combining BERT & ResNeXt-50',
    period: '2025',
    institution: 'North South University (CSE499 Capstone Thesis)',
    supervisor: 'Supervised by Senior Lecturer Mr. Rifat Ahmed Hassan & Guided by Md. Shahriar Hussain',
    tools: ['BERT', 'ResNeXt-50', 'PyTorch', 'Transformers', 'OpenCV', 'Streamlit', 'Python'],
    description: [
      'Investigated fake news classification using both text and image data with deep learning fusion models.',
      'Designed the ResNeXt-50 image network with a custom classifier head, fused with BERT text features for fake news classification.',
      'Tuned optimizer, learning rate, scheduler, and label smoothing; led training and validation over 25 epochs.',
      'Built preprocessing with tokenization, image augmentation, and oversampling for class balance; deployed a Streamlit app for real-time prediction.',
      'Evaluated model performance using confusion matrix, accuracy, and precision-recall scores as part of CSE499.'
    ],
    githubUrl: 'https://github.com/JeshfiqueMahmud/Fake_News_detection_using_multimodality',
    category: 'ai_ml',
    badge: 'Senior Thesis',
    featured: true,
    stars: 32,
    architectureDetails: 'BERT Text Encoder (768d) + ResNeXt-50 Vision (2048d) -> Custom Fusion Classifier Head -> 25 Epochs Training -> Streamlit Live Web App'
  },
  {
    id: 'bitcoin_core_interpreter',
    title: 'Bitcoin Core Interpreter & Custom Scripting',
    subtitle: 'Opcode Tracing, SegWit & P2SH Validation inside EvalScript',
    period: 'May 2025 – July 2026',
    institution: 'SMC Labs',
    tools: ['C++', 'Bitcoin Core', 'Regtest', 'Linux GDB', 'BIP152', 'JSON-RPC', 'OP_CODES'],
    description: [
      'Modified Bitcoin Core interpreter behavior, opcode execution paths, and transaction validation logic.',
      'Developed custom scripts using OP_SHA256, P2SH, SegWit unlocking logic inside EvalScript/VerifyScript.',
      'Built multi-node regtest networks simulating real peer-to-peer consensus, mempool policies, and validation flows.',
      'Instrumented opcode tracing, improving debugging visibility for script execution paths and stack behavior.',
      'Researched UTXO handling, BIP152 compact blocks, replace-by-fee, Schnorr verification, and internal Bitcoin networking mechanisms.'
    ],
    githubUrl: 'https://github.com/JeshfiqueMahmud',
    category: 'blockchain',
    badge: 'Core Architecture',
    featured: true,
    stars: 45,
    architectureDetails: 'Bitcoin Core C++ Interpreter -> Modified EvalScript/VerifyScript -> Custom OP_SHA256 & SegWit Unlocking -> Regtest Multi-Node P2P Consensus'
  },
  {
    id: 'distributed_task_executor',
    title: 'Distributed Task Executor using Python Sockets',
    subtitle: 'TCP Coordinator–Worker Distributed Architecture',
    period: '2025',
    institution: 'North South University',
    tools: ['Python', 'TCP Sockets', 'Distributed Computing', 'Networking'],
    description: [
      'Built a coordinator–worker system where a coordinator groups tasks by type and dispatches them to specialized worker nodes over TCP.',
      'Implemented completion acknowledgements and graceful shutdown signals; documented the architecture and run steps.'
    ],
    githubUrl: 'https://github.com/JeshfiqueMahmud/Distributed-Task-Executor-using-Python-Sockets',
    category: 'networking',
    badge: 'Distributed Systems',
    featured: true,
    stars: 15,
    architectureDetails: 'Coordinator Node -> Task Queue Grouping -> TCP Socket Dispatch -> Specialized Worker Nodes -> ACKs & Graceful Shutdown'
  },
  {
    id: 'enterprise_network_simulation',
    title: 'Enterprise Network Simulation — CSE 438L',
    subtitle: 'Multi-Department Topology with Routing, DHCP & DNS',
    period: '2024',
    institution: 'North South University (Computer Networks Lab)',
    supervisor: 'Guided by Dr. Shamim Al Mamun',
    tools: ['Cisco Packet Tracer', 'IP Subnetting', 'Static Routing', 'DHCP', 'DNS'],
    description: [
      'Designed and simulated an enterprise network with 3 routers, 2 switches, 6 PCs, and a web server for interdepartmental communication.',
      'Configured static routing, DHCP, and DNS for dynamic IP assignment and domain resolution across subnets.',
      'Validated client-server HTTP connectivity with simulation and packet capture; applied troubleshooting for failure recovery; guided by Dr. Shamim Al Mamun.'
    ],
    githubUrl: 'https://github.com/JeshfiqueMahmud/Network-Protocol',
    category: 'networking',
    badge: 'Network Protocols',
    featured: false,
    stars: 12,
    architectureDetails: '3 Cisco Routers -> 2 Core Switches -> Subnet Masking -> Dynamic DHCP Pools & DNS Resolution Server'
  },
  {
    id: 'pos_management_system',
    title: 'Point of Sale (POS) Management System',
    subtitle: 'Multi-Business Setup, Sales Tracking & Dynamic Invoicing',
    period: 'Spring 2023',
    institution: 'North South University (CSE299 Junior Design)',
    supervisor: 'Supervised by Dr. Mohammad Abdul Qayum (CSE299)',
    tools: ['HTML', 'CSS', 'JavaScript', 'PHP (CodeIgniter)', 'MySQL'],
    description: [
      'Developed a full-featured POS web app supporting multi-business setup, sales tracking, and expense management.',
      'Designed dynamic invoice generation, role-based access control, and a responsive front-end using CodeIgniter.',
      'Integrated a reporting dashboard and secure authentication; supervised by Dr. Mohammad Abdul Qayum (CSE299).'
    ],
    githubUrl: 'https://github.com/JeshfiqueMahmud/Point-of-sale',
    category: 'web',
    badge: 'Full Stack App',
    featured: false,
    stars: 19,
    architectureDetails: 'CodeIgniter MVC -> MySQL Relational DB -> Dynamic Invoice PDF Engine -> Role-Based Access Control'
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'smc_labs',
    role: 'Blockchain & C++ Developer — Bitcoin Core Architecture',
    company: 'SMC Labs',
    location: 'Dhaka, Bangladesh',
    period: 'May 2025 – July 2026',
    type: 'work',
    badge: 'Industry Experience',
    description: [
      'Modified Bitcoin Core interpreter behavior, opcode execution paths, and transaction validation logic.',
      'Developed custom scripts using OP_SHA256, P2SH, SegWit unlocking logic inside EvalScript/VerifyScript.',
      'Built multi-node regtest networks simulating real peer-to-peer consensus, mempool policies, and validation flows.',
      'Instrumented opcode tracing, improving debugging visibility for script execution paths and stack behavior.',
      'Researched UTXO handling, BIP152 compact blocks, replace-by-fee, Schnorr verification, and internal Bitcoin networking mechanisms.'
    ],
    technologies: ['C++', 'Bitcoin Core', 'Regtest', 'SegWit', 'P2SH', 'OP_SHA256', 'EvalScript/VerifyScript', 'BIP152', 'Linux Debugging']
  },
  {
    id: 'acts_asset_client',
    role: 'Full-Stack Developer (AI-Assisted Development)',
    company: 'ACTS Asset Ltd.',
    location: 'Dhaka, Bangladesh',
    period: '2026',
    type: 'work',
    badge: 'Freelance / Client',
    description: [
      'Built a full company website for a Dhaka real-estate developer using AI-assisted development with Claude Code.',
      'Integrated Sanity as a headless CMS with GROQ queries and an embedded Studio so the client’s team can edit content.',
      'Built an enquiry API endpoint that validates form submissions and emails them via the Resend API, with honeypot spam checks, rate limiting, and privacy-safe logging.',
      'Set up environment-based configuration for Vercel deployments and SEO: sitemap, robots rules, structured data, and Open Graph images.',
      'Wrote a pre-launch checklist documenting placeholder content, deployment steps, and open client questions.'
    ],
    technologies: ['Claude Code', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Sanity CMS', 'GROQ', 'Resend API', 'Vercel']
  },
  {
    id: 'thesis_multimodal',
    role: 'Thesis Researcher — Multimodal AI (CSE499)',
    company: 'North South University',
    location: 'Dhaka, Bangladesh',
    period: '2025',
    type: 'thesis',
    badge: 'Capstone Thesis',
    supervisor: 'Supervised by Senior Lecturer Mr. Rifat Ahmed Hassan as part of CSE499',
    description: [
      'Investigated fake news classification using both text and image data with deep learning fusion models.',
      'Fine-tuned pretrained BERT for text encoding and ResNeXt-50 for image features; combined features for final prediction.',
      'Evaluated model performance using confusion matrix, accuracy, precision-recall scores, and deployed with Streamlit UI.'
    ],
    technologies: ['BERT', 'ResNeXt-50', 'PyTorch', 'Transformers', 'OpenCV', 'Streamlit', 'Python']
  },
  {
    id: 'private_tutoring',
    role: 'Private Tutoring (O Level)',
    company: 'Self-Employed',
    location: 'Dhaka, Bangladesh',
    period: '2021 – Present',
    type: 'teaching',
    badge: 'Teaching & Mentorship',
    description: [
      'Mentored O Level students in Math, Physics, and ICT.',
      'Designed personalized lesson plans and guided exam preparation that led to measurable grade improvements.'
    ],
    technologies: ['Math', 'Physics', 'ICT', 'Academic Mentorship', 'Curriculum Design']
  },
  {
    id: 'education_nsu',
    role: 'Bachelor of Science in Computer Science and Engineering',
    company: 'North South University',
    location: 'Dhaka, Bangladesh',
    period: '2021 – 2025',
    type: 'education',
    badge: 'B.Sc. Degree',
    description: [
      'Completed Bachelor of Science in Computer Science and Engineering.',
      'Conducted senior thesis on Multimodal Fake News Detection under Mr. Rifat Ahmed Hassan.',
      'Completed coursework in Data Structures, Algorithms, Operating Systems, Database Systems, Computer Networks, and Machine Learning.'
    ],
    technologies: ['C/C++', 'Python', 'Data Structures', 'Algorithms', 'Networking', 'Database Systems', 'AI/ML']
  },
  {
    id: 'education_scholastica',
    role: "O’ Level and A Level",
    company: 'Scholastica PVT LTD',
    location: 'Dhaka, Bangladesh',
    period: '2016 – 2018',
    type: 'education',
    badge: 'High School',
    description: [
      'Completed Cambridge International O’ Level and A Level certifications with strong emphasis on Mathematics, Physics, Chemistry, and Computer Science.'
    ],
    technologies: ['Cambridge Curriculum', 'Math', 'Physics', 'Chemistry', 'Computer Science']
  }
];

export const OP_CODES_DEMO = [
  { opcode: 'OP_DUP', description: 'Duplicates the top stack item', stackState: ['[PubKey]', '[PubKey]', '[Sig]'] },
  { opcode: 'OP_HASH256', description: 'Hashes top item twice with SHA-256', stackState: ['[PubKeyHash]', '[PubKey]', '[Sig]'] },
  { opcode: 'OP_EQUALVERIFY', description: 'Checks equality between top two items', stackState: ['[PubKey]', '[Sig]'] },
  { opcode: 'OP_CHECKSIG', description: 'Verifies signature against public key', stackState: ['TRUE (1)'] }
];
