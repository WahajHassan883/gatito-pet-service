import AboutMe from '../components/AboutMe';
import BlogCard from '../features/blog/BlogCard';
import BlogDetails from '../components/BlogDetails';

function Blog3() {
  return (
    <div>
      <BlogDetails imagesrc="./spaniel.png" />
      <AboutMe />
      <BlogCard />
    </div>
  );
}

export default Blog3;
