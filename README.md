## **_enrollease_**
[Check out our video demo](https://www.youtube.com/watch?v=DCtLGCGgdRA&ab_channel=AveryNakata)

### Our inspiration
One thing many college students (including us!) dread is registering for classes. Academic advisors aren't always readily available and may not have all the information students need, which is why we decided to make _enrollease_, an academic advising tool that students can access anytime, anywhere. 

### What it does
_enrollease_ streamlines the process of selecting and registering for classes by providing students with an AI advisor they can access 24/7. It gives students personalized recommendations on what classes to take, taking into account the classes a student has already taken as well as the pre- and co-requisites each course may require. To complement the AI advisor, _enrollease_ also has a built-in planning tool, so students can avoid having to switch between multiple applications when planning for registration.

### How we built it
We built our frontend with React and styled it using MUI. The backend was built with Flask, Python, and Supabase. The AI model was built using Python, HuggingFaceAPI, TensorFlow, LangChain, and Minstral LLM. 

### Challenges we ran into
One of our team members discovered that TensorFlow requires older versions of Mac and had to work around the fact that some of the newer features weren't compatible with their computer. Another one of our team members was using most of our technologies for the first time, which created a huge learning curve for them. However, we all learned and created with a lot of new technology for the first time, which caused us to get off to a slow start.

### Accomplishments we're proud of
We were able to connect our backend to our frontend, get our model up and running, style most of the pages, and work together to create a product we're proud of.

### What we learned
- How to create API endpoints
- How TensorFlow, MUI, and a bunch of other technologies worked for the first time
- How to connect a backend to a frontend

### What's next for enrollease
We would like _enrollease_ to web scrape for course catalogs for different schools on its own. We would also like to integrate a feature that web scrapes and takes reviews from websites such as RateMyProfessor into account to recommend specific professors for courses.
