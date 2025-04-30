import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="flex gap-x-4 p-4">
      <div>
        <Button>Button</Button>
      </div>
      <div>
        <Input placeholder="Inputbox" />
      </div>
      <div className="w-[300px]">
        <Progress value={50} />
      </div>
      <div>
        <Textarea placeholder="Textarea" />
      </div>
    </div>
  );
}
