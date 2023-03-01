import Image from "next/image";
import { TimeLine } from "@/types";
import CommentTimeline from "@/components/CommentTimeline";

const TimeLine = async () => {
	const res = await fetch(
		"https://63ff26f0370fe830d9dfb5bb.mockapi.io/api/rating",
		{ next: { revalidate: 10 } }
	);

	const data: TimeLine[] = await res.json();
	return (
		<div className="m-4">
			{data.map(item => (
				<CommentTimeline key={item.id} timeline={item} />
			))}
		</div>
	);
};

export default TimeLine;
