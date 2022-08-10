# Decathlon IT Academy Challenge

[Back-End Repo](https://github.com/fbages/hackatonDecathlonBackendTeam1)

[Data Science Repo](https://github.com/hinojosaad/decathlon-it-academy-data-science)


The  Decathlon IT Academy Challenge is an Angular application of a product recommendation platform for Decathlon. The platform allows sports users to classify themselves as Sports experts or habitual users. The aim of the platform is to encourage users to submit product reviews that encourages main platform users to buy Decathlon products.

Our submission was chosen as the winner of the Hackathon Challenge!

## **Preview**

## ![tree diagram](src/assets/preview.gif)

---

## :wrench: **Tech used in this project**

In this project we used Angular and Boostrap5 to develop a web app that loads recommended products based on your user profile and data science algorith of products that you would be most interested in purchasing next. Below the recommended products are recommended photos that are associated with reviews, and provide inspiration to help you write your next review. Below that are new products that are retrieved from the backend server. All reviews are retrieved through an API by utilizing the Angular´s HTTPclient. The sidebar demonstrates the ranking based on how many points a user has achieved relative to other expert users. There is a dashboard that demonstrates your monthly Review upload stats.

A user can access his/her Reviews where he is offered a simple card layout of the main hero picture associated with the review with the number of likes, comments, and points recieved for that review. 

Upon clicking the Review, the user can access the main review page, where he/she can see which products are attached to that review, and then this is cross-referenced with the server data related to that product, and the best rated review for the product.

Lastly, the user login involves a person entering standard data such as email and password, as well as the user´s interest and their expertise.

---


## :memo: **What do we still need to do**

1. Database linking between Users, Products, and Reviews.

2. Dynamic Search by Tag or Sports. 

3. Sidebar Statistics representation in dynamic charts.

4. Design and style the app.


---

## :seedling: **Getting Started with this project**

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Installation

Clone or fork the Repo, and ensure that you have the [Angular CLI](https://github.com/angular/angular-cli) installed.

In the project directory.

```bash
npm install
```

In the project directory.

```bash
ng serve --open or ng s -o
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
