"use client";

import { Copy, Check } from "lucide-react";

interface TypographyProps {
  onCopy: (text: string, label: string) => void;
  copied: string | null;
}

export default function Typography({ onCopy, copied }: TypographyProps) {
  const fontFamilies = [
    {
      name: "Montserrat",
      import: "import { Montserrat } from 'next/font/google'",
      usage: "Headings, titles, and important UI elements",
      weights: [400, 500, 600, 700, 800],
      styles: [
        {
          name: "H1",
          className: "text-5xl font-bold font-montserrat",
          example: "Main Heading",
        },
        {
          name: "H2",
          className: "text-4xl font-bold font-montserrat",
          example: "Section Heading",
        },
        {
          name: "H3",
          className: "text-2xl font-bold font-montserrat",
          example: "Subsection Heading",
        },
        {
          name: "Button",
          className: "text-lg font-medium font-montserrat",
          example: "Button Text",
        },
      ],
    },
    {
      name: "Inter",
      import: "import { Inter } from 'next/font/google'",
      usage: "Body text, paragraphs, and UI elements",
      weights: [400, 500, 600],
      styles: [
        {
          name: "Body",
          className: "text-base font-sans",
          example:
            "This is regular body text used for paragraphs and general content.",
        },
        {
          name: "Small",
          className: "text-sm font-sans",
          example: "Smaller text used for captions and secondary information.",
        },
        {
          name: "Label",
          className: "text-sm font-medium font-sans",
          example: "Form Label",
        },
        {
          name: "Link",
          className: "text-base text-primary hover:underline font-sans",
          example: "Clickable Link",
        },
      ],
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold font-montserrat text-primary mb-6">
        Typography
      </h2>

      <p className="text-foreground/80 mb-8">
        Typography is a core element of the NordicPro brand. We use a
        combination of Montserrat for headings and Inter for body text to create
        a modern, clean, and highly readable experience across all platforms.
      </p>

      <div className="space-y-12">
        {fontFamilies.map((font) => (
          <div key={font.name} className="pb-8 border-b">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold">{font.name}</h3>
              <button
                onClick={() => onCopy(font.import, `${font.name} import`)}
                className="p-1 hover:bg-muted rounded-md flex items-center gap-1 text-sm"
              >
                {copied === `${font.name} import` ? (
                  <>
                    <Check className="h-4 w-4 text-green" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 text-foreground/60" />
                    <span>Copy import</span>
                  </>
                )}
              </button>
            </div>

            <p className="text-foreground/70 mb-4">
              <strong>Usage:</strong> {font.usage}
            </p>

            <div className="mb-6">
              <h4 className="text-lg font-medium mb-2">Weights</h4>
              <div className="flex flex-wrap gap-3">
                {font.weights.map((weight) => (
                  <div
                    key={weight}
                    className="px-3 py-1 bg-muted rounded-md text-sm"
                    style={{
                      fontWeight: weight,
                      fontFamily:
                        font.name === "Montserrat"
                          ? "var(--font-montserrat)"
                          : "var(--font-inter)",
                    }}
                  >
                    {weight}
                  </div>
                ))}
              </div>
            </div>

            <h4 className="text-lg font-medium mb-3">Examples</h4>
            <div className="space-y-6">
              {font.styles.map((style) => (
                <div key={style.name} className="p-4 border rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-foreground/60">
                      {style.name}
                    </span>
                    <button
                      onClick={() =>
                        onCopy(style.className, `${style.name} class`)
                      }
                      className="p-1 hover:bg-muted rounded-md"
                    >
                      {copied === `${style.name} class` ? (
                        <Check className="h-4 w-4 text-green" />
                      ) : (
                        <Copy className="h-4 w-4 text-foreground/60" />
                      )}
                    </button>
                  </div>
                  <div className={style.className}>{style.example}</div>
                  <div className="mt-3 pt-3 border-t">
                    <code className="text-xs bg-muted px-2 py-1 rounded font-mono">
                      {style.className}
                    </code>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 p-6 bg-muted rounded-lg">
        <h3 className="text-lg font-bold mb-3">Typography Guidelines</h3>
        <ul className="space-y-2 text-foreground/80">
          <li>
            • Use Montserrat for all headings, titles, and important UI
            elements.
          </li>
          <li>
            • Use Inter for body text, paragraphs, and general UI elements.
          </li>
          <li>• Maintain a clear hierarchy with consistent heading levels.</li>
          <li>
            • Ensure sufficient contrast between text and background colors.
          </li>
          <li>
            • Use font weights strategically to create emphasis and hierarchy.
          </li>
        </ul>
      </div>
    </div>
  );
}
