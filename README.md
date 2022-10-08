# AM Coding Challenge - Frontend (React)

## The case study: Product Order Dashboard

![AM Order Dashboard Challenge](https://github.com/AM-code-treasure/coding-challenge-frontend/blob/react/Order-Dashboard-v2.png)

Monitoring their order target vs. actual orders is a typical problem for growing product businesses.
To tackle that challenge, BLACK PRODUCTS Inc. wants to build an "order dashboard" - the software you will develop!

The orders are stored in a Google sheet and need to be displayed using the [Google-Sheet API](https://developers.google.com/sheets/api)

## Product Requirements

As an employee at BLACK PRODUCTS Inc.,

- [ ] I want to see the sum of all orders for a given month
- [ ] I want to be able to filter by month
- [ ] I want to see a progress bar, that shows the total order volume of the selected month (X%) vs. the order target (100%)
- [ ] I want to see the target value
- [ ] I want to see the 5 most recent orders in the selected month
- [ ] For each order, I want to see
  - [ ] the order number
  - [ ] the order date
  - [ ] the product name
  - [ ] the order volume
- [ ] I want to see the top 5 products for the time period
- [ ] For each top product, I want to see
  - [ ] the name of the product
  - [ ] the sum of all orders of that product 
  - [ ] a progress bar to display the percentage that the product had on the total order volume
- [ ] The dashboard refreshes regularly and displays a counter, when the next refresh will happen


## Your Mission

Create the React application that satisfies all must-have requirements above, plus any nice-to-have requirements you wish to include.

For that, you’ll need to use the [Google-Sheet API](https://developers.google.com/sheets/api) and fetch the data from this publicly-available [Spreadsheet](https://docs.google.com/spreadsheets/d/1La-EJVOrNt3AwWHYvhuCQ5SRtFE9h_kYjgx0dau1HN4/edit?usp=sharing) that contains all the order data.

For the design of the dashboard, please refer to the provided [Figma](https://www.figma.com/file/bJINBUw3xoVfpbQ1BkPzs6/Untitled?node-id=1%3A2)
We expect a pixel-perfect design. If you are not able to implement a particular requirement, please provide a description of what and why you could not implement.

You can use any boilerplate/approach you prefer (nextjs, create react app, ...), but try to keep it simple. We encourage you to use your favorite tools and packages to build a solid React application.

You can assume that you do not have to support legacy browsers. Feel free to use modern features such as **fetch** or **flexbox**.

You don't have to host your service publicly, but feel free to do that.
Please include a description in the README.md how to run the project locally.

## Tech Requirements

- React + Typescript 
- use Redux to store the state 
- Tests: Jest
- Code Linter
- CSSinJS is a plus: styled-components, styled-system, ...

## Instructions

- Fork this repo
- The challenge is on!
- Build a performant, clean and well-structured solution
- Commit early and often. We want to be able to check your progress
- Please complete your working solution within 2 days of receiving this challenge, and be sure to notify us with a link to your repo, when it is ready for review.

## License

We have licensed this project under the MIT license so that you may use this for a portfolio piece (or anything else!).
