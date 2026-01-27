const GITHUB = 'https://github.com/HARSHDIPSAHA';

const projects = [
  { repo: 'brainglobe-registration', desc: 'Registration to BrainGlobe atlases in napari using Elastix.', lang: 'Python' },
  { repo: 'pySdf', desc: 'Signed distance fields and geometry utilities in Python.', lang: 'HTML' },
  { repo: 'tinySafetyNet', desc: 'No internet and feeling unsafe? Keep this tiny thing in your pocket.', lang: 'Python' },
  { repo: 'ethology', desc: 'Mix-and-match computer vision tools for animal behaviour analysis.', lang: 'Python' },
  { repo: 'movement', desc: 'Python toolbox for analysing animal body movements across space and time.', lang: 'Python' },
  { repo: 'Zombies-learning-progression-PGGAN-for-temporal-brain-MRI-imaging', desc: 'Creating zombies similar to humans — PGGAN for temporal brain MRI.', lang: 'Python' },
  { repo: 'cellfinder', desc: 'Automated 3D cell detection in very large images.', lang: 'Python' },
  { repo: 'brats_response_project', desc: 'Brain Tumor Progression — BraTS response classification.', lang: 'Shell' },
  { repo: 'brainrender-napari', desc: 'Napari plugin to render BrainGlobe atlases and associated data as layers.', lang: 'Python' },
  { repo: 'HARSHDIPSAHA', desc: 'Config files for my GitHub profile.', lang: 'Config' },
  { repo: 'knowledge-space-agent', desc: 'GenAI Chat agent for Knowledge Space.', lang: 'Python' },
  { repo: 'brainreg', desc: 'Automated 3D brain registration with multiple species and atlases.', lang: 'Python' },
  { repo: 'Agentic-Loan-Assistant-Chatbot', desc: 'EY Hackathon 2025 — Agentic loan assistant chatbot.', lang: 'TypeScript' },
  { repo: 'brainglobe-atlasapi', desc: 'Python interface to access neuroanatomical atlases.', lang: 'Python' },
  { repo: 'pyLSForge', desc: 'GPU-enabled, zero-copy AMReX Python bindings including AI/ML.', lang: 'Python' },
  { repo: 'HC-QBABC', desc: 'Soft computing lab — hybrid metaheuristics.', lang: 'Jupyter' },
  { repo: 'AquilaOptimiserOptimised', desc: 'Can Aquila catch prey with more precision? Evolutionary optimization.', lang: 'Jupyter' },
  { repo: 'APT', desc: 'HealthRevolution — AI-powered healthcare scheduling.', lang: 'Jupyter' },
  { repo: 'Tomato_disease_detection', desc: 'Upload tomato leaf images and get disease detection results.', lang: 'Jupyter' },
  { repo: 'Object_tracking_tennis_game', desc: 'Tennis player & ball detection, speed and avg_speed display.', lang: 'Jupyter' },
  { repo: 'Online-Museum-Ticketing-Chatbot', desc: 'Avoid crowds — use our AI bot for museum ticketing.', lang: 'CSS' },
  { repo: 'braindead_1-2', desc: 'All India Rank 14 — summarisation and EDA competition.', lang: 'HTML' },
  { repo: 'AI-ENHANCED-HEALTHCARE-DIAGNOSTICS-AND-MANAGEMENT-SYSTEM', desc: 'AI-driven healthcare diagnostics and management.', lang: 'Jupyter' },
  { repo: 'AI-generated-text-detector', desc: 'Fine-tuned models for AI-generated text detection.', lang: 'Jupyter' },
  { repo: 'Missing-person-identification-and-management-in-crowd', desc: 'AI-powered missing person detection in crowds.', lang: 'Python' },
  { repo: 'face_recognition_ml', desc: 'Playing with faces and embeddings.', lang: 'Python' },
  { repo: 'Anime_Recommender', desc: 'Watch your next anime now — recommendation system.', lang: 'Jupyter' },
  { repo: 'alien_invasion_pygame', desc: 'Classic arcade game with Pygame.', lang: 'Python' },
  { repo: 'gui-CANSAT', desc: 'GUI for CANSAT mission control.', lang: 'HTML' },
  { repo: 'youtubeproj_langchain', desc: 'Chatbot to extract & explain data from YouTube video comments.', lang: 'Python' },
];

function projectImage(repo) {
  return `https://github-readme-stats.vercel.app/api/pin?username=HARSHDIPSAHA&repo=${encodeURIComponent(repo)}&theme=dark&hide_border=true`;
}

function projectUrl(repo) {
  return `${GITHUB}/${repo}`;
}
