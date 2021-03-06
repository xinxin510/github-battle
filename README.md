# Github Battle App
A single-page mobile friendly app built with React using Github API. Wrote config files for Webpack and Babel from scratch, and set up the React app with proper testing and tooling without the use of Create-React-App.

## Technologies used
#### Set-up and Workflow
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)

#### Frontend Development
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

## Description
In this app, you can discover the most popular repos for a variety of languages on GitHub in a fun/gamified experience as well as battle between two Github users to see who has a better profile.
1. Check the top 30 popular repos for different languages, including JavaScript, Ruby, Java, CSS and Python.
![GitHub Battle - Homepage Refresh](https://user-images.githubusercontent.com/84343573/179129549-4e072c9a-b848-4642-bf94-288765dfebc2.gif)
2. Click any GitHub username to visit this user's profile.
3. Choose two GitHub users to battle and see who has the better profile. The score is calculated based on the combination of both the numbers of the profile's followers and stars. The weight of followers vs stars is 3:1.
![GitHub Battle - Game](https://user-images.githubusercontent.com/84343573/179129972-6c4899e7-409a-43ed-9b19-28c7ff0e9e22.gif)
4. Toggle between light and dark theme. 

![GitHub Toggle](https://user-images.githubusercontent.com/84343573/179130932-297b4bcd-d063-4f4c-b019-800f4543f386.gif)

5. Implemented custom tooltips to help users understand the information presented on each card.
![GitHub Tooltip](https://user-images.githubusercontent.com/84343573/179131119-59fa91f2-2e23-4a59-b67f-ee37b363c88d.gif)

## Installation
1. Install dependencies:
```bash
npm install
```
2. Get your API key from [GitHub REST API](https://docs.github.com/en/rest)
3. Create a file named as `config.js`
```
module.exports = {
  api_token: 'YOUR_KEY_HERE'
}
```
4. Run webpack in development with:
```bash
npm run start
```
5. Open the project in your web browser http://localhost:8080/ 
