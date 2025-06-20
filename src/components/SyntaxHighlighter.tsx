import { useEffect, useState } from "react";
import { codeToHtml } from "shiki";
import "./SyntaxHighlighter.css";
import { useTheme } from "../hooks/useTheme";

interface SyntaxHighlighterProps {
  code: string;
  language: string;
}

const normalizeLanguage = (lang: string): string => {
  const map: Record<string, string> = {
    javascript: "js",
    js: "js",
    typescript: "ts",
    ts: "ts",
    jsx: "jsx",
    tsx: "tsx",
    html: "html",
    css: "css",
    scss: "scss",
    sass: "sass",
    less: "less",
    json: "json",
    yaml: "yaml",
    yml: "yaml",
    xml: "xml",
    markdown: "md",
    md: "md",
    bash: "bash",
    shell: "bash",
    sh: "bash",
    zsh: "bash",
    dockerfile: "docker",
    docker: "docker",
    python: "python",
    py: "python",
    java: "java",
    kotlin: "kotlin",
    kt: "kotlin",
    cpp: "cpp",
    c: "c",
    csharp: "cs",
    cs: "cs",
    go: "go",
    golang: "go",
    php: "php",
    ruby: "ruby",
    rb: "ruby",
    swift: "swift",
    rust: "rust",
    rs: "rust",
    sql: "sql",
    powershell: "powershell",
    ps1: "powershell",
    ini: "ini",
    makefile: "makefile",
    gradle: "groovy",
    groovy: "groovy",
    lua: "lua",
    perl: "perl",
    r: "r",
    toml: "toml",
    dotenv: "ini",
    env: "ini",
    config: "ini",
    vue: "vue",
    svelte: "svelte",
    graphql: "graphql",
  };

  const normalized = lang.toLowerCase();
  return map[normalized] || normalized;
};

export const SyntaxHighlighter = ({ code, language }: SyntaxHighlighterProps) => {
  const { theme } = useTheme();
  const [highlightedCode, setHighlightedCode] = useState<string>("");

  useEffect(() => {
    const highlight = async () => {
      try {
        const html = await codeToHtml(code, {
          lang: normalizeLanguage(language),
          theme: theme === "dark" ? "synthwave-84" : "snazzy-light",
        });
        setHighlightedCode(html);
      } catch (err) {
        console.error("Failed to highlight code:", err);
      }
    };

    highlight();
  }, [code, language, theme]);

  return (
    <div
      className="overflow-x-auto rounded-lg border p-4 text-sm"
      dangerouslySetInnerHTML={{ __html: highlightedCode }}
    />
  );
};
