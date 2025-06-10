import AboutMe from '../components/AboutMe';
import BlogCard from '../features/blog/BlogCard';
import BlogDetails from '../components/BlogDetails';

function Blog1() {
  return (
    <div>
      <BlogDetails imagesrc="./cat_dog.png" />
      <AboutMe />
      <BlogCard />
    </div>
  );
}

export default Blog1;
