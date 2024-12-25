import { pgTable, uuid, varchar, timestamp, boolean } from 'drizzle-orm/pg-core'

export const usersTable = pgTable('users', {
  id: uuid().primaryKey().defaultRandom(),
  username: varchar({
    length: 50,
  }).notNull(),
  email: varchar({
    length: 50,
  })
    .unique()
    .notNull(),
  password: varchar({
    length: 255,
  }).notNull(),
  createdAt: timestamp().defaultNow(),
  updatedAt: timestamp(),
  isDelete: boolean().default(false),
  deletedAt: timestamp(),
  profileImageUrl: varchar({
    length: 300,
  }),
})
