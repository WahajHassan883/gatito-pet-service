import Hero from '../components/Hero';
import BlogCard from '../features/blog/BlogCard';
import CTA from '../components/CTA';

function Blog() {
  return (
    <div>
      <Hero title1="Articles & news" showImages={false} />
      <BlogCard showExtra={false} />
      <BlogCard showHeading={false} showExtra={false} />
      <BlogCard showHeading={false} showExtra={false} />
      <CTA />
    </div>
  );
}

export default Blog;
