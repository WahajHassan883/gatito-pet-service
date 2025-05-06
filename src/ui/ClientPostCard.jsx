import StarRating from '../components/StarRating';

function ClientPostCard({ clientName, clientTitle, description, imageSrc }) {
  return (
    <div className="w-full rounded-xl bg-white shadow-lg transition duration-300 hover:shadow-xl">
      <div className="p-6">
        <div className="mb-4 flex items-center gap-4">
          <img
            src={imageSrc}
            alt="Client"
            className="h-14 w-14 rounded-full object-cover"
          />
          <div>
            <h3 className="text-lg font-bold text-[#27221F]">{clientName}</h3>
            <p className="text-sm text-[#27221F]">{clientTitle}</p>
          </div>
        </div>
        <StarRating
          maxRating={5}
          messages={['Terrible', 'Bad', 'Okay', 'Good', 'Excellent']}
        />
        <p className="mt-4 text-base leading-relaxed text-[#27221F]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default ClientPostCard;
