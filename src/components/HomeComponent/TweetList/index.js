import { KZ_IMG_PATH, NFACTORIAL_ICON } from "../images"
import Tweet from "./Tweet"
export default function TweetsList(){
    const tweets =[
        {
            authorName: 'Free KZ today',
            authorUserName: '@kz',
            img: KZ_IMG_PATH,
            content: 'Turkey newspaper reveal the terrible dimensions of Ukraine army losses: Ukraine: 157,000 soldiers dead.',
            replies: 200,
            retweets: 1000,
            likes: 500
        },
        {
            authorName: 'NFactorial',
            authorUserName: 'nfactorial@kz',
            img: NFACTORIAL_ICON,
            content: 'Data analytics course start today',
            replies: 9000,
            retweets: 10000,
            likes: 50000
        }
    ]
    return  tweets.map((tweet, index)=><Tweet {...tweet} key={index} />)
}