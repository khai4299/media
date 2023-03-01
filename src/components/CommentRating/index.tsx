import { Rating } from "@/types";
import { FC } from "react";
import Star from "../Star";
import { format } from "date-fns";
interface CommentRatingProps {
	rating: Rating;
}

const CommentRating: FC<CommentRatingProps> = ({ rating }) => {
	return (
		<div className="mb-2">
			<div className="flex justify-between items-center">
				<div className="flex gap-2 items-center">
					<div className="font-bold">{rating.name}</div>
					<Star numberStar={4} />
				</div>

				<div className="text-slate-500">
					{format(new Date(rating.createdAt), "MM/dd/yyyy")}
				</div>
			</div>
			<p>{rating.comment}</p>
		</div>
	);
};

export default CommentRating;
