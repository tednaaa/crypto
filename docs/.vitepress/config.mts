import { defineConfig } from "vitepress";

export default defineConfig({
	rewrites: {
		"ru/:rest*": ":rest*",
	},

	title: "Crypto",

	themeConfig: {
		sidebar: [
			{
				text: "Мой Setup",
				link: "/my_setup",
				items: [
					{ text: "Выбор альтов", link: "/my_setup/select_alts" },
					{ text: "Алгоритм торговли", link: "/my_setup/algorithm" },
				],
			},
			{
				text: "Стратегии",
				items: [
					{ text: "Пробои уровней", link: "/strategies/level_breakouts" },
				],
			},
			{
				text: "Futures",
				link: "/futures",
				items: [
					{ text: "что такое Hedging?", link: "/futures/hedging" },
					{ text: "что такое Funding?", link: "/futures/funding" },
				],
			},
			{
				text: "Инструменты",
				items: [
					{ text: "TradingView", link: "/tools/tradingview" },
					{ text: "Coinglass", link: "/tools/coinglass" },
					{ text: "CoinMarketCap", link: "/tools/coinmarketcap" },
					{ text: "CryptoBubbles", link: "/tools/cryptobubbles" },
				],
			},
			{
				text: "Индикаторы",
				items: [
					{ text: "rsi + macd", link: "/indicators/rsi_macd" },
					{
						text: "bollinger + nadara",
						link: "/indicators/bollinger_nadara",
					},
				],
			},
		],

		socialLinks: [
			{ icon: "github", link: "https://github.com/tednaaa/crypto" },
		],

		footer: {
			message: "Инвестируйте только те деньги которые готовы потерять",
		},
	},
});
