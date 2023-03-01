import { FC } from "react";
import { AiFillStar } from "react-icons/ai";
interface StarProps {
	numberStar: 1 | 2 | 3 | 4 | 5;
}

const Star: FC<StarProps> = ({ numberStar }) => {
	return (
		<div className="flex">
			{Array(numberStar)
				.fill(1)
				.map((_, index) => (
					<AiFillStar key={index} className="fill-yellow-400" />
				))}
			{Array(5 - numberStar)
				.fill(1)
				.map((_, index) => (
					<AiFillStar key={index} />
				))}
		</div>
	);
};

export default Star;
