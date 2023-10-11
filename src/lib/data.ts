export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full Stack Engineer",
    location: "Freelance",
    mission:
      "Developed a full-stack SaaS platform designed to optimize distribution strategies, enabling the assessment of optimal inventory replenishment timing and quantities for multiple locations.",
    description: `
    - Designed and managed data models and features within a serverless architecture, seamlessly connecting various frameworks and services.\n
      - Integrated authentication systems, monitoring and observability features, object storage systems, a data integration framework, and an automated backup mechanism.\n
      - Developed test cases and documented various components of the SaaS platform, encompassing data models and backend functionalities.\n
      - Prepared the solution for deployment, whether in the cloud or on-premises.`,
    // icon: React.createElement(LuGraduationCap),
    date: "Jan 2022 - Present | Full-time",
    skills: ["Next.js", "FastAPI", "PostgreSQL", "Docker", "Grafana", "Prometheus", "Loki", "Kafka", "AWS"],
  },
  {
    title: "Full Stack Engineer",
    location: "Groupe GCL",
    mission: "Developed web-based dashboards for data analysis and visualization.",
    description: `
    - Built web-based dashboards that collected data from CSV, Excel, and SQL sources. Used ETL processes to analyze and visualize insights.
    - Deployed the solution on the AWS cloud platform.`,
    // icon: React.createElement(CgWorkAlt),
    date: "Jan 2020 - Jan 2022 | Full-time",
    skills: [
      "Next.js (Tailwind - MUI - ApexCharts - NextAuth - Prisma - Cypress)",
      "AWS (Amplify - RDS - Lambda - S3 - Cognito - Route 53 - IAM)",
      "FastAPI (REST API - Pandas - Numpy - PyTest)",
      "PostgresSQL",
    ],
  },
  {
    title: "Research And Development Engineer",
    location: "OpTech",
    mission:
      "Developed an IoT device for data collection alongside a web application for data processing and visualization.",
    description: `
      - Built an IoT device utilizing Raspberry Pi to wirelessly gather data from diverse sensors, perform data analysis, store it in the cloud, and transmit it to a web application for additional processing using Node.js / NodeRed and Python.
      - Created a REST API in Django to receive and process data transmitted by the IoT device, and developed a dashboard web application to visualize the received data using Dash.`,
    // icon: React.createElement(FaReact),
    date: "Jul 2018 - Jan 2020 | Full-time",
    skills: ["Node.js", "JavaScript", "Python", "Django", "Raspberry Pi"],
  },
  {
    title: "Graduation Project",
    location: "Innovation Lab for Operations - UM6P",
    mission: `
    Designed and implemented an intelligent lubrication system for Ben Guerir OCP mine, including autonomous algorithm development, remote monitoring, and a test case with sensor data.`,
    description: "",
    // icon: React.createElement(FaReact),
    date: "Feb 2018 - Jun 2018 | Internship",
    skills: ["Node.js", "NodeRed", "Arduino", "Matlab"],
  },
] as const;

export const projectsData = [
  {
    title: "ResearchQAI",
    description: "ResearchQAI is a SaaS application that enables users to chat with PDF research papers.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "Shadcn",
      "Kind",
      "Prisma",
      "PostgreSQL",
      "Stripe",
      "UploadThing",
      "OpenAI",
      "Pinecone",
    ],
    github: "https://github.com/abdeltif-b/researchqai",
    demo: "https://researchqai.com/",
    cover: "https://github.com/abdeltif-b/researchqai/raw/master/public/img/researchqai-screenshot.png",
  },
  {
    title: "Boujamza Portfolio",
    description: "Personal website and portfolio built with Next.js.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind", "Shadcn", "Vercel"],
    github: "https://github.com/abdeltif-b/boujamza-portfolio",
    demo: "https://boujamza.com/",
    cover: "https://github.com/abdeltif-b/boujamza-portfolio/raw/master/public/img/boujamza_screenshot.png",
  },
  {
    title: "AutoML Prediction Notebook",
    description:
      "A notebook that presents an exploration of semi-Automated Machine Learning (AutoML) techniques for vessel traffic flow prediction",
    tags: ["Python", "Pandas", "PyCaret", "Plotly"],
    github: "https://github.com/abdeltif-b/automl-prediction",
    demo: "https://github.com/abdeltif-b/automl-prediction/blob/master/notebook.ipynb",
    cover: "https://github.com/abdeltif-b/automl-prediction/blob/master/Fig1.png?raw=true",
  },
  {
    title: "SyncUI",
    description: "A rapid prototype developed with Syncfusion components.",
    tags: ["Next.js", "React", "JavaScript", "Syncfusion", "PrimeReact"],
    github: "https://github.com/abdeltif-b/syncui",
    demo: "https://syncui.vercel.app/",
    cover: "https://github.com/abdeltif-b/syncui/raw/master/public/screenshot.png",
  },
] as const;

export const skillsData = [
  "Next.js",
  "React",
  "Node.js",
  "JavaScript",
  "TypeScript",
  "FastAPI",
  "Python",
  "PostgreSQL",
  "Amazon Web Services (AWS)",
  "Docker",
  "Git",
  "Grafana",
  "Tailwind",
  "Terraform",
  "MLOps",
] as const;
