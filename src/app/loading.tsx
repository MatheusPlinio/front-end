import { Progress } from "@/components/ui/progress";

export default function Loading() {
    return <div className="">...Loading
        <Progress value={100} />
    </div>
}