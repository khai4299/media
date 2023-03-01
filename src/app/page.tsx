import VideoBlock from "@/components/VideoBlock";
import AudioBlock from "@/components/AudioBlock";
import CustomBlock from "@/components/CustomBlock";
import { Block as BlockType } from "@/types";

export default async function Home() {
	const resAudio = await fetch(
		"https://62bec1a5be8ba3a10d5acef4.mockapi.io/api/audioblock",
		{ next: { revalidate: 10 } }
	);

	const dataAudio: BlockType[] = await resAudio.json();
	const resCustom = await fetch(
		"https://62bec1a5be8ba3a10d5acef4.mockapi.io/api/customblock",
		{ next: { revalidate: 10 } }
	);

	const dataCustom: BlockType[] = await resCustom.json();
	return (
		<div className="m-4">
			<AudioBlock dataAudio={dataAudio || []} title="オーディオ" />
			<VideoBlock title="ビデオ" />
			<CustomBlock dataCustom={dataCustom || []} />
		</div>
	);
}
