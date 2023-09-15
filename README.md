**Three features of my project**

* In my project, I have added a selected button. When button is clicked, the course will add into the add course list by numbering. And If a course seleted, it can not be  selected twice

* When a course will be selected, the credits corresponding to the course will be add with the total credit and also substract from the remaining credit hours.

* There are two toast added. One toast will occurs when same course will be selected twice and the other toast will occurs when the total credits will be greater than 20 or the remaining credits will less than 0.



**How I manage the state in my assignment project**
=> I used useState hook in my project to handle the changes any data. I declare useState hook with an variable which stored the initial value,changed value of the state and with a funtion which will change the value of the data and store to the variable. To fetch the data, in useEffet hook I called the setState fuinction to store the data in the array which has an empty array initially. And for total credit, I pass the variable to the AddCourse component and set the data in jsx of that component.