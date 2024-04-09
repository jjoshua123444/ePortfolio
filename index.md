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
[![Enhancement One](https://img.shields.io/badge/Code%20Artifact%20One-View%20on%20GitHub-lightgrey.svg?style=flat&logo=github)](https://github.com/jjoshua123444/ePortfolio/tree/main/enhancements/Software%20Design%20and%20Engineering/)

## Algorithms and Data Structure


The Artifact I'm going to look at is my inventory application. The goal of this application is to track inventory items. This application was developed within android studio using java featuring an SQLite database. This application was from my CS 360 Mobile Architecture and Programming course and was created last term. 

Selecting my inventory application for the algorithms and data structures justifies the inclusion for my ePortfolio. Implementing the linear search functionality enhances my inventory application by enabling users to locate a specific item. This enhancement shows my proficiency in algorithm design, particularly through the implementation of the linear search algorithm. Additionally, integrating the search bar and interacting with the RecyclerView demonstrates my skills in UI/UX design and event handling. The artifact was improved by enhancing the user experience with search functionality, addressing a limitation I had with my original application.

With the addition of search functionality on my inventory screen, I was able to meet the course objective planned in module one. 
-This enhancement aligns with:
-•	Designing and evaluating computing solutions that solve a given problem using algorithmic principles and computer science practices and standards appropriate to its solution while managing the trade-offs involved in design choices. 
I was faced with the problem where if a user were to have a large inventory list, there was no current way to search for a specific item. Having an SQLite database already, that saves a user's items to their own unique dataset based on login information, there was a need for an effective solution to enhance the user experience. Implementing the linear search algorithm allows to iterate through a user's items from the dataset in the database efficiently. I was able to achieve this by using the linearSearch method iterating through the itemList and checking if each item's name contains the query string. If the match is found the item is, then added to the searchResultsList. The time complexity of the linear search method is O(n) since the array is completed once, where n is the number of items in the list. Best case complexity is O(1) and worse cases is O(n). Finally, the searchResults are returned with the items that match the search. Overall time complexity of the onQueryTextChange is also O(n), where n is the number of items in the original list (originalItemsList). The linear search grows linearly with the number of items in the users lists. In this enhancement I managed trade-offs as well by considering algorithm efficiency, user experience and the implementation of the algorithm itself. 
Ensuring a user-friendly search bar with a linear search algorithm, I was able to: 
-•	Demonstrate my ability to use well-founded and innovative techniques, skills, and tools in computing practices for the purpose of implementing computer solutions that deliver value and accomplish industry-specific goals. 
Allowing the user to filter items efficiently enhances the user experience and shows my ability in software development with an innovative approach. This algorithm is a commonly used algorithm used in applications due to its simplicity and effectiveness. Utilizing Android Studios SDK, I was able to integrate the search algorithm with a RecyclerView and a SearchView to create a user-friendly interface which aligns with industry standards. This enhancement added value to my current application, improving the overall usability all while accomplishing industry-specific goals. As well as making sure to follow best practices by providing “item no found” message when no item has been found from the search, including.

Enhancing and modifying the artifact, partially in implementing the search functionality, allowed me to learn and gain knowledge. Specifically in the process I was able to learn about using RecyclerView. RecyclerView is built within the Android Studio SDK and designed to display large sets of data. It works by recycling views moving in and out of the user’s view. With the learning process I was able to get an understanding of how linear search algorithm and the RecylerView work together for my enhancement. The linear search algorithm was applied to the dataset in my database for inventory items, then the RecylerView updates the dataset in a real time display for the user. When working on my enhancement, I faced a few challenges. Initially when adding the search functionality as well as the RecylerView, I had issues with the RecylerView itself and not the linear search algorithm. The RecylerView was only displaying one item from the user inventory database even though there were multiple items. The problem occurred because I had an improper set up of the adapter. Another challenge I faced was when deleting an inventory item from the list. I found that although deleting an inventory item removed it from the database as expected, the deleted item would reappear in the list when searched. After reviewing my code, I realized that I was not updating the originalItemsList whenever the new itemList was being modified.








