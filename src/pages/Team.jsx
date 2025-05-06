import AboutMe from '../components/AboutMe';
import BlogCard from '../components/BlogCard';
import TeamCard from '../components/TeamCard';

function Team() {
  return (
    <div>
      <TeamCard showArrows={false} />
      <AboutMe showHeading={true} />
      <BlogCard showExtra={true} />
    </div>
  );
}

export default Team;
