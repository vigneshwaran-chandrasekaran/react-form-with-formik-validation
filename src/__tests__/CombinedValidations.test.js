import faker from 'faker';
import puppeteer from 'puppeteer';

const person = {
	name: faker.name.firstName() + ' ' + faker.name.lastName(),
	email: faker.internet.email(),
	zipcode: faker.address.zipCode(),
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
	test('h3 loads correctly', async () => {
		/**
		 * we can use data-testid for element selection
		 * [data-testid="CombinedValidationsBtn"]
		 * or we can use input slection class selection or id selection
		 */

		await page.goto('http://localhost:3000/');
		await page.waitForSelector('.CombinedValidations');
		const html = await page.$eval('.CombinedValidations', e => e.innerHTML);
		expect(html).toBe('CombinedValidations Pick a username2');
	}, 9000000);
});

describe('Check empty fileds check', () => {
	test('Click submit button click', async () => {
		await page.focus('input[name=username2]');
		await page.click('[data-testid="CombinedValidationsBtn"]');
	}, 9000000);

	test('Check empty username2 fileds check', async () => {
		const username2Error = await page.$eval(
			'[data-testid="username2Error"]',
			e => e.innerHTML
		);
		expect(username2Error).toBe('username2 is required');
	}, 9000000);

	test('Check empty email2Error fileds check', async () => {
		const email2Error = await page.$eval(
			'[data-testid="email2Error"]',
			e => e.innerHTML
		);
		expect(email2Error).toBe('email2 is required');
	}, 9000000);

	test('Check empty zip2 fileds check', async () => {
		const zip2Error = await page.$eval(
			'[data-testid="zip2Error"]',
			e => e.innerHTML
		);
		expect(zip2Error).toBe('zip2 is required');
	}, 9000000);
});

describe('Check fiels with value', () => {
	test('Click submit button with values', async () => {
		await page.click('input[name=username2]');
		await page.type('input[name=username2]', person.name);
		await page.click('input[name=email2]');
		await page.type('input[name=email2]', person.email);
		await page.click('input[name=zip2]');
		await page.type('input[name=zip2]', person.zipcode);
		await page.click('[data-testid="CombinedValidationsBtn"]');
	}, 9000000);
});
afterAll(() => {
	browser.close();
});
