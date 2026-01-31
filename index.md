---
title: "Umberto Domenico Ciccia's Resume"
layout: default
---

<section class="hero" id="about">
  <div class="hero-intro">
    <div class="hero-meta">
      <span class="pill">Cloud Engineering</span>
      <span class="pill">System Engineering</span>
      <span class="pill">Software Engineering</span>
      <span class="pill">Italian</span>
    </div>
    <h1>Hi, I'm Umberto</h1>
    <p>
      I build production-ready ML platforms and resilient cloud infrastructure. I specialise in taking ideas from notebooks to reliable products. From opinionated MLOps frameworks and distributed runtimes,
      to hybrid multi-cloud architectures and developer tooling, I focus on delivering systems that people actually love to ship with.
    </p>
    <div class="hero-actions">
      <a class="button" href="mailto:umbertocicciaa@gmail.com">Let's work together</a>
      <a class="button is-secondary" href="https://github.com/umbertocicciaa" target="_blank" rel="noopener">GitHub</a>
      <a class="button is-secondary" href="https://www.linkedin.com/in/umberto-domenico-ciccia/" target="_blank" rel="noopener">LinkedIn</a>
      <a class="button is-secondary" href="https://umbertocicciaa.github.io/blog-umbertodomenico-ciccia" target="_blank" rel="noopener">Blog</a>
    </div>
  </div>
  <aside class="hero-aside">
    <div class="stat">
      <span>Current focus</span>
      <strong> Improve cloud computing world </strong>
    </div>
    <div class="stat">
      <span>Certifications</span>
      <strong>CKA · TERRAFORM · AWS · AZURE · GCP </strong>
    </div>
    <ul>
      <li>Designing high-availability, multi-cloud infrastructure with Terraform, Crossplane, and Kubernetes.</li>
      <li>Building automated CI/CD pipelines across AWS, Azure, and Google Cloud.</li>
      <li>Shipping opinionated tooling that accelerates teams and keeps systems observable.</li>
      <li>Building modern, robust software that can change people's lives.</li>
    </ul>
  </aside>
</section>

