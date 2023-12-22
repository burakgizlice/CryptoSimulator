import mockCoinData from "./mockCoinData";

export default [
	{
		amount: 1.5,
		coin: mockCoinData[0],
		wAverage: mockCoinData[0].current_price - 100,
	},
	{
		amount: 14.6,
		coin: mockCoinData[1],
		wAverage: mockCoinData[1].current_price + 50,
	},
	{
		amount: 24.67,
		coin: mockCoinData[3],
		wAverage: mockCoinData[3].current_price - 1,
	},
	{
		amount: 100.43,
		coin: mockCoinData[4],
		wAverage: mockCoinData[4].current_price - 0.05,
	},
	{
		amount: 1.5,
		coin: mockCoinData[5],
		wAverage: mockCoinData[5].current_price - 1,
	},
	{
		amount: 14.6,
		coin: mockCoinData[6],
		wAverage: mockCoinData[6].current_price - 1,
	},
	{
		amount: 24.67,
		coin: mockCoinData[7],
		wAverage: mockCoinData[7].current_price - 0.05,
	},
	{
		amount: 100.43,
		coin: mockCoinData[8],
		wAverage: mockCoinData[8].current_price - 100,
	},
];
