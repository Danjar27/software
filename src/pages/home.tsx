import RoundedButton from "../components/atoms/RoundedButton";
import UserFormRoot from "../components/organisms/UserFormRoot";
import { Authenticate } from "../components/templates/Authenticate";
import UserList from "../components/templates/UserList";
import { useStore } from "../store/hook";

const Home = () => {
  const authStore = useStore("authStore");

  return (
    <Authenticate>
      <div className="flex justify-between items-center h-screen w-screen">
        <section className="w-1/2 center">
          <UserFormRoot />
        </section>
        <section className="w-1/2 h-full bg-accent center flex-col">
          <div className="w-full flex justify-end mr-10 mb-10">
            <RoundedButton
              text="Log Out"
              onClick={() => authStore.logOut()}
              className="bg-gray-50 text-black bg-opacity-25 hover:bg-white hover:bg-opacity-100 rounded-lg"
            />
          </div>
          <div
            className={`pr-10 h-4/5 scrollbar-thin overflow-y-scroll
            scrollbar-thumb-accent-light scrollbar-thumb-rounded-full
            scrollbar-track-accent `}
          >
            <UserList />
          </div>
        </section>
      </div>
    </Authenticate>
  );
};

export default Home;
