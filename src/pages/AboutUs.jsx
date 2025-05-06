import BlogCard from '../components/BlogCard';
import Gallery from '../components/Galery';
import Hero from '../components/Hero';
import Herotwo from '../components/Herotwo';
import TeamCard from '../components/TeamCard';
import Values from '../components/Values';

function AboutUs() {
  return (
    <div>
      <Hero title1="Our Story" />
      <Herotwo />
      <Values />
      <TeamCard />
      <BlogCard showExtra={true} />
      <Gallery />
    </div>
  );
}

export default AboutUs;
