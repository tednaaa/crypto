import { defineConfig } from "vitepress";

export default defineConfig({
	rewrites: {
		"ru/:rest*": ":rest*",
	},

	title: "Crypto",

	themeConfig: {
		sidebar: [
			{
				text: "База",
				link: "/base",
				items: [
					{ text: "Где торговать?", link: "/base/exchanges" },
					{ text: "Личные заметки", link: "/base/notes" },
				],
			},
			{
				text: "Инструменты",
				items: [
					{ text: "TradingView", link: "/tools/tradingview" },
					{ text: "CoinMarketCap", link: "/tools/coinmarketcap" },
					{ text: "Coinglass", link: "/tools/coinglass" },
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
			{ text: "Фьючерсы", link: "/futures" },
		],

		socialLinks: [
			{ icon: "github", link: "https://github.com/tednaaa/crypto" },
		],

		footer: {
			message: "Инвестируйте только те деньги которые готовы потерять",
		},
	},
});
