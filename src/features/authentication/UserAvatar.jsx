import { useUser } from './useUser';

function UserAvatar() {
  const { user } = useUser();
  const { fullName, avatar } = user.user_metadata;

  return (
    <div className="flex items-center gap-4 text-[1.4rem] font-medium text-[#27221F]">
      <img
        className="block h-14 w-14 rounded-full object-cover object-center outline outline-2 outline-gray-100"
        src={avatar || '/default-user.jpg'}
        alt={`Avatar of ${fullName}`}
      />
      <div className="flex flex-col">
        <span className="text-[1.2rem] font-medium">{fullName}</span>
        <p className="text-sm">Pet Owner, Happy Paws</p>
      </div>
    </div>
  );
}

export default UserAvatar;
