import { Eye, Mic, AlertCircle, Radio, HardDrive, Zap } from 'lucide-react';

interface ProductFeatureStripProps {
  features?: string[];
}

const defaultFeatureIcons: Record<string, React.ReactNode> = {
  'Night Vision': <Eye className="w-8 h-8" />,
  'Two-Way Audio': <Mic className="w-8 h-8" />,
  'Motion Alerts': <AlertCircle className="w-8 h-8" />,
  'Tracking': <Radio className="w-8 h-8" />,
  'Storage': <HardDrive className="w-8 h-8" />,
  'Setup': <Zap className="w-8 h-8" />,
};

export function ProductFeatureStrip({ features }: ProductFeatureStripProps) {
  // Default features if none provided
  const displayFeatures = features || [
    'Full HD Night Vision',
    'Two-Way Audio',
    'Instant Motion Alerts',
    '360° Auto-Tracking',
    'Cloud + Local Storage',
    '1-Minute Setup',
  ];

  return (
    <section className="bg-cloud-bg py-12 md:py-16">
      <div className="container-tight">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {displayFeatures.slice(0, 6).map((feature, index) => {
            const icon = Object.entries(defaultFeatureIcons).find(([key]) =>
              feature.toLowerCase().includes(key.toLowerCase())
            )?.[1] || <Zap className="w-8 h-8" />;

            return (
              <div key={index} className="flex flex-col items-center text-center space-y-2">
                <div className="text-midnight-navy">{icon}</div>
                <p className="text-xs md:text-sm font-medium text-primary-text leading-tight">
                  {feature}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
