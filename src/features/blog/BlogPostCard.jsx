import { NavLink } from 'react-router-dom';

function BlogPostCard({ imageSrc, altText, title, link, tag, date }) {
  return (
    <div className="bg-white shadow-md">
      <img src={imageSrc} alt={altText} className="h-48 w-full object-cover" />
      <div className="p-4">
        <h2 className="mb-3 text-lg font-bold uppercase text-[#27221F]">
          {title}
        </h2>
        <div className="flex items-center justify-between">
          <NavLink to={link}>
            <button className="rounded-full border border-[#FB7E46] px-3 py-1 text-xs transition-all duration-300 hover:bg-[#FB7E46] hover:text-white">
              {tag}
            </button>
          </NavLink>
          <span className="text-xs text-[#27221F]">{date}</span>
        </div>
      </div>
    </div>
  );
}

export default BlogPostCard;
