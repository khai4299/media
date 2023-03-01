import CommentRating from "../../components/CommentRating";
import { Rating } from "../../types";

const Page = async () => {
	const res = await fetch(
		"https://63ff26f0370fe830d9dfb5bb.mockapi.io/api/rating",
		{ next: { revalidate: 10 } }
	);

	const data: Rating[] = await res.json();

	return (
		<div className="m-4">
			{data.map(item => (
				<CommentRating key={item.id} rating={item} />
			))}
		</div>
	);
};

export default Page;
