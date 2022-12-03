# UFO_js

The purpose of this project is to create a dynamic table that will hold and display UFO sightings data. The user can then manipulate the table with the help of filters.

## Instructions/ Results

When the webpage is first loaded up, there will be a wall of text and underneath that will be the table containing information about UFO sightings. To the left of the table will be the five filters. Each filter can be used independently(for a broad search) or they can be combined together for a narrow and specific search. For each filter to work, just press the filter button. 
Image 1 shows the city filter at work. 
![image 1](https://user-images.githubusercontent.com/33528884/205422121-aa19d79a-d0fc-4829-9e9d-4212cc03b309.png)

As shown in the image, there are five results. Four of the results are of the same date and one is of a seperate date. Now, image 2 shows two filters being combined together. 
![image 2](https://user-images.githubusercontent.com/33528884/205422237-53cc2818-7033-4dbe-be10-b5b02f196655.png)

Note that the filters can be applied in any order. In this instance, the city filter was applied first and then the date filter. 

## Summary
### Downside
One downside to the way the data is loaded into the table is that it does not check for duplicates. Taking image 1 for example, the four results of January 1st are all of the same sighting. It is not necessary to count that sighting four times. 
### Recommendation
One recommendation is to definitely add some sort of duplication check. A rudimentary check could be to match city, date and shape together. If those three columns all have the same data within them, then that is one sighting, not multiple. 
Another recommendation can be to utilize the country filter to greater effect. Currently, the only country available to filter is the United States. 
