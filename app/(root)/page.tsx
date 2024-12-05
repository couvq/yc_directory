import SearchForm from "../components/SearchForm";

type HomePageProps = {
  searchParams: Promise<{ query?: string }>;
};

const Home = async ({ searchParams }: HomePageProps) => {
  const query = (await searchParams).query;
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
    </>
  );
};

export default Home;
