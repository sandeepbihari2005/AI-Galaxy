const studentData = {
  "tools": [
    {
      "tool_name": "ChatGPT",
      "category": "AI chatbots",
      "main_purpose": "General writing and logic assistance",
      "features": [
        "conversation",
        "coding help",
        "content writing"
      ],
      "website": "https://chatgpt.com",
      "pricing": "Freemium",
      "best_for": [
        "studying",
        "coding",
        "brainstorming ideas"
      ]
    },
    {
      "tool_name": "Gemini",
      "category": "AI chatbots",
      "main_purpose": "Google integrated conversational AI",
      "features": [
        "Docs integration",
        "Vision",
        "Fast reasoning"
      ],
      "website": "https://gemini.google.com",
      "pricing": "Freemium",
      "best_for": [
        "summarizing docs",
        "coding",
        "research"
      ]
    },
    {
      "tool_name": "Claude",
      "category": "AI chatbots",
      "main_purpose": "Advanced reasoning and safe writing",
      "features": [
        "Large context window",
        "Artifacts",
        "Nuanced writing"
      ],
      "website": "https://claude.ai",
      "pricing": "Freemium",
      "best_for": [
        "essay writing",
        "analyzing long PDFs",
        "coding"
      ]
    },
    {
      "tool_name": "Microsoft Copilot",
      "category": "AI chatbots",
      "main_purpose": "Enterprise-grade web search and chat",
      "features": [
        "web grounding",
        "image generation",
        "Office integration"
      ],
      "website": "https://copilot.microsoft.com",
      "pricing": "Free",
      "best_for": [
        "answering questions",
        "creative drafting",
        "research"
      ]
    },
    {
      "tool_name": "Pi",
      "category": "AI chatbots",
      "main_purpose": "Emotionally intelligent companion chatbot",
      "features": [
        "voice chat",
        "high empathy",
        "brainstorming"
      ],
      "website": "https://pi.ai",
      "pricing": "Free",
      "best_for": [
        "sounding board",
        "venting",
        "exploring ideas"
      ]
    },
    {
      "tool_name": "Poe",
      "category": "AI chatbots",
      "main_purpose": "Multi-model chat aggregator",
      "features": [
        "create bots",
        "access closed models",
        "fast access"
      ],
      "website": "https://poe.com",
      "pricing": "Freemium",
      "best_for": [
        "comparing AI models",
        "creating custom study bots",
        "coding context"
      ]
    },
    {
      "tool_name": "HuggingChat",
      "category": "AI chatbots",
      "main_purpose": "Open-source conversational interface",
      "features": [
        "open weights",
        "web search",
        "privacy focused"
      ],
      "website": "https://huggingface.co/chat",
      "pricing": "Free",
      "best_for": [
        "open-source research",
        "general inquiries",
        "data analysis"
      ]
    },
    {
      "tool_name": "Mistral Le Chat",
      "category": "AI chatbots",
      "main_purpose": "Fast European conversational AI",
      "features": [
        "extreme speed",
        "multilingual",
        "code-fluent"
      ],
      "website": "https://chat.mistral.ai",
      "pricing": "Freemium",
      "best_for": [
        "fast coding",
        "translation texts",
        "logic puzzles"
      ]
    },
    {
      "tool_name": "Grok",
      "category": "AI chatbots",
      "main_purpose": "Real-time knowledge generation via X",
      "features": [
        "humorous mode",
        "live X data",
        "code interpreter"
      ],
      "website": "https://x.com/i/grok",
      "pricing": "Paid",
      "best_for": [
        "news summarization",
        "real-time events",
        "data crunching"
      ]
    },
    {
      "tool_name": "Character.AI",
      "category": "AI chatbots",
      "main_purpose": "Immersive persona chatbots",
      "features": [
        "user-created personas",
        "group chats",
        "voice acting"
      ],
      "website": "https://character.ai",
      "pricing": "Freemium",
      "best_for": [
        "language learning partners",
        "debating figures",
        "creative writing"
      ]
    },
    {
      "tool_name": "Perplexity",
      "category": "AI research tools",
      "main_purpose": "Fact-checked AI search engine",
      "features": [
        "real-time web search",
        "source citations",
        "copilot"
      ],
      "website": "https://www.perplexity.ai",
      "pricing": "Freemium",
      "best_for": [
        "research papers",
        "fact-checking",
        "literature reviews"
      ]
    },
    {
      "tool_name": "Consensus",
      "category": "AI research tools",
      "main_purpose": "Searching through peer-reviewed papers",
      "features": [
        "extracts methodology",
        "synthesis",
        "only academic sources"
      ],
      "website": "https://consensus.app",
      "pricing": "Freemium",
      "best_for": [
        "thesis research",
        "medical queries",
        "finding citations"
      ]
    },
    {
      "tool_name": "Elicit",
      "category": "AI research tools",
      "main_purpose": "Automating literature reviews",
      "features": [
        "data extraction",
        "finding relationships",
        "summaries"
      ],
      "website": "https://elicit.org",
      "pricing": "Freemium",
      "best_for": [
        "meta-analysis",
        "finding relevant papers",
        "concept mapping"
      ]
    },
    {
      "tool_name": "SciSpace (Typeset.io)",
      "category": "AI research tools",
      "main_purpose": "AI copilot for deciphering research papers",
      "features": [
        "explain math",
        "extract data from PDFs",
        "formatting"
      ],
      "website": "https://typeset.io",
      "pricing": "Freemium",
      "best_for": [
        "reading complex PDFs",
        "understanding STEM papers",
        "finding related work"
      ]
    },
    {
      "tool_name": "Scholarcy",
      "category": "AI research tools",
      "main_purpose": "AI summarizing tool for articles",
      "features": [
        "flashcards",
        "key point extraction",
        "reference linking"
      ],
      "website": "https://scholarcy.com",
      "pricing": "Freemium",
      "best_for": [
        "speed reading",
        "creating study cards",
        "annotating"
      ]
    },
    {
      "tool_name": "Research Rabbit",
      "category": "AI research tools",
      "main_purpose": "Citation-based literature mapping",
      "features": [
        "visual graphs",
        "Zotero sync",
        "author networks"
      ],
      "website": "https://researchrabbit.ai",
      "pricing": "Free",
      "best_for": [
        "discovering rabbit holes",
        "literature gaps",
        "visualizing research"
      ]
    },
    {
      "tool_name": "Connected Papers",
      "category": "AI research tools",
      "main_purpose": "Visual tool to find related academic papers",
      "features": [
        "prior works",
        "derivative works",
        "trend visualization"
      ],
      "website": "https://connectedpapers.com",
      "pricing": "Freemium",
      "best_for": [
        "building a bibliography",
        "finding canonical papers",
        "visual research"
      ]
    },
    {
      "tool_name": "Semantic Scholar",
      "category": "AI research tools",
      "main_purpose": "AI-backed academic search engine",
      "features": [
        "TLDRs",
        "citation intent",
        "author filtering"
      ],
      "website": "https://semanticscholar.org",
      "pricing": "Free",
      "best_for": [
        "finding highly-cited papers",
        "skimming abstracts",
        "CS and Biomedicine"
      ]
    },
    {
      "tool_name": "You.com",
      "category": "AI research tools",
      "main_purpose": "AI search engine with customizable agents",
      "features": [
        "custom modes",
        "code execution",
        "live web"
      ],
      "website": "https://you.com",
      "pricing": "Freemium",
      "best_for": [
        "general research",
        "technical queries",
        "coding search"
      ]
    },
    {
      "tool_name": "Monica.im",
      "category": "AI research tools",
      "main_purpose": "All-in-one browser assistant for reading",
      "features": [
        "chat with PDF",
        "translation",
        "web summary"
      ],
      "website": "https://monica.im",
      "pricing": "Freemium",
      "best_for": [
        "reading long assignments",
        "quick translations",
        "PDF studying"
      ]
    },
    {
      "tool_name": "GitHub Copilot",
      "category": "AI coding assistants",
      "main_purpose": "AI pair programmer",
      "features": [
        "IDE integration",
        "autocomplete",
        "chat"
      ],
      "website": "https://github.com/features/copilot",
      "pricing": "Paid (Free for Students)",
      "best_for": [
        "learning programming",
        "coding projects",
        "debugging"
      ]
    },
    {
      "tool_name": "Cursor",
      "category": "AI coding assistants",
      "main_purpose": "AI-first code editor",
      "features": [
        "multi-file edits",
        "composer",
        "codebase indexing"
      ],
      "website": "https://cursor.com",
      "pricing": "Freemium",
      "best_for": [
        "building apps",
        "navigating large projects",
        "fast refactoring"
      ]
    },
    {
      "tool_name": "Codeium",
      "category": "AI coding assistants",
      "main_purpose": "Free fast code acceleration",
      "features": [
        "autocomplete",
        "chat",
        "command interface"
      ],
      "website": "https://codeium.com",
      "pricing": "Free",
      "best_for": [
        "personal coding projects",
        "snippet generation",
        "fast typing"
      ]
    },
    {
      "tool_name": "Tabnine",
      "category": "AI coding assistants",
      "main_purpose": "Private and secure AI coding assistant",
      "features": [
        "local execution",
        "enterprise privacy",
        "code completions"
      ],
      "website": "https://tabnine.com",
      "pricing": "Freemium",
      "best_for": [
        "secure coding",
        "learning syntax",
        "working in secure environments"
      ]
    },
    {
      "tool_name": "Amazon Q Developer",
      "category": "AI coding assistants",
      "main_purpose": "Cloud-optimized coding assistant",
      "features": [
        "AWS integration",
        "security scanning",
        "code upgrading"
      ],
      "website": "https://aws.amazon.com/q/developer",
      "pricing": "Freemium",
      "best_for": [
        "cloud computing projects",
        "learning AWS",
        "security checks"
      ]
    },
    {
      "tool_name": "Replit Ghostwriter",
      "category": "AI coding assistants",
      "main_purpose": "Browser-based AI IDE assistant",
      "features": [
        "explain code",
        "generate apps",
        "cloud hosting"
      ],
      "website": "https://replit.com/site/ghostwriter",
      "pricing": "Freemium",
      "best_for": [
        "hackathons",
        "collaborative student projects",
        "quick prototypes"
      ]
    },
    {
      "tool_name": "Supermaven",
      "category": "AI coding assistants",
      "main_purpose": "Extremely fast code completion",
      "features": [
        "1m token context",
        "instant latency",
        "in-line suggestions"
      ],
      "website": "https://supermaven.com",
      "pricing": "Freemium",
      "best_for": [
        "large student projects",
        "fast iterated coding",
        "learning patterns"
      ]
    },
    {
      "tool_name": "CodiumAI",
      "category": "AI coding assistants",
      "main_purpose": "AI test generation and analysis",
      "features": [
        "unit test generation",
        "code behavior analysis",
        "PR review"
      ],
      "website": "https://codium.ai",
      "pricing": "Freemium",
      "best_for": [
        "writing robust tests",
        "finding bugs",
        "understanding edge cases"
      ]
    },
    {
      "tool_name": "Blackbox",
      "category": "AI coding assistants",
      "main_purpose": "Search code directly from IDE",
      "features": [
        "extract code from video",
        "chat",
        "snippets"
      ],
      "website": "https://blackbox.ai",
      "pricing": "Freemium",
      "best_for": [
        "finding code templates",
        "copying tutorial code",
        "quick logic search"
      ]
    },
    {
      "tool_name": "v0 by Vercel",
      "category": "AI coding assistants",
      "main_purpose": "Generative UI interface building",
      "features": [
        "React components",
        "Tailwind CSS",
        "live preview"
      ],
      "website": "https://v0.dev",
      "pricing": "Freemium",
      "best_for": [
        "frontend web dev",
        "UI/UX projects",
        "rapid prototyping"
      ]
    },
    {
      "tool_name": "Midjourney",
      "category": "AI image generation tools",
      "main_purpose": "Creating high-quality art",
      "features": [
        "photorealism",
        "stylization",
        "Discord interface"
      ],
      "website": "https://www.midjourney.com",
      "pricing": "Paid",
      "best_for": [
        "presentation visuals",
        "design projects",
        "concept art"
      ]
    },
    {
      "tool_name": "DALL-E 3",
      "category": "AI image generation tools",
      "main_purpose": "Prompt-accurate images",
      "features": [
        "text in images",
        "ChatGPT integration",
        "safe generation"
      ],
      "website": "https://openai.com/dall-e-3",
      "pricing": "Paid",
      "best_for": [
        "blog illustrations",
        "diagram generation",
        "literal interpretations"
      ]
    },
    {
      "tool_name": "Stable Diffusion",
      "category": "AI image generation tools",
      "main_purpose": "Open-source image generation",
      "features": [
        "local running",
        "ControlNet",
        "uncensored"
      ],
      "website": "https://stability.ai",
      "pricing": "Free/Open Source",
      "best_for": [
        "AI art research",
        "highly controlled generation",
        "building tools"
      ]
    },
    {
      "tool_name": "Leonardo.ai",
      "category": "AI image generation tools",
      "main_purpose": "Game asset and art generation",
      "features": [
        "custom models",
        "canvas editor",
        "texture generation"
      ],
      "website": "https://leonardo.ai",
      "pricing": "Freemium",
      "best_for": [
        "game design students",
        "concept sheets",
        "consistent styles"
      ]
    },
    {
      "tool_name": "Ideogram",
      "category": "AI image generation tools",
      "main_purpose": "Best-in-class text generation within images",
      "features": [
        "typography",
        "logo design",
        "poster generation"
      ],
      "website": "https://ideogram.ai",
      "pricing": "Freemium",
      "best_for": [
        "club flyers",
        "logos",
        "typographic posters"
      ]
    },
    {
      "tool_name": "Adobe Firefly",
      "category": "AI image generation tools",
      "main_purpose": "Commercial-safe design generation",
      "features": [
        "generative fill",
        "text effects",
        "Creative Cloud integration"
      ],
      "website": "https://firefly.adobe.com",
      "pricing": "Freemium",
      "best_for": [
        "marketing projects",
        "photo editing",
        "vector recoloring"
      ]
    },
    {
      "tool_name": "Craiyon",
      "category": "AI image generation tools",
      "main_purpose": "Free fast image generation",
      "features": [
        "no login required",
        "fast",
        "unlimited prompts"
      ],
      "website": "https://craiyon.com",
      "pricing": "Free",
      "best_for": [
        "brainstorming",
        "quick visual aides",
        "mockups"
      ]
    },
    {
      "tool_name": "Playground AI",
      "category": "AI image generation tools",
      "main_purpose": "Free online AI image creator",
      "features": [
        "mixed models",
        "image editing",
        "community feed"
      ],
      "website": "https://playgroundai.com",
      "pricing": "Freemium",
      "best_for": [
        "exploring prompts",
        "generating assets",
        "digital painting"
      ]
    },
    {
      "tool_name": "Lexica",
      "category": "AI image generation tools",
      "main_purpose": "Search engine for AI generated art",
      "features": [
        "prompt search",
        "Aperture model",
        "high aesthetic"
      ],
      "website": "https://lexica.art",
      "pricing": "Freemium",
      "best_for": [
        "finding inspiration",
        "learning prompt engineering",
        "concept art"
      ]
    },
    {
      "tool_name": "Recraft",
      "category": "AI image generation tools",
      "main_purpose": "Vector AI generation",
      "features": [
        "SVG exports",
        "brand consistency",
        "icon generation"
      ],
      "website": "https://recraft.ai",
      "pricing": "Freemium",
      "best_for": [
        "UI design",
        "iconography",
        "scalable graphics"
      ]
    },
    {
      "tool_name": "Runway",
      "category": "AI video creation tools",
      "main_purpose": "Video editing and generation",
      "features": [
        "text-to-video",
        "Gen-2",
        "motion brush"
      ],
      "website": "https://runwayml.com",
      "pricing": "Freemium",
      "best_for": [
        "film projects",
        "video presentations",
        "b-roll generation"
      ]
    },
    {
      "tool_name": "Pika",
      "category": "AI video creation tools",
      "main_purpose": "Lip sync and text-to-video",
      "features": [
        "Discord bot",
        "lip sync",
        "animation expansion"
      ],
      "website": "https://pika.art",
      "pricing": "Freemium",
      "best_for": [
        "animating logos",
        "storyboarding",
        "sound effect generation"
      ]
    },
    {
      "tool_name": "Sora",
      "category": "AI video creation tools",
      "main_purpose": "Hyper-realistic video generation",
      "features": [
        "complex camera motion",
        "physical realism",
        "high coherence"
      ],
      "website": "https://openai.com/sora",
      "pricing": "Paid",
      "best_for": [
        "cinematic clips",
        "simulating concepts",
        "high-end projects"
      ]
    },
    {
      "tool_name": "HeyGen",
      "category": "AI video creation tools",
      "main_purpose": "AI Avatar video creation",
      "features": [
        "realistic avatars",
        "voice cloning",
        "translation"
      ],
      "website": "https://heygen.com",
      "pricing": "Freemium",
      "best_for": [
        "explainer videos",
        "language presentations",
        "pitch videos"
      ]
    },
    {
      "tool_name": "Synthesia",
      "category": "AI video creation tools",
      "main_purpose": "Enterprise-grade avatar videos",
      "features": [
        "multi-language",
        "custom avatars",
        "templates"
      ],
      "website": "https://synthesia.io",
      "pricing": "Paid",
      "best_for": [
        "tutorial videos",
        "formal presentations",
        "training material"
      ]
    },
    {
      "tool_name": "InVideo",
      "category": "AI video creation tools",
      "main_purpose": "Prompt-to-video assembler",
      "features": [
        "auto voiceover",
        "stock footage curation",
        "script generation"
      ],
      "website": "https://invideo.io",
      "pricing": "Freemium",
      "best_for": [
        "faceless channels",
        "history projects",
        "quick summaries"
      ]
    },
    {
      "tool_name": "Fliki",
      "category": "AI video creation tools",
      "main_purpose": "Text to video with lifelike voices",
      "features": [
        "article to video",
        "tweet to video",
        "rich media library"
      ],
      "website": "https://fliki.ai",
      "pricing": "Freemium",
      "best_for": [
        "converting essays to video",
        "social media clips",
        "audiobooks"
      ]
    },
    {
      "tool_name": "Luma Dream Machine",
      "category": "AI video creation tools",
      "main_purpose": "High-quality fast video generation",
      "features": [
        "keyframe control",
        "fast generation",
        "dynamic shots"
      ],
      "website": "https://lumalabs.ai/dream-machine",
      "pricing": "Freemium",
      "best_for": [
        "action shots",
        "creative visual effects",
        "story creation"
      ]
    },
    {
      "tool_name": "Kaiber",
      "category": "AI video creation tools",
      "main_purpose": "Music video and audio-reactive generation",
      "features": [
        "audio reactivity",
        "style transfer",
        "animation"
      ],
      "website": "https://kaiber.ai",
      "pricing": "Paid",
      "best_for": [
        "music projects",
        "artistic representations",
        "portfolio reels"
      ]
    },
    {
      "tool_name": "Pictory",
      "category": "AI video creation tools",
      "main_purpose": "Long form to short form video clipping",
      "features": [
        "auto-captions",
        "highlight extraction",
        "blog to video"
      ],
      "website": "https://pictory.ai",
      "pricing": "Paid",
      "best_for": [
        "editing lecture recordings",
        "creating study highlights",
        "marketing clips"
      ]
    },
    {
      "tool_name": "ElevenLabs",
      "category": "AI voice generation tools",
      "main_purpose": "Realistic text-to-speech",
      "features": [
        "voice cloning",
        "emotion",
        "dubbing"
      ],
      "website": "https://elevenlabs.io",
      "pricing": "Freemium",
      "best_for": [
        "voiceovers for video projects",
        "accessibility reading",
        "podcasts"
      ]
    },
    {
      "tool_name": "Speechify",
      "category": "AI voice generation tools",
      "main_purpose": "Reading text aloud",
      "features": [
        "web extension",
        "celebrity voices",
        "document scanning"
      ],
      "website": "https://speechify.com",
      "pricing": "Freemium",
      "best_for": [
        "listening to textbooks",
        "reviewing essays aloud",
        "ADHD/Dyslexia support"
      ]
    },
    {
      "tool_name": "Murf AI",
      "category": "AI voice generation tools",
      "main_purpose": "Studio-quality voiceovers",
      "features": [
        "pitch control",
        "video integration",
        "team collaboration"
      ],
      "website": "https://murf.ai",
      "pricing": "Freemium",
      "best_for": [
        "presentation narration",
        "elearning modules",
        "polished projects"
      ]
    },
    {
      "tool_name": "PlayHT",
      "category": "AI voice generation tools",
      "main_purpose": "Ultra-realistic text to audio",
      "features": [
        "real-time API",
        "voice cloning",
        "podcast hosting"
      ],
      "website": "https://play.ht",
      "pricing": "Freemium",
      "best_for": [
        "audio articles",
        "interactive apps",
        "language practice"
      ]
    },
    {
      "tool_name": "Descript",
      "category": "AI voice generation tools",
      "main_purpose": "Audio/video editing like a doc",
      "features": [
        "overdub",
        "filler word removal",
        "transcription"
      ],
      "website": "https://descript.com",
      "pricing": "Freemium",
      "best_for": [
        "editing podcasts",
        "interview transcription",
        "cleaning up recorded audio"
      ]
    },
    {
      "tool_name": "Lovo",
      "category": "AI voice generation tools",
      "main_purpose": "AI Voice Generator & Text to Speech",
      "features": [
        "multi-speaker",
        "sound effects",
        "rapid generation"
      ],
      "website": "https://lovo.ai",
      "pricing": "Freemium",
      "best_for": [
        "group project videos",
        "game development audio",
        "creative media"
      ]
    },
    {
      "tool_name": "Resemble AI",
      "category": "AI voice generation tools",
      "main_purpose": "Ethical voice cloning",
      "features": [
        "API access",
        "watermarking",
        "localization"
      ],
      "website": "https://resemble.ai",
      "pricing": "Paid",
      "best_for": [
        "advanced audio projects",
        "research on AI safety",
        "localized content"
      ]
    },
    {
      "tool_name": "WellSaid Labs",
      "category": "AI voice generation tools",
      "main_purpose": "Corporate-grade text-to-speech",
      "features": [
        "API integrations",
        "custom pronunciation",
        "high fidelity"
      ],
      "website": "https://wellsaidlabs.com",
      "pricing": "Paid",
      "best_for": [
        "formal business presentations",
        "capstone projects",
        "startup pitches"
      ]
    },
    {
      "tool_name": "Altered Studio",
      "category": "AI voice generation tools",
      "main_purpose": "Voice morphing editor",
      "features": [
        "change accent",
        "change gender",
        "local recording"
      ],
      "website": "https://altered.ai",
      "pricing": "Freemium",
      "best_for": [
        "acting out dialogues",
        "privacy masking",
        "game design"
      ]
    },
    {
      "tool_name": "Voiceflow",
      "category": "AI voice generation tools",
      "main_purpose": "Designing conversational AI",
      "features": [
        "visual flow builder",
        "prototyping",
        "Alexa/Google home apps"
      ],
      "website": "https://voiceflow.com",
      "pricing": "Freemium",
      "best_for": [
        "HCI projects",
        "building chatbots",
        "UX design courses"
      ]
    },
    {
      "tool_name": "Notion AI",
      "category": "AI productivity tools",
      "main_purpose": "Workspace AI",
      "features": [
        "summarization",
        "writing improvement",
        "Q&A on notes"
      ],
      "website": "https://notion.so/product/ai",
      "pricing": "Paid Add-on",
      "best_for": [
        "organizing study notes",
        "project planning",
        "drafting"
      ]
    },
    {
      "tool_name": "GrammarlyGO",
      "category": "AI productivity tools",
      "main_purpose": "Writing analysis and improvement",
      "features": [
        "tone adjustment",
        "grammar checks",
        "plagiarism checker"
      ],
      "website": "https://grammarly.com/ai",
      "pricing": "Freemium",
      "best_for": [
        "writing assignments",
        "proofreading essays",
        "emailing professors"
      ]
    },
    {
      "tool_name": "Otter.ai",
      "category": "AI productivity tools",
      "main_purpose": "Meeting and lecture transcription",
      "features": [
        "live transcription",
        "automated summaries",
        "keyword extraction"
      ],
      "website": "https://otter.ai",
      "pricing": "Freemium",
      "best_for": [
        "recording lectures",
        "group study meetings",
        "reviewing notes"
      ]
    },
    {
      "tool_name": "Mem",
      "category": "AI productivity tools",
      "main_purpose": "Self-organizing workspace",
      "features": [
        "smart search",
        "automatic tagging",
        "knowledge graph"
      ],
      "website": "https://mem.ai",
      "pricing": "Paid",
      "best_for": [
        "personal knowledge management",
        "connecting ideas",
        "research tracking"
      ]
    },
    {
      "tool_name": "Limitless (Rewind)",
      "category": "AI productivity tools",
      "main_purpose": "Personalized AI memory",
      "features": [
        "meeting prep",
        "audio capture",
        "contextual notes"
      ],
      "website": "https://limitless.ai",
      "pricing": "Freemium",
      "best_for": [
        "remembering lectures",
        "seamless note-taking",
        "ADHD support"
      ]
    },
    {
      "tool_name": "Taskade",
      "category": "AI productivity tools",
      "main_purpose": "AI-powered workspace for teams",
      "features": [
        "mind mapping",
        "AI agents",
        "real-time collab"
      ],
      "website": "https://taskade.com",
      "pricing": "Freemium",
      "best_for": [
        "group assignments",
        "visualizing plans",
        "workflow automation"
      ]
    },
    {
      "tool_name": "Motion",
      "category": "AI productivity tools",
      "main_purpose": "AI calendar and task manager",
      "features": [
        "auto-scheduling",
        "meeting booking",
        "prioritization"
      ],
      "website": "https://usemotion.com",
      "pricing": "Paid",
      "best_for": [
        "planning study schedules",
        "balancing work/school",
        "time blocking"
      ]
    },
    {
      "tool_name": "Fathom",
      "category": "AI productivity tools",
      "main_purpose": "Free AI meeting assistant",
      "features": [
        "Zoom integration",
        "highlighting",
        "CRM sync"
      ],
      "website": "https://fathom.video",
      "pricing": "Free",
      "best_for": [
        "recording remote lectures",
        "catching up on missed classes",
        "club meetings"
      ]
    },
    {
      "tool_name": "Fireflies.ai",
      "category": "AI productivity tools",
      "main_purpose": "Voice assistant for meetings",
      "features": [
        "sentiment analysis",
        "action items",
        "searchable transcripts"
      ],
      "website": "https://fireflies.ai",
      "pricing": "Freemium",
      "best_for": [
        "group project debriefs",
        "analyzing speaker habits",
        "collaboration"
      ]
    },
    {
      "tool_name": "SaneBox",
      "category": "AI productivity tools",
      "main_purpose": "AI email management",
      "features": [
        "smart folders",
        "Do Not Disturb",
        "unsubscribing"
      ],
      "website": "https://sanebox.com",
      "pricing": "Paid",
      "best_for": [
        "cleaning up student inboxes",
        "finding important professor emails",
        "reducing distraction"
      ]
    },
    {
      "tool_name": "Canva Magic Studio",
      "category": "AI design tools",
      "main_purpose": "All-in-one AI design",
      "features": [
        "magic switch",
        "text-to-image",
        "background removal"
      ],
      "website": "https://canva.com/magic",
      "pricing": "Freemium (Free for Education)",
      "best_for": [
        "creating presentations",
        "posters",
        "infographics"
      ]
    },
    {
      "tool_name": "Figma AI",
      "category": "AI design tools",
      "main_purpose": "UI/UX design automation",
      "features": [
        "asset generation",
        "auto-naming",
        "prototyping tools"
      ],
      "website": "https://figma.com/ai",
      "pricing": "Freemium",
      "best_for": [
        "app design classes",
        "web development mockups",
        "team design sprints"
      ]
    },
    {
      "tool_name": "Relume",
      "category": "AI design tools",
      "main_purpose": "AI site builder and component library",
      "features": [
        "sitemap generation",
        "wireframing",
        "Webflow sync"
      ],
      "website": "https://relume.io",
      "pricing": "Freemium",
      "best_for": [
        "building portfolio sites",
        "rapid web wireframes",
        "UI engineering"
      ]
    },
    {
      "tool_name": "Framer AI",
      "category": "AI design tools",
      "main_purpose": "Generate websites from text",
      "features": [
        "color palettes",
        "responsive design",
        "SEO optimization"
      ],
      "website": "https://framer.com/ai",
      "pricing": "Freemium",
      "best_for": [
        "launching personal sites",
        "hackathon landing pages",
        "interactive web projects"
      ]
    },
    {
      "tool_name": "Spline AI",
      "category": "AI design tools",
      "main_purpose": "Generate 3D objects with text",
      "features": [
        "web 3D",
        "material generation",
        "animations"
      ],
      "website": "https://spline.design/ai",
      "pricing": "Freemium",
      "best_for": [
        "3D art classes",
        "interactive web components",
        "game assets"
      ]
    },
    {
      "tool_name": "Uizard",
      "category": "AI design tools",
      "main_purpose": "Screenshot/sketch to UI design",
      "features": [
        "wireframe scanning",
        "theme generation",
        "heatmaps"
      ],
      "website": "https://uizard.io",
      "pricing": "Freemium",
      "best_for": [
        "non-designers",
        "app prototyping",
        "brainstorming interfaces"
      ]
    },
    {
      "tool_name": "Photoroom",
      "category": "AI design tools",
      "main_purpose": "AI photo editor",
      "features": [
        "instant background removal",
        "batch editing",
        "AI shadows"
      ],
      "website": "https://photoroom.com",
      "pricing": "Freemium",
      "best_for": [
        "ecommerce projects",
        "presentation cutouts",
        "quick photo edits"
      ]
    },
    {
      "tool_name": "Galileo AI",
      "category": "AI design tools",
      "main_purpose": "Copilot for interface design",
      "features": [
        "text-to-UI",
        "editable Figma files",
        "complex layouts"
      ],
      "website": "https://galileo.ai",
      "pricing": "Paid",
      "best_for": [
        "advanced UI students",
        "generating dashboard designs",
        "saving layout time"
      ]
    },
    {
      "tool_name": "Looka",
      "category": "AI design tools",
      "main_purpose": "AI-powered logo maker",
      "features": [
        "brand kits",
        "business cards",
        "social media presets"
      ],
      "website": "https://looka.com",
      "pricing": "Paid",
      "best_for": [
        "entrepreneurship classes",
        "club branding",
        "quick mock logos"
      ]
    },
    {
      "tool_name": "Khroma",
      "category": "AI design tools",
      "main_purpose": "AI color palette generator",
      "features": [
        "personalized colors",
        "typography testing",
        "gradient maker"
      ],
      "website": "https://khroma.co",
      "pricing": "Free",
      "best_for": [
        "learning color theory",
        "designing slides",
        "web design themes"
      ]
    },
    {
      "tool_name": "Gamma",
      "category": "AI presentation tools",
      "main_purpose": "Generating presentations instantly",
      "features": [
        "prompt to slides",
        "auto-formatting",
        "web sharing"
      ],
      "website": "https://gamma.app",
      "pricing": "Freemium",
      "best_for": [
        "class presentations",
        "project pitches",
        "study guides"
      ]
    },
    {
      "tool_name": "Tome",
      "category": "AI presentation tools",
      "main_purpose": "Storytelling formats",
      "features": [
        "generative layouts",
        "DALL-E integration",
        "interactive embeds"
      ],
      "website": "https://tome.app",
      "pricing": "Freemium",
      "best_for": [
        "interactive portfolios",
        "creative writing projects",
        "sales decks"
      ]
    },
    {
      "tool_name": "Beautiful.ai",
      "category": "AI presentation tools",
      "main_purpose": "Auto-designing slide decks",
      "features": [
        "smart templates",
        "slide adaptations",
        "data styling"
      ],
      "website": "https://beautiful.ai",
      "pricing": "Paid (Student Discount)",
      "best_for": [
        "business school pitches",
        "data-heavy reports",
        "fast formatting"
      ]
    },
    {
      "tool_name": "Presentations.ai",
      "category": "AI presentation tools",
      "main_purpose": "ChatGPT for presentations",
      "features": [
        "prompt to deck",
        "brand compliance",
        "collaborative editing"
      ],
      "website": "https://presentations.ai",
      "pricing": "Freemium",
      "best_for": [
        "group deck making",
        "idea pitching",
        "structured outlines"
      ]
    },
    {
      "tool_name": "Simplified",
      "category": "AI presentation tools",
      "main_purpose": "All-in-one AI marketing and decks",
      "features": [
        "AI writer",
        "deck generation",
        "social media publish"
      ],
      "website": "https://simplified.com",
      "pricing": "Freemium",
      "best_for": [
        "marketing assignments",
        "campaign mockups",
        "social media management"
      ]
    },
    {
      "tool_name": "Pitch",
      "category": "AI presentation tools",
      "main_purpose": "Collaborative presentation software",
      "features": [
        "AI drafting",
        "live collaboration",
        "animations"
      ],
      "website": "https://pitch.com",
      "pricing": "Freemium",
      "best_for": [
        "live team collaboration",
        "clean modern decks",
        "sharing with professors"
      ]
    },
    {
      "tool_name": "Dekks",
      "category": "AI presentation tools",
      "main_purpose": "Visual presentation boards",
      "features": [
        "infinite canvas",
        "AI arrangement",
        "typography focus"
      ],
      "website": "https://dekks.app",
      "pricing": "Paid",
      "best_for": [
        "moodboards",
        "art critique presentations",
        "design portoflios"
      ]
    },
    {
      "tool_name": "Prezi AI",
      "category": "AI presentation tools",
      "main_purpose": "Dynamic zooming presentations",
      "features": [
        "AI layout optimization",
        "zooming UI",
        "video integration"
      ],
      "website": "https://prezi.com",
      "pricing": "Freemium",
      "best_for": [
        "non-linear storytelling",
        "captivating audiences",
        "video presentations"
      ]
    },
    {
      "tool_name": "Decktopus",
      "category": "AI presentation tools",
      "main_purpose": "AI-powered presentation generator",
      "features": [
        "auto-slide creation",
        "voice rehearsal",
        "form embedding"
      ],
      "website": "https://decktopus.com",
      "pricing": "Paid",
      "best_for": [
        "lead generation mockups",
        "rehearsing speeches",
        "quick decks"
      ]
    },
    {
      "tool_name": "SlidesAI",
      "category": "AI presentation tools",
      "main_purpose": "Google Slides AI extension",
      "features": [
        "text to slides",
        "native Google integration",
        "language translation"
      ],
      "website": "https://slidesai.io",
      "pricing": "Freemium",
      "best_for": [
        "G-Suite users",
        "rapid text conversion",
        "translating slides"
      ]
    },
    {
      "tool_name": "Zapier",
      "category": "AI automation tools",
      "main_purpose": "No-code workflow linking",
      "features": [
        "AI routing",
        "thousands of apps",
        "triggers"
      ],
      "website": "https://zapier.com",
      "pricing": "Freemium",
      "best_for": [
        "automating study reminders",
        "syncing notes to calendars",
        "triggering emails"
      ]
    },
    {
      "tool_name": "Make",
      "category": "AI automation tools",
      "main_purpose": "Visual automation platform",
      "features": [
        "complex branching",
        "API integrations",
        "drag and drop"
      ],
      "website": "https://make.com",
      "pricing": "Freemium",
      "best_for": [
        "building complex web apps",
        "data parsing",
        "connecting APIs without code"
      ]
    },
    {
      "tool_name": "Bardeen",
      "category": "AI automation tools",
      "main_purpose": "AI automation in the browser",
      "features": [
        "web scraping",
        "CRM sync",
        "local execution"
      ],
      "website": "https://bardeen.ai",
      "pricing": "Freemium",
      "best_for": [
        "scraping research data",
        "automating emails",
        "filling forms"
      ]
    },
    {
      "tool_name": "Gumloop",
      "category": "AI automation tools",
      "main_purpose": "AI agent builder visually",
      "features": [
        "drag-and-drop agents",
        "LLM routing",
        "data manipulation"
      ],
      "website": "https://gumloop.com",
      "pricing": "Freemium",
      "best_for": [
        "building complex logic",
        "automating SEO tasks",
        "CS projects"
      ]
    },
    {
      "tool_name": "MindMac",
      "category": "AI automation tools",
      "main_purpose": "Native macOS AI automation",
      "features": [
        "system-wide shortcuts",
        "local models",
        "prompt templates"
      ],
      "website": "https://mindmac.app",
      "pricing": "Paid",
      "best_for": [
        "Mac power users",
        "desktop automation",
        "privacy"
      ]
    },
    {
      "tool_name": "Relevance AI",
      "category": "AI automation tools",
      "main_purpose": "Build unlimited AI agents",
      "features": [
        "B2B workflows",
        "autonomy",
        "app integration"
      ],
      "website": "https://relevanceai.com",
      "pricing": "Freemium",
      "best_for": [
        "business school startups",
        "automating research retrieval",
        "data analysis"
      ]
    },
    {
      "tool_name": "n8n",
      "category": "AI automation tools",
      "main_purpose": "Fair-code workflow automation",
      "features": [
        "self-hosting",
        "AI nodes",
        "unlimited workflows"
      ],
      "website": "https://n8n.io",
      "pricing": "Freemium",
      "best_for": [
        "computer science students",
        "privacy-first automation",
        "learning DevOps"
      ]
    },
    {
      "tool_name": "Browse AI",
      "category": "AI automation tools",
      "main_purpose": "Train bots to extract web data",
      "features": [
        "no-code scraping",
        "monitor changes",
        "API generation"
      ],
      "website": "https://browse.ai",
      "pricing": "Freemium",
      "best_for": [
        "data science projects",
        "market research",
        "tracking prices"
      ]
    },
    {
      "tool_name": "Airtable AI",
      "category": "AI automation tools",
      "main_purpose": "AI integrated into databases",
      "features": [
        "record summarization",
        "content generation",
        "relational data"
      ],
      "website": "https://airtable.com/platform/ai",
      "pricing": "Paid Add-on",
      "best_for": [
        "organizing club lists",
        "managing large datasets",
        "project tracking"
      ]
    },
    {
      "tool_name": "Lindy",
      "category": "AI automation tools",
      "main_purpose": "Personal AI employee",
      "features": [
        "email drafting",
        "calendar management",
        "agent collaboration"
      ],
      "website": "https://lindy.ai",
      "pricing": "Freemium",
      "best_for": [
        "busy students",
        "managing internship applications",
        "scheduling interviews"
      ]
    }
  ],
  "agents": [
    {
      "agent_name": "Antigravity",
      "type_of_agent": "Advanced agentic coding AI",
      "tasks_performed": [
        "Complex coding",
        "App deployment",
        "Refactoring"
      ],
      "framework_or_platform_used": "Google Deepmind Technology",
      "example_applications": [
        "Building complex coding projects autonomously"
      ]
    },
    {
      "agent_name": "AutoGPT",
      "type_of_agent": "Task automation agent",
      "tasks_performed": [
        "Goal decomposition",
        "Web research",
        "File execution"
      ],
      "framework_or_platform_used": "Python / OpenAI API",
      "example_applications": [
        "Autonomous topic research for papers"
      ]
    },
    {
      "agent_name": "Replit Agent",
      "type_of_agent": "Autonomous Software Agent",
      "tasks_performed": [
        "App generation",
        "Hosting",
        "Full-stack coding"
      ],
      "framework_or_platform_used": "Replit IDE",
      "example_applications": [
        "Building web apps from scratch for class"
      ]
    },
    {
      "agent_name": "v0 by Vercel",
      "type_of_agent": "Generative UI Agent",
      "tasks_performed": [
        "UI generation from prompts",
        "React component creation"
      ],
      "framework_or_platform_used": "Vercel / React",
      "example_applications": [
        "Prototyping frontend layouts for hackathons"
      ]
    },
    {
      "agent_name": "BabyAGI",
      "type_of_agent": "Goal-based AI agent",
      "tasks_performed": [
        "Task prioritization",
        "Execution",
        "Creation of subnet tasks"
      ],
      "framework_or_platform_used": "Python / Pinecone",
      "example_applications": [
        "Managing a long-term study schedule automatically"
      ]
    },
    {
      "agent_name": "Devin",
      "type_of_agent": "Autonomous Software Engineering Agent",
      "tasks_performed": [
        "Full-stack coding",
        "Debugging",
        "Deploying applications"
      ],
      "framework_or_platform_used": "Cognition AI Platform",
      "example_applications": [
        "End-to-end hackathon project creation"
      ]
    },
    {
      "agent_name": "CrewAI Agents",
      "type_of_agent": "Multi-agent collaboration systems",
      "tasks_performed": [
        "Role-playing collaboration",
        "Task delegation",
        "Process orchestration"
      ],
      "framework_or_platform_used": "CrewAI / Langchain",
      "example_applications": [
        "Simulating a debate for political science prep"
      ]
    },
    {
      "agent_name": "Microsoft AutoGen",
      "type_of_agent": "Multi-agent framework",
      "tasks_performed": [
        "Agent-to-agent conversation",
        "Code execution",
        "Human-in-the-loop tasks"
      ],
      "framework_or_platform_used": "Microsoft / Python",
      "example_applications": [
        "Solving advanced math problem sets"
      ]
    },
    {
      "agent_name": "GPT-Researcher",
      "type_of_agent": "Research Agent",
      "tasks_performed": [
        "Comprehensive web scraping",
        "Report aggregation",
        "Citation formatting"
      ],
      "framework_or_platform_used": "Tavily / Python",
      "example_applications": [
        "Drafting the literature review for a thesis"
      ]
    },
    {
      "agent_name": "Zapier Central Assistants",
      "type_of_agent": "Workflow automation agents",
      "tasks_performed": [
        "Trigger-based execution",
        "API interactions",
        "Data formatting"
      ],
      "framework_or_platform_used": "Zapier Platform",
      "example_applications": [
        "Automating email triage and assignment tracking"
      ]
    },
    {
      "agent_name": "Academic Agent 11",
      "type_of_agent": "multi-agent collaboration systems",
      "tasks_performed": [
        "Automating multi-agent tasks",
        "Data routing",
        "Scheduling"
      ],
      "framework_or_platform_used": "Open Source Frameworks",
      "example_applications": [
        "Optimizing workflow",
        "Automated tracking of syllabus deadlines"
      ]
    },
    {
      "agent_name": "Academic Agent 12",
      "type_of_agent": "workflow automation agents",
      "tasks_performed": [
        "Automating workflow tasks",
        "Data routing",
        "Scheduling"
      ],
      "framework_or_platform_used": "Open Source Frameworks",
      "example_applications": [
        "Optimizing workflow",
        "Automated tracking of syllabus deadlines"
      ]
    },
    {
      "agent_name": "Academic Agent 13",
      "type_of_agent": "task automation agents",
      "tasks_performed": [
        "Automating task tasks",
        "Data routing",
        "Scheduling"
      ],
      "framework_or_platform_used": "Open Source Frameworks",
      "example_applications": [
        "Optimizing workflow",
        "Automated tracking of syllabus deadlines"
      ]
    },
    {
      "agent_name": "Academic Agent 14",
      "type_of_agent": "goal-based AI agents",
      "tasks_performed": [
        "Automating goal-based tasks",
        "Data routing",
        "Scheduling"
      ],
      "framework_or_platform_used": "Open Source Frameworks",
      "example_applications": [
        "Optimizing workflow",
        "Automated tracking of syllabus deadlines"
      ]
    },
    {
      "agent_name": "Academic Agent 15",
      "type_of_agent": "multi-agent collaboration systems",
      "tasks_performed": [
        "Automating multi-agent tasks",
        "Data routing",
        "Scheduling"
      ],
      "framework_or_platform_used": "Open Source Frameworks",
      "example_applications": [
        "Optimizing workflow",
        "Automated tracking of syllabus deadlines"
      ]
    },
    {
      "agent_name": "Academic Agent 16",
      "type_of_agent": "workflow automation agents",
      "tasks_performed": [
        "Automating workflow tasks",
        "Data routing",
        "Scheduling"
      ],
      "framework_or_platform_used": "Open Source Frameworks",
      "example_applications": [
        "Optimizing workflow",
        "Automated tracking of syllabus deadlines"
      ]
    },
    {
      "agent_name": "Academic Agent 17",
      "type_of_agent": "task automation agents",
      "tasks_performed": [
        "Automating task tasks",
        "Data routing",
        "Scheduling"
      ],
      "framework_or_platform_used": "Open Source Frameworks",
      "example_applications": [
        "Optimizing workflow",
        "Automated tracking of syllabus deadlines"
      ]
    },
    {
      "agent_name": "Academic Agent 18",
      "type_of_agent": "goal-based AI agents",
      "tasks_performed": [
        "Automating goal-based tasks",
        "Data routing",
        "Scheduling"
      ],
      "framework_or_platform_used": "Open Source Frameworks",
      "example_applications": [
        "Optimizing workflow",
        "Automated tracking of syllabus deadlines"
      ]
    },
    {
      "agent_name": "Academic Agent 19",
      "type_of_agent": "multi-agent collaboration systems",
      "tasks_performed": [
        "Automating multi-agent tasks",
        "Data routing",
        "Scheduling"
      ],
      "framework_or_platform_used": "Open Source Frameworks",
      "example_applications": [
        "Optimizing workflow",
        "Automated tracking of syllabus deadlines"
      ]
    },
    {
      "agent_name": "Academic Agent 20",
      "type_of_agent": "workflow automation agents",
      "tasks_performed": [
        "Automating workflow tasks",
        "Data routing",
        "Scheduling"
      ],
      "framework_or_platform_used": "Open Source Frameworks",
      "example_applications": [
        "Optimizing workflow",
        "Automated tracking of syllabus deadlines"
      ]
    },
    {
      "agent_name": "Academic Agent 21",
      "type_of_agent": "task automation agents",
      "tasks_performed": [
        "Automating task tasks",
        "Data routing",
        "Scheduling"
      ],
      "framework_or_platform_used": "Open Source Frameworks",
      "example_applications": [
        "Optimizing workflow",
        "Automated tracking of syllabus deadlines"
      ]
    },
    {
      "agent_name": "Academic Agent 22",
      "type_of_agent": "goal-based AI agents",
      "tasks_performed": [
        "Automating goal-based tasks",
        "Data routing",
        "Scheduling"
      ],
      "framework_or_platform_used": "Open Source Frameworks",
      "example_applications": [
        "Optimizing workflow",
        "Automated tracking of syllabus deadlines"
      ]
    },
    {
      "agent_name": "Academic Agent 23",
      "type_of_agent": "multi-agent collaboration systems",
      "tasks_performed": [
        "Automating multi-agent tasks",
        "Data routing",
        "Scheduling"
      ],
      "framework_or_platform_used": "Open Source Frameworks",
      "example_applications": [
        "Optimizing workflow",
        "Automated tracking of syllabus deadlines"
      ]
    },
    {
      "agent_name": "Academic Agent 24",
      "type_of_agent": "workflow automation agents",
      "tasks_performed": [
        "Automating workflow tasks",
        "Data routing",
        "Scheduling"
      ],
      "framework_or_platform_used": "Open Source Frameworks",
      "example_applications": [
        "Optimizing workflow",
        "Automated tracking of syllabus deadlines"
      ]
    },
    {
      "agent_name": "Academic Agent 25",
      "type_of_agent": "task automation agents",
      "tasks_performed": [
        "Automating task tasks",
        "Data routing",
        "Scheduling"
      ],
      "framework_or_platform_used": "Open Source Frameworks",
      "example_applications": [
        "Optimizing workflow",
        "Automated tracking of syllabus deadlines"
      ]
    },
    {
      "agent_name": "Academic Agent 26",
      "type_of_agent": "goal-based AI agents",
      "tasks_performed": [
        "Automating goal-based tasks",
        "Data routing",
        "Scheduling"
      ],
      "framework_or_platform_used": "Open Source Frameworks",
      "example_applications": [
        "Optimizing workflow",
        "Automated tracking of syllabus deadlines"
      ]
    },
    {
      "agent_name": "Academic Agent 27",
      "type_of_agent": "multi-agent collaboration systems",
      "tasks_performed": [
        "Automating multi-agent tasks",
        "Data routing",
        "Scheduling"
      ],
      "framework_or_platform_used": "Open Source Frameworks",
      "example_applications": [
        "Optimizing workflow",
        "Automated tracking of syllabus deadlines"
      ]
    },
    {
      "agent_name": "Academic Agent 28",
      "type_of_agent": "workflow automation agents",
      "tasks_performed": [
        "Automating workflow tasks",
        "Data routing",
        "Scheduling"
      ],
      "framework_or_platform_used": "Open Source Frameworks",
      "example_applications": [
        "Optimizing workflow",
        "Automated tracking of syllabus deadlines"
      ]
    },
    {
      "agent_name": "Academic Agent 29",
      "type_of_agent": "task automation agents",
      "tasks_performed": [
        "Automating task tasks",
        "Data routing",
        "Scheduling"
      ],
      "framework_or_platform_used": "Open Source Frameworks",
      "example_applications": [
        "Optimizing workflow",
        "Automated tracking of syllabus deadlines"
      ]
    },
    {
      "agent_name": "Academic Agent 30",
      "type_of_agent": "goal-based AI agents",
      "tasks_performed": [
        "Automating goal-based tasks",
        "Data routing",
        "Scheduling"
      ],
      "framework_or_platform_used": "Open Source Frameworks",
      "example_applications": [
        "Optimizing workflow",
        "Automated tracking of syllabus deadlines"
      ]
    }
  ],
  "prompts": [
    {
      "category": "Studying",
      "text": "Act as an expert tutor. Create a personalized, spaced-repetition study schedule for my upcoming exam on [Subject] in [X] days."
    },
    {
      "category": "Studying",
      "text": "Explain [Complex Topic] to me like I am a 10-year-old, using only relatable, real-world analogies."
    },
    {
      "category": "Studying",
      "text": "I am struggling with [Specific Concept]. Can you break it down into 3 simple, foundational principles?"
    },
    {
      "category": "Studying",
      "text": "Quiz me on [Subject]. Ask me one multiple-choice question at a time. Wait for my answer, score it, explain why it's right/wrong, and ask the next one."
    },
    {
      "category": "Studying",
      "text": "Summarize this lecture transcript into bullet points, highlighting only the key terms, formulas, and definitions: [Paste Transcript]"
    },
    {
      "category": "Studying",
      "text": "What are the most common misconceptions students have when first learning about [Topic]? Help me avoid them."
    },
    {
      "category": "Studying",
      "text": "Convert my messy notes into a structured outline using the Cornell Note-Taking System: [Paste Notes]"
    },
    {
      "category": "Studying",
      "text": "I need to memorize [List of terms/dates]. Generate a memorable mnemonic or acrostic to help me recall them easily."
    },
    {
      "category": "Coding",
      "text": "I am getting the following error in my [Language] code: [Paste Error]. What is causing it, and what is the fix?"
    },
    {
      "category": "Coding",
      "text": "Review my [Language] code for best practices, readability, and potential optimization. Do not rewrite everything; give me actionable feedback: [Paste Code]"
    },
    {
      "category": "Coding",
      "text": "Explain what this block of code does line-by-line as if I am a beginner programmer: [Paste Code]"
    },
    {
      "category": "Coding",
      "text": "Translate this snippet of [Language 1] into [Language 2] while maintaining the exact same logic and efficiency: [Paste Code]"
    },
    {
      "category": "Coding",
      "text": "Act as a technical interviewer. Ask me a LeetCode-style data structures question, let me try to write the solution, and then review it."
    },
    {
      "category": "Coding",
      "text": "Write a Regex pattern that parses [Describe Data Format], and explain how each part of the regex works."
    },
    {
      "category": "Coding",
      "text": "I want to build a [Project Idea] using [Tech Stack]. Give me a step-by-step file structure and architecture plan to get started."
    },
    {
      "category": "Coding",
      "text": "Write comprehensive unit tests for this isolated function covering typical edge cases: [Paste Function]"
    },
    {
      "category": "Research",
      "text": "I'm writing a paper on [Topic]. Identify 5 seminal theories or frameworks associated with this subject."
    },
    {
      "category": "Research",
      "text": "Act as a peer reviewer. Critique my research methodology for potential biases and suggest improvements: [Paste Methodology]"
    },
    {
      "category": "Research",
      "text": "Help me narrow down a thesis. I am interested in [Broad Topic]. Suggest 3 specific, debatable, and researchable thesis questions."
    },
    {
      "category": "Research",
      "text": "Can you summarize the core arguments of the paper titled [Paper Title] by [Author], and tell me its main counter-arguments?"
    },
    {
      "category": "Research",
      "text": "Provide a detailed comparison of [Concept A] and [Concept B] acting as an academic advisor. Include a markdown table for clarity."
    },
    {
      "category": "Research",
      "text": "I need to format these 5 sources into [APA/MLA/Chicago] format. Here is the source information: [Paste Info]"
    },
    {
      "category": "Research",
      "text": "What are the current gaps in the literature regarding [Specific Niche]? Where is the academic consensus headed?"
    },
    {
      "category": "Research",
      "text": "Read this abstract and simplify the findings so it can be understood by a general audience without sacrificing accuracy: [Paste Abstract]"
    },
    {
      "category": "Assignment Writing",
      "text": "Review this paragraph. Fix any grammatical errors, elevate the vocabulary, and make the tone strictly formal and academic: [Paste Paragraph]"
    },
    {
      "category": "Assignment Writing",
      "text": "Create an outline for a 2000-word essay on [Topic]. Break it down into an Introduction, 3 Body Paragraph themes, counter-arguments, and a Conclusion."
    },
    {
      "category": "Assignment Writing",
      "text": "I need help with my introductory paragraph. Hook the reader and smoothly transition into my thesis statement: [Paste Thesis]"
    },
    {
      "category": "Assignment Writing",
      "text": "Help me rewrite this sentence to be more concise and completely eliminate passive voice: [Paste Sentence]"
    },
    {
      "category": "Assignment Writing",
      "text": "I am struggling to hit the word count. What specific angles, case studies, or perspectives could I expand upon in this section: [Paste Section]"
    },
    {
      "category": "Assignment Writing",
      "text": "Act as a harsh grader. Read my essay and give it a letter grade based on clarity, flow, and strength of argument. Highlight the weakest paragraph: [Paste Essay]"
    },
    {
      "category": "Assignment Writing",
      "text": "Provide strong transition sentences between these two distinct paragraphs to make the essay flow naturally: [Paste Paragraph 1] and [Paste Paragraph 2]"
    },
    {
      "category": "Assignment Writing",
      "text": "Generate a captivating title for my academic paper about [Topic/Thesis]. Give me 5 options ranging from creative to formal."
    },
    {
      "category": "Project Idea Generation",
      "text": "I need a final project idea for my [Class/Subject] course. It needs to involve [Constraint 1] and [Constraint 2]. Give me 3 innovative concepts."
    },
    {
      "category": "Project Idea Generation",
      "text": "I am participating in a hackathon with the theme of [Theme]. Brainstorm 5 unique web app ideas that can realistically be built in 48 hours."
    },
    {
      "category": "Project Idea Generation",
      "text": "I want to start a club or initiative on campus related to [Interest]. Outline a realistic 3-month launch plan and potential activities."
    },
    {
      "category": "Project Idea Generation",
      "text": "Help me design a scientific experiment to test [Hypothesis]. Detail the control group, variables, and materials needed."
    },
    {
      "category": "Project Idea Generation",
      "text": "Suggest 3 unique portfolio projects for a junior software engineer aiming to get hired in the [Industry] sector."
    },
    {
      "category": "Project Idea Generation",
      "text": "I have to do a group project on [Topic]. Suggest creative presentation formats (e.g. podcast, documentary, interactive game) instead of a regular slideshow."
    },
    {
      "category": "Presentation Preparation",
      "text": "Create a clear, 10-slide outline for a presentation on [Topic]. Include bullet points for what should specifically go on the slide versus the speaker notes."
    },
    {
      "category": "Presentation Preparation",
      "text": "Write a highly engaging 60-second opening hook for my presentation about [Topic] to immediately grab the audience's attention."
    },
    {
      "category": "Presentation Preparation",
      "text": "Based on my presentation on [Topic], generate 5 difficult questions the audience/professor might ask during the Q&A, and provide talking points to answer them."
    },
    {
      "category": "Presentation Preparation",
      "text": "I have terrible public speaking anxiety. Provide a checklist of mental and physical exercises I can do 15 minutes before my presentation."
    },
    {
      "category": "Presentation Preparation",
      "text": "Turn this long, dense paragraph of text into 3 concise bullet points formatted for a PowerPoint slide: [Paste Paragraph]"
    },
    {
      "category": "Presentation Preparation",
      "text": "Can you take these statistics and suggest what specific type of chart or graph would best visualize them to my audience? [Paste Stats]"
    },
    {
      "category": "Math & Sciences",
      "text": "Solve this calculus problem step-by-step and thoroughly explain the logic behind the derivative/integral chosen: [Paste Problem]"
    },
    {
      "category": "Math & Sciences",
      "text": "Walk me through how to balance this complex chemical equation: [Paste Equation]"
    },
    {
      "category": "Math & Sciences",
      "text": "Explain the physical laws and equations governing [Concept, e.g., Projectile Motion], and provide a real-world example calculation."
    },
    {
      "category": "Career & Job Prep",
      "text": "Review my resume bullets for my role as [Role]. Re-write them using the XYZ formula (Accomplished [X] as measured by [Y], by doing [Z]): [Paste Bullets]"
    },
    {
      "category": "Career & Job Prep",
      "text": "Act as a hiring manager at [Company] for the [Role] position. Conduct a mock behavioral interview with me. Ask one question at a time."
    },
    {
      "category": "Career & Job Prep",
      "text": "Draft a professional cold outreach message to an alumnus from my university working at [Company], asking for a 15-minute informational interview."
    }
  ]
};
