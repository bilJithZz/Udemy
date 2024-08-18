const insertdata = [
    {
        id: 1,
        categories: "Programming",
        name: "Introduction to JavaScript",
        description: "Learn the fundamentals of JavaScript, including variables, functions, and events.",
        price: 49.99,
        author: "Jane Doe",
        duration: 30,
        content: [
            { order: 1, title: "JavaScript Basics", length: 10, shortnote: "Introduction to JavaScript syntax and basic concepts." },
            { order: 2, title: "Functions and Scope", length: 15, shortnote: "Understanding functions, scope, and closures in JavaScript." },
            { order: 3, title: "Events and DOM Manipulation", length: 5, shortnote: "Learn how to handle events and manipulate the DOM." }
        ]
    },
    {
        id: 2,
        categories: "Web Development",
        name: "Advanced CSS",
        description: "Master advanced CSS techniques to create stunning web layouts and animations.",
        price: 59.99,
        author: "John Smith",
        duration: 45,
        content: [
            { order: 1, title: "CSS Grid Layout", length: 20, shortnote: "Deep dive into CSS Grid layout for creating complex grid structures." },
            { order: 2, title: "Flexbox Essentials", length: 15, shortnote: "Learn Flexbox layout to design responsive web layouts." },
            { order: 3, title: "CSS Animations", length: 10, shortnote: "Create animations and transitions to enhance user experience." }
        ]
    },
    {
        id: 3,
        categories: "Data Science",
        name: "Python for Data Analysis",
        description: "An introduction to Python programming and its applications in data analysis and visualization.",
        price: 69.99,
        author: "Alice Johnson",
        duration: 60,
        content: [
            { order: 1, title: "Python Basics", length: 15, shortnote: "Basic Python programming concepts and syntax." },
            { order: 2, title: "Data Handling with Pandas", length: 20, shortnote: "Learn to manipulate and analyze data using the Pandas library." },
            { order: 3, title: "Data Visualization with Matplotlib", length: 25, shortnote: "Create visualizations and plots using Matplotlib." }
        ]
    },
    {
        id: 4,
        categories: "Machine Learning",
        name: "Machine Learning Basics",
        description: "Introduction to machine learning concepts and algorithms.",
        price: 79.99,
        author: "Robert Brown",
        duration: 90,
        content: [
            { order: 1, title: "Introduction to ML", length: 20, shortnote: "Overview of machine learning and its applications." },
            { order: 2, title: "Supervised Learning", length: 25, shortnote: "Learn about supervised learning algorithms and techniques." },
            { order: 3, title: "Unsupervised Learning", length: 20, shortnote: "Explore unsupervised learning methods and clustering." },
            { order: 4, title: "Model Evaluation", length: 15, shortnote: "Understand how to evaluate machine learning models." }
        ]
    },
    {
        id: 5,
        categories: "Data Analysis",
        name: "SQL for Data Analysis",
        description: "Learn SQL to analyze and manage data in relational databases.",
        price: 54.99,
        author: "Emily Davis",
        duration: 40,
        content: [
            { order: 1, title: "SQL Basics", length: 15, shortnote: "Introduction to SQL syntax and commands." },
            { order: 2, title: "Data Querying", length: 10, shortnote: "Learn to write queries to retrieve data from databases." },
            { order: 3, title: "Data Manipulation", length: 10, shortnote: "Modify and update data in databases using SQL." },
            { order: 4, title: "Advanced SQL", length: 5, shortnote: "Explore advanced SQL techniques and optimization." }
        ]
    },
    {
        id: 6,
        categories: "Software Engineering",
        name: "Object-Oriented Programming with Java",
        description: "Learn the principles of object-oriented programming using Java.",
        price: 64.99,
        author: "Sophia Clark",
        duration: 50,
        content: [
            { order: 1, title: "OOP Concepts", length: 20, shortnote: "Introduction to object-oriented programming concepts." },
            { order: 2, title: "Classes and Objects", length: 15, shortnote: "Understanding classes, objects, and methods in Java." },
            { order: 3, title: "Inheritance and Polymorphism", length: 10, shortnote: "Learn about inheritance and polymorphism in Java." },
            { order: 4, title: "Exception Handling", length: 5, shortnote: "Manage errors and exceptions in Java programs." }
        ]
    },
    {
        id: 7,
        categories: "DevOps",
        name: "Introduction to Docker",
        description: "Learn the basics of containerization with Docker.",
        price: 49.99,
        author: "Michael Wilson",
        duration: 35,
        content: [
            { order: 1, title: "Docker Basics", length: 10, shortnote: "Introduction to Docker and containerization concepts." },
            { order: 2, title: "Docker Images", length: 10, shortnote: "Creating and managing Docker images." },
            { order: 3, title: "Docker Containers", length: 10, shortnote: "Running and managing Docker containers." },
            { order: 4, title: "Docker Compose", length: 5, shortnote: "Using Docker Compose for multi-container applications." }
        ]
    },
    {
        id: 8,
        categories: "Cybersecurity",
        name: "Ethical Hacking Fundamentals",
        description: "Learn the principles of ethical hacking and cybersecurity.",
        price: 74.99,
        author: "Jessica Martinez",
        duration: 55,
        content: [
            { order: 1, title: "Introduction to Ethical Hacking", length: 15, shortnote: "Overview of ethical hacking and its importance." },
            { order: 2, title: "Scanning and Enumeration", length: 20, shortnote: "Techniques for scanning and enumerating network resources." },
            { order: 3, title: "Vulnerability Assessment", length: 10, shortnote: "Assessing and identifying vulnerabilities in systems." },
            { order: 4, title: "Penetration Testing", length: 10, shortnote: "Conducting penetration tests and reporting findings." }
        ]
    },
    {
        id: 9,
        categories: "Cloud Computing",
        name: "AWS Cloud Practitioner",
        description: "An introduction to Amazon Web Services (AWS) and cloud computing basics.",
        price: 59.99,
        author: "David Lee",
        duration: 40,
        content: [
            { order: 1, title: "AWS Overview", length: 10, shortnote: "Introduction to AWS and cloud computing concepts." },
            { order: 2, title: "AWS Core Services", length: 15, shortnote: "Learn about core AWS services and their uses." },
            { order: 3, title: "AWS Security", length: 10, shortnote: "Understand security features and best practices in AWS." },
            { order: 4, title: "AWS Pricing", length: 5, shortnote: "Learn about AWS pricing models and cost management." }
        ]
    },
    {
        id: 10,
        categories: "Game Development",
        name: "Introduction to Unity",
        description: "Learn the basics of game development using the Unity engine.",
        price: 69.99,
        author: "Laura King",
        duration: 60,
        content: [
            { order: 1, title: "Unity Basics", length: 15, shortnote: "Introduction to the Unity interface and basic functionality." },
            { order: 2, title: "Creating Scenes", length: 20, shortnote: "Learn to create and manage scenes in Unity." },
            { order: 3, title: "Scripting with C#", length: 15, shortnote: "Basic scripting in Unity using C#." },
            { order: 4, title: "Building and Publishing", length: 10, shortnote: "Build and publish your game to different platforms." }
        ]
    },
    {
        id: 11,
        categories: "Artificial Intelligence",
        name: "AI for Everyone",
        description: "A comprehensive introduction to artificial intelligence concepts and applications.",
        price: 84.99,
        author: "Oliver Scott",
        duration: 70,
        content: [
            { order: 1, title: "AI Fundamentals", length: 15, shortnote: "Introduction to artificial intelligence and machine learning." },
            { order: 2, title: "AI Applications", length: 20, shortnote: "Explore various applications of AI in different fields." },
        ]}
    ]

module.exports = insertdata;
           
