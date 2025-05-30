
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  initials: string;
}

const team: TeamMember[] = [
  {
    id: '1',
    name: 'Lorato Moagi',
    role: 'Founder & CEO',
    bio: 'With over 30 years of farming experience, Lorato founded Ruolame to create a sustainable agricultural supply chain in Botswana.',
    image: 'https://randomuser.me/api/portraits/women/54.jpg',
    initials: 'LM',
  },
  {
    id: '2',
    name: 'Thabo Kgosi',
    role: 'Operations Manager',
    bio: 'Thabo ensures that our logistics and supply chain runs smoothly, guaranteeing fresh products delivered on time to all our customers.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    initials: 'TK',
  },
  {
    id: '3',
    name: 'Mpho Dintwe',
    role: 'Agricultural Specialist',
    bio: 'With a degree in Agricultural Sciences, Mpho provides expert guidance to our customers and ensures product quality.',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    initials: 'MD',
  },
  {
    id: '4',
    name: 'Kagiso Motswai',
    role: 'Customer Relations',
    bio: 'Kagiso leads our customer service team, ensuring that every farmer receives personalized attention and solutions.',
    image: 'https://randomuser.me/api/portraits/men/15.jpg',
    initials: 'KM',
  },
];

const TeamSection = () => {
  return (
    <section className="py-16 bg-primary-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our <span className="text-primary">Team</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our team combines decades of agricultural experience with a passion for supporting 
            Botswana's farming community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div key={member.id} className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg">
              <div className="p-6 text-center">
                <Avatar className="h-32 w-32 mx-auto mb-4 border-4 border-primary-light">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback className="text-2xl">{member.initials}</AvatarFallback>
                </Avatar>
                <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
