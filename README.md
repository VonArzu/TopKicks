# TOPKICKS README <!-- omit in toc -->

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

\_**TOPKICKS** is a social platform for sneaker heads to share intrests in their tops kick wheather it is shoes or sneakers. A coalation of good footware appreciation.

<br>

## MVP

> TopKicks in mobile form then tablet then desktop with simple layout, pictures, and working CRUD.
> View mobile wireframs for more details.

<br>

### Goals

- A functional CRUD, create, read, update, and delete sneakers/shoes or users choice
- A design/CSS layout
- Seeding sneaker/shoe data

<br>

### Libraries and Dependencies

|   Library    | Description                     |
| :----------: | :------------------------------ |
|    React.    | _Front-End visuals and actions_ |
| React Router | _Front-End visuals and action _ |
|     Npm      | _Back-End action based_         |
|     Ruby     | _Back-End action based_         |

<br>

### Client (Front End)

#### Wireframes

- Mobile View

https://app.lucidchart.com/invitations/accept/d564e75d-c3c4-4c9a-b1c9-51be793bf6d0

- Desktop View

https://app.lucidchart.com/invitations/accept/4aeca113-fb23-4dd7-9915-a8da21664911

- Tablet View

https://app.lucidchart.com/invitations/accept/ca8c9fad-b6f5-4418-a952-5462e8aa01fb

#### Component Tree

Structure of how React components are being rendered.Parent to child relation between components.

https://app.lucidchart.com/invitations/accept/f88b575a-39ee-4ff5-a13a-03ca0f0f98a9

#### Component Hierarchy

> React components and the data architecture of TOPKICKS. Expectations of directory/file tree.

```structure

src
|__ assets/
      |__ images
|__ components/Nav
      |__ Header.jsx
      |__ Footer.jsx
|__ components/User
      |__ Login.jsx
      |__ Register.jsx
      |__ CreateKick.jsx
      |__ EditKick.jsx
      |__ DeleteKick.jsx
|__ screens/
      |__ Splash.jsx
      |__ Home.jsx
      |__ Kicks.jsx
      |__ AddKicks.jsx
      |__ Brands.jsx


```

#### Component Breakdown

> Breaking down components as stateless or stateful, and considering the passing of data between those components.

| Component  |    Type    | state | props | Description                                      |
| :--------: | :--------: | :---: | :---: | :----------------------------------------------- |
|    Nav     | functional |   Y   |   n   | Header and Footer                                |
|   Login    | functional |   Y   |   n   | _User login_                                     |
|  Register  | functional |   Y   |   n   | _User registration_                              |
|  AddKick   | functional |   y   |   y   | _Kicks added and rendered via props_             |
|  EditKick  | functional |   y   |   y   | _The kicks will render the post info via props._ |
| DeleteKick | functional |   y   |   y   | _The kicks will render the post info via props._ |

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task       | Priority | Estimated Time | Time Invested | Actual Time |
| ---------- | :------: | :------------: | :-----------: | :---------: |
| Nav        |    L     |     3 hrs      |     2 hrs     |     TBD     |
| Home       |    H     |     4 hrs      |     2 hrs     |     TBD     |
| Login      |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Register   |    H     |     3 hrs      |     1 hrs     |     TBD     |
| AddKick    |    H     |     4 hrs      |     1 hrs     |     TBD     |
| EditKick   |    H     |     4 hrs      |     1 hrs     |     TBD     |
| DeleteKick |    H     |     4 hrs      |     1 hrs     |     TBD     |
| Splash     |    L     |     3 hrs      |     1 hrs     |     TBD     |
| Kicks      |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Brands     |    L     |     3 hrs      |     1 hrs     |     TBD     |
| KickBrands |    H     |     3 hrs      |     1 hrs     |     TBD     |

| TOTAL | | 37 hrs | 3 hrs | TBD |

<br>

### Server (Back End)

#### ERD Model

https://app.lucidchart.com/invitations/accept/ecd90db9-8e6a-4d51-b7b2-7bc626c8db75

<br>

---

## Post-MVP

> Adding comments, functional components in each size, Graphics, animations, trackers and ads

---

## Code Showcase

> export const getKick = async (id) => {
  try {
    const response = await api.get(`/kicks/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
Reads one pair of kicks instead of all of them rendering on a page. Took a while to process

## Code Issues & Resolutions

> I completed the full stack app desktop first instead of mobile. Being ambitious was my issue, I creating too many tables in Ruby on Rails and overflowed the schema by experimenting and learning new things. Some things I have learned are creating averages for comments by users and lambda with slugs for letter casing and more I will explore in the near future. I resolved the schema by asking for help, droping, adding, and re migrating tables.
