import React from 'react';
import { ContactSection } from '@/components/ui/contact';

const DemoContactSection: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#F6F9FD]">
      <ContactSection
        title="We can turn your commercial growth targets into reality."
        contactEmail="growdeskmedia@gmail.com"
      />
    </main>
  );
};

export default DemoContactSection;

