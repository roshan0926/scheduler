# Interview Scheduler

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Running cypress testing 

```sh
npm run cypress
```

### About the project 
- Scheduler runs in sync with scheduler-api which can be found in my repositories. It is a single-page web app designed to allow students to schedule an interview with an interviewer of their choice in designated time slots throughout the week.
- Students can Create, Edit, and Delete interviews.
- It was designed using react
- It incorporates axios, storybook visual testbed, jest test framework as well as cypress testing.

### Using the web app 
- Interviews can be made by pressing on the plus buttons for that day.
- You can enter the student name and select an interviewer before clicking save and seeing the newly schedualed interview on the page.
- The avalable spots for that day will also update in the nav bar.
- Interviews can also be edited by hovering your mouse over the appointment and clicking on the edic icon on the bottom right. You have the option to change the student name as well as the interviewer.
- To cancel an interview the trash button appears while hovering over a specific schedualed interview. When press a confirmation message will appear.

![appointment-form](https://github.com/roshan0926/scheduler/blob/master/docs/appointment-form.png?raw=true)

![creating-an-appointment.png](https://github.com/roshan0926/scheduler/blob/master/docs/creating-an-appointment.png?raw=true)

![view-of-created-appointment.png](https://github.com/roshan0926/scheduler/blob/master/docs/view-of-created-appointment.png?raw=true)
