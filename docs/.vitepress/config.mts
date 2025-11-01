import { defineConfig } from "vitepress";

export default defineConfig({
	srcDir: "src",

	title: "Crypto Trading Guide",
	description:
		"Comprehensive guide to cryptocurrency trading with 15+ years of market experience",

	themeConfig: {
		sidebar: [
			{
				text: "Quick Start",
				items: [{ text: "Quick Start Guide", link: "/guide/00-quick-start" }],
			},
			{
				text: "Part 1: Fundamentals",
				items: [
					{ text: "Getting Started", link: "/guide/01-getting-started" },
					{ text: "Risk Management", link: "/guide/03-risk-management" },
					{ text: "Trading Psychology", link: "/guide/04-trading-psychology" },
				],
			},
			{
				text: "Part 2: Technical Analysis",
				items: [
					{ text: "Technical Analysis", link: "/guide/05-technical-analysis" },
				],
			},
			{
				text: "Part 3: Advanced Strategies",
				items: [
					{ text: "Trading Strategies", link: "/guide/09-trading-strategies" },
				],
			},
			{
				text: "Part 4: Tools & Resources",
				items: [{ text: "Trading Tools", link: "/guide/13-trading-tools" }],
			},
			{
				text: "Part 5: Market Intelligence",
				items: [
					{
						text: "Fundamental Analysis",
						link: "/guide/17-fundamental-analysis",
					},
				],
			},
		],

		nav: [
			{ text: "Home", link: "/" },
			{ text: "Guide", link: "/guide/" },
		],

		socialLinks: [
			{ icon: "github", link: "https://github.com/tednaaa/crypto" },
		],

		footer: {
			message: "Educational purposes only. Trading carries substantial risk.",
			copyright:
				"Always do your own research and never invest more than you can afford to lose.",
		},
	},
});
