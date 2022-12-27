# Movie Magic

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Resources Used, Branching and How-to Run

To Run, simply clone the repository locally and run npm start. As detailed below, I have not accounted for errors, so in the event of a 500, please simply refresh the page a few times. 

I used a single Dev off the Master branch as it is a small project, once the dev branch was tested on my run build, I then merged it to the Master branch. There is also a gh-pages branch to host, if needed.

The project was bootstrapped with CRA typescipt, and I used React Bootstrap for the UI. I also to host it with gh-pages, but this requires it to be public so I have since turned it off. 

### Improvements and Other Notes

The most immediate thing to do would be to encapsulate the code with for erorrs, especially the API call with a try catch (For the 500 error that do consistently happen). In the interest of timing and getting a MVP out to you guys asap, I omitted these steps. Next would be to improve how it looks - perhaps a better grid + images. 

Another thing I could do would be to use dropdowns instead of buttons for the filter, for a much cleaner UI. With this we could also use useState and conditionally render it all on the homepage, I think the code is much cleaner with the filters having their own components. 

