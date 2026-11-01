import React from 'react';
import { ContactSection } from '@/components/ui/contact';

const DemoContactSection: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#FBF9F5]">
      <ContactSection
        title="We can turn your commercial growth targets into reality."
        mainMessage="Let's talk! 👋"
        contactEmail="advisory@growdeskmedia.com"
      />
    </main>
  );
};

export default DemoContactSection;

