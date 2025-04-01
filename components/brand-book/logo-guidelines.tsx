export default function LogoGuidelines() {
  return (
    <div>
      <h2 className="text-3xl font-bold font-montserrat text-primary mb-6">
        Logo & Identity
      </h2>

      <p className="text-foreground/80 mb-8">
        The NordicPro logo represents our commitment to mental health,
        motivation, and team management in youth sports. It's designed to be
        modern, professional, and approachable.
      </p>

      <div className="mb-10">
        <h3 className="text-xl font-bold mb-4">Primary Logo</h3>
        <div className="bg-white p-8 rounded-lg border flex justify-center items-center mb-4">
          <div className="text-4xl md:text-5xl font-bold font-montserrat text-primary">
            NordicPro
          </div>
        </div>
        <p className="text-sm text-foreground/70 italic">
          The primary logo is a wordmark using Montserrat Bold in our primary
          blue color.
        </p>
      </div>

      <div className="mb-10">
        <h3 className="text-xl font-bold mb-4">Logo Variations</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-6 border rounded-lg flex flex-col items-center">
            <div className="h-20 flex items-center justify-center mb-3">
              <div className="text-3xl font-bold font-montserrat text-primary">
                NordicPro
              </div>
            </div>
            <span className="text-sm text-foreground/70">Primary (Blue)</span>
          </div>
          <div className="p-6 border rounded-lg flex flex-col items-center bg-primary">
            <div className="h-20 flex items-center justify-center mb-3">
              <div className="text-3xl font-bold font-montserrat text-white">
                NordicPro
              </div>
            </div>
            <span className="text-sm text-white/70">Reversed (White)</span>
          </div>
          <div className="p-6 border rounded-lg flex flex-col items-center bg-foreground">
            <div className="h-20 flex items-center justify-center mb-3">
              <div className="text-3xl font-bold font-montserrat text-white">
                NordicPro
              </div>
            </div>
            <span className="text-sm text-white/70">Dark Background</span>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <h3 className="text-xl font-bold mb-4">Clear Space</h3>
        <div className="bg-muted p-8 rounded-lg border flex justify-center items-center mb-4 relative">
          <div className="border-2 border-dashed border-foreground/30 p-8">
            <div className="text-4xl font-bold font-montserrat text-primary">
              NordicPro
            </div>
          </div>
          <div className="absolute top-2 left-2 text-xs text-foreground/60">
            Minimum clear space = "N" height
          </div>
        </div>
        <p className="text-foreground/80">
          Always maintain adequate clear space around the logo to ensure
          visibility and impact. The minimum clear space is equal to the height
          of the "N" in the logo.
        </p>
      </div>

      <div className="mb-10">
        <h3 className="text-xl font-bold mb-4">Incorrect Usage</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 border rounded-lg">
            <div className="h-20 flex items-center justify-center mb-3 relative">
              <div className="text-3xl font-bold font-montserrat text-red-500">
                NordicPro
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-0.5 bg-red-500 rotate-45"></div>
              </div>
            </div>
            <p className="text-sm text-foreground/70">
              Don't change the logo colors outside of approved variations.
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <div className="h-20 flex items-center justify-center mb-3 relative">
              <div className="text-3xl font-bold font-sans text-primary">
                NordicPro
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-0.5 bg-red-500 rotate-45"></div>
              </div>
            </div>
            <p className="text-sm text-foreground/70">
              Don't use different fonts for the logo.
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <div className="h-20 flex items-center justify-center mb-3 relative">
              <div className="text-3xl font-bold font-montserrat text-primary italic">
                NordicPro
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-0.5 bg-red-500 rotate-45"></div>
              </div>
            </div>
            <p className="text-sm text-foreground/70">
              Don't distort or apply effects to the logo.
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <div className="h-20 flex items-center justify-center mb-3 relative bg-gradient-to-r from-purple-500 to-pink-500">
              <div className="text-3xl font-bold font-montserrat text-white">
                NordicPro
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-0.5 bg-red-500 rotate-45"></div>
              </div>
            </div>
            <p className="text-sm text-foreground/70">
              Don't place the logo on busy backgrounds or non-approved colors.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 p-6 bg-muted rounded-lg">
        <h3 className="text-lg font-bold mb-3">Logo Usage Guidelines</h3>
        <ul className="space-y-2 text-foreground/80">
          <li>
            • Always use the logo files provided in the brand assets package.
          </li>
          <li>• Maintain the minimum clear space around the logo.</li>
          <li>• Don't alter the logo colors, proportions, or typography.</li>
          <li>• Ensure the logo is clearly visible against its background.</li>
          <li>
            • Use the appropriate logo variation based on the background color
            and context.
          </li>
        </ul>
      </div>
    </div>
  );
}
