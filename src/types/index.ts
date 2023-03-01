export interface Rating {
	createdAt: string;
	name: string;
	avatar: string;
	rating: number;
	comment: string;
	id: string;
}
export interface TimeLine {
	createdAt: string;
	name: string;
	avatar: string;
	comment: string;
	id: string;
}
export interface Block {
	title: string;
	description: string;
	image: string;
	id: string;
}
export interface UserInfo {
	bgUrl: string;
	avatarUrl: string;
	name: string;
	description: string;
}
