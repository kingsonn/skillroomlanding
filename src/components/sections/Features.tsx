import { FC } from 'react';

const Features = () => {
  const features = [
    {
      icon: '📚',
      title: '100+ Expert Courses',
      description: 'From coding to design, learn from industry professionals'
    },
    {
      icon: '🏆',
      title: 'Earn Certificates',
      description: 'Get recognized for your achievements'
    },
    {
      icon: '🔄',
      title: 'Interactive Learning',
      description: 'Hands-on projects and real-world scenarios'
    },
    {
      icon: '👥',
      title: 'Community Support',
      description: 'Learn with peers in dedicated groups'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose SkillRoom</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the perfect blend of education and engagement
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-8 bg-gray-50 rounded-xl hover:bg-white transition-colors">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
