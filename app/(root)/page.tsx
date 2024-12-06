import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";

type HomePageProps = {
  searchParams: Promise<{ query?: string }>;
};

const Home = async ({ searchParams }: HomePageProps) => {
  const query = (await searchParams).query;
  // todo - later this will come from sanity
  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: {
        _id: 1,
        name: 'Quentin Couvelaire'
      },
      _id: 1,
      description: "This is a description.",
      image:
        "https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=27a346c2362207494baa7b76f5d606e5",
      category: "Robots",
      title: "We robots",
    },
  ];
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch your startup, <br /> Connect with entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit ideas, vote on pitches, and get noticed in virtual
          competitions.
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length ? (
            posts.map((post: StartupCardType, index: number) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
};

export default Home;
