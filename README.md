# Employee Management System 

## Technology Stack
**Java Platform**	  : Java 17

**Java Frameworks**	 : Spring Framework, Spring Boot, Spring Security and Spring Data JPA

**Front End Development** :  ReactJS, Vite Js, BootStrap CSS, JavaScript, NPM, Axios

**Build Tool**	: Maven

**IDE**	 : IntelliJ IDEA, Visual Studio Code

**Server**	: Tomcat server

**Database** :	 MySQL database

**REST Client**	: Postman

 
## Maven dependencies
In the context of Maven, a dependency is a JAR file used by a Java application. Maven will automatically include JAR file in java path if it identifies a dependency listed in POM.xml file. Then, Java will be able to find and use the classes in the JAR file.
1.	spring-boot-starter-data-jpa: Spring Data JPA focuses on using JPA to store data in a relational database. JPA is a specification that facilitates object – relational mapping to manage relational data in java applications. Spring Data JPA  is not a JPA provider. It uses Hibernate as a default JPA provider. Hibernate will generate SQL queries based on the method call and executed using JDBC.
2.	spring-boot-starter-web: Spring Boot Starter Web is used for building RESTful applications using Spring MVC. If we have this dependency then the application comes under Servlet category of Spring Boot application.
3.	mysql-connector-j: mysql-connector-j is a JDBC Type 4 driver, meaning it is a pure Java implementation of the MySQL protocol .

## Database Connection
Connection to MYSQL database is configured in “application.properties” file as follows:
 

