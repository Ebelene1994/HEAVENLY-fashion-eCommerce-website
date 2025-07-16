import React from 'react';
import { Award, Users, Globe, Heart } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We curate only the finest luxury pieces from renowned designers worldwide.'
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We provide exceptional service at every step.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Bringing luxury fashion from around the world directly to your doorstep.'
    },
    {
      icon: Heart,
      title: 'Passion for Fashion',
      description: 'Fashion is our passion, and we share that love through every piece we offer.'
    }
  ];

  const team = [
    {
      name: 'Isabella Chen',
      role: 'Founder & Creative Director',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1'
    },
    {
      name: 'Marcus Thompson',
      role: 'Head of Curation',
      image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1'
    },
    {
      name: 'Sofia Rodriguez',
      role: 'Customer Experience Director',
      image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-serif font-bold text-gray-900 mb-6">
              About HEAVENLY
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founded in 2020, HEAVENLY has become a premier destination for luxury fashion enthusiasts 
              seeking timeless elegance and contemporary style. We believe that fashion is more than 
              clothing—it's a form of self-expression and art.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  HEAVENLY was born from a simple belief: everyone deserves access to exceptional fashion. 
                  Our founder, Isabella Chen, started this journey after years in the fashion industry, 
                  recognizing the need for a platform that truly understands and celebrates individual style.
                </p>
                <p>
                  What began as a small boutique has evolved into a global destination for luxury fashion. 
                  We work directly with designers and brands to bring you authentic, high-quality pieces 
                  that reflect the latest trends while honoring timeless craftsmanship.
                </p>
                <p>
                  Today, HEAVENLY serves customers in over 50 countries, but our commitment remains the same: 
                  to provide an exceptional shopping experience and help you discover pieces that make you 
                  feel confident and beautiful.
                </p>
              </div>
            </div>
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1"
                alt="HEAVENLY Story"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do, from the pieces we select to the service we provide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The passionate individuals behind HEAVENLY who work tirelessly to bring you the best in luxury fashion.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-600">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            To democratize luxury fashion by making exceptional pieces accessible to everyone, 
            while maintaining the highest standards of quality, authenticity, and customer service.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div>
              <h3 className="text-2xl font-bold mb-2">50+</h3>
              <p className="text-gray-300">Countries Served</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">100+</h3>
              <p className="text-gray-300">Designer Brands</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">10K+</h3>
              <p className="text-gray-300">Happy Customers</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;