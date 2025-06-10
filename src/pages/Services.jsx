import BlogCard from '../features/blog/BlogCard';
import CTA from '../components/CTA';
import FQA from '../components/FQA';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServicesCard';
import Work from '../components/Work';

function Services() {
  return (
    <div className="bg-pink-50">
      <Hero title1="Our Services" showImages={false} />

      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
      <Work />
      <FQA />
      <CTA />
      <BlogCard showExtra={true} />
    </div>
  );
}

export default Services;
