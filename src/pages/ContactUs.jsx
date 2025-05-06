import BlogCard from '../components/BlogCard';
import FQA from '../components/FQA';
import Hero from '../components/Hero';
import Information from '../components/Information';
import User from '../components/User';

function ContactUs() {
  return (
    <div>
      <Hero title1="contact us" showButton={false} />
      <User />
      <Information />
      <FQA />
      <BlogCard showExtra={true} />
    </div>
  );
}

export default ContactUs;
