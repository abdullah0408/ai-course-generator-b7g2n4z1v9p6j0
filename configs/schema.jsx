import { pgTable, serial, varchar, json } from 'drizzle-orm/pg-core';

// export default pgTable('courseList', {
//     id: serial('id').primaryKey(),
//     courseId: varchar('courseId').notNull(),
//     name: varchar('name').notNull(),
//     category: varchar('category').notNull(),
//     level: varchar('level').notNull(),
//     courseOutput: json('courseOutput').notNull(),
//     createdBy: varchar('createdBy').notNull(),
//     userName: varchar('username'),
//     userProfileImage: varchar('userProfileImage')
// });

export const CourseList = pgTable('courseList', {
    id: serial('id').primaryKey(),
    courseId: varchar('courseId').notNull(),
    name: varchar('name').notNull(),
    category: varchar('category').notNull(),
    includeVideo: varchar('includeVideo').notNull().default('Yes'),
    level: varchar('level').notNull(),
    courseOutput: json('courseOutput').notNull(),
    createdBy: varchar('createdBy').notNull(),
})