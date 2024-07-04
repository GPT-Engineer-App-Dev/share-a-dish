import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="space-y-8">
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Welcome to Recipe Share</h1>
        <p className="text-lg">Discover and share amazing recipes from around the world.</p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Featured Recipes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
            <CardHeader>
              <CardTitle>Recipe Title</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Short description of the recipe.</p>
              <Button as={Link} to="/recipe/1" variant="link">View Recipe</Button>
            </CardContent>
          </Card>
          {/* Add more cards as needed */}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Browse Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button as={Link} to="/categories/breakfast" variant="outline">Breakfast</Button>
          <Button as={Link} to="/categories/lunch" variant="outline">Lunch</Button>
          <Button as={Link} to="/categories/dinner" variant="outline">Dinner</Button>
          <Button as={Link} to="/categories/desserts" variant="outline">Desserts</Button>
          {/* Add more categories as needed */}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Latest Recipes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
            <CardHeader>
              <CardTitle>Latest Recipe Title</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Short description of the latest recipe.</p>
              <Button as={Link} to="/recipe/2" variant="link">View Recipe</Button>
            </CardContent>
          </Card>
          {/* Add more cards as needed */}
        </div>
      </section>
    </div>
  );
};

export default Index;