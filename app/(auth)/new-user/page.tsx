import { db } from '@/db/db'
import { users } from '@/db/schema'
import { currentUser } from '@clerk/nextjs/server'
import { eq } from 'drizzle-orm'
import { redirect } from 'next/navigation'

const createUser = async () => {
  const user = await currentUser()
  if (!user) redirect('/sign-in')

  const exists = await db.query.users.findFirst({
    where: eq(users.clerkId, user.id),
  })
  if (!exists) {
    await db.insert(users).values({
      clerkId: user.id,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      email: user.emailAddresses[0].emailAddress,
    })
  }
  redirect('/dashboard')
}

const NewUserPage = async () => {
  await createUser()
  return <div>...loading</div>
}

export default NewUserPage
