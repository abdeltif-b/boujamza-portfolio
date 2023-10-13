export const links = [
  {
    name: "Home",
    hash: "#home",
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
    location: "Planiverse",
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
    more: `
    **Developed a full-stack SaaS platform from scratch designed to optimize distribution strategies, enabling the assessment of optimal inventory replenishment timing and quantities for multiple locations.**

    ## Front-End Responsibilities

    - Developed dynamic dashboards with insights using Next.js (React), incorporating PrimeReact UI components, ApexCharts for graphical representations, and PrimeFlex for styling.

    ## Back-End Responsibilities

    - Created the primary back-end application in Next.js, handling most use cases, including read/write queries and event triggers.
    - Developed Python scripts utilizing Pandas, Numpy, and PyArrow for batch computing and data analysis, exposing them externally through FastAPI.
    - Devised an optimization algorithm for determining product types and quantities for delivery to each agency based on constraints and a scoring function using Optaplanner, deploying it within a Quarkus framework.
    - Implemented a unified authentication system across all services, guaranteeing access only to authorized users with the required permissions, utilizing Keycloak and NextAuth.
    - Created comprehensive test cases using Jest for Next.js applications (APIs and server-side queries) and PyTest for FastAPI applications (APIs and computing functions).
    - Packaged the solution into a Docker image YAML file, simplifying deployment either on-premises or in a cloud environment as containers.
    - Established a monitoring and observability system using Grafana, Loki, and Prometheus to capture logs and metrics from different services, with automated triggers for email notifications in case of anomalies, aiding in debugging and proactive problem resolution.
    - Explored alternative approaches for data analysis and computational tasks, considering Spark and Delta Lake as potential options as part of the research and development process.
    - Explored the capabilities of machine learning algorithms, using PyCaret, PyTorch, and MLflow, for time series prediction as part of the research and development process.

    ## Database Responsibilities

    - Designed database models and entity relationships in PostgreSQL.
    - Utilized Prisma as an ORM for database management, migrations, and updates.
    - Crafted SQL raw queries for retrieving data from the PostgreSQL database in complex scenarios that Prisma ORM couldn't handle.
    - Developed PL/pgSQL functions for handling advanced use cases.
    - Enabled automatic backups and disaster recovery backups for the database by leveraging Amazon RDS services.
    - Implemented automatic backups for on-premises database deployment using a scheduled cron action.
    - Established a data integration framework using Kafka Connect to manage various data sources for clients, converting and storing data in the PostgreSQL database or other destination sinks.

    ## Infrastructure and Deployment Responsibilities

    - Defined the solution's technical architecture and made informed decisions through in-depth exploration and benchmarking of various alternatives.
    - Developed the application modularly to accommodate the unique requirements of different clients, each with specific additional features, and all within a shared codebase.
    - Transitioned the cloud hosting stack from a container-based architecture to a serverless one, reducing deployment costs by 80% while doubling performance.
    - Successfully deployed the SaaS platform to two clients using two different methods: one on the cloud using AWS services and the second on-premises using a Docker Compose file with predefined configurations.

    ## Other Responsibilities

    - Implemented CI/CD processes using AWS services, including Amazon Amplify for the Next.js application, and Amazon Lambda and Amazon SAM for other serverless services.
    - Maintained the codebase in Github for version control, establishing three environments: development, staging, and production.
    - Documented various components of the SaaS platform, encompassing data models and back-end functionalities.
    - Provided mentorship and training to two junior developers and interns.
    - Utilized Trello as a Kanban board for task management and tracked individual task durations using Clockify.

    `,
  },
  {
    title: "Full Stack Engineer",
    location: "Groupe GCL",
    mission: "Developed web-based dashboards for data analysis and visualization.",
    description: `
    - Built web-based dashboards that collected data from CSV, Excel, and SQL sources. Used ETL processes to analyze and visualize insights.
    - Deployed the solution on the AWS cloud platform.`,
    date: "Jan 2020 - Jan 2022 | Full-time",
    skills: [
      "Next.js (Tailwind - MUI - ApexCharts - NextAuth - Prisma - Cypress)",
      "AWS (Amplify - RDS - Lambda - S3 - Cognito - Route 53 - IAM)",
      "FastAPI (REST API - Pandas - Numpy - PyTest)",
      "PostgresSQL",
    ],
    more: `
    **A Management consulting firm specializing in Logistics and Supply Chain, where I designed and developed web-based dashboards for advanced data analysis and visualization.**

    ## Main Achievements

    - Built web-based dashboards to analyze data from CSV, Excel, and SQL sources, utilizing ETL processes to generate dynamic dashboard applications.
    - Developed the solution using Next.js as a full-stack framework, incorporating FastAPI to implement Python code for data analysis.
    - Designed PostgreSQL database models tailored to each use case based on dataset structure.
    - Translated consultants' KPI requests into SQL queries.
    - Developed over 10 dashboard applications for various use cases to extract data insights efficiently.
    - Created a reusable application boilerplate for efficient development of new client-specific dashboards.
    - Deployed the solution on the AWS cloud platform, employing Amplify for Next.js applications with CI/CD, Lambda for FastAPI, PostgreSQL hosted in RDS with automated backups, S3 for versioned storage of Excel and CSV files, Cognito for authentication and access control, and Route 53 for domain name management.
    - Collaborated with clients to gather their input on the application and explore the possibility of incorporating additional features based on their feedback.
  `,
  },
  {
    title: "Research And Development Engineer",
    location: "OpTech",
    mission:
      "Developed an IoT device for data collection alongside a web application for data processing and visualization.",
    description: `
      - Built an IoT device utilizing Raspberry Pi to wirelessly gather data from diverse sensors, perform data analysis, store it in the cloud, and transmit it to a web application for additional processing using Node.js / NodeRed and Python.
      - Created a REST API in Django to receive and process data transmitted by the IoT device, and developed a dashboard web application to visualize the received data using Dash.`,
    date: "Jul 2018 - Jan 2020 | Full-time",
    skills: ["Node.js", "JavaScript", "Python", "Django", "Raspberry Pi"],
    more: `
    **A forward-thinking brand specializing in optimizing operations with technology. Their expertise spans engineering, consulting, IT integration, and smart technologies.**

    ## Main Achievements

    - Built an IoT device with Raspberry Pi to wirelessly collect data from various sensors. This device analyzes the data, stores it in the cloud, and transmits it to a web application for further processing. This was achieved using a combination of Node.js, NodeRed, and Python.
    - Created a REST API in Django to receive and process data transmitted by the IoT device.
    - Developed a dashboard web application to visualize the received data using Dash inside the same Django application.
    - Collaborated with the marketing team to align R&D projects with market demands.
    - Introduced safety protocols that led to a 50% reduction in lab-related incidents.
    - Presented quarterly updates to company stakeholders, ensuring transparent communication about R&D activities and fostering increased budget allocations for future projects.
`,
  },
  {
    title: "Graduation Project",
    location: "Innovation Lab for Operations - UM6P",
    mission: `
    Designed and implemented an intelligent lubrication system for Ben Guerir OCP mine, including autonomous algorithm development, remote monitoring, and a test case with sensor data.`,
    description: "",
    date: "Feb 2018 - Jun 2018 | Internship",
    skills: ["Node.js", "NodeRed", "Arduino", "Matlab"],
    more: `
    **A dedicated department with a mission to develop and manage infrastructure, demonstrators, and various test tools, primarily focused on industrial digitalization. As part of this effort, I designed and implemented an intelligent lubrication system for a mining company, including autonomous algorithm development, remote monitoring, and real-world testing with sensor data.**

    ## Main Achievements

    - Developed a Matlab algorithm employing fuzzy logic control, which autonomously determines optimal lubrication quantity and frequency based on sensor data (temperature, pressure, speed).
    - Established a remote system monitoring through the NoreRed IoT platform.
    - Created a demonstrative simulation utilizing Arduino and basic equipment.
    - Implemented the algorithm's findings within a test-lab environment featuring actual equipment such as pumps, sensors, and valves for automated lubrication.

    `,
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
    tags: ["Machine Learning", "Python", "Pandas", "PyCaret", "Plotly"],
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
