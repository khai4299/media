import { FC } from "react";
import Block from "../Block";
import { Block as BlockType } from "@/types";

interface AudioBlockProps {
	title: string;
}
const VideoBlock = ({ title }: AudioBlockProps) => {
	const data: BlockType[] = [
		{
			id: "1",
			title: "As It Was (Official Video)",
			description: "Harry Styles",
			image: "",
		},
	];
	return (
		<>
			<div className="text-lg font-bold mb-2">{title}</div>
			{data.map(item => (
				<Block
					className="mb-2"
					key={item.id}
					block={item}
					type="video"
				/>
			))}
		</>
	);
};

export default VideoBlock;