<section id="projects">
  <div class="section-heading">
    <h2>Highlighted Projects</h2>
    <p class="muted">Opinionated tooling, hands-on infrastructure, and products that turn experiments into outcomes.</p>
  </div>
  <div class="grid projects">
    <article class="card">
      <figure class="card-media">
        <img src="/static/professor-review/professor-review.png" alt="Teacher review dashboard illustration" loading="lazy">
      </figure>
      <h3>Professors Reviews</h3>
      <p>Anonymous teacher and course review platform built for DIMES students, combining a modern React frontend with a FastAPI backend and PostgreSQL.</p>
      <ul>
        <li>When DIMES students lacked a trusted review channel, designed a secure portal with React 18, FastAPI, Argon2 hashing, and JWT so peers can give accountable feedback without exposing identities.</li>
        <li>Containerized frontend, API, and database with Docker Compose and seeded admin roles, enabling faculty moderators to curate teachers, courses, and 1–5 star reviews from a single dashboard.</li>
        <li>Leveraged machine learning to detect blameful language in reviews, reducing harmful content by automatically blocking flagged posts.</li>
      </ul>
      <ul class="tech-list">
        <li>React</li>
        <li>TypeScript</li>
        <li>FastAPI</li>
        <li>PostgreSQL</li>
        <li>Docker</li>
        <li>Machine Learning</li>
      </ul>
      <div class="links">
        <a href="https://github.com/umbertocicciaa/unical-dimes-professors" target="_blank" rel="noopener">View on GitHub →</a>
      </div>
    </article>
    <article class="card">
      <figure class="card-media is-split">
        <img src="/static/devopsfix/devopsfix.png" alt="DevOpsFix pipeline insights visualization" loading="lazy">
        <img src="/static/devopsfix/devopsfix2.png" alt="DevOpsFix CI/CD dashboard illustration" loading="lazy">
        <img src="/static/devopsfix/devopsfix3.png" alt="DevOpsFix CI/CD dashboard illustration" loading="lazy">
      </figure>
      <h3>DevOpsFix</h3>
      <p>LLM-powered CI/CD pipeline analyzer that validates pipelines and recommends fixes across multiple platforms.</p>
      <ul>
        <li>Plugin-based TypeScript backend unifies LLM providers and CI/CD parsers for GitHub Actions, GitLab CI, and Jenkins.</li>
        <li>React frontend streams real-time feedback from repository URLs or manual pipeline snippets.</li>
      </ul>
      <ul class="tech-list">
        <li>TypeScript</li>
        <li>Node.js</li>
        <li>React</li>
        <li>LLM APIs</li>
      </ul>
      <div class="links">
        <a href="https://github.com/umbertocicciaa/devopsfix" target="_blank" rel="noopener">View on GitHub →</a>
      </div>
    </article>
    <article class="card">
      <figure class="card-media">
        <img src="/static/placeholders/easy-mlops.svg" alt="Easy MLOps workflow illustration" loading="lazy">
      </figure>
      <h3>Easy MLOps</h3>
      <p>An end-to-end MLOps framework that automates experimentation, deployment, and observability through a unified CLI and Python API.</p>
      <ul>
        <li>Distributed runtime orchestrated via FastAPI to coordinate long-running ML workflows with remote workers.</li>
        <li>Artifact versioning, reproducible pipeline outputs, and MkDocs-powered documentation for rapid onboarding.</li>
      </ul>
      <ul class="tech-list">
        <li>Python</li>
        <li>FastAPI</li>
        <li>Docker</li>
        <li>MLflow</li>
      </ul>
      <div class="links">
        <a href="https://github.com/umbertocicciaa/easy-mlops" target="_blank" rel="noopener">View on GitHub →</a>
      </div>
    </article>
    <article class="card">
      <figure class="card-media is-split">
        <img src="/static/homelab/hardware.png" alt="Hardware of cluster" loading="lazy">
        <img src="/static/homelab/homepage.png" alt="Homepage" loading="lazy">
        <img src="/static/homelab/smoketest-node.png" alt="Node smoketest" loading="lazy">
        <img src="/static/homelab/smoketest-proxy.png" alt="Proxy smoketest" loading="lazy">
      </figure>
      <h3>Homelab Platform</h3>
      <p>A Raspberry Pi powered lab with Kubernetes, observability stack, and GitOps delivery for experimentation and edge workloads.</p>
      <ul>
        <li>Two-node Pi cluster with active cooling, dedicated networking, and automated K3s provisioning.</li>
        <li>Grafana, Prometheus, Jenkins, and Traefik ingress exposed via custom DNS and TLS.</li>
      </ul>
      <ul class="tech-list">
        <li>K3s</li>
        <li>Grafana</li>
        <li>Traefik</li>
        <li>Raspberry Pi</li>
      </ul>
      <div class="links">
        <a href="https://github.com/umbertocicciaa/homelab-utils" target="_blank" rel="noopener">View on GitHub →</a>
      </div>
    </article>
    <article class="card">
      <figure class="card-media">
        <img src="/static/placeholders/questmasterai.svg" alt="QuestMasterAI command-line assistant illustration" loading="lazy">
      </figure>
      <h3>QuestMasterAI</h3>
      <p>CLI-first AI assistant that generates contextual quests and tasks using OpenAI, packaged for repeatable deployments.</p>
      <ul>
        <li>Containerised for portability and wired into automated release pipelines with GitHub Actions.</li>
        <li>Modular architecture that supports external API integrations and custom frontends.</li>
      </ul>
      <ul class="tech-list">
        <li>Python</li>
        <li>OpenAI</li>
        <li>GitHub Actions</li>
        <li>Docker</li>
      </ul>
      <div class="links">
        <a href="https://github.com/umbertocicciaa/QuestMasterAI" target="_blank" rel="noopener">View on GitHub →</a>
      </div>
    </article>
    <article class="card">
      <figure class="card-media">
        <img src="/static/placeholders/chatgpt-cli.svg" alt="ChatGPT CLI terminal interface illustration" loading="lazy">
      </figure>
      <h3>ChatGPT CLI</h3>
      <p>A modern, extensible command-line interface for ChatGPT with subcommand support, configuration management, and comprehensive logging.</p>
      <ul>
        <li>Built with Go's standard library, featuring a clean command registry pattern for easy extensibility and new command additions.</li>
        <li>Environment-based configuration with runtime overrides, supporting multiple OpenAI models and customizable request parameters.</li>
      </ul>
      <ul class="tech-list">
        <li>Go</li>
        <li>OpenAI</li>
        <li>CLI</li>
      </ul>
      <div class="links">
        <a href="https://github.com/umbertocicciaa/chatgpt-cli" target="_blank" rel="noopener">View on GitHub →</a>
      </div>
    </article>
    <article class="card">
      <figure class="card-media">
        <img src="/static/aws-mlops/mlops.png" alt="AWS MLOps Frontend" loading="lazy">
      </figure>
      <h3>AWS MLOps</h3>
      <p>Reusable Terraform + SageMaker setup that trains, evaluates, registers, and deploys regression models on serverless infrastructure.</p>
      <ul>
        <li>EventBridge-driven automation that promotes models based on evaluation thresholds with Lambda decisioning.</li>
        <li>Streamlit insights surface predictions from a Kubernetes-hosted UI backed by container registry workflows.</li>
      </ul>
      <ul class="tech-list">
        <li>AWS</li>
        <li>SageMaker</li>
        <li>Terraform</li>
        <li>Streamlit</li>
      </ul>
      <div class="links">
        <a href="https://github.com/umbertocicciaa/aws-mlops" target="_blank" rel="noopener">View on GitHub →</a>
      </div>
    </article>
    <article class="card">
      <figure class="card-media is-split">
        <img src="/static/purchase-management/homepage.jpeg" alt="Hardware of cluster" loading="lazy">
        <img src="/static/purchase-management/homepage2.jpeg" alt="Homepage" loading="lazy">
        <img src="/static/purchase-management/purchase-management.jpeg" alt="Node smoketest" loading="lazy">
        <img src="/static/purchase-management/purchase-management2.jpeg" alt="Proxy smoketest" loading="lazy">
      </figure>
      <h3>Purchase Manager</h3>
      <p>Multi-cloud expense tracking platform deployed on GCP with serverless components and automated governance.</p>
      <ul>
        <li>Predictable infrastructure delivery with Terraform and GitHub Actions promoting artifacts into Cloud Run.</li>
        <li>Event-driven data ingestion powered by Cloud Storage, Cloud SQL, and secure APIs.</li>
      </ul>
      <ul class="tech-list">
        <li>GCP</li>
        <li>Cloud Run</li>
        <li>Cloud SQL</li>
        <li>Terraform</li>
      </ul>
      <div class="links">
        <a href="https://github.com/umbertocicciaa/purchase-manager" target="_blank" rel="noopener">View on GitHub →</a>
      </div>
    </article>
    <article class="card">
      <figure class="card-media">
        <img src="/static/big-data/bigdata.png" alt="Air travel analytics pipeline illustration" loading="lazy">
      </figure>
      <h3>Big Data Air Analysis</h3>
      <p>Big data lab that orchestrates Spark, Hadoop, and Hive locally to surface actionable insights from aviation datasets.</p>
      <ul>
        <li>Provisioned a containerised analytics stack to crunch 10GB+ of flight data with PySpark MLlib clustering and classification.</li>
        <li>Published Streamlit dashboards that highlight busiest routes, delay trends, and airport activity patterns.</li>
      </ul>
      <ul class="tech-list">
        <li>PySpark</li>
        <li>Hadoop</li>
        <li>Hive</li>
        <li>Streamlit</li>
      </ul>
      <div class="links">
        <a href="https://github.com/umbertocicciaa/air-flights-big-data-unical" target="_blank" rel="noopener">View on GitHub →</a>
      </div>
    </article>
    <article class="card">
      <figure class="card-media">
        <img src="/static/placeholders/automation-lab.svg" alt="Automation Lab infrastructure templates graphic" loading="lazy">
      </figure>
      <h3>Automation Lab</h3>
      <p>Hands-on Terraform lab that teaches reusable infrastructure patterns across AWS, GCP, and Kubernetes.</p>
      <ul>
        <li>Authored modular IaC exercises showcasing advanced Terraform constructs like for_each workflows and composable modules.</li>
        <li>Documented repeatable lab scenarios that help engineers adopt best practices for multi-cloud provisioning.</li>
      </ul>
      <ul class="tech-list">
        <li>Terraform</li>
        <li>AWS</li>
        <li>GCP</li>
        <li>Kubernetes</li>
      </ul>
      <div class="links">
        <a href="https://github.com/umbertocicciaa/automation-lab" target="_blank" rel="noopener">View on GitHub →</a>
      </div>
    </article>
    <article class="card">
      <figure class="card-media">
        <img src="/static/placeholders/social-clone.svg" alt="Social platform interface mockups" loading="lazy">
      </figure>
      <h3>Instagram Twitter Clone</h3>
      <p>Full-stack social platform that mirrors Instagram and Twitter experiences with secure authentication.</p>
      <ul>
        <li>Delivered a three-tier Java and Angular architecture featuring JWT-secured APIs for posting, comments, and media sharing.</li>
        <li>Modelled persistent social graph interactions on PostgreSQL with responsive UI flows for web and mobile users.</li>
      </ul>
      <ul class="tech-list">
        <li>Java</li>
        <li>Angular</li>
        <li>PostgreSQL</li>
        <li>JWT</li>
      </ul>
      <div class="links">
        <a href="https://github.com/umbertocicciaa/UnicalSocialNetworkBackend" target="_blank" rel="noopener">View on GitHub →</a>
      </div>
    </article>
    <article class="card">
      <figure class="card-media">
        <img src="/static/placeholders/songfinder.svg" alt="SongFinder audio discovery visualization" loading="lazy">
      </figure>
      <h3>SongFinder</h3>
      <p>Android app that unlocks Genius API metadata with offline-friendly search history and rich song insights.</p>
      <ul>
        <li>Integrated Genius APIs with SQLite caching so users can explore artists, albums, and lyrics without repeated calls.</li>
        <li>Designed Kotlin UI flows that keep navigation responsive while surfacing deep linked song details.</li>
      </ul>
      <ul class="tech-list">
        <li>Kotlin</li>
        <li>Android</li>
        <li>Genius API</li>
        <li>SQLite</li>
      </ul>
      <div class="links">
        <a href="https://github.com/umbertocicciaa/SongFinder" target="_blank" rel="noopener">View on GitHub →</a>
      </div>
    </article>
  </div>
