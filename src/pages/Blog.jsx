import Hero from '../components/Hero';
import BlogCard from '../components/BlogCard';
import CTA from '../components/CTA';

function Blog() {
  return (
    <div>
      <Hero title1="Articles & news" showImages={false} />
      <BlogCard />
      <BlogCard showHeading={false} />
      <BlogCard showHeading={false} />
      <CTA />
    </div>
  );
}

export default Blog;
