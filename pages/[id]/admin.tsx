import UserLayout from "@/components/User/layout";
import EditUser from "@/components/Admin/EditUser";

/**
 * Admin page to be able to edit the profile of a user
 * @returns JSX.Element
 */
export default function Admin(): JSX.Element {
  return (
    <>
      <UserLayout>
        <section>
          <EditUser />
        </section>
      </UserLayout>
    </>
  );
}