</section>

<section id="experience">
  <div class="section-heading">
    <h2>Work Experience</h2>
    <p class="muted">Professional history.</p>
  </div>
  <div class="grid timeline">
    <article class="timeline-item">
      <div>
        <strong>November 2025 – Present</strong>
      </div>
      <div>
        <h3>System Engineer · AWS</h3>
        <ul>
          <li> Built and delivery AWS’s first European Sovereign Cloud (EUSC), enabling EU customers to run secure, compliant, and fully locally hosted workloads, meeting strict EU regulatory and data-residency requirements. </li>
          <li> Owned operations and lifecycle management of AWS DNS infrastructure and all services dependent on it, including Amazon Route 53, ensuring high availability, fault tolerance, and compliance-driven isolation for sovereign workloads. </li>
          <li>Partnered with multiple AWS service teams to own, deploy, and optimize core cloud services, improving service reliability, scalability, and operational readiness across the sovereign cloud environment. </li>
        </ul>
      </div>
    </article>
    <article class="timeline-item">
      <div>
        <strong>January 2025 – October 2025</strong>
      </div>
      <div>
        <h3>Cloud Engineer · NTT Data Italia</h3>
        <ul>
          <li>Engineered and developed a Jenkins pipeline that allows the deployment of new versions of a dataflow pipeline on Google Cloud for a client operating in the food industry.</li>
          <li>Developed a highly reliable network infrastructure using Terraform, Google Partner Interconnect, VPC peering, and VPN tunnel to manage digital payments for a client operating in the food industry.</li>
          <li>Implemented a hybrid on-premise/cloud AWS infrastructure using Terraform, integrating over 10 AWS services (S3, DMS, Aurora, ACM, SQS, VPC, ECR, EKS, etc.) for a digital marketing and online communication customer. Author of the Terraform EC2, SQS, and Glue modules of the infrastructure.</li>
          <li>Implemented a full-stack web app to visualize and quantify internal Azure subscription costs. Deploy with Azure DevOps on Azure Web App.</li>
          <li>Designed and implemented a Quarkus-based microservice leveraging FinOps best practices and the Vertex AI SDK to optimize multi-cloud infrastructure costs based on user-provided scenarios, enhancing cost efficiency and resource allocation.</li>
          <li>Developed a high-performance microservice using Quarkus and Crossplane to act as an agent for managing Istio policies in remote Kubernetes clusters, enabling dynamic policy enforcement, reducing manual intervention, and improving system scalability.</li>
          <li>Developed a Python script leveraging FinOps best practices and the Vertex AI SDK to generate the lowest-cost multi-cloud infrastructure based on user-provided scenarios, optimizing resource allocation and cost efficiency.</li>
        </ul>
      </div>
    </article>
    <article class="timeline-item">
      <div>
        <strong>July 2024 – December 2024</strong>
      </div>
      <div>
        <h3>Software Engineer · Vision One S.r.l</h3>
        <ul>
          <li>Developed integration tests using <strong>xUnit</strong> and <strong>Testcontainer</strong>, achieving <strong>90% test coverage</strong>.</li>
          <li>Integrated unit testing into <strong>OneWeb software</strong>, leading to <strong>80% test coverage</strong>.</li>
          <li>Designed a project activity scheduling algorithm using <strong>ASP.NET Core</strong> and <strong>Blazor MVVM</strong>, achieving a scheduling time of less than <strong>1 second</strong>.</li>
        </ul>
      </div>
    </article>
    <article class="timeline-item">
      <div>
        <strong>March 2024 – July 2024</strong>
      </div>
      <div>
        <h3>Software Engineer · Caliò Informatica S.r.l</h3>
        <ul>
          <li>Enhanced visualization tools using <strong>.NET</strong> and <strong>Angular</strong>, improving management efficiency by <strong>70%</strong>.</li>
          <li>Developed a medical office web platform, accelerating patient data entry by <strong>80%</strong>.</li>
          <li>Optimized REST API calls to <strong>OpenAI</strong>, reducing costs by <strong>80%</strong> and improving performance by <strong>60%</strong>.</li>
        </ul>
      </div>
    </article>
  </div>
