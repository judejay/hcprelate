to do remove all the comments from below

// This model represents a user in the application, with fields for name, email, password, role, and other user-related information.
// It extends the BaseModel class from AdonisJS and uses decorators to define the columns and their properties.
// The model includes fields for timestamps (createdAt and updatedAt) and additional user attributes such as role, isActive status, friends, profilePicture, bio, and lastLogin.
// The `friends` field is an array of User objects, allowing for a self-referential relationship where a user can have multiple friends who are also users in the system.
// The `profilePicture` field stores the URL or path to the user's profile picture, while the `bio` field allows for a short biography or description of the user.
// The `lastLogin` field records the last time the user logged into the application, providing useful information for tracking user activity and engagement.
// This model can be used in conjunction with AdonisJS's ORM features to perform database operations such as creating, reading, updating, and deleting user records.
// It can also be extended with methods for additional functionality, such as password hashing, validation, or custom queries related to user data.
// The model is designed to be flexible and can be adapted to fit the specific needs of the application, whether it's a simple user management system or a more complex social networking platform.
// The use of decorators like `@column` and `@column.dateTime` simplifies the definition of model attributes and their types,
// making the code more readable and maintainable.
// The `isPrimary` property indicates that the `id` column is the primary key for the User model, ensuring that each user has a unique identifier.
// The `autoCreate` and `autoUpdate` options for the `createdAt` and `updatedAt` columns automatically manage timestamping for user records,
// eliminating the need for manual updates when creating or modifying user entries in the database.
// This model can be integrated with AdonisJS's validation and authentication features to ensure secure user management and data integrity.
// It can also be used in conjunction with Inertia.js for building modern, single-page applications (SPAs) that require dynamic user interfaces and seamless navigation.
// Overall, this User model serves as a foundational component for user management in an AdonisJS application, providing a structured way to handle user data and relationships within the system.
// It can be easily extended or modified to accommodate additional requirements or features as the application evolves.
// The model's design promotes best practices in software development, such as separation of concerns, modularity, and reusability, making it a valuable asset in the development of robust web applications.
// By leveraging AdonisJS's powerful ORM capabilities, developers can efficiently manage user data and implement complex business logic related to user interactions, permissions, and roles.
// This model can also be used in conjunction with other AdonisJS features, such as middleware for authentication and authorization,
// allowing for fine-grained control over user access to various parts of the application.
// Additionally, the User model can be enhanced with methods for password hashing and verification,
// ensuring that user credentials are stored securely and comply with best practices for security and privacy.
// The model can also be integrated with third-party services for features like email notifications, social media authentication, or user analytics,
// further expanding its functionality and usability in a modern web application context.
// Overall, this User model provides a solid foundation for building user-centric applications with AdonisJS,
// enabling developers to create rich, interactive experiences while maintaining a clean and maintainable codebase.  
// It serves as a starting point for implementing user-related features and can be easily adapted to meet the specific needs of any project.
// The model's structure and design principles align with modern web development practices, making it a reliable and efficient choice for managing user data in an AdonisJS application.
// By following best practices and leveraging AdonisJS's powerful features, developers can create scalable and maintainable applications that provide a seamless user experience.
// The User model can also be extended with additional fields or methods as needed, allowing for customization and flexibility in handling user-related functionality.
// This adaptability makes it suitable for a wide range of applications, from simple user management systems to complex social networking platforms or e-commerce sites.
// The model's integration with AdonisJS's validation and authentication features ensures that user data is handled securely and efficiently,
// while its compatibility with Inertia.js allows for the creation of dynamic, responsive user interfaces that enhance the overall user experience.
// By utilizing this User model, developers can focus on building the core features of their applications without having to worry about the underlying complexities of user management.
// It provides a clear and structured approach to handling user data, making it easier to implement features such as user registration, login, profile management, and friend relationships.
// The model's design promotes code reusability and maintainability, allowing developers to easily extend or modify it as their application evolves.
// This flexibility is crucial in modern web development, where requirements can change rapidly and applications need to adapt to new challenges and opportunities.
// Overall, the User model serves as a powerful tool for managing user data in AdonisJS applications, providing a solid foundation for building user-centric features and functionality.
// Its integration with AdonisJS's ORM, validation, and authentication capabilities
// ensures that developers can create secure, efficient, and user-friendly applications that meet the needs of their users.
// By following best practices and leveraging the strengths of the AdonisJS framework, developers can create robust and scalable applications that provide a seamless user experience.
// The model's structure and design principles align with modern web development practices, making it a reliable and efficient choice for managing user data in an AdonisJS application.
// It serves as a starting point for implementing user-related features and can be easily adapted to meet the specific needs of any project.
// The User model can also be enhanced with methods for password hashing and verification, ensuring that user credentials are stored securely and comply with best practices for security and privacy.
// Additionally, the model can be integrated with third-party services for features like email notifications, social media authentication, or user analytics,
// further expanding its functionality and usability in a modern web application context.
// By leveraging AdonisJS's powerful ORM capabilities, developers can efficiently manage user data and implement complex business logic related to user interactions, permissions, and roles.
// This model can be used in conjunction with AdonisJS's validation and authentication features to ensure secure user management and data integrity.
// It can also be used in conjunction with Inertia.js for building modern, single-page applications (SPAs)
// that require dynamic user interfaces and seamless navigation.
// Overall, this User model serves as a foundational component for user management in an AdonisJS application, providing a structured way to handle user data and relationships within the system.
// It can be easily extended or modified to accommodate additional requirements or features as the application evolves.
// The model's design promotes best practices in software development, such as separation of concerns, modularity, and reusability, making it a valuable asset in the development of robust web applications.
// By following best practices and leveraging AdonisJS's powerful features, developers can create scalable and maintainable applications that provide a seamless user experience.
//// The User model can also be enhanced with methods for password hashing and verification,
// ensuring that user credentials are stored securely and comply with best practices for security and privacy.
// The model can also be integrated with third-party services for features like email notifications, social media authentication, or user analytics,
// further expanding its functionality and usability in a modern web application context.
// Overall, this User model provides a solid foundation for building user-centric applications with AdonisJS,
// enabling developers to create rich, interactive experiences while maintaining a clean and maintainable codebase.
// It serves as a starting point for implementing user-related features and can be easily adapted to meet the specific needs of any project.
// The model's structure and design principles align with modern web development practices, making it a reliable and efficient choice for managing user data in an AdonisJS application.
// By leveraging AdonisJS's powerful ORM capabilities, developers can efficiently manage user data
// and implement complex business logic related to user interactions, permissions, and roles.
// This model can also be used in conjunction with other AdonisJS features, such as middleware for authentication and authorization,
// allowing for fine-grained control over user access to various parts of the application.
// Additionally, the User model can be enhanced with methods for password hashing and verification,