# BettingRisk
A reactjs app to display betting risk based on csv data. 
Tech Challenge For this exercise, please create a simple risk application.  

Data Files and Description: 

“Settled.csv” 
    Customer - a customer identifier 
    Event - event identifier 
    Participant participant identifier
    Stake - dollar amount bet 
    Win - dollar amount won (zero if bet not won) 
    
 “Unsettled.csv” 
    Customer - a customer identifier 
    Event - event identifier 
    Participant - participant identifier 
    Stake - dollar amount bet 
    To Win - dollar amount that will be won if bet is successful 

Tasks 

1. In your “user interface” (the form the interface takes is open to your interpretation), identify settled bet history for a customer that shows they are winning at an unusual rate, where the business rule is: a. A customer wins on more than 60% of their bets (i.e. in the settled bets data, they have a value in the “win” column for more than 60% of their bets)  

2. Identify unsettled bets that exhibit high risk characteristics, where risky bets are defined as: a. All upcoming (i.e. unsettled) bets from customers that win at an unusual rate should be highlighted as risky (it is up to you how this is shown) b. Bets where the stake is more than 10 times higher than that customer’s average bet in their betting history should be highlighted as unusual (again, it is up to you how this is shown) c. Bets where the stake is more than 30 times higher than that customer’s average bet in their betting history should be highlighted as highly unusual d. Bets where the amount to be won is $1000 or more. 

Best parctise had been followed in setting up this front-end app.

Scope of improvements:
More unit test cases can be added.
CSS can be improved a bit more.

## Requirements

For development, you will only need Node.js installed on your environement.
You can use your choice of editor. I prefer to user webstorm and sublimetext

## Technology
 - react, flux, css, html5, webpack, karma, mocha

---

### To run

* You'll need to have [git](https://git-scm.com/) and [node](https://nodejs.org/en/) installed in your system.
* Fork and clone the project:

```
> $ git clone https://github.com/shravanjha/BettingRisk.git
```

Then install the dependencies:

```
> $ npm install
```

You can simply test this app using this command: 

```
> $ npm run test
```

If you want to run with webpack-dev-server simply run this command: 

```
> $ npm run dev
```

Open the web browser to `http://localhost:8080/`

---
## Languages & tools

### HTML 5, CSS3

### JavaScript
- [React](http://facebook.github.io/react) is used for UI.
- [Babel] is used for backward compatability
- [UglifyJs] is used for js minification
- Webpack is used to manage module and dependencies and build
- dsv-loader node packag is used to read csv and convert to json
- Karma, Mocha as a testing framework

### CSS
- bootstrap css is used with some custom css

Please contribute to the project if you think this can be done better in anyway even for this README :)
