import type { HeadingLevels } from "../../types";

export interface AccordionItem {
	id: number | string;
	description: string;
	title: string;
}

export interface Props {
	className?: string;
	defaultValue: string;
	headingLevel: HeadingLevels;
	items: AccordionItem[];
}
