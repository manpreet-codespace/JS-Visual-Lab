import TopicHeader from "@/components/common/TopicHeader";
import LabLayout from "@/components/layout/LabLayout";
import GenericTopicLayout from "@/components/topics/GenericTopicLayout";
import { topics } from "@/data/topics";
import { notFound } from "next/navigation";

export default async function TopicPage({ params }) {
    const { topic } = await params;
    const currentTopic = topics.find((item) => item.slug === topic);

    if (!currentTopic) {
        notFound();
    }

    const TopicComponent = currentTopic.component || GenericTopicLayout;

    return (
        <LabLayout>
            <TopicHeader
                topic={currentTopic.topic}
                description={currentTopic.description}
                difficulty={currentTopic.difficulty}
            />
            <TopicComponent topicData={currentTopic} />
        </LabLayout>
    );
}