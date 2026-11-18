import { Clock, Bell, Moon, Zap } from 'lucide-react';

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: '24/7 Monitoring',
    description: 'Keep an eye on what matters, anytime, anywhere.',
  },
  {
    icon: <Bell className="w-6 h-6" />,
    title: 'Mobile Alerts',
    description: 'Instant notifications on your phone, wherever you are.',
  },
  {
    icon: <Moon className="w-6 h-6" />,
    title: 'Night Vision',
    description: 'Clear and detailed footage, even in low light.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Easy Installation',
    description: 'Quick setup with simple step-by-step guidance.',
  },
];

export function BenefitStrip() {
  return (
    <section className="bg-cloud-bg py-12 md:py-16">
      <div className="container-tight">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-midnight-navy">
                {benefit.icon}
              </div>
              <h3 className="font-bold text-primary-text">{benefit.title}</h3>
              <p className="text-sm text-secondary-text">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
