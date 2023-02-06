import NewTweet from "./NewTweet";
import TweetsList from "./TweetList";

function Home(){
    return(
        <div className="w-50 mt-3">
            <h5 className="mx-3">Home</h5>
            <NewTweet/>
            <TweetsList/>
        </div>
    )
}

export default Home;