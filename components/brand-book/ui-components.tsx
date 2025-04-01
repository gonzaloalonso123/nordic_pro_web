import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function UIComponents() {
  return (
    <div>
      <h2 className="text-3xl font-bold font-montserrat text-primary mb-6">
        UI Components
      </h2>

      <p className="text-foreground/80 mb-8">
        Our UI components are designed to be consistent, accessible, and aligned
        with our brand identity. They provide a cohesive user experience across
        all digital touchpoints.
      </p>

      <div className="space-y-12">
        {/* Buttons */}
        <div>
          <h3 className="text-xl font-bold mb-4">Buttons</h3>
          <p className="text-foreground/70 mb-6">
            Buttons are used for actions, such as "Join Waitlist," "Submit," or
            "Learn More." They should be clearly visible and communicate their
            purpose.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium">Primary Buttons</h4>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-primary hover:bg-primary/90">
                  Primary Button
                </Button>
                <Button className="bg-primary hover:bg-primary/90" disabled>
                  Disabled
                </Button>
              </div>
              <div className="text-sm text-foreground/70">
                Used for primary actions and main calls-to-action.
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Accent Buttons</h4>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-accent hover:bg-accent/90 text-white">
                  Accent Button
                </Button>
                <Button
                  className="bg-accent hover:bg-accent/90 text-white"
                  disabled
                >
                  Disabled
                </Button>
              </div>
              <div className="text-sm text-foreground/70">
                Used for important actions that need to stand out.
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Secondary Buttons</h4>
              <div className="flex flex-wrap gap-4">
                <Button
                  variant="outline"
                  className="border-primary/20 hover:border-primary/40 text-foreground"
                >
                  Secondary Button
                </Button>
                <Button
                  variant="outline"
                  className="border-primary/20 hover:border-primary/40 text-foreground"
                  disabled
                >
                  Disabled
                </Button>
              </div>
              <div className="text-sm text-foreground/70">
                Used for secondary actions or in combination with primary
                buttons.
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Button Sizes</h4>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="sm">Small</Button>
                <Button>Default</Button>
                <Button size="lg">Large</Button>
              </div>
              <div className="text-sm text-foreground/70">
                Different sizes for different contexts and importance levels.
              </div>
            </div>
          </div>
        </div>

        {/* Forms */}
        <div>
          <h3 className="text-xl font-bold mb-4">Form Elements</h3>
          <p className="text-foreground/70 mb-6">
            Form elements should be consistent, accessible, and provide clear
            feedback to users.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium">Text Inputs</h4>
              <div className="space-y-2">
                <Label htmlFor="example-input">Input Label</Label>
                <Input id="example-input" placeholder="Enter text here..." />
              </div>
              <div className="text-sm text-foreground/70">
                Used for collecting text-based information from users.
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Checkboxes</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms">Accept terms and conditions</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="newsletter" defaultChecked />
                  <Label htmlFor="newsletter">Subscribe to newsletter</Label>
                </div>
              </div>
              <div className="text-sm text-foreground/70">
                Used for multiple selection options or toggles.
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Radio Buttons</h4>
              <RadioGroup defaultValue="option-one">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-one" id="option-one" />
                  <Label htmlFor="option-one">Option One</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <Label htmlFor="option-two">Option Two</Label>
                </div>
              </RadioGroup>
              <div className="text-sm text-foreground/70">
                Used for single selection from a list of options.
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Select Dropdown</h4>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                  <SelectItem value="option3">Option 3</SelectItem>
                </SelectContent>
              </Select>
              <div className="text-sm text-foreground/70">
                Used for selecting from a list of predefined options.
              </div>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div>
          <h3 className="text-xl font-bold mb-4">Cards</h3>
          <p className="text-foreground/70 mb-6">
            Cards are used to group related information and actions. They
            provide a consistent way to display content.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-md overflow-hidden border">
              <div className="p-6">
                <h4 className="font-bold text-lg mb-2">Standard Card</h4>
                <p className="text-foreground/70 text-sm mb-4">
                  This is a standard card used for displaying content with a
                  clean, simple design.
                </p>
                <Button size="sm">Card Action</Button>
              </div>
            </div>

            <div className="bg-primary/5 rounded-xl shadow-md overflow-hidden border border-primary/10">
              <div className="p-6">
                <h4 className="font-bold text-lg text-primary mb-2">
                  Feature Card
                </h4>
                <p className="text-foreground/70 text-sm mb-4">
                  This is a feature card with a colored background to highlight
                  important content.
                </p>
                <Button size="sm" className="bg-primary">
                  Card Action
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div>
          <h3 className="text-xl font-bold mb-4">Notifications</h3>
          <p className="text-foreground/70 mb-6">
            Notifications provide feedback to users about actions or system
            status.
          </p>

          <div className="space-y-4">
            <div className="bg-green/10 border-l-4 border-green p-4 rounded-r-lg">
              <h4 className="font-bold text-green mb-1">Success Message</h4>
              <p className="text-sm text-foreground/70">
                Your action was completed successfully.
              </p>
            </div>

            <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-r-lg">
              <h4 className="font-bold text-primary mb-1">
                Information Message
              </h4>
              <p className="text-sm text-foreground/70">
                Here's some important information you should know.
              </p>
            </div>

            <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-lg">
              <h4 className="font-bold text-accent mb-1">Warning Message</h4>
              <p className="text-sm text-foreground/70">
                Please be aware of this important warning.
              </p>
            </div>

            <div className="bg-red-100 border-l-4 border-red-500 p-4 rounded-r-lg">
              <h4 className="font-bold text-red-500 mb-1">Error Message</h4>
              <p className="text-sm text-foreground/70">
                An error occurred. Please try again.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 p-6 bg-muted rounded-lg">
          <h3 className="text-lg font-bold mb-3">UI Component Guidelines</h3>
          <ul className="space-y-2 text-foreground/80">
            <li>
              • Maintain consistent spacing, sizing, and styling across all
              components.
            </li>
            <li>
              • Ensure all interactive elements have clear hover and focus
              states.
            </li>
            <li>• Use appropriate colors to communicate purpose and state.</li>
            <li>• Maintain accessibility standards for all components.</li>
            <li>
              • Keep components simple and focused on their primary function.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
