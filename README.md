# Welcome To Instant Quote System Backend
This is a incomplete baceknd of quote system.
# Approach (What have I done)

| Step | Approach              |
|------|-----------------------|
| 1    | I defined the schema for our service_data and question_data using Mongoose and set up relationships between them.  |
| 2    | I handle routes. For example, I have created a controller to define the logic for the `question_add`,`get_service`,`add_service`, `get_questions` route, which currently handles the addition of new questions.   |
| 3    | I connect to MongoDB to store various types of data, including service_data, question_data, and additional information such as `service_data` , `question_data` and etc .   |
| 4    | I make seprate files and folder for different functionality.       |
| 5    | In end i deploy my express and nodejs backend to render. |