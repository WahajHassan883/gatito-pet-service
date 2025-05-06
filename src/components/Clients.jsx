import ClientPostCard from '../ui/ClientPostCard';

function Clients() {
  const clientsPost = [
    {
      clientName: 'Michael Johnson',
      clientTitle: 'Pet Owner, Happy Paws',
      description:
        "Gatito's pet care services have been a game-changer for me and my furry friend. Their team is reliable, compassionate, and truly understands the unique needs of pets.",
      imageSrc: './client.png',
    },
    {
      clientName: 'Michael Johnson',
      clientTitle: 'Pet Owner, Happy Paws',
      description:
        "Gatito's pet care services have been a game-changer for me and my furry friend. Their team is reliable, compassionate, and truly understands the unique needs of pets.",
      imageSrc: './client.png',
    },
    {
      clientName: 'Michael Johnson',
      clientTitle: 'Pet Owner, Happy Paws',
      description:
        "Gatito's pet care services have been a game-changer for me and my furry friend. Their team is reliable, compassionate, and truly understands the unique needs of pets.",
      imageSrc: './client.png',
    },
    {
      clientName: 'Michael Johnson',
      clientTitle: 'Pet Owner, Happy Paws',
      description:
        "Gatito's pet care services have been a game-changer for me and my furry friend. Their team is reliable, compassionate, and truly understands the unique needs of pets.",
      imageSrc: './client.png',
    },
  ];

  return (
    <div className="my-14 px-4 py-12 md:px-16">
      <h1 className="mb-12 text-center text-5xl font-extrabold uppercase tracking-wider text-[#27221F]">
        Our Happy Clients
      </h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {clientsPost.map((post, id) => (
          <ClientPostCard key={id} {...post} />
        ))}
      </div>
    </div>
  );
}

export default Clients;
