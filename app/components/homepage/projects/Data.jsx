import Card from "./project-card";

export default function Home() {
  return (
    <div className="p-4 flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <Card
          imgSrc="/img/1.png"
          title="Left Over Food Recommedation"
          description="Tech : React.js | Node.js | Express.js | MongoDb | Python "
          live="https://left-over-food-recommendation.vercel.app/"
          livetext=" Deploy "
          git="https://github.com/OnShubham/LEFT_OVER_FOOD_RECOMMENDATION"
          gittext="GitHub"
        />
        <Card
          imgSrc="/img/2.png"
          title="ConnectTech"
          description="Tech : React.js | Node.js | Express.js | MongoDb | REST API"
          live="https://connect-tech-umber.vercel.app/"
          livetext=" Deploy "
          git="https://github.com/OnShubham/ConnectTech"
          gittext="GitHub"
        />
        <Card
          imgSrc="/img/3.png"
          title="Tech-Tide"
          description="Tech : React.js | Node.js | Express.js | MongoDb | REST API"
          live="https://mern-livid-phi.vercel.app/"
          livetext=" Deploy "
          git="https://github.com/OnShubham/MERN"
          gittext="GitHub"
        />
        <Card
          imgSrc="/img/4.png"
          title="Prompt Helper With Directual"
          description="Tech : React.js | Directual | Tailwind CSS | REST API"
          live="https://prompthelp-directual.vercel.app/"
          livetext=" Deploy "
          git="https://github.com/ShahzaibKhalidx/prompthelp-directual"
          gittext="GitHub"
        />

        {/* Don't Remove  */}

        {/* <Card
          imgSrc="/img/"
          title="Title"
          description="Description"
          live="https://example.com"
          livetext=" Deploy "
          git="https://github.com"
          gittext="GitHub"
        /> */}
      </div>
    </div>
  );
}
