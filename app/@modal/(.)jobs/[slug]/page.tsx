import { jobs } from "app/jobs/mock";
import Modal from "./modal";

export default function JobModal({
    params: { slug },
}: {
    params: { slug: string };
}) {
    const job = jobs.find((job) => job.slug === slug)
    return <Modal>
        <h1>
            {job?.employer}
        </h1>
    </Modal>

}