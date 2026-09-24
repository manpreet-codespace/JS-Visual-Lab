import TopicHeader from "@/components/common/TopicHeader";
import LabLayout from "@/components/layout/LabLayout";
import { topics } from "@/data/topics";
import { notFound } from "next/navigation";

export default async function TopicPage({params}){

    const {topic}  = await params;

    const currentTopic= topics.find((item)=>item.slug === topic);

    if(!currentTopic)
    {
        notFound();

    }

    console.log("current topic", currentTopic)
    console.log("Component",currentTopic.component);

    const TopicComponent = currentTopic.component;

    return(
        <LabLayout>
            <TopicHeader topic={currentTopic.topic} description={currentTopic.description} difficulty={currentTopic.difficulty}/>
            <TopicComponent topicData = {currentTopic}/>
        </LabLayout>
    )
}