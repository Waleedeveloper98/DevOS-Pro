import React, { useRef } from "react";
import MacWindow from "./MacWindow";
import "./cli.scss";
import Terminal from "react-console-emulator";

const Cli = ({ windowName, setWindowsState }) => {
  const terminalRef = useRef(null);
  const commands = {
    help: {
      description: "List all available commands",
      usage: "help",
      fn: () => `
┌──────────────────────────────────────┐
│   📟 Portfolio Terminal Commands     │
└──────────────────────────────────────┘

about        → Who I am & what I build
skills       → Technical skills
projects     → Selected work
experience   → How I learn & work
contact      → Ways to reach me
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

Name  : Muhammad Waleed
Role  : Front-End Developer (React)
Focus : Interactive UI & clean UX

I enjoy building web interfaces that
feel more like products than pages.

Recently, I’ve been exploring
desktop-style UI patterns on the web
using React — windows, docks,
command-based navigation, and state-
driven interactions.
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
  • HTML5, CSS3
  • Tailwind CSS
  • JavaScript (ES6+)
  • React (Hooks, State, Components)

UI & UX
  • Responsive layouts
  • Animations & micro-interactions
  • Component reusability
  • Desktop-inspired UI patterns

Tools
  • Git & GitHub
  • VS Code
  • npm / package-based workflows
`,
    },

    projects: {
      description: "My projects",
      usage: "projects",
      fn: () => `
┌──────────────────────────────────────┐
│            📂 Projects               │
└──────────────────────────────────────┘

1. Interactive Portfolio OS
   → OS-inspired UI built with React
   → Dock, windows, terminal, apps

2. Notes REST API
   → Node.js & Express
   → CRUD operations & routing

3. UI Practice Projects
   → Focused on layouts, components,
     and real-world interactions
`,
    },

    experience: {
      description: "How I work & learn",
      usage: "experience",
      fn: () => `
┌──────────────────────────────────────┐
│           🧠 Experience              │
└──────────────────────────────────────┘

• Currently focused on Frontend
  development with React

• Practice-driven learning:
  I build projects to understand
  how things actually work

• Interested in:
  UI architecture, state management,
  and product-like user experiences
`,
    },

    contact: {
      description: "Contact information",
      usage: "contact",
      fn: () => `
┌──────────────────────────────────────┐
│           📬 Contact Info            │
└──────────────────────────────────────┘

GitHub   : github.com/waleedeveloper98
LinkedIn : linkedin.com/in/waleed-web-developer
Email    : waleedeveloper100@gmail.com

Open to collaboration, learning,
and frontend opportunities 🚀
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
    <MacWindow
      windowName={windowName}
      setWindowsState={setWindowsState}
      height="50vh"
      title={"Cli"}
    >
      <div className="cli-window">
        <Terminal
          style={{
            background: "linear-gradient(180deg, #020617, #0f172a)",
            borderRadius: "14px",
            padding: "12px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
            // fontFamily: "'JetBrains Mono', monospace",
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