</section>

<section id="skills">
  <div class="section-heading">
    <h2>Skills</h2>
  </div>
  <div class="stack">
    <div>
      <h3>Framework</h3>
      <div class="skill-cloud">
        <span class="skill-chip">Angular</span>
        <span class="skill-chip">Blazor</span>
        <span class="skill-chip">ASP.NET Core</span>
        <span class="skill-chip">Spring</span>
        <span class="skill-chip">.NET</span>
        <span class="skill-chip">JUnit</span>
        <span class="skill-chip">xUnit</span>
        <span class="skill-chip">bUnit</span>
        <span class="skill-chip">Testcontainer</span>
      </div>
    </div>
    <div>
      <h3>Technologies</h3>
      <div class="skill-cloud">
        <span class="skill-chip">REST API</span>
        <span class="skill-chip">Docker</span>
        <span class="skill-chip">Kubernetes</span>
        <span class="skill-chip">GitHub Actions</span>
        <span class="skill-chip">CI/CD</span>
        <span class="skill-chip">Jenkins</span>
        <span class="skill-chip">SonarQube</span>
      </div>
    </div>
    <div>
      <h3>Cloud Providers</h3>
      <div class="skill-cloud">
        <span class="skill-chip">Amazon Web Services</span>
        <span class="skill-chip">Microsoft Azure</span>
        <span class="skill-chip">Google Cloud Platform</span>
      </div>
    </div>
    <div>
      <h3>Databases</h3>
      <div class="skill-cloud">
        <span class="skill-chip">SQL Server</span>
        <span class="skill-chip">MongoDB</span>
        <span class="skill-chip">PostgreSQL</span>
        <span class="skill-chip">SQLite</span>
        <span class="skill-chip">MySQL</span>
      </div>
    </div>
    <div>
      <h3>Programming Languages</h3>
      <div class="skill-cloud">
        <span class="skill-chip">C#</span>
        <span class="skill-chip">Java</span>
        <span class="skill-chip">Python</span>
        <span class="skill-chip">Bash</span>
      </div>
    </div>
    <div>
      <h3>Soft Skills</h3>
      <div class="skill-cloud">
        <span class="skill-chip">Problem Solving</span>
        <span class="skill-chip">Teamwork</span>
        <span class="skill-chip">Proactivity</span>
        <span class="skill-chip">Communication</span>
      </div>
    </div>
  </div>
