"use client";

import { Copy, Check } from "lucide-react";

interface ColorPaletteProps {
  onCopy: (text: string, label: string) => void;
  copied: string | null;
}

export default function ColorPalette({ onCopy, copied }: ColorPaletteProps) {
  const colors = [
    {
      category: "Primary Colors",
      colors: [
        {
          name: "Primary Blue",
          hex: "#007BFF",
          hsl: "210, 100%, 50%",
          usage: "Main brand color, buttons, links, primary actions",
        },
        {
          name: "Primary Blue (Light)",
          hex: "#E6F2FF",
          hsl: "210, 100%, 95%",
          usage: "Backgrounds, hover states, secondary elements",
        },
      ],
    },
    {
      category: "Accent Colors",
      colors: [
        {
          name: "Accent Orange",
          hex: "#FF4500",
          hsl: "16, 100%, 50%",
          usage: "Call to actions, highlights, important elements",
        },
        {
          name: "Accent Orange (Light)",
          hex: "#FFF1EB",
          hsl: "16, 100%, 95%",
          usage: "Backgrounds, hover states, secondary elements",
        },
      ],
    },
    {
      category: "Functional Colors",
      colors: [
        {
          name: "Nordic Green",
          hex: "#32CD32",
          hsl: "120, 61%, 50%",
          usage: "Success states, positive indicators, wellness features",
        },
        {
          name: "Nordic Green (Light)",
          hex: "#F0FFF0",
          hsl: "120, 100%, 97%",
          usage: "Success backgrounds, positive indicators",
        },
      ],
    },
    {
      category: "Neutral Colors",
      colors: [
        {
          name: "Background",
          hex: "#F5F5F5",
          hsl: "0, 0%, 96%",
          usage: "Page backgrounds, containers",
        },
        {
          name: "Foreground",
          hex: "#2C2C2C",
          hsl: "0, 0%, 17%",
          usage: "Text, icons, primary content",
        },
        {
          name: "Muted",
          hex: "#F0F4F8",
          hsl: "210, 40%, 96.1%",
          usage: "Secondary backgrounds, disabled states",
        },
        {
          name: "Muted Foreground",
          hex: "#64748B",
          hsl: "215.4, 16.3%, 46.9%",
          usage: "Secondary text, labels, placeholders",
        },
      ],
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold font-montserrat text-primary mb-6">
        Color Palette
      </h2>

      <p className="text-foreground/80 mb-8">
        Our color palette is designed to convey trust, energy, and well-being.
        The primary blue represents reliability and professionalism, while the
        accent orange adds energy and enthusiasm. The Nordic green signifies
        growth, health, and positivity.
      </p>

      <div className="space-y-10">
        {colors.map((category) => (
          <div key={category.category}>
            <h3 className="text-xl font-bold mb-4">{category.category}</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {category.colors.map((color) => (
                <div
                  key={color.name}
                  className="border rounded-lg overflow-hidden"
                >
                  <div
                    className="h-24 w-full"
                    style={{ backgroundColor: color.hex }}
                  ></div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold">{color.name}</h4>
                      <button
                        onClick={() => onCopy(color.hex, color.name)}
                        className="p-1 hover:bg-muted rounded-md"
                        aria-label={`Copy ${color.name} hex code`}
                      >
                        {copied === color.name ? (
                          <Check className="h-4 w-4 text-green" />
                        ) : (
                          <Copy className="h-4 w-4 text-foreground/60" />
                        )}
                      </button>
                    </div>
                    <div className="space-y-1 text-sm">
                      <p className="font-mono text-foreground/70">
                        HEX: {color.hex}
                      </p>
                      <p className="font-mono text-foreground/70">
                        HSL: {color.hsl}
                      </p>
                      <p className="text-foreground/70 mt-2 text-xs">
                        {color.usage}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 p-6 bg-muted rounded-lg">
        <h3 className="text-lg font-bold mb-3">Color Usage Guidelines</h3>
        <ul className="space-y-2 text-foreground/80">
          <li>
            • Use the primary blue for main actions, navigation, and key UI
            elements.
          </li>
          <li>
            • Reserve the accent orange for calls-to-action and important
            highlights.
          </li>
          <li>
            • Use the Nordic green for success states, positive indicators, and
            wellness features.
          </li>
          <li>
            • Maintain sufficient contrast between text and background colors
            for accessibility.
          </li>
          <li>
            • Use lighter color variants for backgrounds and hover states.
          </li>
        </ul>
      </div>
    </div>
  );
}
