# finAdvisor

_finAdvisor_ is a Single Page Application (SPA) that let users add, delete , update and create transactions and help them track their expenses. This is a mvp version created within a very short time and requires future improvement.

frontend: https://github.com/muazzamnashat/finAdvisor-frontend \
backend: https://github.com/muazzamnashat/finAdvisor-backend \

## Technologies used

- React
- Redux
- Material UI
- Rails
- JWT Web Token
- Recharts library

## Features

- Secure user authentication with JWT web token.
- CRUD functionality \* Users can CREATE, READ, UPDATE or DELETE data that belongs to them only
- Uses Redux thunk middleware to handle asynchronous web requests.
- Utilizes react-router to implement proper RESTful routing.
- UI design with Material-UI.

## Future improvements

- AI chat boot to help decide on financial steps
- More charts to better visualize transactions and spending
- Add Goal and Bill section

## Installation & Setup

- Go to https://github.com/muazzamnashat/finAdvisor-frontend to clone the frontend
- Go to https://github.com/muazzamnashat/finAdvisor-backend to clone the backend

- Clone the repository onto your computer. To clone :
- Click on the green "Code" button and select "HTTPS"
- Copy the link
- Open your terminal and type pwd to see you current location (The folder you are in). If this is the right folder (this is where you want to clone the repo) or you can change directory.
- Now, on the terminal type 'git clone' then paste the link.
- Navigate to the the backend folder
- Run `bundle install` to load the Ruby gems and dependencies.
- Run `rails db:create` , `rails db:migrate` and `rails db:seed`to load the the database.
- Run `rails s` to run the server.
- Navigate to the frontend repo and run `npm install` and `npm start` to run the app.

## Contribution

Please feel free to contribute to the project, and if any bug is found, please contact me at *muazzamhc.nashat@gmail.com*.

## License

Copyright 2020 Muazzam Nashat

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
