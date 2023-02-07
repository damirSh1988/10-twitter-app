import { IMG_3, KZ_IMG_PATH, NFACTORIAL_ICON } from "../images"
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
        },
        {
            authorName: 'Ray',
            authorUserName: '@ray4tesla',
            img: IMG_3,
            content: '20 years ago & 1 year after SpaceX was incorporated, @elonmusk made his 1st public speech on the mission of the company. We can see today things are unfolding as planned. Elon is a true visionary & keeps us excited about the future.20 years ago & 1 year after SpaceX was incorporated, @elonmusk made his 1st public speech on the mission of the company. We can see today things are unfolding as planned. Elon is a true visionary & keeps us excited about the future.',
            replies: 4,
            retweets: 45,
            likes: 786
        }
    ]
    return  tweets.map((tweet, index)=><Tweet {...tweet} key={index} />)
}