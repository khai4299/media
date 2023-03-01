import { Block } from "@/types";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
interface BlockProps extends HTMLDivElement {
	type?: "default" | "video" | "custom";
	block: Block;
}

const Block: FC<BlockProps> = ({ type = "default", block, ...props }) => {
	return (
		<div {...props}>
			<Link className="w-full" href={`/block/${block.id}`}>
				{type === "default" || type === "custom" ? (
					<div className="flex bg-slate-200 w-full rounded">
						<Image src="/audio.png" width={84} height={84} alt="" />
						<div className="ml-4 flex flex-col justify-center">
							<div className="mb-1">
								<div className="font-bold">{block.title}</div>
								<div className="text-xs text-slate-500">
									{block.description}
								</div>
							</div>
							{type === "default" && (
								<button className="w-fit rounded-2xl border-solid border border-black px-2 py">
									Streaming options
								</button>
							)}
						</div>
					</div>
				) : (
					<Image className="!static" alt="" src="/media.png" fill />
				)}
			</Link>
		</div>
	);
};

export default Block;
