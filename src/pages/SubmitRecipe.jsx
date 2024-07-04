import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const SubmitRecipe = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-center">Submit Your Recipe</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Recipe Title</label>
          <Input {...register("title")} placeholder="Recipe Title" />
        </div>
        <div>
          <label className="block text-sm font-medium">Image Upload</label>
          <Input type="file" {...register("image")} />
        </div>
        <div>
          <label className="block text-sm font-medium">Ingredients</label>
          <Textarea {...register("ingredients")} placeholder="List of ingredients" />
        </div>
        <div>
          <label className="block text-sm font-medium">Instructions</label>
          <Textarea {...register("instructions")} placeholder="Step-by-step instructions" />
        </div>
        <div>
          <label className="block text-sm font-medium">Additional Notes</label>
          <Textarea {...register("notes")} placeholder="Any additional notes" />
        </div>
        <Button type="submit">Submit Recipe</Button>
      </form>
    </div>
  );
};

export default SubmitRecipe;