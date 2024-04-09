## Welcome

### Table of Contents

- [Professional Self Assessment](#self-assessment)
- [Code Review](#code-review)
  - [Code Review](#code-review)
- [Software Design and Engineering](#software-design-and-engineering)
  - [Software Design and Engineering Enhancement](#software-design-and-engineering-enhancement)
- [Algorithms and Data Structure](#algorithms-and-data-structure)
  - [Algorithms and Data Structure Enhancement](#algorithms-and-data-structure-enhancement)
- [Databases](#databases)
  - [Databases Enhancement](#databases-enhancement)
  

## Code Review

### Code Review

[![Alt Text](https://img.youtube.com/vi/QdR5M0L0On4/maxresdefault.jpg)](https://youtu.be/QdR5M0L0On4)


## Software Design and Engineering


The Artifact I'm going to look at is my inventory application. The goal of this application is to track inventory items. This application was developed within android studio using java featuring an SQLite database. This application was from my CS 360 Mobile Architecture and Programming course and was created last term.

The artifact I selected for the software design and engineering category justifies the inclusion for my ePortfolio. This application demonstrates my skills in software development. With the implementation of the side menu with log out functionality, account settings to allow the user to change their account details and allow the user to delete their account, as well as ensuring users register with their email. I was able to demonstrate my ability to design user-friendly interfaces, implement CRUD (Create, Read, Update, Delete) functionality, and integrate backend databases into mobile applications. Below are some screenshots to give a visual of my enhancement.
<div style="display: flex; justify-content: center; flex-wrap: wrap;">
    <div style="text-align: center; margin: 5px;">
        <img src="images/Enhacement 1-1.png" width="300px" />
    </div>
    <div style="text-align: center; margin: 5px;">
        <img src="images/Enhacement 1-2.png" width="300px" />
    </div>
    <div style="text-align: center; margin: 5px;">
        <img src="images/Enhacement 1-3.png" width="300px" />
    </div>
    <div style="text-align: center; margin: 5px;">
        <img src="images/Enhacement 1-4.png" width="300px" />
    </div>
    <div style="text-align: center; margin: 5px;">
        <img src="images/Enhacement 1-5.png" width="300px" />
    </div>
    <div style="text-align: center; margin: 5px;">
        <img src="images/Enhacement 1-6.png" width="300px" />
    </div>
</div>

With this enhancement, I met the course objectives planned in module one. Implementing a side menu with editing and deleting user accounts functionality aligns with Design and evaluate computing solutions that solve a given problem using algorithmic principles and computer science practices and standards appropriate to its solution while managing the trade-offs involved in design choices. Next, I was able to use well-founded and innovative techniques, skills, and tools in computing practices to implement computer solutions that deliver value and accomplish industry-specific goals. I was able to achieve this by integrating email verification for user registration, and the sidebar menu demonstrates an innovative approach in software development. Lastly, throughout this enhancement I demonstrated a security mindset by anticipating potential vulnerabilities and designing solutions to mitigate risks. Implementing user authentication and authorization will ensure the privacy and security of user data. Additionally, I followed best practices by including confirmation messages for important user actions. For example, when a user would like to delete their account, they have been prompted and must confirm the change.

Reflecting on the process of enhancing and modifying the artifact, I have learned new things as well faced challenges. This enhancement specifically gave me insight into understanding the importance of the user. Keeping the user in mind allowed me to focus on improving the user interface (UI) and the user experience (UX) in the design of the enhancement.

### Software Design and Engineering Enhancement
[![Enhancement One](https://img.shields.io/badge/Enhancement%20One-gray?style=flat&logo=github)](https://github.com/jjoshua123444/ePortfolio/tree/main/enhancements/Software%20Design%20and%20Engineering/)

## Algorithms and Data Structure


The Artifact I'm going to look at is my inventory application. The goal of this application is to track inventory items. This application was developed within android studio using java featuring an SQLite database. This application was from my CS 360 Mobile Architecture and Programming course and was created last term. 

Selecting my inventory application for the algorithms and data structures justifies the inclusion for my ePortfolio. Implementing the linear search functionality enhances my inventory application by enabling users to locate a specific item. This enhancement shows my proficiency in algorithm design, particularly through the implementation of the linear search algorithm. Additionally, integrating the search bar and interacting with the RecyclerView demonstrates my skills in UI/UX design and event handling. The artifact was improved by enhancing the user experience with search functionality, addressing a limitation I had with my original application.
<div style="display: flex; justify-content: center; flex-wrap: wrap;">
    <div style="text-align: center; margin: 5px;">
        <img src="images/Enhacement 2-1.png" width="300px" />
    </div>
    <div style="text-align: center; margin: 5px;">
        <img src="images/Enhacement 2-2.png" width="300px" />
    </div>
    <div style="text-align: center; margin: 5px;">
        <img src="images/Enhacement 2-3.png" width="300px" />
    </div>
    <div style="text-align: center; margin: 5px;">
        <img src="images/Enhacement 2-4.png" width="300px" />
    </div>
</div>

With the addition of search functionality on my inventory screen, I was able to meet the course objective planned in module one. This enhancement aligns with:  
•	Designing and evaluating computing solutions that solve a given problem using algorithmic principles and computer science practices and standards appropriate to its solution while managing the trade-offs involved in design choices.  

I was faced with the problem where if a user were to have a large inventory list, there was no current way to search for a specific item. Having an SQLite database already, that saves a user's items to their own unique dataset based on login information, there was a need for an effective solution to enhance the user experience. Implementing the linear search algorithm allows to iterate through a user's items from the dataset in the database efficiently. I was able to achieve this by using the linearSearch method iterating through the itemList and checking if each item's name contains the query string. If the match is found the item is, then added to the searchResultsList. The time complexity of the linear search method is O(n) since the array is completed once, where n is the number of items in the list. Best case complexity is O(1) and worse cases is O(n). Finally, the searchResults are returned with the items that match the search. Overall time complexity of the onQueryTextChange is also O(n), where n is the number of items in the original list (originalItemsList). The linear search grows linearly with the number of items in the users lists. In this enhancement I managed trade-offs as well by considering algorithm efficiency, user experience and the implementation of the algorithm itself. 

Ensuring a user-friendly search bar with a linear search algorithm, I was able to:  
•	Demonstrate my ability to use well-founded and innovative techniques, skills, and tools in computing practices for the purpose of implementing computer solutions that deliver value and accomplish industry-specific goals.
  
Allowing the user to filter items efficiently enhances the user experience and shows my ability in software development with an innovative approach. This algorithm is a commonly used algorithm used in applications due to its simplicity and effectiveness. Utilizing Android Studios SDK, I was able to integrate the search algorithm with a RecyclerView and a SearchView to create a user-friendly interface which aligns with industry standards. This enhancement added value to my current application, improving the overall usability all while accomplishing industry-specific goals. As well as making sure to follow best practices by providing “item no found” message when no item has been found from the search, including.

Enhancing and modifying the artifact, partially in implementing the search functionality, allowed me to learn and gain knowledge. Specifically in the process I was able to learn about using RecyclerView. RecyclerView is built within the Android Studio SDK and designed to display large sets of data. It works by recycling views moving in and out of the user’s view. With the learning process I was able to get an understanding of how linear search algorithm and the RecylerView work together for my enhancement. The linear search algorithm was applied to the dataset in my database for inventory items, then the RecylerView updates the dataset in a real time display for the user. When working on my enhancement, I faced a few challenges. Initially when adding the search functionality as well as the RecylerView, I had issues with the RecylerView itself and not the linear search algorithm. The RecylerView was only displaying one item from the user inventory database even though there were multiple items. The problem occurred because I had an improper set up of the adapter. Another challenge I faced was when deleting an inventory item from the list. I found that although deleting an inventory item removed it from the database as expected, the deleted item would reappear in the list when searched. After reviewing my code, I realized that I was not updating the originalItemsList whenever the new itemList was being modified.

### Algorithms and Data Structure Enhancement
[![Enhancement Two](https://img.shields.io/badge/Enhancement%20Two-gray?style=flat&logo=github)](https://github.com/jjoshua123444/ePortfolio/tree/main/enhancements/Algorithms%20and%20Data%20Structures/)


## Databases



The Artifact I'm going to look at is my inventory application. The goal of this application is to track inventory items. This application was developed within android studio using java featuring an SQLite database. This application was from my CS 360 Mobile Architecture and Programming course and was created last term.
   

Selecting my inventory application for the database section of the enhancements justifies my inclusion for my ePortfolio. I have selected this artifact because it has allowed me to showcase various software development skills and techniques. This inventory application has allowed me to demonstrate database design, UI/UX design, and data management. I demonstrated these skills by transitioning to Firebase from SQLite, creating user-friendly UI design for account creation and password resetting.  Allowing me to design and develop a practical application. For my database enhancement, I initially proposed implementing passwords hashing with a SHA-256 algorithm to store user passwords and implementing a password reset feature. In my original artifact user passwords were being stored as plain text within the SQLite database. This was a vulnerability within my application as it does not follow secure practices. As well as there was no current way to for a user to reset their password if forgotten. To address this, I implemented password hashing using the SHA-256 algorithm. The hashed passwords were then stored into my SQLite database. To enhance security, I implemented password hashing mechanism into the authentication process. First, I started by creating a new java class named PasswordHash. The hashPassword() function takes a plain text password as the input and returns a hashed password. The class converts the plain text into a byte array using the getBytes() method, then the byte array is converted into a hexadecimal string. While this worked as intended after tests, I ran into another limitation in my application. Including a password reset function that truly worked and remained secure was a problem. The inventory application stored and verified the user information locally using SQLite. 
To enhance security, user experience, and scalability I decided to make my enhancement three to integrate Firebase to hash passwords and have password reset functionality. Firebase offers cloud-based development tools, and I specifically used Firebase Authentication. This transition required a few extra steps to get Firebase to work. I had to change the initial create account and login logic to get the password reset to work. After making this change, it allowed a user to create and login using Firebase Authentication and Firebase then hashes the password using the SCRYPT algorithm, then I was able to work on the password reset. 


  

With the addition of password hashing and password reset using Firebase Authentication, I was able to meet the course objectives planned in module one.

The enhancement aligns with:  
•	Design and evaluate computing solutions that solve a given problem using algorithmic principles and computer science practices and standards appropriate to its solution while managing the trade-offs involved in design choices. 

Throughout the development of enhancement three of my inventory application, there was a challenge to ensure the security of user data stored in the SQLite database. To address this, I initially implemented password hashing with the SHA-256 algorithm. However, after some careful consideration I decided to implement Firebase to handle the user accounts. Implementing firebase addresses the problem in my inventory application of password hashing and password reset functionality. Demonstrating algorithm principles by involving user input, validating email addresses, and using Firebase Authentication services to send password reset emails. Also Using the SCRYPT Algorithm to hash users plain text passwords that is built into the Firebase Authentication Dashboard. The SCRYPT algorithm works by generating a pseudorandom sequence of bytes from an input, then this sequence goes through different iterations of hashing operations. According to Firebase, “Firebase Authentication uses an internally modified version of SCRYPT to hash account passwords. Even when an account is uploaded with a password using a different algorithm, Firebase Auth will rehash the password the first time that account successfully logs in.”  

•	Demonstrate an ability to use well-founded and innovative techniques, skills, and tools in computing practices for the purpose of implementing computer solutions that deliver value and accomplish industry-specific goals.  

Integrating Firebase Authentication provided a more efficient solution for my artifact. Allowing the user to reset create an account using Firebase within my application, allowed for an innovative approach by providing seamless password resets through email verification, and hashing of user passwords uses well-founded techniques that align with industry specific goals. Additionally, utilizing Firebase's libraries and frameworks, such as FirebaseAuth, aligned with industry standards and best practices, further enhancing the value and functionality of the application.  

•	Develop a security mindset that anticipates adversarial exploits in software architecture and designs to expose potential vulnerabilities, mitigate design flaws, and ensure privacy and enhanced security of data and resources.  

By implementing password hashing and password reset functionality using Firebase Authentication, I have demonstrated a proactive approach to potential security vulnerabilities in my inventory application. Applying these changes ensures the privacy and security of user data. I also realized I design flaw with my current application that used SQLite to store user information locally. Using the createUserWithEmailAndPassword method to save new users information to the Firebase Authentication dashboard with a hashed password.  
<div style="display: flex; justify-content: center; flex-wrap: wrap;">
    <div style="text-align: center; margin: 5px;">
        <img src="images/Enhacement 3-1.png" width="500px" />
    </div>
 
As well using the sendPasswordResetEmail method to securely send a password reset link to the user's email.
<div style="display: flex; justify-content: center; flex-wrap: wrap;">
    <div style="text-align: center; margin: 5px;">
        <img src="images/Enhacement 3-2.png" width="500px" />
    </div>
    <div style="text-align: center; margin: 5px;">
        <img src="images/Enhacement 3-3.png" width="500px" />
    </div>


•	Employ strategies for building collaborative environments that enable diverse audiences to support organizational decision-making in the field of computer science.    

Integrating Firebase Authentication I was able to meet this course outcome. Firebase, being a service that is provided by Google, offers a platform for collaboration among diverse audiences, which will enable more organizational decision-making in the field of computer science. By using Firebase, this allows for an environment where others familiar with this platform can contribute and improve my artifact.  


Reflecting on the process of enhancing and modifying, there were many valuable skills I have learned when improving my artifact. Implementing Firebase Authentication gave me a better understanding of utilizing different technology, API integration, libraries, and frameworks it uses. In addition to this, it allowed me to better understand the process of transitioning from an SQLite database to a cloud database. This has given me more confidence in my ability to enhance security and usability. While learning a lot in this enhancement there were some challenges I have faced. Previously stated earlier, creating the initial hashing of the passwords using the SHA-256 algorithm, gave me the realization that there was a need to implement a working password reset using an email address. Transitioning from SQLite to Firebase Authentication posed a challenge to me initially due to the fact I had to make sure my previous classes were set up correctly for this integration.

### Databases Enhancement
[![Enhancement Three](https://img.shields.io/badge/Enhancement%20Three-gray?style=flat&logo=github)](https://github.com/jjoshua123444/ePortfolio/tree/main/enhancements/Databases/)







