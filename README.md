# technical-interview

This is the code you will need for the technical part of BYP's engineering recruitment process.

Below are the instructions for setting up your environment and the starting point for the coding exercise.

## Set up

You will need the following installed on your machine:

- NodeJs and npm ([Instructions](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm))
- Mocha ([More information](https://mochajs.org/))

Clone this repository on to your local machine and run `npm i` to install mocha.

Run `npm test` to run the tests. Two tests should pass:

```
  checkout
    ✔ This test will pass
    ✔ I can scan an item without an error being thrown


  2 passing (4ms)
```

If the tests pass, everything is working.

## Sharing a session on VSCode

[VSCode](https://code.visualstudio.com/) has a feature called "Live Share" which allows you to share your workspace. If you can, please set this up [using these instructions](https://docs.microsoft.com/en-us/visualstudio/liveshare/quickstart/share).

If you do not or can not use VSCode, we will use a video call to share/present your screen instead.

# Checkout Specification

A client has asked us to build a checkout for them for their new coffee shop. The system will need to scan items with a function called `scan`, and return the current total price with a function called `getTotalPrice`.

**The client already has customers in the shop, but no working till.**

The following items can be scanned (the String is passed to the `scan` function):

- Apple (£1.00)
- Banana (£1.20)
- Flat White (£3.50)
- Americano (£2.00)

There is a special offer on Bananas: they are 3 for 2.

There is a special offer on Americanos: they are 4 for £6.50.

Pricing and special offers change frequently.
