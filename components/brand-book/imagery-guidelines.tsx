export default function ImageryGuidelines() {
  return (
    <div>
      <h2 className="text-3xl font-bold font-montserrat text-primary mb-6">
        Imagery & Photography
      </h2>

      <p className="text-foreground/80 mb-8">
        Our imagery style reflects our brand values of support, motivation, and
        well-being. We use authentic, positive imagery that showcases both
        individual achievement and team connection.
      </p>

      <div className="mb-10">
        <h3 className="text-xl font-bold mb-4">Photography Style</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="aspect-video bg-muted rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center text-foreground/40">
                [Team sports photography example]
              </div>
            </div>
            <h4 className="font-medium">Team Dynamics</h4>
            <p className="text-sm text-foreground/70">
              Images that showcase teamwork, collaboration, and positive team
              dynamics. These should capture authentic moments of connection
              between teammates.
            </p>
          </div>

          <div className="space-y-3">
            <div className="aspect-video bg-muted rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center text-foreground/40">
                [Individual athlete photography example]
              </div>
            </div>
            <h4 className="font-medium">Individual Focus</h4>
            <p className="text-sm text-foreground/70">
              Images that highlight individual athletes showing determination,
              focus, and personal growth. These should feel authentic and
              empowering.
            </p>
          </div>

          <div className="space-y-3">
            <div className="aspect-video bg-muted rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center text-foreground/40">
                [Coaching moment photography example]
              </div>
            </div>
            <h4 className="font-medium">Coaching & Mentorship</h4>
            <p className="text-sm text-foreground/70">
              Images that showcase positive coaching interactions, mentorship,
              and supportive guidance between coaches and athletes.
            </p>
          </div>

          <div className="space-y-3">
            <div className="aspect-video bg-muted rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center text-foreground/40">
                [Wellness activity photography example]
              </div>
            </div>
            <h4 className="font-medium">Wellness & Mental Health</h4>
            <p className="text-sm text-foreground/70">
              Images that represent mental well-being, reflection, and healthy
              habits that support athletic performance.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <h3 className="text-xl font-bold mb-4">Image Treatment</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="space-y-3">
            <div className="aspect-square bg-muted rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center text-foreground/40">
                [Natural lighting example]
              </div>
            </div>
            <h4 className="font-medium">Natural Lighting</h4>
            <p className="text-xs text-foreground/70">
              Prefer natural, bright lighting that creates a positive, energetic
              feel.
            </p>
          </div>

          <div className="space-y-3">
            <div className="aspect-square bg-muted rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center text-foreground/40">
                [Vibrant colors example]
              </div>
            </div>
            <h4 className="font-medium">Vibrant Colors</h4>
            <p className="text-xs text-foreground/70">
              Use vibrant, natural colors that align with our brand palette.
            </p>
          </div>

          <div className="space-y-3">
            <div className="aspect-square bg-muted rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center text-foreground/40">
                [Dynamic composition example]
              </div>
            </div>
            <h4 className="font-medium">Dynamic Composition</h4>
            <p className="text-xs text-foreground/70">
              Use dynamic compositions that convey energy and movement.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <h3 className="text-xl font-bold mb-4">Illustrations & Icons</h3>
        <p className="text-foreground/70 mb-6">
          Our illustrations and icons use a clean, modern style that complements
          our photography and reinforces our brand identity.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="p-8 bg-muted rounded-lg flex justify-center items-center">
              <div className="grid grid-cols-4 gap-4">
                {[
                  "home",
                  "user",
                  "calendar",
                  "message",
                  "heart",
                  "award",
                  "settings",
                  "help-circle",
                ].map((icon) => (
                  <div
                    key={icon}
                    className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      {icon === "home" && (
                        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      )}
                      {icon === "user" && (
                        <>
                          <circle cx="12" cy="8" r="5"></circle>
                          <path d="M20 21a8 8 0 1 0-16 0"></path>
                        </>
                      )}
                      {icon === "calendar" && (
                        <>
                          <rect
                            width="18"
                            height="18"
                            x="3"
                            y="4"
                            rx="2"
                            ry="2"
                          ></rect>
                          <line x1="16" x2="16" y1="2" y2="6"></line>
                          <line x1="8" x2="8" y1="2" y2="6"></line>
                          <line x1="3" x2="21" y1="10" y2="10"></line>
                        </>
                      )}
                      {icon === "message" && (
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                      )}
                      {icon === "heart" && (
                        <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                      )}
                      {icon === "award" && (
                        <>
                          <circle cx="12" cy="8" r="7"></circle>
                          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                        </>
                      )}
                      {icon === "settings" && (
                        <>
                          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </>
                      )}
                      {icon === "help-circle" && (
                        <>
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                          <line x1="12" x2="12.01" y1="17" y2="17"></line>
                        </>
                      )}
                    </svg>
                  </div>
                ))}
              </div>
            </div>
            <h4 className="font-medium">Line Icons</h4>
            <p className="text-sm text-foreground/70">
              We use clean, consistent line icons from the Lucide icon set for
              UI elements and navigation.
            </p>
          </div>

          <div className="space-y-3">
            <div className="aspect-video bg-muted rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center text-foreground/40">
                [Custom illustration example]
              </div>
            </div>
            <h4 className="font-medium">Custom Illustrations</h4>
            <p className="text-sm text-foreground/70">
              Custom illustrations use a modern, minimalist style with our brand
              colors to communicate complex concepts in a simple, engaging way.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 p-6 bg-muted rounded-lg">
        <h3 className="text-lg font-bold mb-3">Imagery Guidelines</h3>
        <ul className="space-y-2 text-foreground/80">
          <li>• Use authentic imagery that feels natural, not staged.</li>
          <li>• Showcase diversity in age, gender, ethnicity, and ability.</li>
          <li>• Focus on positive emotions and experiences.</li>
          <li>• Balance individual achievement with team connection.</li>
          <li>• Ensure all imagery is high-quality and properly licensed.</li>
          <li>• Maintain consistent treatment across all imagery.</li>
        </ul>
      </div>
    </div>
  );
}
