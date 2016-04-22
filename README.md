# AjaxForm
## Introduction 

Using an Ajax form is a great solution for any type of project and it is very simple and straight forward. Ajax allows us to dynmacially submit the form and send all the information we need to me processed through a PHP file we will be creating.

### Index.html
Lets start setting up the index.html file. First we will create our form. We want to make sure we have the method set to "post" and the action set properly as well. 

<img width="663" alt="screen shot 2016-04-22 at 12 50 45 am" src="https://cloud.githubusercontent.com/assets/10456029/14734022/ac9de3fe-0824-11e6-9636-dfe98344b5df.png">

##Ajax-form.js

####Prevent Default

Lets start setting up our ajax request. First we want to add a submit event on our form we created (ajax-form). We will need to add “event.preventDefault(); which will prevent our form from submitting and refreshing out page. 

####Ajax Data 

So now that we haven't prevented the form from refreshing, we will need to add our data from our from into “ var ajaxFormData” so we know what data we will have to be passing.

<img width="623" alt="screen shot 2016-04-22 at 12 50 54 am" src="https://cloud.githubusercontent.com/assets/10456029/14734023/ac9e8980-0824-11e6-8099-1e7fb9d36056.png">

####Ajax Function

jQuery allows us to easy set up our Ajax function. we will need a few things for this function to work. 

type: Define what HTTP verb we will want to use. In our case this is “post”
url: This will be the url where we want to post (www.mysite/sender.php)
data: This will be our Ajax data that we created
dataType: The type of data we expect back from the server

<img width="753" alt="screen shot 2016-04-22 at 12 51 09 am" src="https://cloud.githubusercontent.com/assets/10456029/14734024/ac9fe302-0824-11e6-993b-c98d90fc215a.png">

##Sender.php 

This is where we will start processing the data we got from our Ajax request. First we will make two variables to hold data to pass back ($data) and a variable to hold our errors($errors).

#### Validating our fields

This is a pretty straight forward process. We will be checking if our form fields are empty , and if they are we will add our errors into our $errors variable.

<img width="682" alt="screen shot 2016-04-22 at 12 51 16 am" src="https://cloud.githubusercontent.com/assets/10456029/14734026/aca59932-0824-11e6-81ad-9c0518895dad.png">

### Validating our data

If the $errors variable is not empty , we are going to send back our data as else and return all of our errors. If the validation has passed we will get all of the information from the form and save them into variables. After we have saved our information from the form , we will set up our mail function. We will need who we are sending the email to ($to) , our subject ($subject) , our message ($message) , and any headers we decide to add ($headers). When we are finished we will send our data back to our Ajax function.

<img width="662" alt="screen shot 2016-04-22 at 12 51 22 am" src="https://cloud.githubusercontent.com/assets/10456029/14734025/aca4667a-0824-11e6-94f7-c54827b627a8.png">

## Receiving our data from sender.php
This is our last step of our ajax contact form. This is where we get the data back from our php page and continue to work with it.

### Displaying our errors
We are going to be using the .done callback function to get our data. We are going to check if our data was successful or not. If it was not successful we want to show our errors. We will be targeting each of our form-groups and appending the proper error to it. 

<img width="807" alt="screen shot 2016-04-22 at 12 51 30 am" src="https://cloud.githubusercontent.com/assets/10456029/14734027/acab9ac6-0824-11e6-8951-ef8d38d67c55.png">

### Success!
If our form process was successful we will target our form and leave a success message as well as we will use an “alert” to also let the user know the message has been sent. Congrats you did it! Now you know the power of Ajax after creating this simple Ajax contact form.

<img width="785" alt="screen shot 2016-04-22 at 12 51 40 am" src="https://cloud.githubusercontent.com/assets/10456029/14734028/acba672c-0824-11e6-944a-d2a3400112da.png">