</section>

<section id="extra-activities">
  <div class="section-heading">
    <h2>Extra Activities</h2>
    <p class="muted">Community support and extra activities.</p>
  </div>
  <div class="stack">
    <div class="card">
      <ul>
        <li>Contributed to <strong>GitHub Actions Marketplace</strong>.</li>
        <li>Maintainer, administrator, and manager of Unical3Telegram, an open-source GitHub platform used by 2000+ DIMES students for exam preparation and resource sharing starred by over 50 users.</li>
      </ul>
    </div>
  </div>
</section>

<section id="hackathon">
  <div class="section-heading">
    <h2>Hackathon</h2>
  </div>
  <div class="stack">
    <div class="card">
      <ul>
        <li>Participated and won in the AWS Jam for NTT Data, solving real-world cloud challenges focused on security, automation, and cost optimization, enhancing hands-on experience with AWS services and best practices in cloud architecture.</li>
        <li>Participated to MlSysOps Hackathon organized from Università Della Calabria</li>
      </ul>
    </div>
  </div>
</section>

<section id="volunteering">
  <div class="section-heading">
    <h2>Volunteering</h2>
    <p class="muted">Volunteering activities.</p>
  </div>
  <div class="stack">
    <div class="card">
      <ul>
        <li>Among the few Italian students selected to be mentees for LeadTheFuture, a leading mentorship non-profit organization for students in STEM, with acceptance rate below 20%. LeadTheFuture empowers top-performing students to achieve their goals and contribute to their communities by giving them one-on-one guidance from high-impact mentors coming from the world's leading STEM innovation hubs such as Silicon Valley and CERN.</li>
      </ul>
    </div>
  </div>
