export const experiences = [
  {
    period: ['November 2025 -', 'Present'],
    title: 'System Development Engineer',
    company: 'Amazon Web Services (AWS)',
    bullets: [
      "Delivered the Route 53 [CIDR routing](https://docs.aws.eu/Route53/latest/DeveloperGuide/resource-record-sets-working-with-cidr-locations.html) feature end-to-end in the European Sovereign Cloud 4 months ahead of schedule, implementing infrastructure, APIs, and console support for customer-configurable IP-based DNS routing.",
      "Led the refactoring of 184 Route 53 infrastructure pipelines, increasing pipeline freshness to 98% in eusc-de-east-1.",
      "Redesigned DNS infrastructure, eliminating a recurring misconfiguration that generated 84 SEV-2 alerts over six months across all AWS partitions.",
      "Unblocked a strategic customer launch by delivering [DNSSEC](https://docs.aws.eu/Route53/latest/DeveloperGuide/dns-configuring-dnssec.html) support for Route 53 in AWS European Sovereign Cloud 3 weeks ahead of schedule, allowing the customer to migrate without modifying their existing infrastructure.",
      "Maintained reliability of [Route 53](https://docs.aws.eu/esc/latest/userguide/route53.html) services in sovereign regions, achieving 99.999% availability through incident response and RCA-driven improvements.",
      "Supported infrastructure deployment for [AWS European Sovereign Cloud](https://aws.eu/), enabling compliant in-region operations."
    ],
  },
  {
    period: ['January 2025 -', 'October 2025'],
    title: 'Cloud Engineer',
    company: 'NTT Data Italia',
    bullets: [
      "Built GCP data ingestion pipelines processing 10k+ daily records, improving data availability and release reliability using Dataflow, Compute Engine, and Cloud Storage for Coop Italia",
      "Designed and deployed a multi-cloud infrastructure spanning AWS and on-premises using Terraform, Kubernetes, EKS, Aurora, DMS, S3, and ECR, reducing deployment failures by 70% and improving deployment consistency for ItaliaOnline",
      "Configured on-premises Jenkins to manage CI/CD pipelines for new containerized application versions deployed to EKS, automating releases and reducing deployment errors by 70% for ItaliaOnline.",
      "Developed a high-performance Quarkus microservice on NTT KUMO using Crossplane to manage Istio policies across remote Kubernetes clusters, enabling dynamic policy enforcement, reducing manual intervention, and improving scalability",
      "Built an AI-powered Quarkus agent using the Vertex AI SDK to estimate infrastructure costs and recommend optimized multi-cloud deployments for user-defined architectures on the NTT KUMO platform"

    ],
  },
  {
    period: ['July 2024 -', 'December 2024'],
    title: 'Software Engineer',
    company: 'Vision One S.r.l',
    bullets: [
      "Developed scheduling system in .NET/Blazor, improving task allocation efficiency by 80%.",
      "Refactored legacy codebase, reducing unused code by 60% and improving maintainability.",
      "Introduced automated testing (xUnit), increasing test coverage to 80%."
    ],
  },
  {
    period: ['March 2024 -', 'July 2024'],
    title: 'Software Engineer',
    company: 'Caliò Informatica S.r.l',
    bullets: [
      "Developed workflow-building capabilities for AIDA, an OpenAI-powered automation platform, enabling non-technical users to create AI workflows through a visual drag-and-drop interface inspired by n8n.",
      "Optimized OpenAI API consumption through request redesign and prompt engineering strategies, reducing operational costs by 80% while improving response performance by 60%."
    ],
  },
]
