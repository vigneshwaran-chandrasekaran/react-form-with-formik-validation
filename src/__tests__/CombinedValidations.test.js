import faker from 'faker';
import puppeteer from 'puppeteer';

const person = {
	name: faker.name.firstName() + ' ' + faker.name.lastName(),
	email: faker.internet.email(),
	zipcode: faker.address.zipCode(),
};

describe('h3 Text', () => {
	test('h3 loads correctly', async () => {
		let browser = await puppeteer.launch({
			headless: false,
			// devtools: true,
			// slowMo: 250,
		});
		let page = await browser.newPage();

		page.emulate({
			viewport: {
				width: 500,
				height: 2400,
			},
			userAgent: '',
		});

		/**
		 * we can use data-testid for element selection
		 * [data-testid="CombinedValidationsBtn"]
		 * or we can use input slection class selection or id selection
		 */

		await page.goto('http://localhost:3000/');
		await page.waitForSelector('.CombinedValidations');

		const html = await page.$eval('.CombinedValidations', e => e.innerHTML);
		expect(html).toBe('CombinedValidations Pick a username2');

		await page.focus('input[name=username2]');

		await page.click('[data-testid="CombinedValidationsBtn"]');

		const username2Error = await page.$eval(
			'[data-testid="username2Error"]',
			e => e.innerHTML
		);
		expect(username2Error).toBe('username2 is required');

		const email2Error = await page.$eval(
			'[data-testid="email2Error"]',
			e => e.innerHTML
		);
		expect(email2Error).toBe('email2 is required');

		const zip2Error = await page.$eval(
			'[data-testid="zip2Error"]',
			e => e.innerHTML
		);
		expect(zip2Error).toBe('zip2 is required');

		await page.click('input[name=username2]');
		await page.type('input[name=username2]', person.name);
		await page.click('input[name=email2]');
		await page.type('input[name=email2]', person.email);

		await page.click('input[name=zip2]');
		await page.type('input[name=zip2]', person.zipcode);

		await page.click('[data-testid="CombinedValidationsBtn"]');

		browser.close();
	}, 9000000);
});
