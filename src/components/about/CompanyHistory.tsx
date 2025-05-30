
import { Card, CardContent } from '@/components/ui/card';

const CompanyHistory = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-6">Who <span className="text-primary">We Are</span></h2>

            <p className="text-gray-700 mb-4">
              At Ruolame, we are bringing fresh approaches to help our customers use resources in better and more efficient ways by providing practical solutions that drive efficiencies across key dimensions of the production cycle along the entire agriculture value chain.
            </p>

            <p className="text-gray-700 mb-4">
              We live in exciting times for agriculture in Botswana, that's why we're passionate about sustainable farming and put innovation at the forefront of everything we do. We are a 100% citizen owned company, this means our solutions are tailored to specific local conditions to help Batswana make informed decisions on the products and services that improve productivity, sustainability, and efficiency.
            </p>

            <p className="text-gray-700">
              Operating in Bokaa, a village in Kgatleng District with a population of approximately 12,000 people with majority of the community practicing arable and livestock farming.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-4">
                  <div className="text-xl font-bold text-primary mb-2">Our Mission</div>
                  <div className="text-gray-600">To support local agriculture by providing quality supplies and fostering sustainable farming practices that make agriculture more sustainable in Botswana.</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="text-xl font-bold text-primary mb-2">Our Vision</div>
                  <div className="text-gray-600">To continuously improve on our skills and expertise to become the leading supplier of agricultural products and services that our clients need and use.</div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="order-1 md:order-2 relative">
            <div className="relative z-10">
              <img
                src="
                https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Ruolame store"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div
              className="absolute -bottom-4 -right-4 w-40 h-40 bg-primary rounded-full opacity-20 z-0"
              style={{
                filter: 'blur(40px)',
              }}
            ></div>
            <div
              className="absolute -top-4 -left-4 w-32 h-32 bg-yellow-400 rounded-full opacity-20 z-0"
              style={{
                filter: 'blur(30px)',
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyHistory;
