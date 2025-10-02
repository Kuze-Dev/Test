import React from 'react';
import { BarChartIcon, LockIcon, RefreshCwIcon, ZapIcon } from 'lucide-react';
export function FeaturesSection() {
  const features = [{
    name: 'Analytics',
    description: 'Get detailed insights into your business performance with our advanced analytics dashboard.',
    icon: BarChartIcon
  }, {
    name: 'Security',
    description: 'Enterprise-grade security to protect your sensitive data and maintain compliance.',
    icon: LockIcon
  }, {
    name: 'Automation',
    description: 'Automate repetitive tasks and workflows to save time and reduce errors.',
    icon: RefreshCwIcon
  }, {
    name: 'Performance',
    description: 'Lightning-fast performance that scales with your business needs.',
    icon: ZapIcon
  }];
  return <div id="features" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Features
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to succeed
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our comprehensive suite of tools and features designed to help your
            business grow and thrive.
          </p>
        </div>
        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map(feature => <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  {feature.name}
                </p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </p>
              </div>)}
          </div>
        </div>
      </div>
    </div>;
}