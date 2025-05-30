
import { Card, CardContent } from '@/components/ui/card';
import { Award, Heart, Lightbulb, CheckCheck, Users, Leaf, UserRound, ArrowUpCircle } from 'lucide-react';

interface Value {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const values: Value[] = [
  {
    id: '1',
    title: 'Integrity',
    description: 'Commitment to honesty and transparency in all interactions with our customers, suppliers, and community.',
    icon: <Award className="h-8 w-8 text-primary" />,
  },
  {
    id: '2',
    title: 'Customer Focus',
    description: "Prioritizing the needs and satisfaction of our customers, ensuring they receive personalized service and solutions.",
    icon: <Heart className="h-8 w-8 text-primary" />,
  },
  {
    id: '3',
    title: 'Innovation',
    description: "Encouraging creativity and new ideas to improve products and services for Botswana's agricultural community.",
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
  },
  {
    id: '4',
    title: 'Quality',
    description: "Striving for excellence in all products and services offered, maintaining the highest standards for our customers.",
    icon: <CheckCheck className="h-8 w-8 text-primary" />,
  },
  {
    id: '5',
    title: 'Teamwork',
    description: 'Collaborating effectively within our teams to achieve common goals and deliver exceptional service.',
    icon: <Users className="h-8 w-8 text-primary" />,
  },
  {
    id: '6',
    title: 'Sustainability',
    description: 'Commitment to environmentally friendly practices and social responsibility in everything we do.',
    icon: <Leaf className="h-8 w-8 text-primary" />,
  },
  {
    id: '7',
    title: 'Respect',
    description: 'Valuing diversity and treating all stakeholders with dignity in our daily operations.',
    icon: <UserRound className="h-8 w-8 text-primary" />,
  },
  {
    id: '8',
    title: 'Continuous Improvement',
    description: 'Always seeking ways to enhance our processes and outcomes for better service delivery.',
    icon: <ArrowUpCircle className="h-8 w-8 text-primary" />,
  },
];

const ValuesSection = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our <span className="text-primary">Values</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            These core principles guide everything we do at Ruolame and shape our commitment to Botswana{"'"}s agricultural community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <Card key={value.id} className="transition-all duration-300 hover:shadow-lg border-t-4 border-t-primary">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">{value.icon}</div>
                <h3 className="font-bold text-xl mb-3 text-center">{value.title}</h3>
                <p className="text-gray-600 text-center">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
