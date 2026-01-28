import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Row, Text } from "@once-ui-system/core";
import galleryImages from "@/data/gallery.json";

const person: Person = {
  firstName: "Harshdip",
  lastName: "Saha",
  name: "Harshdip Saha",
  role: "UG Researcher @ NexGenLab NSUT · Open to SDE & research internships",
  avatar: "/images/me.jpg",
  email: "harshdipsaha@gmail.com",
  location: "Asia/Kolkata",
  languages: [],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/HARSHDIPSAHA",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/harshdip-saha",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
  {
    name: "Resume",
    icon: "resume",
    link: "/resume.pdf",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio of ${person.name} — UG researcher @ NexGenLab NSUT. ML, computer vision, neuroimaging. Open to SDE & research internships.`,
  headline: <>Building ML pipelines & enjoying life through backpropagation</>,
  featured: {
    display: true,
    title: (
      <Row gap="8" vertical="center">
        <Text onBackground="brand-medium">Featured work</Text>
        <Text onBackground="neutral-weak">→</Text>
      </Row>
    ),
    href: "/work",
  },
  subline: (
    <>
      UG researcher @ NexGenLab NSUT · CSE @ NSUT. <br />
      ML, computer vision, neuroimaging — open to SDE & research internships.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `${person.name} — UG researcher @ NexGenLab NSUT. ML, computer vision, neuroimaging. Open to SDE & research internships.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        <p className="about-intro-p">
          I am a pre-final year pursuing{" "}
          <span className="intro-cyan">Computer Science Engineering with specialisation in AI</span> from{" "}
          <span className="intro-cyan">Netaji Subhas University of Technology (NSUT)</span>, Delhi, and currently a{" "}
          <span className="intro-emerald">UG researcher at NexGenLab NSUT</span>. I work on{" "}
          <span className="intro-amber">machine learning</span>,{" "}
          <span className="intro-amber">computer vision</span>, and{" "}
          <span className="intro-amber">neuroimaging</span> — and I'm{" "}
          <span className="intro-coral">open to SDE and research internships</span>.
        </p>
        <p className="about-intro-p">
          Highlights: <span className="intro-violet">All India Rank 14</span> in BRAINDEAD, and{" "}
          <span className="intro-violet">top 30</span> at AI4Humanity Summit (APT). I enjoy solving algorithmic puzzles
          and have solved <span className="intro-amber">10,000+</span> problems on LeetCode, GeeksforGeeks, and the like.
        </p>
      </>
    ),
  },
  work: {
    display: false,
    title: "Work Experience",
    experiences: [],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Netaji Subhas University of Technology, New Delhi — 2027",
        description: <>B.Tech CSE, GPA 8.78. Data Structures, Algorithms, AI, ML.</>,
      },
      {
        name: "Kendriya Vidyalaya No.2, Delhi Cantt — Class XII, 95.6%",
        description: <>CBSE higher secondary education.</>,
      },
      {
        name: "Kendriya Vidyalaya No.2, Delhi Cantt — Class X, 98.4%",
        description: <>CBSE board examinations.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    techStack: [
      { name: "Python", icon: "python" },
      { name: "C++", icon: "cplusplus" },
      { name: "Jupyter", icon: "jupyter" },
      { name: "Pandas", icon: "pandas" },
      { name: "PyTorch", icon: "pytorch" },
      { name: "TensorFlow", icon: "tensorflow" },
      { name: "scikit-learn", icon: "scikitlearn" },
      { name: "OpenCV", icon: "opencv" },
      { name: "MATLAB", icon: "matlab" },
      { name: "SQL", icon: "sql" },
      { name: "Docker", icon: "docker" },
      { name: "Git", icon: "git" },
      { name: "AWS", icon: "aws" },
      { name: "GCP", icon: "gcp" },
      { name: "Hugging Face", icon: "huggingface" },
    ],
    skills: [
      {
        title: "Machine Learning & Data Science",
        description: (
          <>
            Building ML models with Python, PyTorch, TensorFlow, scikit-learn,
            MONAI, and data visualization.
          </>
        ),
        tags: [
          { name: "Python", icon: "python" },
          { name: "Jupyter", icon: "jupyter" },
          { name: "Pandas", icon: "pandas" },
        ],
        images: [],
      },
      {
        title: "Computer Vision & Neuroimaging",
        description: (
          <>
            Developing 3D medical imaging, segmentation, and computer vision
            pipelines.
          </>
        ),
        tags: [
          { name: "Python", icon: "python" },
        ],
        images: [],
      },
      {
        title: "Cloud & Tools",
        description: (
          <>
            Azure, GCP, Hugging Face, LangChain, Git, Docker.
          </>
        ),
        tags: [
          { name: "Docker", icon: "docker" },
          { name: "AWS", icon: "aws" },
        ],
        images: [],
      },
    ],
  },
  researchInterests: {
    display: true,
    title: "Research interests",
    items: [
      "Machine learning",
      "Artificial intelligence",
      "Natural language processing",
      "Computer vision",
      "Medical AI",
      "Neuroimaging",
      "Cloud computing",
      "Time series analysis",
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about Tech and Growth...",
  description: `Read what ${person.firstName} has been up to recently`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `ML, computer vision, healthcare & hackathon projects — with code and case studies.`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Gallery – ${person.name}`,
  description: `Moments from MICCAI 2025, hackathons, and beyond.`,
  images: galleryImages as { src: string; alt: string; orientation: string }[],
};

export { person, social, newsletter, home, about, blog, work, gallery };
