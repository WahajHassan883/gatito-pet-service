import BlogCard from '../features/blog/BlogCard';
import FQA from '../components/FQA';
import Hero from '../components/Hero';
import Information from '../components/Information';
import User from '../components/User';

function ContactUs() {
  // const {
  //   isLoading,
  //   data: contactus,
  //   error,
  // } = useQuery({
  //   queryFn: ['contact'],
  //   queryKey: getContactus,
  // });

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
