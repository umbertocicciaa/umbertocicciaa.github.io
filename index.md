---
title: "Umberto Domenico Ciccia's Resume"
layout: default
---

**Rende, Italy**
[GitHub](https://github.com/umbertocicciaa) | [LinkedIn](https://www.linkedin.com/in/umberto-domenico-ciccia/) | [Blog](https://umbertocicciaa.github.io/blog-umbertodomenico-ciccia)

---

## 📂 **PROJECTS**

- **[Homelab](https://github.com/umbertocicciaa/homelab-utils)**
  _SSH, K3S, K8S, IoT, Proxy, DHCP, TCP/IP, Lan, Networking, Hardware, Raspberry Pi 4_

  - Designed and deployed a 2-node Raspberry Pi 4 cluster (1 master, 1 worker) running Raspberry Pi OS with SSH enabled for remote management.

  - Built a custom mini-rack installation with active cooling (dual fans) and a dedicated Gigabit network switch for stable, high-throughput LAN communication.

  - Configured DHCP server with static IP assignments and hostname resolution for cluster nodes and proxy PC.

  - Established secure SSH access from a proxy PC to each cluster node for streamlined administration.

  - Installed and configured K3s lightweight Kubernetes: deployed K3s server on master node, joined worker node via token-based authentication.

  - Verified cluster readiness with smoke test deployments (pods, services, and basic networking validation).

  - Set up kubeconfig on proxy PC to enable external kubectl access to the cluster.

  - Deployed a custom “Homepage” application as a Kubernetes workload, with service exposure and ingress configuration.

  - Configured Traefik ingress controller (default in K3s) to expose the application via HTTP and HTTPS.

  - Managed DNS resolution for ingress access by updating local /etc/hosts mapping to custom domain (homepage.local).

  - Planned and documented next-phase enhancements: deployment of Grafana, Prometheus, and observability stack.

  ![Homepage](/static/homepage.png)
  ![Smoketest](/static/smoketest-node.png)
  ![Smoketest](/static/smometest-nginx.png)
  ![Proxy](/static/smoketest-proxy.png)

- **[QuestMasterAI](https://github.com/umbertocicciaa/QuestMasterAI)**  
  _Python, OpenAi, Github Actions, CICD, Docker_

  - Developed an AI-powered platform  for automated quest and task generation using Python and OpenAi's Apis, enabling dynamic content creation for interactive applications, throught CLI.
  - Containerized the solution with Docker for seamless deployment and scalability across different environments.
  - Integrated OpenAI to leverage advanced language models, enhancing the quality and relevance of generated quests.
  - Designed the system to be developer-friendly, supporting easy customization and extension for various use cases such as games, productivity tools, or educational platforms.
  - Focused on modular architecture to facilitate integration with external APIs and frontends, promoting flexibility and reusability.

- **[AWS MlOps](https://github.com/umbertocicciaa/aws-mlops)**  
  _MlOps, Python, AWS, Sagemaker, Glue, S3, Lambda, Eventbridge, Github Actions, CICD, Kubernetes_

  - Designed and deployed an MLOps pipeline using AWS SageMaker to automate the training and  evaluation of regression models on Parquet data from S3, ensuring reproducible workflows.
  - Integrated model performance evaluation with conditional logic to trigger automated model   registration and deployment using Lambda functions, enhancing reliability and control.
  - Provisioned infrastructure with Terraform, enabling end-to-end automation of the ML pipeline, including model deployment to a real-time REST API endpoint for production predictions.
  - Deployed a streamlit frontend in a kubernetes cluster for make and visualize prediction.
  - Developed a CICD pipeline with Github Actions, build and deploy new app images to Github container registry

  ![Demo](/static/mlops.png)

- **[Purchase Manager](https://github.com/umbertocicciaa/purchase-manager)**  
  _Python, Gcp, Cloud SQL, Cloud Storage, Cloud Run, Github Actions, Terraform, CICD_

  - Purchase Manager is a web application designed for efficient management of purchases, allowing users to track, organize, and analyze purchase data.
  - Built using modern web technologies, leveraging Streamlit and Fastapi for robust, type-safe client and server logic.
  - Utilizes Fastapi for backend services, providing scalability and seamless integration with databases.
  - Employs Streamlit for a dynamic, responsive user interface, ensuring an intuitive and engaging user experience.
  - Supports persistent data storage and advanced search/filter capabilities, enabling users to manage purchases with ease.

- **[Spark + Hadoop + Hive Air analysis](https://github.com/umbertocicciaa/air-flights-big-data-unical)**  
  _Python, Spark, Hadoop, Hive, Docker, K8s, CICD, Github Actions, Scikit-learn, Streamlit_

  - Set up and configured a Spark + Hadoop + Hive cluster on a local environment to process and analyze over 10GB of flight and airport data from OpenSky and OurAirports datasets.
  - Applied machine learning models including Random Forest classification and K-Means clustering to identify patterns in flight routes, delays, and airport activities using PySpark MLlib.
  - Designed and deployed a Streamlit dashboard to visualize key insights such as the most used airlines, busiest airports, and classification results, enabling interactive exploration of big data analytics.
  - Developed a CICD pipeline with Github Actions, build and deploy new app images to Github container registry

  ![Demo](/static/bigdata.png)

- **[Automation Lab](https://github.com/umbertocicciaa/automation-lab)**  
  _Terraform, AWS, GCP_

  - Developed Terraform exercises covering AWS, GCP, Kubernetes resources, and Terraform modules.
  - Applied advanced Terraform features like for_each, modules, and complex syntax to create reusable and scalable infrastructure code.
  - Designed IaC solutions to automate cloud resource provisioning across multiple cloud providers.
  - Focused on best practices for modularization, code reusability, and multi-cloud deployments.

- **[Instagram Twitter Clone](https://github.com/umbertocicciaa/UnicalSocialNetworkBackend)**  
  _Java, Angular, PostgreSQL, REST API_

  - Developed a monolithic clone of Instagram/Twitter using a 3-tier MVC architecture.
  - Implemented JWT authentication and authorization for secure user management.
  - Enabled users to create posts, like, comment, tweet, and share photos and videos.
  - Designed and built the backend with RESTful APIs and the frontend with Angular components.
  - Integrated PostgreSQL for efficient data storage and retrieval.
  - Employed responsive design principles to ensure smooth user experience across devices.
  - Focused on scalability and maintainability to support potential future feature additions.

- **[Cloud CI/CD Pipeline](https://github.com/umbertocicciaa/CloudCICDPipeline)**  
  _C#, Blazor, GitHub Actions, ASP.NET Core_

  - Set up automated workflows using GitHub Actions for CodeQL analysis, CI builds, and Azure deployment.
  - Configured pipelines for continuous integration and continuous deployment, ensuring streamlined code updates and quality checks.
  - Integrated Azure for hosting and deploying the ASP.NET Core Blazor application, enhancing deployment - efficiency.
  - Leveraged CodeQL to perform static code analysis, improving code security and quality during - development.

- **[SongFinder](https://github.com/umbertocicciaa/SongFinder)**  
  _Kotlin, Android, Genius API, SQLite_
  - Android app for song search and detailed metadata display.
  - Developed an Android app for song search and detailed metadata display using the Genius API.
  - Integrated SQLite for local storage of search history and song data.
  - Designed intuitive UI for seamless user interaction and quick access to song information.
  - Enabled song search by title, artist, and lyrics, providing detailed metadata such as album, release year, and genre.
  - Ensured app performance and responsiveness through efficient API integration and database queries.

---

## 📚 **EDUCATION**

**Università Della Calabria**, Rende, Italy  
**Cybersecurity**

- Student Worker
- Relevant Courses: Cryptography algorithms, Methods and techniques for cyber security, Models and techniques for Big Data

**Università Della Calabria**, Rende, Italy  
**Computer Engineering** — _109/110, 27.4/30_  
**July 2021 – July 2024**

- Full Time Student
- Among the top 1/3 of students to graduate in the first available session.
- Relevant Courses: Web and Mobile Application Development (30L/30), Software Engineering (27/30), Databases (29/30), Information Systems (27/30), Computer Networks (27/30)

---

## 🏆 **CERTIFICATIONS**

- **Kubernetes and Cloud Native Associate (KCNA)** ([Badge](https://www.credly.com/badges/716af6b6-af7c-4408-98ab-bebe25a3d22a))
- **Terraform Associate (003)** ([Badge](https://www.credly.com/badges/72c86cb9-13c6-4ee4-be7a-040c0609fe00/public_url))
- **Google Associate Cloud Engineer** ([Badge](https://www.credly.com/badges/91899eaf-6375-4525-9c8f-0c2704e95d36/public_url))
- **AWS Certified Solutions Architect – Associate** ([Badge](https://www.credly.com/badges/8c0a3ea9-42f6-46cc-9c66-f91f0e434df2/public_url))
- **Google Cloud Provider: Cloud Digital Leader** ([Badge](https://www.credly.com/badges/f21b57ac-11c7-4477-947d-eb2eafbdd0c8/public_url))
- **Microsoft Certified: Azure Fundamentals (AZ-900)** ([Badge](https://learn.microsoft.com/it-it/users/umbertodomenicociccia-8738/credentials/f5bc89b9bbcf5b9e?ref=https%3A%2F%2Fwww.linkedin.com%2F))
- **AWS Certified Cloud Practitioner** ([Badge](https://www.credly.com/badges/16d46fdf-8e1c-4841-b210-79eed946cc44/public_url))
- **GitHub Actions** ([Badge](https://www.credly.com/badges/a4233ae1-dfa3-4213-b26c-114002aefba4/public_url))

---

## 💼 **WORK EXPERIENCE**

### **NTT Data Italia** - _Cloud Engineer_

#### **January 2025 – Present**

- Engineered and developed a Jenkins pipeline that allows the deployment of new versions of a dataflow pipeline on Google Cloud for a client operating in the food industry.
- Developed a highly reliable network infrastructure using Terraform, Google Partner Interconnect, VPC peering, and VPN tunnel to manage digital payments for a client operating in the food industry.
- Implement a full-stack web app to visualize and quantify internal Azure subscription costs. Deploy with Azure DevOps on Azure Web App.
- Implemented a hybrid on-premise/cloud AWS infrastructure using Terraform, integrating over 10 AWS services (S3, DMS, Aurora, ACM, SQS, VPC, ECR, EKS, etc.) for a digital marketing and online communication customer. Author of the Terraform EC2, SQS and Glue modules of the infrastructure.
- Designed and implemented a Quarkus-based microservice leveraging FinOps best practices and the Vertex AI SDK to optimize multi-cloud infrastructure costs based on user-provided scenarios, enhancing cost efficiency and resource allocation.
- Developed a high-performance microservice using Quarkus and Crossplane to act as an agent for managing Istio policies in remote Kubernetes clusters, enabling dynamic policy enforcement, reducing manual intervention, and improving system scalability.
- Developed a Python script leveraging FinOps best practices and the Vertex AI SDK to generate the lowest-cost multi-cloud infrastructure based on user-provided scenarios, optimizing resource allocation and cost efficiency.

### **Vision One S.r.l** — _Software Engineer_

#### **July 2024 – December 2024**

- Developed integration tests using **xUnit** and **Testcontainer**, achieving **90% test coverage**.
- Integrated unit testing into **OneWeb software**, leading to **80% test coverage**.
- Designed a project activity scheduling algorithm using **ASP.NET Core** and **Blazor MVVM**, achieving a scheduling time of less than **1 second**.

### **Caliò Informatica S.r.l** — _Software Engineer_

**March 2024 – July 2024**

- Enhanced visualization tools using **.NET** and **Angular**, improving management efficiency by **70%**.
- Developed a medical office web platform, accelerating patient data entry by **80%**.
- Optimized REST API calls to **OpenAI**, reducing costs by **80%** and improving performance by **60%**.

---

## 🛠️ **SKILLS**

- **Framework:** Angular, Blazor, ASP.NET Core, Spring, .NET, jUnit, xUnit, bUnit, Testcontainer
- **Technologies:** REST API, Docker, Kubernetes, Github Actions, CICD, Jenkins, SonarQube
- **Cloud Providers:** Amazon Web Services, Microsoft Azure, Goocle Cloud Platform
- **Databases:** SQLServer, MongoDB, PostgreSQL, SQLite, MySQL
- **Programming Languages:** C#, Java, Python, Bash
- **Soft Skills:** Problem Solving, Teamwork, Proactivity, Communication

---

## 🌟 **EXTRA ACTIVITIES**

- Contributed to **GitHub Actions Marketplace**.
- Supported **UnicalLoveTelegram**, assisting University of Calabria students.

---
