"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const menu = [
	{ label: "Profile", href: "/account" },
	{ label: "Enrolled Courses", href: "/account/enrolled-courses" },
];

function Menu() {
	const pathname = usePathname();
	return (
		<ul className="mt-3 mb-0 list-none sidebar-nav" id="navmenu-nav">
			{menu.map((item, i) => (
				<li className="navbar-item account-menu" key={i}>
					<Link
						href={item.href}
						className={`navbar-link flex items-center py-2 rounded ${
							pathname === item.href ? "text-primary" : "text-slate-400"
						}`}>
						<h6 className="mb-0 font-semibold">{item?.label}</h6>
					</Link>
				</li>
			))}
		</ul>
	);
}

export default Menu;
