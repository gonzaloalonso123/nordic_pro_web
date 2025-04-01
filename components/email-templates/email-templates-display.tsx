"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Copy, Check, Code, Eye } from "lucide-react";

import {
  waitlistEmailHtml,
  partnerEmailHtml,
  emailTemplateData,
} from "@/lib/email-templates";

const emailTemplates = [
  {
    ...emailTemplateData.waitlist,
    html: waitlistEmailHtml,
  },
  {
    ...emailTemplateData.partner,
    html: partnerEmailHtml,
  },
];

export default function EmailTemplatesDisplay() {
  const [activeTemplate, setActiveTemplate] = useState(emailTemplates[0]);
  const [viewMode, setViewMode] = useState<"preview" | "code">("preview");
  const [copied, setCopied] = useState(false);

  const handleCopyHtml = () => {
    navigator.clipboard.writeText(activeTemplate.html);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background py-16 pt-24">
      <div className="container px-4 md:px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold font-montserrat text-primary mb-2">
            Email Templates
          </h1>
          <p className="text-lg text-foreground/70">
            NordicPro email templates designed to maintain brand consistency
            across all communications.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Templates</h2>
              <div className="space-y-2">
                {emailTemplates.map((template) => (
                  <button
                    key={template.id}
                    onClick={() => setActiveTemplate(template)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      activeTemplate.id === template.id
                        ? "bg-primary text-white font-medium"
                        : "hover:bg-primary/10 text-foreground/70"
                    }`}
                  >
                    {template.name}
                  </button>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="font-bold mb-2">View Options</h3>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant={viewMode === "preview" ? "default" : "outline"}
                    onClick={() => setViewMode("preview")}
                    className="flex items-center gap-2"
                  >
                    <Eye className="h-4 w-4" />
                    Preview
                  </Button>
                  <Button
                    size="sm"
                    variant={viewMode === "code" ? "default" : "outline"}
                    onClick={() => setViewMode("code")}
                    className="flex items-center gap-2"
                  >
                    <Code className="h-4 w-4" />
                    HTML
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6 border-b">
                <h2
                  className="text-2xl font-bold font-montserrat"
                  style={{ color: activeTemplate.primaryColor }}
                >
                  {activeTemplate.name}
                </h2>
                <p className="text-foreground/70 mt-1">
                  {activeTemplate.description}
                </p>
              </div>

              <Tabs defaultValue="template" className="w-full">
                <div className="px-6 pt-4">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="template">Template</TabsTrigger>
                    <TabsTrigger value="usage">Usage</TabsTrigger>
                    <TabsTrigger value="elements">Key Elements</TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="template" className="p-6">
                  {viewMode === "preview" ? (
                    <div className="border rounded-lg overflow-hidden shadow-sm">
                      <div className="h-[600px] overflow-auto bg-gray-50">
                        <iframe
                          srcDoc={activeTemplate.html}
                          title={`${activeTemplate.name} Preview`}
                          className="w-full h-full"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="relative">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={handleCopyHtml}
                        className="absolute top-2 right-2 z-10"
                      >
                        {copied ? (
                          <>
                            <Check className="h-4 w-4 mr-1" /> Copied
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4 mr-1" /> Copy HTML
                          </>
                        )}
                      </Button>
                      <div className="border rounded-lg overflow-hidden shadow-sm">
                        <pre className="p-4 bg-gray-50 text-sm font-mono overflow-auto h-[600px] text-gray-800">
                          {activeTemplate.html}
                        </pre>
                      </div>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="usage" className="p-6">
                  <div className="bg-muted rounded-lg p-6">
                    <h3 className="text-lg font-bold mb-4">
                      When to Use This Template
                    </h3>
                    <ul className="space-y-2">
                      {activeTemplate.usage.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div
                            className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                            style={{
                              backgroundColor: activeTemplate.primaryColor,
                            }}
                          >
                            <Check className="h-3 w-3 text-white" />
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8">
                      <h3 className="text-lg font-bold mb-4">Best Practices</h3>
                      <ul className="space-y-2 text-foreground/80">
                        <li>
                          • Personalize the email with the recipient's name when
                          available
                        </li>
                        <li>
                          • Ensure all links are working and properly tracked
                        </li>
                        <li>
                          • Test the email across different email clients before
                          sending
                        </li>
                        <li>
                          • Keep the email concise and focused on the main
                          message
                        </li>
                        <li>
                          • Include clear call-to-action buttons for important
                          actions
                        </li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="elements" className="p-6">
                  <div className="bg-muted rounded-lg p-6">
                    <h3 className="text-lg font-bold mb-4">
                      Key Design Elements
                    </h3>
                    <ul className="space-y-2">
                      {activeTemplate.keyElements.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div
                            className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                            style={{
                              backgroundColor: activeTemplate.primaryColor,
                            }}
                          >
                            <span className="text-white text-xs font-bold">
                              {index + 1}
                            </span>
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8">
                      <h3 className="text-lg font-bold mb-4">
                        Brand Alignment
                      </h3>
                      <p className="mb-4">
                        This email template aligns with the NordicPro brand
                        guidelines in the following ways:
                      </p>
                      <ul className="space-y-2 text-foreground/80">
                        <li>
                          • Uses the brand's primary typography (Montserrat for
                          headings, Arial/Helvetica for body)
                        </li>
                        <li>• Incorporates the brand's color palette</li>
                        <li>
                          • Maintains a supportive and clear tone of voice
                        </li>
                        <li>• Includes the NordicPro logo in the header</li>
                        <li>
                          • Uses consistent button styling with the website
                        </li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="mr-4">
            <a href="/brand-book">Back to Brand Book</a>
          </Button>
          <Button asChild>
            <a href="/">Back to Homepage</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
