import UserListLoading from "@/components/Loading/user-list-loading";
import ProfileLoading from "@/components/Loading/profile-loading";
import HeaderNavLoading from "@/components/Loading/header-nav-loading";

export default function Loading(): JSX.Element {
  return (
    <>
      <aside className="absolute h-screen lg:w-1/4 bg-white overflow-y-hidden">
        <div className="flex flex-col space-y-6 px-4 py-10 w-full h-full">
          {/* Box */}
          <UserListLoading />
          <UserListLoading />
          <UserListLoading />
          <UserListLoading />
          <UserListLoading />
          <UserListLoading />
          <UserListLoading />
          <UserListLoading />
          <UserListLoading />
        </div>
      </aside>
      <section className="left-1/4 relative h-screen w-3/4">
        <div className="bg-gradient-to-r from-violet-300 via-violet-200 to-pink-300 h-56 w-full"></div>
        <div className="flex flex-row items-center justify-between px-10">
          <div className="flex flex-row items-center gap-8 justify-start">
            <div className="relative -translate-y-14 h-32 w-32 bg-slate-700 rounded-full overflow-hidden animate-pulse-slow"></div>
            <div className="animate-pulse-slow bg-slate-700 rounded-xl h-16 w-40"></div>
          </div>
        </div>
        <div className="w-full px-10">
          {/* header nav */}
          <HeaderNavLoading />
          <ProfileLoading />
        </div>
      </section>
    </>
  );
}
