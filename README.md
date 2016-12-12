# City Hyke

## GA MEN Stack Project

### Synopsis

City Hyke allows users to create walking tours and share them with others! Ever found yourself in a new city and not know where to go? Look on City Hyke for suggestions!

### Deployment

See this project live: [https://city-hyke.herokuapp.com/](https://city-hyke.herokuapp.com/)

### Technologies

- jQuery
- Javascript
- HTML
- EJS
- CSS
- Bootstrap
- Handlebars
- Google Maps API
- Google Places API
- Google Directions API

### Installation

1 - Fork and clone this repository.

2 - CD into the project directory: ```> cd walkingtours```

3 - NPM Install: ```> npm install```

4 - Start your Mongo DB server: ```mongod```

5 - Start Node: ```nodemon```

6 - Visit: http://localhost:3000/ to see your app live.

7 - Click on 'CREATE NEW TOUR' to start populating your site.

### Screenshots

Tour Page:

<img src='http://i.imgur.com/HpCR8g6.jpg' height=700px width=600px>

Adding a New Stop:

<img src='http://i.imgur.com/UzzUGyd.png' height=300px width=500px>

### Challenges

1) Transitioning from the idea of a single page app to multi-page, we decided we wanted to use routing and EJS templating. 

Here's a very simple example:

In tour.ejs/index.ejs

```<% include ../partials/footer %>```

In footer.ejs

```
<footer>
    <div class="row">
        <div class="col-md-12">
            <h6> Cole & Coleman Industries LLC &copy 2016</h6>
        </div>
    </div>
</footer>
``` 

### Future Features
- User Accounts/Login
- Filtering by City

### Process

User Stories on: [Trello](https://trello.com/b/kpsFfPJ1/walking-tours-project)
