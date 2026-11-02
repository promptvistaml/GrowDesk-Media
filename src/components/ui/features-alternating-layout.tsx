'use client';

import type { FC } from 'react';
import { MessageSquare, Zap, BarChart3, Check } from 'lucide-react';
import {
  MetallicTabletMockup,
  DashboardScreenOne,
  DashboardScreenTwo,
  DashboardScreenThree,
} from './dashboard-screens';

interface FeatureItemProps {
  text: string;
}

const FeatureCheckItem: FC<FeatureItemProps> = ({ text }) => {
  return (
    <li className="flex items-start gap-3">
      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 border border-blue-200 text-blue-600">
        <Check className="h-3 w-3 stroke-[2.5]" />
      </div>
      <span className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed">
        {text}
      </span>
    </li>
  );
};

export const FeaturesAlternatingLayout01 = () => {
  return (
    <section className="relative flex flex-col gap-14 sm:gap-20 md:gap-28 overflow-hidden bg-white text-neutral-900 py-20 md:py-32 border-t border-neutral-200">
      {/* Header Container */}
      <div className="mx-auto w-full max-w-[1300px] px-6 md:px-12">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
          <span className="text-sm font-semibold tracking-wide text-blue-600">
            Features
          </span>
          <h2 className="mt-3 font-sans text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 leading-[1.15]">
            Beautiful analytics to grow smarter
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-neutral-600 font-normal leading-relaxed max-w-2xl">
            Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
          </p>
        </div>
      </div>

      {/* Alternating Feature Rows with Metallic Tablet Screen Mockups */}
      <div className="mx-auto flex w-full max-w-[1300px] flex-col gap-20 md:gap-32 px-6 md:px-12">
        {/* Row 1: Left Text, Right Metallic Tablet with Composed Bar & Line Dashboard */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 border border-blue-100 text-blue-600 shadow-xs">
              <MessageSquare className="h-6 w-6 stroke-[1.75]" />
            </div>
            <h3 className="font-sans text-2xl sm:text-3xl font-semibold text-neutral-900 tracking-tight">
              Share team inboxes
            </h3>
            <p className="text-base text-neutral-600 font-normal leading-relaxed">
              Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
            </p>
            <ul className="flex flex-col gap-3.5 pt-2">
              <FeatureCheckItem text="Leverage automation to move fast" />
              <FeatureCheckItem text="Always give customers a human to chat to" />
              <FeatureCheckItem text="Automate customer support and close leads faster" />
            </ul>
          </div>

          <div className="lg:col-span-7 flex justify-center">
            <MetallicTabletMockup>
              <DashboardScreenOne />
            </MetallicTabletMockup>
          </div>
        </div>

        {/* Row 2: Right Text, Left Metallic Tablet with Stacked Channel Bar Chart */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 lg:order-last space-y-5">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 border border-blue-100 text-blue-600 shadow-xs">
              <Zap className="h-6 w-6 stroke-[1.75]" />
            </div>
            <h3 className="font-sans text-2xl sm:text-3xl font-semibold text-neutral-900 tracking-tight">
              Deliver instant answers
            </h3>
            <p className="text-base text-neutral-600 font-normal leading-relaxed">
              An all-in-one customer service platform that helps you balance everything your customers need to be happy.
            </p>
            <ul className="flex flex-col gap-3.5 pt-2">
              <FeatureCheckItem text="Keep your customers in the loop with live chat" />
              <FeatureCheckItem text="Embed help articles right on your website" />
              <FeatureCheckItem text="Customers never have to leave the page to find an answer" />
            </ul>
          </div>

          <div className="lg:col-span-7 flex justify-center">
            <MetallicTabletMockup>
              <DashboardScreenTwo />
            </MetallicTabletMockup>
          </div>
        </div>

        {/* Row 3: Left Text, Right Metallic Tablet with Conversion Area Chart */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 border border-blue-100 text-blue-600 shadow-xs">
              <BarChart3 className="h-6 w-6 stroke-[1.75]" />
            </div>
            <h3 className="font-sans text-2xl sm:text-3xl font-semibold text-neutral-900 tracking-tight">
              Manage your team with reports
            </h3>
            <p className="text-base text-neutral-600 font-normal leading-relaxed">
              Measure what matters with GrowDesk&apos;s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.
            </p>
            <ul className="flex flex-col gap-3.5 pt-2">
              <FeatureCheckItem text="Filter, export, and drilldown on the data quickly" />
              <FeatureCheckItem text="Save, schedule, and automate reports to your inbox" />
              <FeatureCheckItem text="Connect the tools you already use with 100+ integrations" />
            </ul>
          </div>

          <div className="lg:col-span-7 flex justify-center">
            <MetallicTabletMockup>
              <DashboardScreenThree />
            </MetallicTabletMockup>
          </div>
        </div>
      </div>
    </section>
  );
};