</section>

<section id="education">
  <div class="section-heading">
    <h2>Education</h2>
    <p class="muted">Strong theoretical foundation that complements hands-on engineering work.</p>
  </div>
  <div class="grid timeline">
    <article class="timeline-item">
      <div>
        <strong>Jul 2021 – Jul 2024</strong>
      </div>
      <div>
        <h3>BSc Computer Engineering · Università della Calabria</h3>
        <ul>
          <li>Graduated with 109/110, ranking in the top third of the cohort.</li>
          <li>Among the top 1/3 of students to graduate in the first available session.</li>
          <li>Relevant Courses: Web and Mobile Application Development (30L/30), Software Engineering (27/30), Databases (29/30), Information Systems (27/30), Computer Networks (27/30)</li>
          <li>Specialised in web & mobile development, software engineering, databases, and computer networks.</li>
        </ul>
      </div>
    </article>
  </div>
</section>

<section id="certifications">
  <div class="section-heading">
    <h2>Certifications</h2>
    <p class="muted">Continuously investing in community-recognised credentials across cloud, Kubernetes, and automation.</p>
  </div>
  <div class="cert-grid">
    <div class="cert-card">
      <strong>Certified Kubernetes Administrator (CKA)</strong>
      <a href="https://www.credly.com/badges/4908fd90-b9a8-472c-8000-8b015ecb557c/public_url" target="_blank" rel="noopener">View badge →</a>
    </div>
    <div class="cert-card">
      <strong>Kubernetes and Cloud Native Associate (KCNA)</strong>
      <a href="https://www.credly.com/badges/716af6b6-af7c-4408-98ab-bebe25a3d22a/public_url" target="_blank" rel="noopener">View badge →</a>
    </div>
    <div class="cert-card">
      <strong>Terraform Associate (003)</strong>
      <a href="https://www.credly.com/badges/72c86cb9-13c6-4ee4-be7a-040c0609fe00/public_url" target="_blank" rel="noopener">View badge →</a>
    </div>
    <div class="cert-card">
      <strong>Google Associate Cloud Engineer</strong>
      <a href="https://www.credly.com/badges/91899eaf-6375-4525-9c8f-0c2704e95d36/public_url" target="_blank" rel="noopener">View badge →</a>
    </div>
    <div class="cert-card">
      <strong>AWS Solutions Architect – Associate</strong>
      <a href="https://www.credly.com/badges/8c0a3ea9-42f6-46cc-9c66-f91f0e434df2/public_url" target="_blank" rel="noopener">View badge →</a>
    </div>
    <div class="cert-card">
      <strong>Google Cloud Digital Leader</strong>
      <a href="https://www.credly.com/badges/f21b57ac-11c7-4477-947d-eb2eafbdd0c8/public_url" target="_blank" rel="noopener">View badge →</a>
    </div>
    <div class="cert-card">
      <strong>Microsoft Azure Fundamentals (AZ-900)</strong>
      <a href="https://learn.microsoft.com/it-it/users/umbertodomenicociccia-8738/credentials/f5bc89b9bbcf5b9e?ref=https%3A%2F%2Fwww.linkedin.com%2F" target="_blank" rel="noopener">View badge →</a>
    </div>
    <div class="cert-card">
      <strong>AWS Certified Cloud Practitioner</strong>
      <a href="https://www.credly.com/badges/16d46fdf-8e1c-4841-b210-79eed946cc44/public_url" target="_blank" rel="noopener">View badge →</a>
    </div>
    <div class="cert-card">
      <strong>GitHub Actions</strong>
      <a href="https://www.credly.com/badges/a4233ae1-dfa3-4213-b26c-114002aefba4/public_url" target="_blank" rel="noopener">View badge →</a>
    </div>
  </div>
</section>

<section id="contact">
  <div class="section-heading">
    <h2>Let's Build Something</h2>
    <p class="muted">Available for collaborations, advisory roles, and teams that need a pragmatic engineer to turn ML projects into resilient products.</p>
  </div>
  <div class="stack">
    <div class="contact-links">
      <a href="mailto:umbertocicciaa@gmail.com">📧 Email</a>
      <a href="https://github.com/umbertocicciaa" target="_blank" rel="noopener">💻 GitHub</a>
      <a href="https://www.linkedin.com/in/umberto-domenico-ciccia/" target="_blank" rel="noopener">🤝 LinkedIn</a>
      <a href="https://umbertocicciaa.github.io/blog-umbertodomenico-ciccia" target="_blank" rel="noopener">✍️ Blog</a>
    </div>
  </div>
</section>
