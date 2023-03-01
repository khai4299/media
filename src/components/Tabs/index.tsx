"use client";
import { FC, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface TabItem {
	key: string | number;
	label: string;
	href: string;
}
interface TabsProps extends HTMLDivElement {
	items: TabItem[];
}

const Tabs: FC<TabsProps> = ({ items, ...props }) => {
	const pathname = usePathname();
	return (
		<div {...props}>
			<div className="flex w-full justify-center items-center bg-slate-300 rounded-2xl">
				{items.map((item, i) => (
					<Link
						href={item.href}
						className={`${
							pathname === item.href
								? "bg-white font-bold text-black"
								: "bg-transparent font-normal text-slate-600"
						} rounded-2xl text-sm flex-1 text-center first:ml-0.5 last:mr-0.5 my-0.5 p-1`}
						key={item.key}
					>
						{item.label}
					</Link>
				))}
			</div>
		</div>
	);
};

export default Tabs;
