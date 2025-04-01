export default function VoiceTone() {
  return (
    <div>
      <h2 className="text-3xl font-bold font-montserrat text-primary mb-6">
        Voice & Tone
      </h2>

      <p className="text-foreground/80 mb-8">
        Our voice is how we express our brand personality through words. It
        should be consistent across all communications while adapting the tone
        to different contexts and audiences.
      </p>

      <div className="mb-10">
        <h3 className="text-xl font-bold mb-4">Brand Voice</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg border">
            <h4 className="font-bold text-primary mb-3">Supportive</h4>
            <p className="text-foreground/70 mb-4">
              We communicate with empathy and understanding, acknowledging the
              challenges our users face and offering genuine support.
            </p>
            <div className="space-y-2">
              <div className="p-3 bg-green/5 rounded-lg">
                <p className="text-sm font-medium text-green">Do:</p>
                <p className="text-sm">
                  "We understand the pressures of coaching. Our tools are
                  designed to make your job easier."
                </p>
              </div>
              <div className="p-3 bg-red-50 rounded-lg">
                <p className="text-sm font-medium text-red-500">Don't:</p>
                <p className="text-sm">
                  "Our platform solves all your coaching problems."
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border">
            <h4 className="font-bold text-primary mb-3">Knowledgeable</h4>
            <p className="text-foreground/70 mb-4">
              We communicate with expertise and insight, sharing valuable
              information without being condescending.
            </p>
            <div className="space-y-2">
              <div className="p-3 bg-green/5 rounded-lg">
                <p className="text-sm font-medium text-green">Do:</p>
                <p className="text-sm">
                  "Research shows that regular check-ins improve team cohesion.
                  That's why we've built this feature."
                </p>
              </div>
              <div className="p-3 bg-red-50 rounded-lg">
                <p className="text-sm font-medium text-red-500">Don't:</p>
                <p className="text-sm">
                  "You should be doing regular check-ins. It's obvious that
                  they're important."
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border">
            <h4 className="font-bold text-primary mb-3">Positive</h4>
            <p className="text-foreground/70 mb-4">
              We focus on possibilities and solutions, maintaining an optimistic
              outlook while being realistic.
            </p>
            <div className="space-y-2">
              <div className="p-3 bg-green/5 rounded-lg">
                <p className="text-sm font-medium text-green">Do:</p>
                <p className="text-sm">
                  "Let's build a stronger team together, one check-in at a
                  time."
                </p>
              </div>
              <div className="p-3 bg-red-50 rounded-lg">
                <p className="text-sm font-medium text-red-500">Don't:</p>
                <p className="text-sm">
                  "Without proper mental health support, teams often fail."
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border">
            <h4 className="font-bold text-primary mb-3">Clear</h4>
            <p className="text-foreground/70 mb-4">
              We communicate directly and simply, avoiding jargon and making
              complex concepts accessible.
            </p>
            <div className="space-y-2">
              <div className="p-3 bg-green/5 rounded-lg">
                <p className="text-sm font-medium text-green">Do:</p>
                <p className="text-sm">
                  "Track how your players are feeling with quick daily
                  check-ins."
                </p>
              </div>
              <div className="p-3 bg-red-50 rounded-lg">
                <p className="text-sm font-medium text-red-500">Don't:</p>
                <p className="text-sm">
                  "Our proprietary sentiment analysis algorithm quantifies
                  emotional states through daily micro-interactions."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <h3 className="text-xl font-bold mb-4">Tone by Context</h3>
        <p className="text-foreground/70 mb-6">
          While our voice remains consistent, our tone adapts to different
          contexts and audiences.
        </p>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border">
            <h4 className="font-bold text-primary mb-3">Marketing & Website</h4>
            <p className="text-foreground/70 mb-4">
              Inspirational and confident, highlighting benefits and
              possibilities.
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <p className="italic">
                "Transform your team's experience with NordicPro. Our platform
                combines mental health support, motivation tools, and team
                management in one seamless solution."
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border">
            <h4 className="font-bold text-primary mb-3">Product UI</h4>
            <p className="text-foreground/70 mb-4">
              Clear, concise, and helpful, focusing on guiding users through
              tasks.
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <p className="italic">
                "Great job completing your team check-in! You'll see a summary
                of your team's mood in your dashboard."
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border">
            <h4 className="font-bold text-primary mb-3">Support & Help</h4>
            <p className="text-foreground/70 mb-4">
              Empathetic and solution-oriented, acknowledging concerns and
              providing clear guidance.
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <p className="italic">
                "We understand it can be challenging to get your team to
                complete regular check-ins. Here are some strategies that have
                worked for other coaches."
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border">
            <h4 className="font-bold text-primary mb-3">Social Media</h4>
            <p className="text-foreground/70 mb-4">
              Conversational and engaging, building community and sharing
              valuable insights.
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <p className="italic">
                "Did you know? Teams that do regular mental health check-ins see
                85% better player retention. What strategies do you use to
                support your athletes' well-being? #TeamWellness"
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 p-6 bg-muted rounded-lg">
        <h3 className="text-lg font-bold mb-3">Voice & Tone Guidelines</h3>
        <ul className="space-y-2 text-foreground/80">
          <li>• Always communicate with empathy and understanding.</li>
          <li>• Use clear, simple language that avoids jargon.</li>
          <li>• Focus on solutions and possibilities, not problems.</li>
          <li>
            • Adapt your tone to the context and audience while maintaining our
            core voice.
          </li>
          <li>• Be authentic and human, not robotic or overly formal.</li>
          <li>• Use inclusive language that respects diversity.</li>
        </ul>
      </div>
    </div>
  );
}
