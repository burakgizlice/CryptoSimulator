import mockCoinData from "./mockCoinData";

export default [
	{
		amount: 1.5,
		coin: mockCoinData[10],
		wAverage: mockCoinData[10].current_price - 100,
	},
	{
		amount: 14.6,
		coin: mockCoinData[11],
		wAverage: mockCoinData[11].current_price + 50,
	},
	{
		amount: 24.67,
		coin: mockCoinData[13],
		wAverage: mockCoinData[13].current_price - 1,
	},
	{
		amount: 100.43,
		coin: mockCoinData[14],
		wAverage: mockCoinData[14].current_price - 0.05,
	},
	{
		amount: 1.5,
		coin: mockCoinData[15],
		wAverage: mockCoinData[15].current_price - 1,
	},
	{
		amount: 14.6,
		coin: mockCoinData[16],
		wAverage: mockCoinData[16].current_price - 1,
	},
	{
		amount: 24.67,
		coin: mockCoinData[17],
		wAverage: mockCoinData[17].current_price - 0.05,
	},
	{
		amount: 100.43,
		coin: mockCoinData[18],
		wAverage: mockCoinData[18].current_price - 100,
	},
];
