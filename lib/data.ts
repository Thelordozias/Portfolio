/**
 * lib/data.ts
 *
 * Central data file — the single source of truth for all content.
 *
 * To add a new project:  push to the `projects` array.
 * To add a new paper:    push to the `researchPapers` array.
 *
 * The `id` field on research papers becomes the URL slug:
 *   id: "filtered-back-projection" → /research/filtered-back-projection
 */

/* ─────────────────────────────────────────────────────────────
   TYPES
───────────────────────────────────────────────────────────── */

export type Project = {
  id: string;
  year: string;
  name: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  /** If true, show a link to the research page */
  linkedToResearch?: boolean;
};

export type ResearchSection = {
  heading: string;
  body: string;
};

export type ResearchPaper = {
  /** URL slug — used in /research/[id] route */
  id: string;
  title: string;
  topic: string;
  year: string;
  supervisor: string;
  abstract: string;
  /** Body is split into sections for clean rendering */
  sections: ResearchSection[];
  tags: string[];
};

/* ─────────────────────────────────────────────────────────────
   PROJECTS DATA
   ── Replace githubUrl / liveUrl with your real links ──────
───────────────────────────────────────────────────────────── */

export const projects: Project[] = [
  {
    id: "pomai",
    year: "2025",
    name: "PomAI",
    description:
      "An AI-powered productivity application built around the Pomodoro technique. Uses machine learning to adapt session durations based on user focus patterns and task complexity.",
    tags: ["React", "AI/ML", "Productivity", "UX"],
    githubUrl: "https://github.com/ozias/pomai",
    liveUrl: "https://pomai.vercel.app",
  },
  {
    id: "meal-finder",
    year: "2025",
    name: "BMCC Meal Finder",
    description:
      "A C++ command-line application addressing food insecurity on the BMCC campus. Uses inheritance and OOP design patterns to model facilities, meal types, and availability windows.",
    tags: ["C++", "OOP", "Social Impact"],
    githubUrl: "https://github.com/ozias/bmcc-meal-finder",
  },
  {
    id: "ai-marketing",
    year: "2025",
    name: "AI Marketing Generator",
    description:
      "Team project from the PowerToFly × Skillcrush Sprinternship. An AI-powered tool that creates brand-consistent marketing content by analyzing tone, audience, and intent.",
    tags: ["AI/LLM", "Team", "API", "Content Gen"],
    githubUrl: "https://github.com/ozias/ai-marketing",
  },
  {
    id: "church-app",
    year: "2024",
    name: "Church Website & App",
    description:
      "Full web application for CIE-MIA church, including event management, communication tools for the congregation, and a responsive interface optimized for all users.",
    tags: ["JavaScript", "Community", "Web"],
    githubUrl: "https://github.com/ozias/church-app",
  },
  {
    id: "ct-visualizer",
    year: "2024",
    name: "CT Sinogram Visualizer",
    description:
      "A Python visualization tool for CT scan sinogram data. Implements filtered back projection algorithms and neural network-enhanced reconstruction for educational and research use.",
    tags: ["Python", "Medical Imaging", "Research"],
    githubUrl: "https://github.com/ozias/ct-visualizer",
    linkedToResearch: true,
  },
];

/* ─────────────────────────────────────────────────────────────
   RESEARCH PAPERS DATA
   ── The `id` becomes the URL slug ────────────────────────
───────────────────────────────────────────────────────────── */

