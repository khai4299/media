import Image from "next/image";
import { format } from "date-fns";
import { TimeLine } from "@/types";
import { NextPage } from "next";
interface CommentTimelineProps {
	timeline: TimeLine;
}

const CommentTimeline: NextPage<CommentTimelineProps> = ({ timeline }) => {
	return (
		<div className="mb-2">
			<div className="flex">
				<Image src="/avatar.png" width={50} height={50} alt=""></Image>
				<div className="ml-2">
					<div className="font-bold">梅村 さおり</div>
					<div className="text-slate-500">
						{format(
							new Date(timeline.createdAt),
							"MM/dd/yyyy HH:mm"
						)}
					</div>
				</div>
			</div>
			<p>{timeline.comment}</p>
		</div>
	);
};

export default CommentTimeline;
