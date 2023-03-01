import Block from "../Block";
import { Block as BlockType } from "@/types";
interface AudioBlockProps {
	title: string;
	dataAudio: BlockType[];
}
const AudioBlock = ({ dataAudio, title }: AudioBlockProps) => {
	return (
		<>
			<div className="text-lg font-bold mb-2">{title}</div>
			{dataAudio.map(item => (
				<Block className="mb-2" key={item.id} block={item} />
			))}
		</>
	);
};

export default AudioBlock;