export const researchPapers: ResearchPaper[] = [
  {
    id: "filtered-back-projection",
    title: "Filtered Back Projection in CT Reconstruction",
    topic: "Medical Imaging",
    year: "2025",
    supervisor: "Prof. Benkarroum",
    abstract:
      "An in-depth exploration of the filtered back projection (FBP) algorithm as the classical standard for computed tomography reconstruction. This study examines the mathematical foundations of the Radon transform and its inverse, analyzing how frequency-domain filtering removes the blurring artifact inherent to naive back projection.",
    sections: [
      {
        heading: "Background",
        body: "Computed Tomography (CT) reconstruction translates X-ray projection data into cross-sectional images of a subject. The central mathematical tool is the Radon transform, which maps a 2D function to the set of its line integrals. The inverse problem — recovering the original image from projections — is ill-posed without proper regularization. Filtered Back Projection addresses this by applying a ramp filter in the Fourier domain prior to backprojecting.",
      },
      {
        heading: "Method",
        body: "We implemented FBP in Python using NumPy and SciPy, testing reconstruction quality across varying numbers of projection angles. The Ram-Lak, Shepp-Logan, and Cosine filters were compared against phantom test data to evaluate noise suppression and edge preservation.",
      },
      {
        heading: "Key Findings",
        body: "Reconstruction quality degrades significantly below 90 projections. The Shepp-Logan filter provides the best balance between noise suppression and edge preservation for typical medical phantom data, making it the preferred default in resource-constrained scenarios.",
      },
    ],
    tags: ["CT Reconstruction", "FBP", "Radon Transform", "Python", "Medical Imaging"],
  },
  {
    id: "neural-networks-dynamic-reconstruction",
    title: "Neural Networks for Dynamic Image Reconstruction",
    topic: "Deep Learning",
    year: "2025",
    supervisor: "Prof. Benkarroum",
    abstract:
      "This research investigates the use of convolutional neural networks as a post-processing enhancement layer for classical CT reconstruction algorithms. Rather than replacing FBP entirely, a lightweight U-Net architecture is trained to suppress ring artifacts and noise while preserving diagnostic-quality edge detail.",
    sections: [
      {
        heading: "Motivation",
        body: "Classical FBP produces reliable reconstructions but remains sensitive to noise and limited-angle acquisition — both common in resource-constrained clinical settings. Neural enhancement provides a promising path toward maintaining image quality with reduced radiation dose.",
      },
      {
        heading: "Architecture",
        body: "A compact U-Net with skip connections processes FBP-reconstructed slices as input and outputs denoised images. The network is trained on synthetic phantom data with controlled noise injection, keeping the model small enough for CPU-only inference.",
      },
      {
        heading: "Results",
        body: "The neural post-processor improved SSIM scores by 12–18% on limited-angle reconstructions while adding less than 40ms of inference time per slice on a standard CPU — making it viable for low-resource deployment in underserved clinical environments.",
      },
    ],
    tags: ["U-Net", "Deep Learning", "Denoising", "CT", "SSIM"],
  },
  {
    id: "sinogram-generation",
    title: "Sinogram Generation and Projection Methods",
    topic: "Tomography",
    year: "2025",
    supervisor: "Prof. Benkarroum",
    abstract:
      "A systematic study of sinogram generation techniques for parallel-beam and fan-beam CT geometries. We analyze the effect of acquisition geometry on sinogram completeness and investigate data consistency conditions that constrain valid projection sets.",
    sections: [
      {
        heading: "Overview",
        body: "A sinogram represents the complete set of projections acquired during a CT scan. Each row corresponds to a single projection angle, and its columns encode the 1D attenuation profile along parallel rays.",
      },
      {
        heading: "Geometry Comparison",
        body: "Parallel-beam geometry simplifies the Radon transform inversion but is less common in modern scanners. Fan-beam geometry requires rebinning to parallel coordinates before standard FBP can be applied — a step that introduces interpolation artifacts.",
      },
      {
        heading: "Data Consistency",
        body: "Helgason-Ludwig consistency conditions define mathematical constraints on valid sinogram data. Violations indicate measurement error, truncation, or patient motion — critical for diagnosing acquisition artifacts before reconstruction.",
      },
    ],
    tags: ["Sinogram", "Parallel-Beam", "Fan-Beam", "Radon", "Tomography"],
  },
  {
    id: "resource-constrained-healthcare",
    title: "Resource-Constrained Computing in Healthcare",
    topic: "Systems",
    year: "2024",
    supervisor: "Independent Study",
    abstract:
      "An investigation into the systems-level challenges of deploying computational healthcare tools in environments with limited hardware, intermittent power, and low bandwidth. Drawing from experiences in West Africa and underserved communities, this work proposes a framework for designing algorithms that degrade gracefully under constraint.",
    sections: [
      {
        heading: "Problem Statement",
        body: "Medical imaging and diagnostic AI tools are typically designed for well-resourced environments: high-performance GPUs, stable power, reliable internet. Deploying these tools in rural clinics in Burkina Faso requires a fundamentally different design philosophy — one that treats constraint as a design parameter, not an exception.",
      },
      {
        heading: "Framework Proposed",
        body: 'We propose "graceful degradation by design" — systems that deliver reduced but useful outputs when resources are scarce, rather than failing entirely. This draws from principles in fault-tolerant computing and adaptive bitrate streaming, applied to medical imaging pipelines.',
      },
      {
        heading: "Case Study",
        body: "A chest X-ray screening tool was evaluated at three resource levels: full GPU inference, CPU-only inference, and a quantized mobile model. All three produced clinically actionable outputs, with the lightest model retaining 89% sensitivity for pneumonia detection.",
      },
    ],
    tags: ["Healthcare AI", "Edge Computing", "Burkina Faso", "Graceful Degradation", "Systems"],
  },
  {
    id: "low-resource-diagnostics",
    title: "Algorithmic Approaches to Low-Resource Diagnostics",
    topic: "Algorithms",
    year: "2024",
    supervisor: "Independent Study",
    abstract:
      "Exploring how classical signal processing and sparse reconstruction algorithms can substitute for deep learning in low-data and low-compute diagnostic scenarios. This paper surveys compressed sensing, dictionary learning, and model-based iterative reconstruction as computationally accessible alternatives.",
    sections: [
      {
        heading: "Motivation",
        body: "Deep learning achieves state-of-the-art performance across medical imaging tasks, but requires large datasets and significant compute at both training and inference time. Alternative algorithms enable deployment where neither is available.",
      },
      {
        heading: "Compressed Sensing",
        body: "Leveraging sparsity in the wavelet domain, compressed sensing can reconstruct high-quality CT images from as few as 20% of the theoretically required projections — reducing scan time and radiation dose simultaneously.",
      },
      {
        heading: "Dictionary Learning",
        body: "Adaptive dictionaries learned from small local datasets can outperform fixed wavelet bases for anatomy-specific reconstruction, requiring no large pre-training dataset and minimal compute overhead — ideal for resource-constrained clinics.",
      },
    ],
    tags: ["Compressed Sensing", "Sparse Reconstruction", "Dictionary Learning", "Algorithms"],
  },
];
