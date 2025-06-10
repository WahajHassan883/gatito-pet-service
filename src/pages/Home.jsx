import Hero from '../components/Hero';
import Information from '../components/Information';
import Work from '../components/Work';
import CTA from '../components/CTA';
import TeamCard from '../components/TeamCard';
import Clients from '../components/Clients';
import FQA from '../components/FQA';
import Galery from '../components/Galery';

import ServiceCard from '../components/ServicesCard';
import BlogCard from '../features/blog/BlogCard';

function Home() {
  return (
    <div>
      <Hero title1="Where Every" title2="Pet's Joy Begins!" showImages={true} />
      <Information />
      <ServiceCard showHeading={true} showExtras={true} />
      <Work />
      <CTA />
      <TeamCard />
      <Clients />
      <FQA />
      <CTA />
      <Galery />
      <BlogCard showExtra={true} />
    </div>
  );
}

export default Home;
