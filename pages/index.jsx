import ReactPlayer from "react-player";
import Nav from "../components/Nav";

const Home = () => {
    return (
        <div className={"min-h-screen text-white bg-zinc-900"}>
            <Nav />
            <div className="lg:flex">
                <div
                    className={"xl:w-3/6 sm:w-11/12 md:w-11/12 m-auto  h-4/6 my-6  border-b-2 border-gray-100"}
                    style={{ height: "35rem" }}
                >
                    <ReactPlayer
                        url={"https://www.youtube.com/watch?v=eWLVBP3VrO4"}
                        width="100%"
                        height="100%"
                        controls={true}
                    />
                </div>


                <div className={"sm:w-11/12 md:w-11/12 m-auto border-t border-gray-700 pt-6"}>
                    <div></div>
                    <div className="flex-col">
                        <div className={"font-medium"}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, sunt!</div>
                        <div className={"text-sm text-gray-300"}>Lorem isot consectetur </div>
                        <div className={"flex text-xs text-gray-300"}>
                            <div>13k viewks</div>
                            <div className={"ml-2"}>2 weeks ago</div>
                        </div>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default Home;