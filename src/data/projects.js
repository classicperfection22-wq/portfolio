export const projects = [
  {
    id: 1,
    title: 'Marcella',
    subtitle: 'Autonomous AI Agent System',
    category: 'AI',
    description:
      'Fully autonomous AI desktop agent powered by a local LLM (Ollama/dolphin3). Controls mouse/keyboard, reads the screen, manages files, runs bug-bounty operations, and executes multi-step plans — 100% offline, zero cloud dependency.',
    tech: ['Python', 'Ollama', 'Tkinter', 'Win32', 'pywinauto'],
    highlights: [
      '200+ Windows automation tools',
      'Persistent memory & pattern recognition',
      'Autonomous bug bounty mode',
      'Single-process, direct LLM calls',
    ],
    link: 'https://www.moltbook.com/u/marcella_50922',
  },
  {
    id: 2,
    title: 'AI Trading Agent v4.0',
    subtitle: 'Live Crypto DEX Trading System',
    category: 'Trading',
    description:
      'Multi-version live cryptocurrency trading bot executing real trades on Ethereum and Base mainnet via Uniswap V3. Adaptive multi-strategy engine with real-time Flask dashboard, P&L tracking, and Marcella AI learning integration.',
    tech: ['Python', 'Web3.py', 'Flask', 'Uniswap V3', 'CoinGecko API'],
    highlights: [
      'Live DEX trading on Ethereum & Base',
      'Gas optimized: $0.01–0.10/trade',
      'Multi-strategy: adaptive, momentum, arbitrage',
      'Real-time portfolio dashboard',
    ],
    link: null,
  },
  {
    id: 3,
    title: 'Desktop Music Agent',
    subtitle: 'AI-Powered DAW Controller',
    category: 'Music',
    description:
      'AI agent that autonomously controls FL Studio and Ableton Live using GPT-4o Vision. Plans mouse/keyboard sequences, verifies via screenshots, and learns reusable procedures from YouTube tutorials it downloads and transcribes.',
    tech: ['Python', 'GPT-4o Vision', 'pywinauto', 'Tesseract OCR', 'yt-dlp'],
    highlights: [
      'Screenshot → plan → execute → verify loop',
      'YouTube learning pipeline',
      'FL Studio + Ableton support',
      'Persistent procedure memory',
    ],
    link: null,
  },
  {
    id: 4,
    title: 'FL Studio MCP Agent',
    subtitle: 'Claude-to-DAW MIDI Bridge',
    category: 'Music',
    description:
      'MCP server exposing FL Studio controls to Claude as callable tools over a virtual MIDI bus. AI models can add notes, control mixer tracks, trigger transport, and compose music programmatically — no GUI interaction needed.',
    tech: ['Python', 'MIDI', 'loopMIDI', 'Claude MCP', 'FL Studio API'],
    highlights: [
      'Custom FL Studio MIDI controller plugin',
      'Piano roll, mixer & transport control',
      'Claude Desktop integration via JSON config',
    ],
    link: null,
  },
  {
    id: 5,
    title: 'Komai Synthesizer',
    subtitle: 'Wavetable Synth for Raspberry Pi 5',
    category: 'Music',
    description:
      'Multi-timbral wavetable synthesizer built in C++ with JUCE for Raspberry Pi 5 touchscreen. Ships with 13,763 samples from E-MU Proteus/Emulator X soundbanks. Designed as a MIDI slave for Akai MPC Live 2.',
    tech: ['C++', 'JUCE 7', 'CMake', 'JACK Audio', 'Raspberry Pi 5'],
    highlights: [
      '13,763 E-MU samples included',
      '4-track multi-timbral, 16-voice polyphony',
      'Full effects: Delay, Reverb, Chorus, Phaser',
      'LV2 plugin + touchscreen UI (480×320)',
    ],
    link: null,
  },
  {
    id: 6,
    title: 'MIDI Generator',
    subtitle: 'AI Music Composition Tool',
    category: 'Music',
    description:
      'AI-powered MIDI composition tool that downloads and analyzes files from archive.org, trains a Markov chain on chord transitions, and generates new progressions. Also converts YouTube audio to MIDI via Spotify\'s Basic Pitch neural network.',
    tech: ['Python', 'pretty_midi', 'Basic Pitch', 'Markov chains', 'archive.org API'],
    highlights: [
      'YouTube → MIDI via Basic Pitch neural net',
      'Markov chain trained on your MIDI library',
      '9 built-in progression styles',
      'GUI dashboard + full CLI',
    ],
    link: null,
  },
  {
    id: 7,
    title: 'OpsReady',
    subtitle: 'Multi-Tenant B2B SaaS Platform',
    category: 'SaaS',
    description:
      'Full-stack compliance and inventory management SaaS built from scratch. Multi-tenant with strict org isolation, role-based access, PDF audit pack generation, automated email reminders, and Stripe subscription billing.',
    tech: ['FastAPI', 'React 18', 'PostgreSQL', 'Celery', 'Redis', 'Stripe', 'Docker'],
    highlights: [
      'Multi-tenant with org-level data isolation',
      'Stripe billing: Starter / Team / Pro',
      'PDF audit pack generation',
      'Celery + Redis background jobs',
    ],
    link: null,
  },
  {
    id: 8,
    title: 'Family Hub',
    subtitle: 'Full-Stack Collaboration App',
    category: 'SaaS',
    description:
      'Full-stack family collaboration web app with JWT authentication, bcrypt password hashing, file uploads, and a RESTful API backend. React 18 SPA frontend built with Vite.',
    tech: ['Node.js', 'Express', 'React 18', 'JWT', 'Vite', 'bcrypt'],
    highlights: [
      'JWT + bcrypt auth',
      'File upload system',
      'REST API',
      'React SPA with Vite',
    ],
    link: null,
  },
]

export const categoryColors = {
  AI:      { text: '#00d4ff', bg: 'rgba(0,212,255,0.12)',   border: 'rgba(0,212,255,0.35)',   card: 'card-ai'      },
  Trading: { text: '#10b981', bg: 'rgba(16,185,129,0.12)',  border: 'rgba(16,185,129,0.35)',  card: 'card-trading' },
  Music:   { text: '#8b5cf6', bg: 'rgba(139,92,246,0.12)',  border: 'rgba(139,92,246,0.35)',  card: 'card-music'   },
  SaaS:    { text: '#f59e0b', bg: 'rgba(245,158,11,0.12)',  border: 'rgba(245,158,11,0.35)',  card: 'card-saas'    },
}
