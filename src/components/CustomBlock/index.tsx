import { Block as BlockType } from "@/types";
import { sliceIntoChunks } from "@/utils";
import Block from "../Block";
interface CustomBlockProps {
	dataCustom: BlockType[];
}
const CustomBlock = ({ dataCustom }: CustomBlockProps) => {
	const dataChunk = sliceIntoChunks(dataCustom, 2);
	return (
		<>
			{dataCustom.length <= 2
				? dataCustom.map(item => (
						<Block
							key={item.id}
							block={item}
							type="custom"
							className="mb-2"
						/>
				  ))
				: dataChunk.map((arrayChild: BlockType[], index) => (
						<div className="flex gap-2 overflow-auto" key={index}>
							{arrayChild.map(item => (
								<Block
									key={item.id}
									block={item}
									type="custom"
									className="mb-2 w-9/12 flex shrink-0"
								/>
							))}
						</div>
				  ))}
		</>
	);
};

export default CustomBlock;
