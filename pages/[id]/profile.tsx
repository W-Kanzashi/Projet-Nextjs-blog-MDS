import WorkLayout from "@/components/User/layout";

/**
 * Display the user's profile. If the user is the owner of the profile, display
 * the edit button. If the user click on the edit button, transform the text in form
 * input.
 * @returns JSX.Element
 */
export default function UserPage(): JSX.Element {
  return (
    <>
      <WorkLayout>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, sequi
          explicabo. Odit inventore asperiores quo atque illum nam hic? Tenetur
          aperiam vero labore praesentium quos quam rem laborum, eveniet illo.
        </div>
      </WorkLayout>
    </>
  );
}
