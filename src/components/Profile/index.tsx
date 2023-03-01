import { UserInfo } from "@/types";
import { NextPage } from "next";

const user: UserInfo = {
	bgUrl: "/background.png",
	avatarUrl: "/avatar.png",
	name: "梅村 さおり",
	description: "最終ログイン：55分前",
};
const Profile: NextPage = ({ ...props }): JSX.Element => {
	return (
		<div {...props}>
			<div
				className={`bg-[url(/background.png)] h-32 bg-no-repeat bg-cover`}
			></div>
			<div className="ml-4 -mt-8">
				<img src={user.avatarUrl} className="object-cover" alt="" />
				<p className="font-bold">{user.name}</p>
				<p className="text-xs text-slate-500">{user.description}</p>
			</div>
		</div>
	);
};

export default Profile;
