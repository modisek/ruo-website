
import PageHeader from '@/components/layout/PageHeader';
import CompanyHistory from '@/components/about/CompanyHistory';
import ValuesSection from '@/components/about/ValuesSection';
import BusinessObjectives from '@/components/about/BusinessObjectives';

const About = () => {
  return (
    <div className="min-h-screen">
      <PageHeader 
        title="About Us" 
        subtitle="Learn about our mission, vision, and the people who make Ruolame your trusted agricultural partner."
        noBackground
      />
      
      {/* Company History Section */}
      <CompanyHistory />
      
      {/* Our Values Section */}
      <ValuesSection />
      
      {/* Business Objectives Section */}
      <BusinessObjectives />
    </div>
  );
};

export default About;
