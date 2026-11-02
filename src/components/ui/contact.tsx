"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { MessageCircle, CheckCircle2, Mic } from 'lucide-react';

interface ContactSectionProps {
  /**
   * The title for the contact section.
   */
  title?: string;
  /**
   * The subtitle or main message for the introductory part.
   */
  mainMessage?: React.ReactNode;
  /**
   * The contact email to display.
   */
  contactEmail?: string;
  /**
   * Array of social media links. Each object should have an 'id', 'name', 'iconSrc', and 'href'.
   */
  socialLinks?: Array<{ id: string; name: string; iconSrc: string; href: string }>;
  /**
   * Callback function when the form is submitted.
   * @param data The form data.
   */
  onSubmit?: (data: any) => void;
}

const defaultSocialLinks = [
  { id: '1', name: 'WhatsApp', iconSrc: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/whatsapp.svg', href: 'https://wa.me/919406031522?text=Hello%20GrowDesk%20Media' },
  { id: '2', name: 'Instagram', iconSrc: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg', href: 'https://www.instagram.com/growdeskmedia/' },
  { id: '3', name: 'Facebook', iconSrc: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg', href: 'https://www.facebook.com/profile.php?id=61591647995131' },
  { id: '4', name: 'LinkedIn', iconSrc: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg', href: 'https://www.linkedin.com/company/145189822/' },
];

export const ContactSection: React.FC<ContactSectionProps> = ({
  title = "We can turn your commercial growth targets into reality.",
  mainMessage,
  contactEmail = "growdeskmedia@gmail.com",
  socialLinks = defaultSocialLinks,
  onSubmit,
}) => {
  const displayMainMessage = mainMessage ?? (
    <span className="inline-flex items-center gap-2">
      Let&apos;s talk!
    </span>
  );
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
    projectType: [] as string[],
  });

  const [loading, setLoading] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [whatsappUrl, setWhatsappUrl] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (type: string, checked: boolean) => {
    setFormData((prev) => {
      const currentTypes = prev.projectType;
      if (checked) {
        return { ...prev, projectType: [...currentTypes, type] };
      } else {
        return { ...prev, projectType: currentTypes.filter((t) => t !== type) };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    onSubmit?.(formData);

    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.name,
          contactMethod: formData.email,
          businessName: 'Via Contact Form',
          serviceCategory: formData.projectType.join(', ') || 'General Growth Inquiry',
          message: formData.message,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        setWhatsappUrl(data.whatsappRedirectUrl);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const projectTypeOptions = [
    'Brand Positioning', 'Meta Ads', 'Google Ads', 'Franchise Modeling',
    'Reels & Video', 'WhatsApp Automation', 'Website & SEO', 'Lead Generation Campaigns', 'Other'
  ];

  return (
    <section id="connect" className="relative w-full overflow-hidden bg-[#F6F9FD] text-black py-24 md:py-36 px-6 sm:px-10 border-t border-blue-100">
      {/* Main Content Layout (Clean background without bubble animations or external backgrounds) */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Side: Statement & Direct Email */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
          <div className="space-y-4">
           
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-[46px] font-normal leading-[1.12] text-neutral-900 tracking-tight">
              {title}
            </h2>
            <p className="text-sm text-neutral-600 font-light leading-relaxed max-w-md pt-2">
              Every mandate starts with alignment on business objectives, target metrics, and transparent communication protocols. All inquiries route directly to our official WhatsApp Business desk.
            </p>
          </div>

          <div className="space-y-3 border-t border-neutral-200 pt-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-neutral-400">Direct Email</p>
                <a href={`mailto:${contactEmail}`} className="text-sm font-mono text-neutral-900 hover:text-blue-600 transition-colors">
                  {contactEmail}
                </a>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-neutral-400">Direct Phone / WhatsApp</p>
                <a href="tel:+919406031522" className="text-sm font-mono text-neutral-900 hover:text-blue-600 transition-colors">
                  +91 94060 31522
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3 pt-3">
              <span className="font-mono text-xs uppercase text-neutral-400">CHANNELS:</span>
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-neutral-300 hover:border-black flex items-center justify-center transition-colors bg-white p-1.5"
                  aria-label={link.name}
                >
                  <img src={link.iconSrc} alt={link.name} className="h-3.5 w-3.5 object-contain" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-xl shadow-lg border border-neutral-200">
          <h3 className="font-serif text-2xl font-normal text-neutral-900 mb-6">{displayMainMessage}</h3>

          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl text-neutral-900">Inquiry Received</h4>
              <p className="text-xs text-neutral-600 max-w-sm mx-auto">
                Thank you! Your growth brief has been recorded. Click below to continue on our WhatsApp desk.
              </p>
              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-3 rounded text-xs font-semibold uppercase tracking-wider shadow transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Open Official WhatsApp</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <p className="text-xs font-mono uppercase tracking-wider text-neutral-400">Leave us a brief message</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-xs font-medium">Your name *</Label>
                  <Input id="name" name="name" placeholder="Full name" value={formData.name} onChange={handleChange} required className="bg-neutral-50/50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xs font-medium">Email / WhatsApp Number *</Label>
                  <Input id="email" name="email" placeholder="Phone or email" value={formData.email} onChange={handleChange} required className="bg-neutral-50/50" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-xs font-medium">Briefly describe your project / growth target</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your goals (e.g. school admissions, 2x sales, multi-city franchise expansion)..."
                  className="min-h-[85px] bg-neutral-50/50"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-3">
                <p className="text-xs font-mono uppercase tracking-wider text-neutral-400">I&apos;m looking for...</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {projectTypeOptions.map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <Checkbox
                        id={option.replace(/\s/g, '-').toLowerCase()}
                        checked={formData.projectType.includes(option)}
                        onCheckedChange={(checked) => handleCheckboxChange(option, checked as boolean)}
                      />
                      <Label htmlFor={option.replace(/\s/g, '-').toLowerCase()} className="text-xs font-light text-neutral-700 cursor-pointer">
                        {option}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-black text-white hover:bg-neutral-800 text-xs font-mono uppercase tracking-widest py-6"
              >
                {loading ? 'Transmitting...' : 'Send Message & Route to WhatsApp'}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

