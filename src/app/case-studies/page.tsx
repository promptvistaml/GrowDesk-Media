import type { Metadata } from 'next';
import { Footer } from '@/components/footer';
import { CaseStudiesView } from '@/components/case-studies-view';

export const metadata: Metadata = {
  title: 'Our Work | Client Engagements & Impact Ledger',
  description:
    'Documented case studies and verified commercial milestones including 152 school admissions, 2x sales growth, and 600+ student contacts gathered for our clients.',
};

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#000000] text-white">
      <CaseStudiesView />
      <Footer />
    </main>
  );
}
