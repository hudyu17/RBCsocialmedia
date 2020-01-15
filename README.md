## About 

This project was made at cuHacking 2020 in a team of 4. It displays our findings and results from analysing Twitter Sentiments. Check it out! http://rbcsentiment.herokuapp.com/

## Main Technologies Used

#### Google Cloud Platform Natural Language API: 
We used Google's pre-trained models to perform sentiment and entity analysis. Given more time, we would have liked to implement our own Machine Learning methods. https://cloud.google.com/natural-language/

#### Tweepy: 
An easy-to-use Python library for accessing the Twitter API. https://www.tweepy.org/ 

#### React: 
Javascript libary used in this project. [Create React App](https://github.com/facebook/create-react-app). 

#### Chart.js: 
Javascript charting libarary. https://www.chartjs.org/

#### Python (numpy, pandas): 
Other backend data manipulation and analysis. 

## Workflow
- Grabbed tweets using tweepy and pandas 
- Ran tweets through Google Cloud Platform's Natural Language API, producing sentiment scores associated with each tweet
- Ran lowest-scoring tweets through the same API, performing entity analysis to identify most common consumer "pain points" e.g. many negative tweets from 2010 were associated with "PIN login system", indicating teething problems with initial implementation
- Used chart.js to visualise sentiment scores
- Built the front-end with React, hosted on heroku
