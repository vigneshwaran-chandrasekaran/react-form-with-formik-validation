import faker from 'faker';
import puppeteer from 'puppeteer';

const person = {
	name: faker.name.firstName(),
};

let browser;
let page;

beforeAll(async () => {
	browser = await puppeteer.launch({
		headless: false,
		// devtools: true,
		// slowMo: 80,
	});
	page = await browser.newPage();

	page.emulate({
		viewport: {
			width: 500,
			height: 2400,
		},
		userAgent: '',
	});
});

describe('Check page load', () => {
	test('h3 AsyncValidation loads correctly', async () => {
		/**
		 * we can use data-testid for element selection
		 * [data-testid="CombinedValidationsBtn"]
		 * or we can use input slection class selection or id selection
		 */

		await page.goto('http://localhost:3000/');
		await page.waitForSelector('.AsyncValidation');
		const html = await page.$eval('.AsyncValidation', e => e.innerHTML);
		expect(html).toBe('AsyncValidation Pick a username');
	}, 9000000);
});

afterAll(() => {
	browser.close();
});
