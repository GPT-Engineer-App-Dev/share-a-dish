import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Recipe = () => {
  const { id } = useParams();

  return (
    <div className="space-y-8">
      <Card>
        <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[400px]" />
        <CardHeader>
          <CardTitle>Recipe Title {id}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Preparation Time: 30 mins</p>
          <p>Cooking Time: 45 mins</p>
          <p>Servings: 4</p>
          <p>Difficulty: Medium</p>
          <h3 className="text-xl font-semibold mt-4">Ingredients</h3>
          <ul className="list-disc list-inside">
            <li>Ingredient 1</li>
            <li>Ingredient 2</li>
            <li>Ingredient 3</li>
          </ul>
          <h3 className="text-xl font-semibold mt-4">Instructions</h3>
          <ol className="list-decimal list-inside">
            <li>Step 1</li>
            <li>Step 2</li>
            <li>Step 3</li>
          </ol>
        </CardContent>
      </Card>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Comments</h2>
        <div className="space-y-2">
          <div className="border p-4 rounded">
            <p><strong>User 1:</strong> Great recipe!</p>
          </div>
          <div className="border p-4 rounded">
            <p><strong>User 2:</strong> I loved it!</p>
          </div>
          {/* Add more comments as needed */}
        </div>
        <Textarea placeholder="Leave a comment..." />
        <Button>Submit Comment</Button>
      </section>
    </div>
  );
};

export default Recipe;