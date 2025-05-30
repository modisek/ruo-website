
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const objectives = [
  "Establish a profitable Agri shop within the first year of operation.",
  "Build strong relationships with local farmers and suppliers.",
  "Achieve a customer satisfaction rating of 90% or higher.",
  "Increase market share in the Bokaa region by 50% within three years.",
];

const BusinessObjectives = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Business <span className="text-primary">Objectives</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our strategic goals that guide our operations and growth in serving Botswana's agricultural community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {objectives.map((objective, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{objective}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessObjectives;
