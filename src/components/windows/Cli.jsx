import React, { useRef } from "react";
import MacWindow from "./MacWindow";
import "./cli.scss";
import Terminal from "react-console-emulator";

const Cli = () => {
  const terminalRef = useRef(null);
  const commands = {
    help: {
      description: "List all available commands",
      usage: "help",
      fn: () => `
┌──────────────────────────────────────┐
│   📟 Portfolio Terminal Commands     │
└──────────────────────────────────────┘

about        → Learn more about me
skills       → View my technical skills
projects     → Explore my projects
contact      → Get my contact details
clear        → Clear the terminal

Tip: Commands are case-insensitive
`,
    },

    about: {
      description: "About Muhammad Waleed",
      usage: "about",
      fn: () => `
┌──────────────────────────────────────┐
│           👋 About Me                │
└──────────────────────────────────────┘

Name     : Muhammad Waleed
Role     : Front-End Developer
Focus    : Clean UI, UX & Performance

I enjoy building interactive web
experiences using modern technologies
and writing maintainable code.
`,
    },

    skills: {
      description: "My technical skills",
      usage: "skills",
      fn: () => `
┌──────────────────────────────────────┐
│           🛠 Technical Skills        │
└──────────────────────────────────────┘

Frontend
  • HTML5
  • CSS3 / Tailwind CSS
  • JavaScript (ES6+)
  • React

Tools & Workflow
  • Git & GitHub
  • Responsive Design
  • Component-Based UI
`,
    },

    projects: {
      description: "My projects",
      usage: "projects",
      fn: () => `
┌──────────────────────────────────────┐
│            📂 Projects               │
└──────────────────────────────────────┘

1. Portfolio Website
   → Personal branding & UI showcase

2. Figma Clone (In Progress)
   → Canvas, shapes, drag & resize

3. Notes REST API
   → Node.js, Express, CRUD operations
`,
    },

    contact: {
      description: "Contact information",
      usage: "contact",
      fn: () => `
┌──────────────────────────────────────┐
│           📬 Contact Info            │
└──────────────────────────────────────┘

Email     : muhammadwaleed@example.com
GitHub    : github.com/muhammadwaleed
LinkedIn  : linkedin.com/in/muhammadwaleed

Let’s build something great 🚀
`,
    },

    clear: {
      description: "Clear the terminal (fake clear)",
      usage: "clear",
      fn: () => {
        if (terminalRef.current) {
          terminalRef.current.clearStdout();
          return "ℹ Terminal cleared. Type 'help' to see available commands.\n";
        }
      },
    },
  };

  return (
    <MacWindow height="60vh">
      <div className="cli-window">
        <Terminal
          style={{
            background: "linear-gradient(180deg, #020617, #0f172a)",
            borderRadius: "14px",
            padding: "12px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
            fontFamily: "'JetBrains Mono', monospace",
          }}
          contentStyle={{
            color: "#e5e7eb",
            fontSize: "14px",
            lineHeight: "1.7",
          }}
          ref={terminalRef}
          commands={commands}
          welcomeMessage={`
Welcome to Muhammad Waleed's Portfolio Terminal 💻

Type "help" to see available commands.
`}
          promptLabel={
            <span style={{ display: "inline-block" }}>⚡waleed@portfolio~</span>
          }
          promptLabelStyle={{
            color: "#fbbf24",
            fontWeight: "600",
          }}
          inputStyle={{
            background: "transparent",
            border: "none",
          }}
          inputTextStyle={{
            color: "#d9a219",
            caretColor: "#fbbf24",
            fontSize: "14px",
          }}
          messageStyle={{
            marginBottom: "2px",
            whiteSpace: "pre-wrap",
          }}
          styleEchoBack="labelOnly"
          noDefaults={true}
          errorText="❌ '[command]' is not a valid command. Type 'help'."
          ignoreCommandCase={true}
          noHistory={false}
          autoFocus={true}
        />
      </div>
    </MacWindow>
  );
};

export default Cli;
